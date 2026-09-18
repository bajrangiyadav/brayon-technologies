'use client';

import React, { useState, useMemo } from 'react';
import { Insight, InsightCategory } from '@/types/insight';
import { InsightCard } from '@/components/insights/InsightCard';
import { InsightFilters } from '@/components/insights/InsightFilters';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Eyebrow from '@/components/common/Eyebrow';
import FadeUp from '@/components/animations/FadeUp';
import { BookOpen, SearchX } from 'lucide-react';

interface InsightsClientProps {
  initialInsights: Insight[];
  categories: InsightCategory[];
}

export function InsightsClient({ initialInsights, categories }: InsightsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredInsights = useMemo(() => {
    return initialInsights.filter((insight) => {
      if (!insight.published) return false;

      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || insight.category === selectedCategory;

      if (!matchesCategory) return false;

      // Search filter
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = insight.title.toLowerCase().includes(q);
      const inExcerpt = insight.excerpt.toLowerCase().includes(q);
      const inTags = insight.tags.some((tag) => tag.toLowerCase().includes(q));
      const inAuthor = insight.author.toLowerCase().includes(q);

      return inTitle || inExcerpt || inTags || inAuthor;
    });
  }, [initialInsights, selectedCategory, searchQuery]);

  // Determine if we show a featured hero card:
  // We show it only when showing 'all' categories and no active search query
  const isDefaultView = selectedCategory === 'all' && !searchQuery.trim();
  const featuredArticle = isDefaultView
    ? filteredInsights.find((item) => item.featured) || filteredInsights[0]
    : null;

  const gridArticles = useMemo(() => {
    if (featuredArticle) {
      return filteredInsights.filter((item) => item.id !== featuredArticle.id);
    }
    return filteredInsights;
  }, [filteredInsights, featuredArticle]);

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#0a0f1d] via-[#070a12] to-[#070a12] py-16 md:py-24">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <Container>
          <div className="relative max-w-3xl">
            <FadeUp delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-blue-400">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Engineering & Product Insights</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                Systems, Architecture & Digital Product Strategy
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Technical articles, architectural breakdowns, and real engineering lessons written by senior practitioners who build high-throughput systems.
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <Section spacing="lg">
        <Container>
          {/* Filters & Search bar */}
          <div className="mb-12">
            <InsightFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              totalCount={filteredInsights.length}
            />
          </div>

          {/* Empty State */}
          {filteredInsights.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-[#0d1322]/40 p-12 text-center my-8">
              <div className="mx-auto w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 mb-4">
                <SearchX className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">No articles found</h3>
              <p className="mt-2 text-sm text-slate-400 max-w-md mx-auto">
                We couldn&apos;t find any articles matching your search criteria. Try using different keywords or browsing all categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-blue-500 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Featured Article Card */}
              {featuredArticle && (
                <FadeUp delay={0.1}>
                  <div className="mb-12">
                    <InsightCard insight={featuredArticle} featured={true} />
                  </div>
                </FadeUp>
              )}

              {/* Grid of Articles */}
              {gridArticles.length > 0 && (
                <div>
                  {featuredArticle && (
                    <div className="mb-6">
                      <Eyebrow>All Publications</Eyebrow>
                      <h3 className="text-xl font-semibold text-white tracking-tight mt-1">
                        Recent Articles & Deep Dives
                      </h3>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gridArticles.map((article, idx) => (
                      <FadeUp key={article.id} delay={0.05 * (idx % 6)}>
                        <InsightCard insight={article} />
                      </FadeUp>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}
