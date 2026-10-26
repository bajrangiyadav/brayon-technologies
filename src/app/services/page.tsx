import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Eyebrow from "@/components/common/Eyebrow";
import Button from "@/components/common/Button";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FadeUp from "@/components/animations/FadeUp";
import { SITE_URL, COMPANY_INFO } from "@/utils/siteConfig";
import {
  Cpu,
  Globe,
  ShoppingCart,
  Smartphone,
  Server,
  Cloud,
  Layers,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering & Software Development Services | BRAYON Technologies",
  description:
    "Explore BRAYON Technologies' software engineering services: Custom Software Development, Enterprise Laravel, E-Commerce Platforms, Custom CRM/ERP Systems, React Native Mobile Apps, and AI Automation.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Engineering & Software Development Services | BRAYON Technologies",
    description:
      "Production-ready web applications, Laravel backends, and custom CRM/ERP architectures engineered with senior discipline and 100% IP ownership.",
    url: `${SITE_URL}/services`,
    siteName: COMPANY_INFO.name,
    type: "website",
    images: [
      {
        url: "/brayon-logo-showcase.png",
        width: 1200,
        height: 630,
        alt: "BRAYON Technologies - Engineering Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering & Software Development Services | BRAYON Technologies",
    description: "Production-ready software platforms engineered with senior discipline.",
    images: ["/brayon-logo-showcase.png"],
  },
};

const DETAILED_SERVICES = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    icon: Globe,
    category: "FULL-STACK PLATFORMS",
    landingPageUrl: "/custom-software-development",
    description:
      "We engineer responsive, sub-second web platforms, multi-tenant SaaS products, and customer portals using modern server components, strict TypeScript typing, and optimized database indexing.",
    capabilities: [
      "Custom business portals and transactional web platforms",
      "High-density administrative backoffices and management consoles",
      "Real-time analytics and telemetry dashboards",
      "SaaS MVPs engineered for rapid customer validation in 30 days",
      "Edge-rendered architectures with 95+ Core Web Vitals",
      "Role-based authentication with granular permissions",
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
  {
    id: "laravel-development",
    title: "Enterprise Laravel & API Engineering",
    icon: Server,
    category: "ENTERPRISE BACKEND",
    landingPageUrl: "/laravel-development",
    description:
      "Robust, high-throughput PHP/Laravel backend architectures, RESTful APIs, and relational database systems designed for mission-critical institutional operations.",
    capabilities: [
      "Enterprise Laravel 11/12 application development",
      "High-concurrency RESTful API endpoints with sub-100ms response",
      "Redis caching, queued jobs, and asynchronous worker orchestration",
      "Secure authentication (Sanctum/Passport) & RBAC authorization",
      "Payment gateway integrations with automated webhook verification",
      "Seamless database migrations and legacy PHP modernization",
    ],
    techStack: ["Laravel", "PHP 8+", "MySQL", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Systems & Storefronts",
    icon: ShoppingCart,
    category: "TRANSACTIONAL COMMERCE",
    landingPageUrl: "/ecommerce-development",
    description:
      "High-conversion commerce infrastructure for wholesale (B2B) and direct-to-consumer (D2C) brands, supporting high order concurrency with zero inventory overselling.",
    capabilities: [
      "B2B commodity trading and bulk wholesale portals",
      "High-speed D2C storefronts with instant variant switching",
      "Payment gateway architectures (Razorpay, Stripe, NetBanking, UPI)",
      "Real-time inventory reservation and lock management",
      "Automated tax calculation, invoice dispatch, and shipping tracking",
      "Custom discount matrices and tiered pricing structures",
    ],
    techStack: ["Laravel", "Next.js", "MySQL", "Redis", "Razorpay API", "Tailwind CSS"],
  },
  {
    id: "crm-erp",
    title: "Custom CRM & ERP Software",
    icon: Layers,
    category: "SYSTEMS & GOVERNANCE",
    landingPageUrl: "/crm-erp-development",
    description:
      "We replace fragile spreadsheets and disjointed tools with tailored enterprise platforms engineered for multi-department workflows, data governance, and role security.",
    capabilities: [
      "Role-Based Access Control (RBAC) with immutable audit logs",
      "Multi-branch and multi-warehouse operational software",
      "Custom internal workflow, approval engines, and pipeline trackers",
      "Automated GST-compliant invoicing, billing, and reconciliation",
      "Legacy system modernization and zero-data-loss migration",
      "Enterprise database schema design and B-tree optimization",
    ],
    techStack: ["Laravel", "Next.js", "PostgreSQL", "MySQL", "Docker", "Redis"],
  },
  {
    id: "mobile-apps",
    title: "Cross-Platform Mobile Applications",
    icon: Smartphone,
    category: "MOBILE APPS",
    landingPageUrl: "/mobile-app-development",
    description:
      "Native-performance iOS and Android applications tailored for field operations, on-demand driver dispatch, and customer mobile commerce.",
    capabilities: [
      "Real-time driver dispatch and mobility platforms",
      "Customer-facing mobile storefronts and booking flows",
      "Biometric security and persistent offline cache sync",
      "Push notification systems via Firebase Cloud Messaging",
      "Integrated map routing and live GPS location tracking",
      "Modular design systems shared across platforms",
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Firebase / FCM", "Google Maps SDK"],
  },
  {
    id: "ai-automation",
    title: "AI Engineering & Workflow Automation",
    icon: Cpu,
    category: "INTELLIGENCE & WORKFLOWS",
    landingPageUrl: "/brayon-ai",
    description:
      "We design and deploy practical AI solutions that automate high-friction operational workflows, parse complex unstructured documents, and handle conversational voice inquiries.",
    capabilities: [
      "Autonomous AI agents with tool-calling capabilities",
      "Custom LLM API integrations and fine-tuned system prompts",
      "Real-time voice AI bots with Twilio and WebSocket streaming",
      "Intelligent document extraction and structured parsing",
      "Event-driven business automation pipelines",
      "Automated customer support routing and triage",
    ],
    techStack: ["OpenAI / Anthropic", "Node.js", "Python", "Twilio", "WebSockets", "MongoDB"],
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    icon: Cloud,
    category: "INFRASTRUCTURE & RELIABILITY",
    landingPageUrl: "/technology",
    description:
      "We architect secure, scalable cloud environments with automated continuous deployment pipelines, active server telemetry, and rock-solid uptime guarantees.",
    capabilities: [
      "Automated zero-downtime CI/CD deployment pipelines",
      "AWS / Linux server configuration and hardening",
      "Database indexing, connection pooling, and replication",
      "Real-time application performance monitoring (APM)",
      "Automated daily encrypted database backups",
      "SSL, CORS, and security header compliance",
    ],
    techStack: ["AWS (EC2, RDS, S3)", "Docker", "Linux", "GitHub Actions", "Vercel"],
  },
];

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Software Engineering Services",
    description: "Full-stack software engineering and architecture capabilities provided by BRAYON Technologies.",
    url: `${SITE_URL}/services`,
    itemListElement: DETAILED_SERVICES.map((service, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${SITE_URL}${service.landingPageUrl}`,
        provider: {
          "@type": "Organization",
          name: COMPANY_INFO.name,
          url: SITE_URL,
        },
      },
    })),
  };

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
        name: "Services",
        item: `${SITE_URL}/services`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Header */}
        <section className="py-16 md:py-24 border-b border-white/[0.08] relative">
          <Container>
            <div className="mb-6">
              <Breadcrumbs items={[{ label: "Services" }]} />
            </div>
            <div className="max-w-3xl">
              <FadeUp delay={0.05}>
                <Eyebrow>BRAYON TECHNOLOGIES · ENGINEERING SERVICES</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mt-4 leading-tight">
                  Comprehensive Software Engineering Capabilities.
                </h1>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  We specialize in building scalable digital products, high-throughput backend systems, custom CRM &amp; ERP software, and high-conversion e-commerce portals. Every engagement is delivered with direct senior engineering oversight and 100% code ownership.
                </p>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* Detailed Service Blocks */}
        <Section spacing="lg">
          <Container>
            <div className="space-y-12">
              {DETAILED_SERVICES.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="p-8 sm:p-10 rounded-3xl bg-[#0d1322] border border-white/[0.08] scroll-mt-28"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                      {/* Left: Summary */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                        </div>

                        <div className="text-xs font-mono tracking-wider uppercase text-blue-400">
                          {service.category}
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                          {service.title}
                        </h2>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="pt-4">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                            PRIMARY TECHNOLOGIES
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {service.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 flex flex-wrap items-center gap-3">
                          {service.landingPageUrl && (
                            <Link
                              href={service.landingPageUrl}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono transition-colors shadow-sm"
                            >
                              <span>Explore Dedicated Guide</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            href={`/contact?service=${encodeURIComponent(service.title)}`}
                          >
                            Inquire Now
                          </Button>
                        </div>
                      </div>

                      {/* Right: Core Capabilities Checklist */}
                      <div className="lg:col-span-7 bg-[#090e1b] rounded-2xl p-6 sm:p-8 border border-white/[0.06] flex flex-col justify-between">
                        <div>
                          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-5">
                            ENGINEERING CAPABILITIES &amp; DELIVERABLES
                          </h3>
                          <ul className="space-y-3.5">
                            {service.capabilities.map((cap) => (
                              <li key={cap} className="flex items-start gap-3 text-sm text-slate-200">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span className="leading-snug">{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500">
                          <span>CODE OWNERSHIP: 100% INCLUDED</span>
                          <span>PRODUCTION READY</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Global CTA */}
        <Section spacing="lg" borderTop>
          <Container>
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0d1322] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-left">
                <h3 className="text-2xl font-semibold text-white">
                  Need a custom engineering solution?
                </h3>
                <p className="text-sm text-slate-400 max-w-lg">
                  Discuss your project scope directly with Founder &amp; Solutions Architect Bajrangi Yadav. 3-hour response guarantee on all technical inquiries.
                </p>
              </div>
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                iconRight={<ArrowRight className="w-4 h-4" />}
                className="shrink-0"
              >
                Request Architecture Consultation
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
