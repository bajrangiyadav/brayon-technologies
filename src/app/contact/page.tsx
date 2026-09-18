import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Engineering & Architecture Consultation | BRAYON Technologies',
  description:
    'Schedule a technical consultation with Founder & Solutions Architect Bajrangi Yadav. 3-hour response guarantee on all architectural inquiries.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Engineering & Architecture Consultation | BRAYON Technologies',
    description:
      'Direct engineering consultation with Founder Bajrangi Yadav. High-throughput web applications, Laravel backends, and AI automation.',
    url: 'https://brayon.in/contact',
    siteName: 'BRAYON Technologies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Engineering & Architecture Consultation | BRAYON Technologies',
    description:
      'Direct engineering consultation with Founder Bajrangi Yadav. 3-hour response guarantee.',
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact BRAYON Technologies',
    description:
      'Get in touch directly with Founder & Solutions Architect Bajrangi Yadav for software engineering projects.',
    url: 'https://brayon.in/contact',
    mainEntity: {
      '@type': 'Person',
      name: 'Bajrangi Yadav',
      jobTitle: 'Founder & Solutions Architect',
      telephone: '+91-7385121432',
      email: 'bajrangiyadav330@gmail.com',
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
