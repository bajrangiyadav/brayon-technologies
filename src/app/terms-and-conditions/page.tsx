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
  title: "Terms & Conditions | BRAYON Technologies",
  description:
    "Terms & Conditions, delivery milestones, warranty terms, and 100% intellectual property transfer terms at BRAYON Technologies.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | BRAYON Technologies",
    description: "Terms & Conditions and delivery agreements at BRAYON Technologies.",
    url: `${SITE_URL}/terms-and-conditions`,
    siteName: COMPANY_INFO.name,
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
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
        name: "Terms & Conditions",
        item: `${SITE_URL}/terms-and-conditions`,
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
              <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
              <div>
                <Eyebrow>LEGAL &amp; COMMERCIAL FRAMEWORK</Eyebrow>
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
                  Terms &amp; Conditions
                </h1>
                <p className="text-xs font-mono text-slate-400 mt-2">
                  Effective Date: November 2026 · BRAYON Technologies
                </p>
              </div>

              <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
                <section className="space-y-2 p-6 rounded-2xl bg-[#090f1e] border border-white/[0.08]">
                  <h2 className="text-base font-bold text-white">1. Scope of Engagement &amp; SOWs</h2>
                  <p>
                    All software engineering, consultation, architecture auditing, and digital development services provided by BRAYON Technologies are governed by individual Statements of Work (SOWs) and project specifications mutually agreed upon between the client and BRAYON Technologies.
                  </p>
                </section>

                <section className="space-y-2 p-6 rounded-2xl bg-[#090f1e] border border-white/[0.08]">
                  <h2 className="text-base font-bold text-white">2. 100% Intellectual Property &amp; Code Ownership</h2>
                  <p>
                    Upon complete payment settlement for designated project milestones, 100% of all custom written source code, private Git repositories, database migration scripts, configuration files, and digital deliverables created specifically for the client become the exclusive intellectual property of the client. BRAYON Technologies claims zero residual licensing fees or vendor lock-in.
                  </p>
                </section>

                <section className="space-y-2 p-6 rounded-2xl bg-[#090f1e] border border-white/[0.08]">
                  <h2 className="text-base font-bold text-white">3. Milestone Payments &amp; Delivery Acceptance</h2>
                  <p>
                    Projects operate on structured sprint milestones. Upon completion of each sprint, the client is provided with a live staging demo environment for verification. Invoices are settled based on achieved deliverables as outlined in the project agreement.
                  </p>
                </section>

                <section className="space-y-2 p-6 rounded-2xl bg-[#090f1e] border border-white/[0.08]">
                  <h2 className="text-base font-bold text-white">4. 30-Day Hypercare Warranty &amp; Support</h2>
                  <p>
                    Every production deployment includes a standard 30-day complimentary hypercare warranty period during which any identified defects or operational discrepancies originating from the agreed scope are remediated at zero additional cost.
                  </p>
                </section>

                <section className="space-y-2 p-6 rounded-2xl bg-[#090f1e] border border-white/[0.08]">
                  <h2 className="text-base font-bold text-white">5. Inquiries &amp; Legal Notices</h2>
                  <p>
                    For contractual or legal inquiries, reach out to{" "}
                    <a href={`mailto:${COMPANY_INFO.contact.salesEmail}`} className="text-blue-400 hover:underline">
                      {COMPANY_INFO.contact.salesEmail}
                    </a>{" "}
                    or contact our registered office in Mumbai, Maharashtra, India.
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