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
  Palette,
  Database,
  Bot,
  Lock,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Software Development Services & Solutions | BRAYON Technologies",
  description:
    "Explore BRAYON Technologies' software engineering services: Custom Software Development, Web Applications, CRM & ERP Solutions, E-Commerce, Mobile Apps, AI Automation, API Integration, and UI/UX Design.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Software Development Services & Solutions | BRAYON Technologies",
    description:
      "Production-ready software platforms, custom CRM/ERP architectures, and mobile apps engineered with senior discipline and 100% IP ownership.",
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
    title: "Software Development Services & Solutions | BRAYON Technologies",
    description: "Production-ready software platforms engineered with senior discipline.",
    images: ["/brayon-logo-showcase.png"],
  },
};

const DETAILED_SERVICES = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    icon: Globe,
    category: "FLAGSHIP ENGINEERING",
    landingPageUrl: "/services/custom-software-development",
    description:
      "We engineer responsive, sub-second web platforms, multi-tenant SaaS products, and customer portals using modern server components, strict TypeScript typing, and optimized database indexing.",
    capabilities: [
      "Custom business portals and transactional web platforms",
      "High-density administrative backoffices and management consoles",
      "Sub-second document & certificate verification engines",
      "SaaS MVPs engineered for rapid customer validation in 30 days",
      "Edge-rendered architectures with 95+ Core Web Vitals",
      "Role-based authentication with granular permissions",
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
  {
    id: "web-app",
    title: "Web Application Development",
    icon: Server,
    category: "CLOUD APPLICATIONS",
    landingPageUrl: "/services/web-application-development",
    description:
      "High-throughput web applications and cloud portals engineered for zero layout shift, seamless responsiveness, and high concurrent transaction loads.",
    capabilities: [
      "Modern Next.js & React single-page and server-rendered platforms",
      "Real-time WebSocket data synchronization and state management",
      "Deterministic REST and GraphQL API integration",
      "Comprehensive error boundaries and automated test suites",
      "Sub-second edge caching and global CDN distribution",
      "Built-in technical SEO and structured data schema",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    id: "crm-development",
    title: "CRM & ERP Solutions",
    icon: Layers,
    category: "ENTERPRISE OPERATIONS",
    landingPageUrl: "/services/crm-development",
    description:
      "We replace fragile spreadsheets and disjointed tools with tailored enterprise platforms engineered for multi-department workflows, data governance, and role security.",
    capabilities: [
      "Role-Based Access Control (RBAC) with immutable audit logs",
      "Multi-branch and multi-warehouse operational software",
      "Custom internal workflow, approval engines, and pipeline trackers",
      "Automated GST-compliant invoicing, billing, and reconciliation",
      "Automated WhatsApp lead capture and CRM pipeline routing",
      "Enterprise database schema design and B-tree optimization",
    ],
    techStack: ["Laravel", "Next.js", "PostgreSQL", "MySQL", "Docker", "Redis"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Systems & Storefronts",
    icon: ShoppingCart,
    category: "TRANSACTIONAL COMMERCE",
    landingPageUrl: "/services/ecommerce-development",
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
    id: "mobile-apps",
    title: "Mobile Application Development",
    icon: Smartphone,
    category: "MOBILE APPS",
    landingPageUrl: "/services/mobile-app-development",
    description:
      "Native-performance iOS and Android applications tailored for field operations, customer self-service, on-demand dispatch, and mobile commerce.",
    capabilities: [
      "Cross-platform React Native and Flutter mobile applications",
      "Real-time driver dispatch and mobility platforms",
      "Offline-first SQLite architecture with background synchronization",
      "Push notification systems via Firebase Cloud Messaging",
      "Integrated map routing and live GPS location tracking",
      "In-app digital payment checkout and invoice downloads",
    ],
    techStack: ["React Native", "Flutter", "TypeScript", "Firebase / FCM", "Google Maps SDK"],
  },
  {
    id: "ai-automation",
    title: "AI & Business Automation",
    icon: Bot,
    category: "INTELLIGENCE & WORKFLOWS",
    landingPageUrl: "/services/ai-automation",
    description:
      "We design and deploy practical AI solutions that automate high-friction operational workflows, parse complex unstructured documents, and handle conversational WhatsApp inquiries.",
    capabilities: [
      "Autonomous WhatsApp Business copilots with database query tools",
      "Intelligent PDF invoice and document parsing pipelines",
      "24/7 automated lead qualification and CRM ingestion",
      "Zero-hallucination Retrieval-Augmented Generation (RAG)",
      "Event-driven business webhook automation pipelines",
      "Automated customer support ticket triage and routing",
    ],
    techStack: ["OpenAI / Claude", "Node.js", "Python", "WhatsApp Cloud API", "PostgreSQL", "Redis"],
  },
  {
    id: "api-development",
    title: "API Development & Integration",
    icon: Cpu,
    category: "BACKEND ARCHITECTURE",
    landingPageUrl: "/services/api-development",
    description:
      "Deterministic, well-documented RESTful and GraphQL APIs engineered for high concurrency, strict input validation, webhook reliability, and third-party gateway bridges.",
    capabilities: [
      "Enterprise RESTful and GraphQL microservice endpoints",
      "Session security, JWT tokens, and OAuth2 authorization",
      "Payment gateway, SMS, and transactional mail bridges",
      "HMAC-signed webhook dispatch and verification systems",
      "Rate-limiting, anti-scraping, and connection pooling",
      "Interactive OpenAPI / Swagger documentation for developers",
    ],
    techStack: ["Laravel", "Node.js", "PHP", "TypeScript", "MySQL / PostgreSQL", "Redis"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design & Prototyping",
    icon: Palette,
    category: "PRODUCT DESIGN",
    landingPageUrl: "/services/ui-ux-design",
    description:
      "User-centered digital interfaces designed to maximize conversion, eliminate cognitive friction, and establish an authoritative, unmistakable visual identity for your brand.",
    capabilities: [
      "Interactive wireframing and clickable Figma prototypes",
      "Comprehensive design systems and token architecture",
      "Conversion Rate Optimization (CRO) funnel design",
      "High-density administrative dashboard user experience",
      "WCAG 2.1 AAA accessibility and responsive testing",
      "Complete design asset handover for developer teams",
    ],
    techStack: ["Figma", "Tailwind CSS", "Design Tokens", "Auto Layout", "WCAG AAA"],
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
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col">
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
        {/* Header Hero */}
        <section className="py-16 md:py-24 border-b border-white/[0.08] relative overflow-hidden bg-gradient-to-b from-[#080d1a] to-[#060913]">
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/[0.05] rounded-full blur-[140px] pointer-events-none" />

          <Container className="relative z-10">
            <div className="mb-6 text-left">
              <Breadcrumbs items={[{ label: "Services" }]} />
            </div>

            <div className="max-w-3xl text-left space-y-4">
              <FadeUp delay={0.05}>
                <Eyebrow>COMPREHENSIVE ENGINEERING CAPABILITIES</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                  Solutions Designed Around Your Business.
                </h1>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  We don&apos;t build generic websites. We design, architect, and deploy high-performance software platforms, transactional commerce, and custom business systems engineered for long-term operational impact.
                </p>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* Services Showcase Cards */}
        <Section spacing="lg" borderBottom className="bg-[#050813]">
          <Container>
            <div className="space-y-8">
              {DETAILED_SERVICES.map((service, index) => {
                const Icon = service.icon;

                return (
                  <FadeUp key={service.id} delay={0.1}>
                    <div className="rounded-3xl bg-[#090f1f] border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 p-8 sm:p-10 text-left shadow-xl shadow-blue-950/20 group">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Service Info */}
                        <div className="lg:col-span-7 space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="font-mono text-xs text-blue-400 uppercase tracking-wider font-semibold">
                              {service.category}
                            </span>
                          </div>

                          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                            {service.title}
                          </h2>

                          <p className="text-sm text-slate-300 leading-relaxed font-normal">
                            {service.description}
                          </p>

                          {/* Capabilities Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                            {service.capabilities.map((cap) => (
                              <div
                                key={cap}
                                className="flex items-start gap-2 text-xs text-slate-300 font-normal"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{cap}</span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-4 flex items-center gap-4">
                            <Link
                              href={service.landingPageUrl}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono transition-all group/btn"
                            >
                              <span>Explore Detailed Service</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>

                        {/* Tech Stack Specs Box */}
                        <div className="lg:col-span-5 self-center">
                          <div className="p-5 rounded-2xl bg-[#060913] border border-white/[0.08] space-y-3 font-mono text-xs">
                            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] text-slate-400">
                              <span className="text-[11px] uppercase tracking-wider text-blue-400 font-semibold">
                                Architecture Specs
                              </span>
                              <span className="text-emerald-400 text-[10px]">Production Stack</span>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {service.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] text-slate-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                              <span>Code Ownership:</span>
                              <span className="text-emerald-400 font-semibold">100% Client Transfer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Global Conversion Callout */}
        <Section spacing="lg" className="bg-[#060a16]">
          <Container>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0c1428] via-[#091022] to-[#0c1428] border border-blue-500/30 text-center space-y-5 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Not Sure Which Architecture Fits Your Workflow?
              </h2>
              <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                Consult directly with senior solutions architect Bajrangi Yadav. We will audit your current setup and provide a free 30-minute technical roadmap.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Button variant="primary" size="lg" href="/contact">
                  Start Your Consultation
                </Button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20would%20like%20to%20discuss%20which%20software%20architecture%20best%20fits%20my%20business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 font-mono text-xs transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp +91 73851 21432</span>
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}