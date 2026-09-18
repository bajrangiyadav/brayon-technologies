import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustProofSection from "@/components/sections/TrustProofSection";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import WhyWorkWithUsSection from "@/components/sections/WhyWorkWithUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "BRAYON Technologies | We Build Digital Products That Move Businesses Forward",
  description:
    "BRAYON Technologies designs and builds scalable digital products, business platforms and AI-powered solutions for modern companies. Direct engineering leadership & 100% IP ownership.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BRAYON Technologies | We Build Digital Products That Move Businesses Forward",
    description:
      "Scalable digital products, enterprise platforms, and AI solutions built with disciplined senior engineering.",
    url: "https://brayontech.com",
    siteName: "BRAYON Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brayon-logo-showcase.png",
        width: 1024,
        height: 512,
        alt: "BRAYON Technologies - Engineering Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRAYON Technologies | Engineering Enterprise Software & AI",
    description:
      "We Build Digital Products That Move Businesses Forward. Scalable web, mobile, and AI solutions.",
    images: ["/brayon-logo-showcase.png"],
  },
};

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BRAYON Technologies",
    alternateName: ["BRAYON Tech", "BRAYON"],
    url: "https://brayontech.com",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <div className="min-h-screen flex flex-col bg-[#070a12] text-slate-100">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <TrustProofSection />
          <ServicesOverviewSection />
          <WhyWorkWithUsSection />
          <ProcessSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
