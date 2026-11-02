import type { MetadataRoute } from 'next';
import { caseStudies } from '@/data/caseStudies';
import { insights } from '@/data/insights';
import { getAllServiceSlugs } from '@/data/servicesData';
import { getAllIndustrySlugs } from '@/data/industryDetailData';
import { SITE_URL } from '@/utils/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const now = new Date();

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/technology`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Service Detail Pages
  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.90,
  }));

  // Industry Detail Pages
  const industryPages: MetadataRoute.Sitemap = getAllIndustrySlugs().map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Case Studies
  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((p) => ({
    url: `${baseUrl}/case-studies/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Insights / Blog Articles
  const insightPages: MetadataRoute.Sitemap = insights
    .filter((i) => i.published)
    .map((insight) => ({
      url: `${baseUrl}/insights/${insight.slug}`,
      lastModified: new Date(insight.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.85,
    }));

  return [
    ...mainPages,
    ...servicePages,
    ...industryPages,
    ...caseStudyPages,
    ...insightPages,
  ];
}