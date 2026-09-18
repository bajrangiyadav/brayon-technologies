import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';
import { InsightsClient } from './InsightsClient';
import { insights, insightCategories } from '@/data/insights';

export const metadata: Metadata = {
  title: 'Engineering Insights & Technical Architecture | BRAYON Technologies',
  description:
    'Deep dives into software architecture, AI automation pipelines, sub-second e-commerce, and high-concurrency systems written by BRAYON senior engineers.',
  alternates: {
    canonical: '/insights',
  },
  openGraph: {
    title: 'Engineering Insights & Technical Architecture | BRAYON Technologies',
    description:
      'Deep dives into software architecture, AI automation pipelines, sub-second e-commerce, and high-concurrency systems written by BRAYON senior engineers.',
    url: 'https://brayon.in/insights',
    siteName: 'BRAYON Technologies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Insights & Technical Architecture | BRAYON Technologies',
    description:
      'Deep dives into software architecture, AI automation pipelines, sub-second e-commerce, and high-concurrency systems.',
  },
};

export default function InsightsPage() {
  // Schema.org CollectionPage and ItemList
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'BRAYON Technologies Engineering Insights',
    description:
      'Technical publications, architectural paradigms, and software engineering deep dives.',
    url: 'https://brayon.in/insights',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: insights
        .filter((i) => i.published)
        .map((insight, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `https://brayon.in/insights/${insight.slug}`,
          name: insight.title,
        })),
    },
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow pt-24 sm:pt-28">
        <InsightsClient initialInsights={insights} categories={insightCategories} />
      </main>
      <Footer />
    </div>
  );
}
