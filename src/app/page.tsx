import React from "react";
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "BRAYON Technologies | Custom Software, Web & Cloud Engineering",
  description:
    "We engineer high-performance web applications, Next.js SaaS portals, enterprise ERPs, and custom e-commerce platforms. Partner directly with Technology Lead Bajrangi Yadav. 100% code ownership & 90+ PageSpeed guarantee.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BRAYON Technologies | Custom Software, Web & Cloud Engineering",
    description:
      "Looking for a serious technology partner? We engineer high-performance web applications, Next.js SaaS portals, enterprise ERPs, and cloud automation.",
    url: "https://brayontech.com",
    siteName: "BRAYON Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brayon-logo-showcase.png",
        width: 1024,
        height: 512,
        alt: "BRAYON Technologies - Technology. Innovation. Beyond.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRAYON Technologies | Custom Software, Web & Cloud Engineering",
    description:
      "Enterprise software development, modern web applications, high-performance cloud systems, and custom business automation.",
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
    potentialAction: {
      "@type": "SearchAction",
      target: "https://brayontech.com/work?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
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
        name: "How much does custom software or an MVP cost at BRAYON Technologies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our transparent packages start at ₹35,000 ($550) for a modern 5-page web foundation. Startup MVPs typically range between ₹1,50,000 and ₹3,50,000 ($2,000 – $4,500), while comprehensive enterprise ERPs start at ₹2,50,000 ($3,500+). We operate strictly on milestone-based payments with zero hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can BRAYON Technologies launch our web platform or MVP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Starter web projects are delivered in 7–10 business days. Full-stack startup MVPs are delivered in 30 days through two-week agile sprint cycles. Enterprise custom ERPs take between 6 to 10 weeks with weekly staging demos.",
        },
      },
      {
        "@type": "Question",
        name: "Do we get 100% ownership of the source code and intellectual property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Upon completion of milestone payments, BRAYON Technologies transfers 100% worldwide intellectual property (IP), copyright, and GitHub source code repository ownership to your company, protected by our standard Master Services Agreement (MSA).",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does BRAYON Technologies specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialize in modern, high-performance technologies: Next.js 16, React 19, Vue.js, Laravel, Node.js, TypeScript, PostgreSQL, Redis, Tailwind CSS, Docker, AWS Cloud, and React Native for mobile applications.",
        },
      },
      {
        "@type": "Question",
        name: "What is BRAYON's payment milestone structure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We never ask for 100% upfront or accept risky post-completion terms. Standard projects operate on a 50% advance to initiate architecture and 50% upon User Acceptance Testing (UAT) sign-off. Enterprise projects follow a 30% Advance / 30% Alpha Demo / 30% Beta Review / 10% Production Deployment schedule.",
        },
      },
      {
        "@type": "Question",
        name: "How does the free 15-minute architecture audit work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You share your current website or software requirements. Founder & Technology Lead Bajrangi Yadav conducts a 5-point technical inspection (Core Web Vitals, mobile UX, API speed, security headers, and conversion bottlenecks) and delivers an actionable 1-page PDF report within 24 hours with zero sales pressure.",
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
      <HomeClient />
    </>
  );
}
