import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SolutionsIdentifySection from "@/components/sections/SolutionsIdentifySection";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import RealProjectsSection from "@/components/sections/RealProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyWorkWithUsSection from "@/components/sections/WhyWorkWithUsSection";
import WhatYouGetSection from "@/components/sections/WhatYouGetSection";
import TrustFounderSection from "@/components/sections/TrustFounderSection";
import ProjectOnboardingRoadmapSection from "@/components/sections/ProjectOnboardingRoadmapSection";
import PricingEstimateSection from "@/components/sections/PricingEstimateSection";
import ProjectCostEstimator from "@/components/sections/ProjectCostEstimator";
import SoftwareFAQSection from "@/components/sections/SoftwareFAQSection";
import CTASection from "@/components/sections/CTASection";
import FloatingWhatsAppButton from "@/components/common/FloatingWhatsAppButton";

export const metadata: Metadata = {
  title: "BRAYON Technologies | Custom Software, CRM, ERP, E-Commerce & Mobile Apps",
  description:
    "Your Business Idea. Our Technology. One Complete Solution. Custom Software, CRM, ERP, E-commerce & Mobile Apps built around how your business actually works.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BRAYON Technologies | Custom Software & Business Systems",
    description:
      "Your Business Idea. Our Technology. One Complete Solution. Transparent pricing, milestone development, and post-launch support.",
    url: "https://brayontech.com",
    siteName: "BRAYON Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brayon-logo-showcase.png",
        width: 1024,
        height: 512,
        alt: "BRAYON Technologies - Software Engineering Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRAYON Technologies | Custom Software & Business Platforms",
    description:
      "Your Business Idea. Our Technology. One Complete Solution. Clear pricing, source ownership, post-launch support.",
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
          {/* 1. HERO SECTION */}
          <HeroSection />

          {/* 2. BUSINESS PROBLEMS / IDENTIFY SOLUTION */}
          <div id="solutions">
            <SolutionsIdentifySection />
          </div>

          {/* 3. CORE SERVICES */}
          <div id="services">
            <ServicesOverviewSection />
          </div>

          {/* 4. REAL PROJECTS & CASE STUDIES */}
          <div id="projects">
            <RealProjectsSection />
          </div>

          {/* 5. HOW WE WORK (4-STEP PROCESS) */}
          <div id="process">
            <ProcessSection />
          </div>

          {/* 5B. ROADMAP & AAGE KYA HOGA */}
          <ProjectOnboardingRoadmapSection />

          {/* 6. WHY BRAYON (CUSTOMER LANGUAGE) */}
          <WhyWorkWithUsSection />

          {/* 6B. CLIENT TESTIMONIALS & FOUNDER DIRECT COMMITMENT */}
          <TrustFounderSection />

          {/* 7. WHAT YOU GET (DELIVERABLES) */}
          <WhatYouGetSection />

          {/* 8. PRICING & STARTING RANGE */}
          <div id="pricing">
            <PricingEstimateSection />
          </div>

          {/* 8B. INSTANT COST ESTIMATOR */}
          <ProjectCostEstimator />

          {/* 9. STRONG FAQS */}
          <SoftwareFAQSection />

          {/* 10. FINAL CTA */}
          <CTASection />
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </>
  );
}
