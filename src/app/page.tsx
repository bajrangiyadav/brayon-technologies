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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does custom software development cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cost depends strictly on complexity and feature scope. A focused business website starts from ₹15,000+, an e-commerce platform from ₹35,000+, custom operational software from ₹75,000+, and complex CRM/ERP platforms from ₹1,00,000+. We provide a fixed, milestone-based quote with zero hidden surprises.",
        },
      },
      {
        "@type": "Question",
        name: "How long does custom software development take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard business portal or MVP typically takes 2 to 4 weeks. Full custom software or multi-role CRM/ERP systems generally require 4 to 8 weeks, delivered in weekly sprint demos.",
        },
      },
      {
        "@type": "Question",
        name: "How does source code ownership transfer work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upon milestone completion and settlement, 100% of the private Git repositories, cloud deployment credentials, database scripts, and intellectual property are officially transferred to your organization.",
        },
      },
      {
        "@type": "Question",
        name: "What are your payment terms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We follow a transparent milestone structure: 30% kickoff deposit, 40% upon staging and core feature completion, and 30% upon final production deployment and code handover.",
        },
      },
      {
        "@type": "Question",
        name: "Can you improve or modernize existing legacy software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We audit legacy codebases (PHP, .NET, old JS), resolve performance bottlenecks, fix security vulnerabilities, and migrate or modernize modules with zero data loss.",
        },
      },
      {
        "@type": "Question",
        name: "Can I start with an MVP and scale later?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we strongly encourage starting with an MVP to validate workflows and launch quickly, then adding advanced automations and modules based on user feedback.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
