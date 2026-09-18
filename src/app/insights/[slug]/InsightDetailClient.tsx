'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Insight } from '@/types/insight';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Eyebrow from '@/components/common/Eyebrow';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import FadeUp from '@/components/animations/FadeUp';
import { ArticleContent } from '@/components/insights/ArticleContent';
import { SocialShare } from '@/components/insights/SocialShare';
import { InsightCard } from '@/components/insights/InsightCard';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Clock, Calendar, ArrowLeft, ArrowRight, User, Terminal } from 'lucide-react';

interface InsightDetailClientProps {
  insight: Insight;
  relatedInsights: Insight[];
}

export function InsightDetailClient({
  insight,
  relatedInsights,
}: InsightDetailClientProps) {
  const { trackInsightView, trackCTA } = useAnalytics();

  useEffect(() => {
    trackInsightView(insight.slug, insight.category, insight.readingTime);
  }, [insight.slug, insight.category, insight.readingTime, trackInsightView]);

  const formattedDate = new Date(insight.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const pageUrl = `https://brayontech.com/insights/${insight.slug}`;

  return (
    <div className="flex flex-col">
      {/* Breadcrumb & Article Header */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#0e1628] via-[#0a0f1d] to-[#070a12] py-12 md:py-20">
        <Container>
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: 'Insights', href: '/insights' },
                { label: insight.category.replace('-', ' '), href: '/insights' },
                { label: insight.title },
              ]}
            />
          </div>

          <div className="max-w-[800px] mx-auto text-left">
            {/* Meta badges */}
            <FadeUp delay={0.05}>
              <div className="flex flex-wrap items-center gap-3 text-xs mb-6">
                <span className="rounded-full bg-blue-500/15 border border-blue-500/30 px-3 py-1 font-mono uppercase tracking-wider text-blue-400">
                  {insight.category.replace('-', ' ')}
                </span>
                <span className="text-slate-500">•</span>
                <div className="flex items-center gap-1.5 text-slate-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>{insight.readingTime} min read</span>
                </div>
                <span className="text-slate-500">•</span>
                <div className="flex items-center gap-1.5 text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formattedDate}</span>
                </div>
              </div>
            </FadeUp>

            {/* Title */}
            <FadeUp delay={0.1}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
                {insight.title}
              </h1>
            </FadeUp>

            {/* Deck / Excerpt */}
            <FadeUp delay={0.15}>
              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-300 font-normal border-l-2 border-blue-500/60 pl-4">
                {insight.excerpt}
              </p>
            </FadeUp>

            {/* Author & Share row */}
            <FadeUp delay={0.2}>
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-semibold">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{insight.author}</div>
                    {insight.authorRole && (
                      <div className="text-xs text-slate-400">{insight.authorRole}</div>
                    )}
                  </div>
                </div>

                <SocialShare url={pageUrl} title={insight.title} />
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Article Body Section (Readable container 680px - 760px) */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-[760px] mx-auto">
            {/* Article Content */}
            <ArticleContent content={insight.content} />

            {/* Tags footer */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>Article Tags & Taxonomy</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {insight.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-300 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Back to all insights link */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Publications</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Engineering Lead Acquisition CTA */}
      <section className="py-16 border-y border-white/10 bg-gradient-to-r from-[#0c1322] via-[#101b33] to-[#0c1322]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-blue-400">
              Technical Partnership
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Building software that demands this caliber of engineering?
            </h2>

            <p className="text-base text-slate-300 max-w-xl mx-auto">
              Skip the agency bloat. Work directly with senior software architects and engineers who design for high throughput, sub-second latency, and verified stability.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => trackCTA('Start Technical Consultation', 'insight_bottom_cta', '/contact')}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all"
              >
                <span>Start Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Insights */}
      {relatedInsights.length > 0 && (
        <Section spacing="lg">
          <Container>
            <div className="mb-8">
              <Eyebrow>CONTINUE READING</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
                Related Technical Analyses
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedInsights.map((rel) => (
                <InsightCard key={rel.id} insight={rel} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </div>
  );
}
