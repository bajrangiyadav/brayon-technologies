import React from "react";
import type { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Case Studies & Production Portfolio | BRAYON Technologies",
  description:
    "Explore real-world case studies and digital products engineered by BRAYON Technologies. From high-throughput commodity trading (SafeGrowTrade) to sub-second D2C e-commerce (Ashapura Dry Fruits).",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Case Studies & Production Portfolio | BRAYON Technologies",
    description:
      "Explore real-world case studies, architectural blueprints, and measurable business ROI engineered by BRAYON Technologies.",
    url: "https://brayontech.com/work",
  },
};

export default function WorkPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "BRAYON Technologies Engineering Case Studies",
    description:
      "Verified client case studies and production platforms engineered by BRAYON Technologies.",
    url: "https://brayontech.com/work",
    publisher: {
      "@type": "Organization",
      name: "BRAYON Technologies",
      url: "https://brayontech.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <WorkClient />
    </>
  );
}
