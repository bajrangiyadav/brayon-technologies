import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';
import ContactClient from './ContactClient';
import { SITE_URL, COMPANY_INFO } from '@/utils/siteConfig';

export const metadata: Metadata = {
  title: 'Contact Engineering & Architecture Consultation | BRAYON Technologies',
  description:
    'Schedule a technical consultation with Founder & Solutions Architect Bajrangi Yadav. 3-hour response guarantee on all custom software, Laravel, CRM/ERP, and e-commerce project inquiries.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Engineering & Architecture Consultation | BRAYON Technologies',
    description:
      'Direct engineering consultation with Founder Bajrangi Yadav. High-throughput web applications, Laravel backends, CRM/ERP platforms, and mobile apps.',
    url: `${SITE_URL}/contact`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [
      {
        url: '/brayon-logo-showcase.png',
        width: 1200,
        height: 630,
        alt: 'Contact BRAYON Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Engineering & Architecture Consultation | BRAYON Technologies',
    description:
      'Direct engineering consultation with Founder Bajrangi Yadav. 3-hour response guarantee.',
    images: ['/brayon-logo-showcase.png'],
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact BRAYON Technologies',
    description:
      'Get in touch directly with Founder & Solutions Architect Bajrangi Yadav for software engineering projects.',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'Person',
      name: COMPANY_INFO.founder.name,
      jobTitle: COMPANY_INFO.founder.role,
      telephone: COMPANY_INFO.contact.phone,
      email: COMPANY_INFO.contact.email,
    },
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Navbar />
      <main className="flex-grow pt-24 sm:pt-28">
        <ContactClient />
      </main>
      <Footer />
    </div>
  );
}
