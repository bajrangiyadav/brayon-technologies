import React from "react";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Request Architecture Audit | BRAYON Technologies",
  description:
    "Schedule a 15-minute engineering consultation with Founder & Technology Lead Bajrangi Yadav. Submissions trigger instant Gmail and WhatsApp alerts. 3-hour response SLA.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Request Architecture Audit | BRAYON Technologies",
    description:
      "Direct engineering consultation with Founder Bajrangi Yadav. Sub-second web apps, Laravel backends, and custom ERP automation.",
    url: "https://brayontech.com/contact",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact BRAYON Technologies",
    description: "Get in touch directly with Founder & Technology Lead Bajrangi Yadav for web and software engineering projects.",
    url: "https://brayontech.com/contact",
    mainEntity: {
      "@type": "Person",
      name: "Bajrangi Yadav",
      jobTitle: "Founder & Technology Lead",
      telephone: "+91-7385121432",
      email: "bajrangiyadav330@gmail.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactClient />
    </>
  );
}
