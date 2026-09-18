import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';
import { InsightDetailClient } from './InsightDetailClient';
import { insights } from '@/data/insights';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    return {
      title: 'Insight Not Found | BRAYON Technologies',
    };
  }

  const url = `https://brayon.in/insights/${insight.slug}`;

  return {
    title: `${insight.seo.title || insight.title} | BRAYON Engineering`,
    description: insight.seo.description || insight.excerpt,
    keywords: insight.seo.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      url: url,
      siteName: 'BRAYON Technologies',
      type: 'article',
      publishedTime: insight.publishedAt,
      authors: [insight.author],
      tags: insight.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: insight.title,
      description: insight.excerpt,
    },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    notFound();
  }

  // Find related insights: same category or overlapping tags, excluding current
  const relatedInsights = insights
    .filter(
      (item) =>
        item.id !== insight.id &&
        item.published &&
        (item.category === insight.category ||
          item.tags.some((t) => insight.tags.includes(t)))
    )
    .slice(0, 3);

  // Structured Data (TechArticle + BreadcrumbList)
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: insight.title,
    description: insight.excerpt,
    datePublished: insight.publishedAt,
    author: {
      '@type': 'Person',
      name: insight.author,
      jobTitle: insight.authorRole || 'Senior Engineer',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BRAYON Technologies',
      logo: {
        '@type': 'ImageObject',
        url: 'https://brayon.in/icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://brayon.in/insights/${insight.slug}`,
    },
    keywords: insight.tags.join(', '),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://brayon.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Insights',
        item: 'https://brayon.in/insights',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: insight.title,
        item: `https://brayon.in/insights/${insight.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main className="flex-grow pt-20 sm:pt-24">
        <InsightDetailClient
          insight={insight}
          relatedInsights={relatedInsights}
        />
      </main>
      <Footer />
    </div>
  );
}
