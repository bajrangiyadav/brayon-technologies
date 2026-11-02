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
  slogan: 'Building Digital Experiences That Move Businesses Forward.',
  tagline: 'Custom Software, Web Platforms, ERP/CRM & Cloud Engineering',
  brandMessage: 'Building Digital Experiences That Move Businesses Forward.',
  supportingMessage:
    'We combine strategy, design, and engineering to build powerful digital solutions that solve real business problems.',
  description:
    'BRAYON Technologies is a modern technology and digital solutions company helping businesses in India, the US, the UK, and globally transform ideas into scalable digital products. We engineer custom software, web applications, CRM/ERP platforms, e-commerce systems, and mobile applications with senior technical leadership.',
  founder: {
    name: 'Bajrangi Yadav',
    role: 'Founder — BRAYON Technologies',
    title: 'Founder & Solutions Architect',
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
