'use client';

import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof window !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Graceful fallback
    }
  };

  const handleLinkedInShare = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=600');
  };

  const handleXShare = () => {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1.5">
        <Share2 className="w-3.5 h-3.5 text-slate-400" />
        Share:
      </span>

      {/* LinkedIn */}
      <button
        type="button"
        onClick={handleLinkedInShare}
        aria-label="Share on LinkedIn"
        className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 transition-colors"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 0 0-1.64 1.64c0 .9.74 1.64 1.64 1.64s1.64-.74 1.64-1.64A1.64 1.64 0 0 0 7.83 6.2Z" />
        </svg>
      </button>

      {/* X (formerly Twitter) */}
      <button
        type="button"
        onClick={handleXShare}
        aria-label="Share on X"
        className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 hover:border-white/40 hover:bg-white/10 hover:text-white transition-colors"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </button>

      {/* Copy Link */}
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy link to clipboard"
        className={`rounded-lg border p-2 text-xs font-mono transition-colors flex items-center gap-1.5 ${
          copied
            ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400'
            : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/30 hover:bg-white/10 hover:text-white'
        }`}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-[11px] font-sans">Copied</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}
