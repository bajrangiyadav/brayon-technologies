import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Eyebrow from "@/components/common/Eyebrow";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FadeUp from "@/components/animations/FadeUp";
import { caseStudies } from "@/data/caseStudies";
import { SITE_URL, COMPANY_INFO } from "@/utils/siteConfig";
import CaseStudiesClient from "@/app/case-studies/CaseStudiesClient";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | BRAYON Technologies",
  description:
    "Explore verified software engineering case studies delivered by BRAYON Technologies: Jay Balaji Computer Education (JBCE), Mumbai Hindi Vidyapeeth (MHVP), SafeGrowTrade, Ashapura Dry Fruits, and DriveZone.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Our Work & Case Studies | BRAYON Technologies",
    description:
      "Explore real-world software engineering case studies and systems engineered for production.",
    url: `${SITE_URL}/portfolio`,
    siteName: COMPANY_INFO.name,
    type: "website",
    images: [
      {
        url: "/brayon-logo-showcase.png",
        width: 1200,
        height: 630,
        alt: "BRAYON Technologies Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work & Case Studies | BRAYON Technologies",
    description: "Explore verified software engineering case studies delivered by BRAYON Technologies.",
    images: ["/brayon-logo-showcase.png"],
  },
};

export default function PortfolioPage() {
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
        name: "Portfolio",
        item: `${SITE_URL}/portfolio`,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "BRAYON Technologies Engineering Portfolio & Case Studies",
    description: "Verified software engineering case studies and architectural blueprints.",
    url: `${SITE_URL}/portfolio`,
    hasPart: caseStudies.map((cs) => ({
      "@type": "Article",
      name: cs.title,
      headline: cs.title,
      description: cs.shortDescription,
      url: `${SITE_URL}/case-studies/${cs.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Navbar />

      <main className="flex-grow pt-28">
        <section className="py-12 md:py-16 border-b border-white/[0.08] relative">
          <Container>
            <div className="mb-6">
              <Breadcrumbs items={[{ label: "Our Work & Case Studies" }]} />
            </div>
            <div className="max-w-3xl text-left">
              <FadeUp delay={0.05}>
                <Eyebrow>ENGINEERING PORTFOLIO</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4 leading-tight">
                  Work That Speaks Through Results.
                </h1>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  Explore production systems engineered by BRAYON Technologies. Each case study documents the client challenge, technical architecture, and measurable operational impact delivered.
                </p>
              </FadeUp>
            </div>
          </Container>
        </section>

        <CaseStudiesClient initialCaseStudies={caseStudies} />
      </main>

      <Footer />
    </div>
  );
}