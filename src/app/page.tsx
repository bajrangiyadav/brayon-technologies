import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CompanyIntroSection from "@/components/sections/CompanyIntroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyBrayonSection from "@/components/sections/WhyBrayonSection";
import ProcessTimelineSection from "@/components/sections/ProcessTimelineSection";
import TechExpertiseSection from "@/components/sections/TechExpertiseSection";
import FounderSection from "@/components/sections/FounderSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HomeInquirySection from "@/components/sections/HomeInquirySection";
import FloatingWhatsAppButton from "@/components/common/FloatingWhatsAppButton";
import { SITE_URL, COMPANY_INFO } from "@/utils/siteConfig";

export const metadata: Metadata = {
  title: "Software Development Company | BRAYON Technologies",
  description:
    "BRAYON Technologies builds custom software, web applications, CRM, ERP and e-commerce solutions. Turn your business ideas into scalable digital products.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Software Development Company | BRAYON Technologies",
    description:
      "Turning Ambitious Ideas Into Powerful Digital Products. Senior engineering leadership, custom software architectures, and 100% intellectual property ownership.",
    url: SITE_URL,
    siteName: COMPANY_INFO.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brayon-logo-showcase.png",
        width: 1200,
        height: 630,
        alt: "BRAYON Technologies - Software Engineering Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company | BRAYON Technologies",
    description:
      "Turning Ambitious Ideas Into Powerful Digital Products. Senior engineering leadership & scalable architectures.",
    images: ["/brayon-logo-showcase.png"],
  },
};

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.alternateNames,
    url: SITE_URL,
    logo: `${SITE_URL}/brayon-icon-square.png`,
    description: COMPANY_INFO.description,
    founder: {
      "@type": "Person",
      name: COMPANY_INFO.founder.name,
      jobTitle: COMPANY_INFO.founder.role,
      url: `${SITE_URL}/about#founder`,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_INFO.contact.phone,
      contactType: "customer service",
      email: COMPANY_INFO.contact.email,
      areaServed: ["IN", "US", "GB", "AU"],
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      COMPANY_INFO.social.github,
      COMPANY_INFO.social.githubRepo,
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.alternateNames,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: COMPANY_INFO.name,
    url: SITE_URL,
    image: `${SITE_URL}/brayon-logo-showcase.png`,
    telephone: COMPANY_INFO.contact.phone,
    email: COMPANY_INFO.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY_INFO.contact.address.locality,
      addressRegion: COMPANY_INFO.contact.address.region,
      addressCountry: COMPANY_INFO.contact.address.country,
    },
    areaServed: ["India", "United States", "United Kingdom", "International"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development & IT Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description: "Bespoke operational systems, database verification engines, and enterprise portals.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Application Development",
            description: "High-performance web applications built with Next.js, React, and TypeScript.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CRM & ERP Solutions",
            description: "Custom business operating systems unifying inventory, GST billing, and sales pipelines.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Development",
            description: "Sub-second B2B wholesale portals and D2C online storefronts.",
          },
        },
      ],
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
          text: "Cost depends strictly on complexity and feature scope. A focused business web portal starts from ₹35,000–₹75,000, custom web applications from ₹75,000–₹1,50,000, and full-scale CRM/ERP platforms from ₹1,50,000+. International projects range from $1,500 to $15,000+ USD. We provide fixed, milestone-based quotes with zero hidden surprises.",
        },
      },
      {
        "@type": "Question",
        name: "How long does custom software development take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A focused MVP or business portal typically takes 2 to 4 weeks. Full custom software or multi-role CRM/ERP systems generally require 4 to 8 weeks, delivered in weekly agile sprint demos.",
        },
      },
      {
        "@type": "Question",
        name: "How does source code ownership transfer work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upon milestone completion and settlement, 100% of the private Git repositories, cloud deployment credentials, database schemas, and intellectual property are officially transferred to your organization with zero vendor lock-in.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide post-launch support and maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every project includes a 30-day complimentary hypercare warranty covering bug fixes, server performance monitoring, and handover training. Extended ongoing maintenance packages are also available.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col selection:bg-blue-600/30 selection:text-white">
      {/* Structured Data Script Tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* SECTION 1 — PREMIUM NAVIGATION */}
      <Navbar />

      <main className="flex-grow">
        {/* SECTION 2 — HERO EXPERIENCE */}
        <HeroSection />

        {/* SECTION 3 — COMPANY INTRODUCTION */}
        <CompanyIntroSection />

        {/* SECTION 4 — SERVICES */}
        <ServicesSection />

        {/* SECTION 5 — FEATURED PROJECTS */}
        <FeaturedProjectsSection />

        {/* SECTION 6 — INDUSTRIES */}
        <IndustriesSection />

        {/* SECTION 7 — WHY BRAYON */}
        <WhyBrayonSection />

        {/* SECTION 8 — OUR DEVELOPMENT PROCESS */}
        <ProcessTimelineSection />

        {/* SECTION 9 — TECHNOLOGY EXPERTISE */}
        <TechExpertiseSection />

        {/* SECTION 10 — FOUNDER INTRODUCTION */}
        <FounderSection />

        {/* SECTION 11 — TESTIMONIALS */}
        <TestimonialsSection />

        {/* SECTION 12 — CONTACT / CONVERSION */}
        <HomeInquirySection />
      </main>

      {/* SECTION 13 — PREMIUM FOOTER */}
      <Footer />

      {/* Floating Instant WhatsApp Action */}
      <FloatingWhatsAppButton />
    </div>
  );
}