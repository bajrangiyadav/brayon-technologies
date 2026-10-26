/**
 * Centralized Site Configuration & Production Metadata
 * 
 * Provides verified company details, canonical domain resolution,
 * and SEO constants across all pages, structured data, sitemaps, and robots.
 */

// Normalized base URL without trailing slash
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://brayon-technologies.vercel.app';

export const SITE_URL = rawSiteUrl.replace(/\/+$/, '');

export const COMPANY_INFO = {
  name: 'BRAYON Technologies',
  legalName: 'BRAYON Technologies',
  alternateNames: ['BRAYON Tech', 'BRAYON'],
  slogan: 'Technology. Innovation. Beyond.',
  tagline: 'Custom Software, Web Platforms, ERP/CRM & Cloud Engineering',
  description:
    'BRAYON Technologies is an enterprise custom software engineering partner in India. We design, build, and deploy high-performance web applications, custom CRM/ERP platforms, e-commerce systems, and mobile applications with senior engineering leadership and 100% IP ownership.',
  founder: {
    name: 'Bajrangi Yadav',
    role: 'Founder & Solutions Architect',
    url: `${SITE_URL}/about#founder`,
  },
  contact: {
    email: 'hello@brayontech.com',
    supportEmail: 'support@brayontech.com',
    salesEmail: 'sales@brayontech.com',
    phone: '+91-7385121432',
    phoneDisplay: '+91 73851 21432',
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '917385121432',
    address: {
      locality: 'Mumbai',
      region: 'Maharashtra',
      country: 'IN',
      countryName: 'India',
    },
  },
  social: {
    github: 'https://github.com/bajrangiyadav',
    githubRepo: 'https://github.com/bajrangiyadav/brayon-technologies',
  },
  assets: {
    logo: `${SITE_URL}/brayon-icon-square.png`,
    ogImage: `${SITE_URL}/brayon-logo-showcase.png`,
    favicon: `${SITE_URL}/favicon.ico`,
  },
};

/**
 * Returns a fully-qualified canonical URL for any route path.
 */
export function getAbsoluteUrl(path = ''): string {
  if (!path || path === '/') return SITE_URL;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}
