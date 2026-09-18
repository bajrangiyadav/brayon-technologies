'use client';

import React from 'react';
import Link from 'next/link';
import { Insight } from '@/types/insight';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';

interface InsightCardProps {
  insight: Insight;
  featured?: boolean;
}

export function InsightCard({ insight, featured = false }: InsightCardProps) {
  const formattedDate = new Date(insight.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  if (featured) {
    return (
      <article className="group relative rounded-2xl border border-blue-500/30 bg-gradient-to-br from-[#0e1628] via-[#0d1322] to-[#0a0f1d] p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 hover:border-blue-400/60 hover:shadow-blue-900/10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              {/* Category & Meta Header */}
              <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                <span className="rounded-full bg-blue-500/15 border border-blue-500/30 px-3 py-1 font-mono font-medium uppercase tracking-wider text-blue-400">
                  Featured Research
                </span>
                <span className="text-slate-400 font-mono">/</span>
                <span className="text-slate-300 font-medium capitalize">
                  {insight.category.replace('-', ' ')}
                </span>
                <span className="text-slate-500">•</span>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>{insight.readingTime} min read</span>
                </div>
              </div>

              {/* Title */}
              <Link href={`/insights/${insight.slug}`} className="block group/title">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white transition-colors duration-200 group-hover/title:text-blue-400">
                  {insight.title}
                </h2>
              </Link>

              {/* Excerpt */}
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300 line-clamp-3">
                {insight.excerpt}
              </p>
            </div>

            {/* Author & Footer CTA */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-semibold text-sm">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{insight.author}</div>
                  {insight.authorRole && (
                    <div className="text-xs text-slate-400">{insight.authorRole}</div>
                  )}
                </div>
              </div>

              <Link
                href={`/insights/${insight.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors"
              >
                <span>Read Full Analysis</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Key Topics / Tags Side Card */}
          <div className="mt-8 lg:mt-0 lg:col-span-4 rounded-xl border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Key Focus Areas
              </div>
              <div className="flex flex-wrap gap-2">
                {insight.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-slate-300 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{formattedDate}</span>
              </div>
              <span className="font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Verified Tech
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Standard Card Layout
  return (
    <article className="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#0d1322]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-[#0e1628] hover:shadow-xl hover:shadow-blue-950/20">
      <div>
        {/* Category & Read Time */}
        <div className="flex items-center justify-between text-xs mb-3">
          <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 font-mono text-blue-400 uppercase tracking-wider">
            {insight.category.replace('-', ' ')}
          </span>
          <div className="flex items-center gap-1 text-slate-400">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{insight.readingTime} min</span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/insights/${insight.slug}`} className="block group/title mt-2">
          <h3 className="text-lg font-semibold text-white tracking-tight leading-snug transition-colors duration-200 group-hover/title:text-blue-400">
            {insight.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-3">
          {insight.excerpt}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {insight.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded bg-white/5 px-2 py-0.5 text-xs text-slate-400 font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-slate-300 font-mono text-[10px]">
            {insight.author.charAt(0)}
          </div>
          <span className="truncate max-w-[120px]">{insight.author}</span>
        </div>

        <Link
          href={`/insights/${insight.slug}`}
          className="inline-flex items-center gap-1 font-medium text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>Read</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
