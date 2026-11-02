import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Eyebrow from "@/components/common/Eyebrow";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { SITE_URL, COMPANY_INFO } from "@/utils/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | BRAYON Technologies",
  description:
    "Privacy Policy, confidentiality practices, NDA protections, and data governance at BRAYON Technologies.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | BRAYON Technologies",
    description: "Privacy Policy and data governance at BRAYON Technologies.",
    url: `${SITE_URL}/privacy-policy`,
    siteName: COMPANY_INFO.name,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privacy Policy",
        item: `${SITE_URL}/privacy-policy`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="flex-grow pt-28">
        <Section spacing="lg">
          <Container>
            <div className="max-w-3xl mx-auto space-y-8 text-left">
              <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
              <div>
                <Eyebrow>LEGAL &amp; DATA GOVERNANCE</Eyebrow>
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
                  Privacy Policy
                </h1>
                <p className="text-xs font-mono text-slate-400 mt-2">
                  Effective Date: November 2026 · BRAYON Technologies
                </p>
              </div>

              <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
                <section className="space-y-2 p-6 rounded-2xl bg-[#090f1e] border border-white/[0.08]">
                  <h2 className="text-base font-bold text-white">1. Information We Collect</h2>
                  <p>
                    BRAYON Technologies collects information you voluntarily provide directly through our project inquiry forms, technical consultation requests, or direct correspondence (such as name, company name, email address, phone/WhatsApp number, and project technical specifications).
                  </p>
                </section>

                <section className="space-y-2 p-6 rounded-2xl bg-[#090f1e] border border-white/[0.08]">
                  <h2 className="text-base font-bold text-white">2. Purpose of Processing</h2>
                  <p>
                    Collected information is used strictly to evaluate software project scopes, generate technical proposals, establish Master Services Agreements (MSAs), and communicate regarding project sprint milestones. We never sell, rent, or trade client information to third-party data brokers or marketing lists.
                  </p>
                </section>

                <section className="space-y-2 p-6 rounded-2xl bg-[#090f1e] border border-white/[0.08]">
                  <h2 className="text-base font-bold text-white">3. Strict Confidentiality &amp; NDA Protections</h2>
                  <p>
                    All project documentation, proprietary source code, database architectures, and business logic shared with BRAYON Technologies are protected under strict Non-Disclosure Agreements (NDAs). Your ideas, codebases, and commercial strategies remain your confidential intellectual property.
                  </p>
                </section>

                <section className="space-y-2 p-6 rounded-2xl bg-[#090f1e] border border-white/[0.08]">
                  <h2 className="text-base font-bold text-white">4. Data Security Standards</h2>
                  <p>
                    We employ industry-standard encryption protocols (TLS 1.3 in transit and AES-256 for sensitive credentials at rest) to safeguard your communications and inquiry records. Access to client project scopes is restricted solely to senior engineering leads.
                  </p>
                </section>

                <section className="space-y-2 p-6 rounded-2xl bg-[#090f1e] border border-white/[0.08]">
                  <h2 className="text-base font-bold text-white">5. Contact &amp; Inquiries</h2>
                  <p>
                    For questions regarding our privacy practices or to request data removal, please contact our team at{" "}
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-blue-400 hover:underline">
                      {COMPANY_INFO.contact.email}
                    </a>{" "}
                    or by mail at BRAYON Technologies, Mumbai, Maharashtra, India.
                  </p>
                </section>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}