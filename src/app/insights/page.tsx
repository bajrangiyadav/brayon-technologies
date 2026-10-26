import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';
import { InsightsClient } from './InsightsClient';
import { insights, insightCategories } from '@/data/insights';
import { SITE_URL, COMPANY_INFO } from '@/utils/siteConfig';

export const metadata: Metadata = {
  title: 'Engineering Insights & Technical Architecture | BRAYON Technologies',
  description:
    'Deep dives into software architecture, enterprise Laravel systems, high-concurrency e-commerce, custom CRM/ERP, and AI automation written by senior engineers.',
  alternates: {
    canonical: '/insights',
  },
  openGraph: {
    title: 'Engineering Insights & Technical Architecture | BRAYON Technologies',
    description:
      'Deep dives into software architecture, enterprise Laravel systems, high-concurrency e-commerce, custom CRM/ERP, and AI automation written by senior engineers.',
    url: `${SITE_URL}/insights`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [
      {
        url: '/brayon-logo-showcase.png',
        width: 1200,
        height: 630,
        alt: 'BRAYON Technologies Engineering Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Insights & Technical Architecture | BRAYON Technologies',
    description:
      'Deep dives into software architecture, Laravel systems, e-commerce, and high-concurrency engineering.',
    images: ['/brayon-logo-showcase.png'],
  },
};

export default function InsightsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'BRAYON Technologies Engineering Insights',
    description:
      'Technical publications, architectural paradigms, and software engineering deep dives.',
    url: `${SITE_URL}/insights`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: insights
        .filter((i) => i.published)
        .map((insight, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${SITE_URL}/insights/${insight.slug}`,
          name: insight.title,
        })),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Insights',
        item: `${SITE_URL}/insights`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="flex-grow pt-24 sm:pt-28">
        <InsightsClient initialInsights={insights} categories={insightCategories} />
      </main>
      <Footer />
    </div>
  );
}
