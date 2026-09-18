import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { caseStudies } from "@/data/caseStudies";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies & Production Work | BRAYON Technologies",
  description:
    "Explore real-world software engineering case studies delivered by BRAYON Technologies, including Jay Balaji Computer Education (JBCE) and Mumbai Hindi Vidyapeeth (MHVP).",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies & Production Work | BRAYON Technologies",
    description:
      "Real projects. Real engineering. Scalable institutional platforms delivered for real operations.",
    url: "https://brayontech.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "BRAYON Technologies Engineering Case Studies",
    description: "Verified software engineering case studies and architectural blueprints.",
    url: "https://brayontech.com/case-studies",
    hasPart: caseStudies.map((cs) => ({
      "@type": "Article",
      name: cs.title,
      headline: cs.title,
      description: cs.shortDescription,
      url: `https://brayontech.com/case-studies/${cs.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Navbar />
      <CaseStudiesClient initialCaseStudies={caseStudies} />
      <Footer />
    </div>
  );
}
