'use client';

import React from 'react';

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  // Parse markdown-style string into structured semantic components
  const blocks = parseMarkdownBlocks(content);

  return (
    <div className="article-body max-w-[720px] mx-auto text-slate-300 text-base sm:text-lg leading-[1.8] space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={index}
                className="text-2xl sm:text-3xl font-semibold text-white tracking-tight pt-8 pb-2 border-b border-white/10"
              >
                {formatInline(block.content)}
              </h2>
            );
          case 'h3':
            return (
              <h3
                key={index}
                className="text-xl sm:text-2xl font-semibold text-white tracking-tight pt-6 pb-1"
              >
                {formatInline(block.content)}
              </h3>
            );
          case 'h4':
            return (
              <h4
                key={index}
                className="text-lg font-semibold text-slate-100 tracking-tight pt-4"
              >
                {formatInline(block.content)}
              </h4>
            );
          case 'blockquote':
            return (
              <blockquote
                key={index}
                className="border-l-4 border-blue-500 bg-blue-500/5 px-6 py-4 rounded-r-lg italic text-slate-200 my-6"
              >
                {formatInline(block.content)}
              </blockquote>
            );
          case 'code':
            return (
              <div key={index} className="my-6 rounded-xl border border-white/10 bg-[#090d16] p-4 sm:p-5 overflow-x-auto">
                {block.lang && (
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 border-b border-white/5 pb-1">
                    {block.lang}
                  </div>
                )}
                <pre className="font-mono text-xs sm:text-sm text-blue-200 leading-relaxed">
                  <code>{block.content}</code>
                </pre>
              </div>
            );
          case 'list':
            return (
              <ul key={index} className="space-y-3 my-4 pl-2">
                {block.items?.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span>{formatInline(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case 'paragraph':
          default:
            return (
              <p key={index} className="text-slate-300">
                {formatInline(block.content)}
              </p>
            );
        }
      })}
    </div>
  );
}

interface ParsedBlock {
  type: 'paragraph' | 'h2' | 'h3' | 'h4' | 'blockquote' | 'code' | 'list';
  content: string;
  lang?: string;
  items?: string[];
}

function parseMarkdownBlocks(raw: string): ParsedBlock[] {
  const lines = raw.trim().split(/\r?\n/);
  const blocks: ParsedBlock[] = [];

  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let codeLang = '';
  let listBuffer: string[] = [];

  const flushList = () => {
    if (listBuffer.length > 0) {
      blocks.push({
        type: 'list',
        content: '',
        items: [...listBuffer],
      });
      listBuffer = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Handle code blocks ```
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        blocks.push({
          type: 'code',
          content: codeBuffer.join('\n'),
          lang: codeLang,
        });
        codeBuffer = [];
        codeLang = '';
        inCodeBlock = false;
      } else {
        flushList();
        inCodeBlock = true;
        codeLang = line.trim().replace(/^```/, '').trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // List item (* or -)
    if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
      const itemText = line.trim().substring(2).trim();
      listBuffer.push(itemText);
      continue;
    } else {
      flushList();
    }

    // Empty lines
    if (!line.trim()) {
      continue;
    }

    // Headings
    if (line.startsWith('#### ')) {
      blocks.push({ type: 'h4', content: line.replace('#### ', '').trim() });
    } else if (line.startsWith('### ')) {
      blocks.push({ type: 'h3', content: line.replace('### ', '').trim() });
    } else if (line.startsWith('## ')) {
      blocks.push({ type: 'h2', content: line.replace('## ', '').trim() });
    } else if (line.startsWith('> ')) {
      blocks.push({ type: 'blockquote', content: line.replace(/^>\s*/, '').trim() });
    } else {
      blocks.push({ type: 'paragraph', content: line.trim() });
    }
  }

  flushList();

  if (inCodeBlock && codeBuffer.length > 0) {
    blocks.push({
      type: 'code',
      content: codeBuffer.join('\n'),
      lang: codeLang,
    });
  }

  return blocks;
}

// Inline formatting: **bold**, `code`, and links
function formatInline(text: string): React.ReactNode {
  // Regex to split by **bold** or `code`
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-blue-300 border border-white/5"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}
