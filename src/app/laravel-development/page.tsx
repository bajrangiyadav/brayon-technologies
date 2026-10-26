import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import Eyebrow from "@/components/common/Eyebrow";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FloatingWhatsAppButton from "@/components/common/FloatingWhatsAppButton";
import FadeUp from "@/components/animations/FadeUp";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { SITE_URL, COMPANY_INFO } from "@/utils/siteConfig";
import {
  Server,
  Database,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Laravel Development Company in Mumbai & India | BRAYON Technologies",
  description:
    "Enterprise Laravel development company in Mumbai & India. We engineer high-performance web applications, custom REST APIs, queued worker backends, and scalable databases with 100% code ownership.",
  alternates: {
    canonical: "/laravel-development",
  },
  openGraph: {
    title: "Laravel Development Company in Mumbai & India | BRAYON Technologies",
    description:
      "Enterprise Laravel engineering partner. High-throughput backend systems, secure APIs, and relational architectures built directly by senior engineers.",
    url: `${SITE_URL}/laravel-development`,
    siteName: COMPANY_INFO.name,
    type: "website",
    images: [
      {
        url: "/brayon-logo-showcase.png",
        width: 1200,
        height: 630,
        alt: "Enterprise Laravel Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laravel Development Company in Mumbai & India | BRAYON Technologies",
    description:
      "Enterprise Laravel web applications, REST APIs, and database engineering.",
    images: ["/brayon-logo-showcase.png"],
  },
};

const LARAVEL_CAPABILITIES = [
  {
    title: "Custom Enterprise Web Applications",
    description:
      "Bespoke business platforms designed to handle complex workflows, multi-tenant architectures, and role-based operational permissions with rock-solid stability.",
    icon: Server,
  },
  {
    title: "High-Throughput RESTful APIs",
    description:
      "Engineered with sub-100ms response times, JWT/Sanctum authentication, strict rate limiting, parameter validation, and comprehensive OpenAPI documentation.",
    icon: Zap,
  },
  {
    title: "Asynchronous Queue & Worker Pipelines",
    description:
      "Background job processing utilizing Redis and Laravel Horizon for high-volume invoice generation, transactional SMS/email dispatch, and real-time syncing.",
    icon: Layers,
  },
  {
    title: "Relational Database Schema Design",
    description:
      "ACID-compliant MySQL and PostgreSQL data modeling, foreign key integrity, query indexing, and automated zero-downtime migration scripts.",
    icon: Database,
  },
  {
    title: "Legacy PHP to Modern Laravel Migration",
    description:
      "Refactoring outdated PHP 5.x/7.x scripts or spaghetti code into clean, testable Laravel 11/12 architecture with 100% data preservation.",
    icon: Cpu,
  },
  {
    title: "Security Hardening & RBAC Governance",
    description:
      "CSRF protection, SQL injection prevention, strict Content Security Policies, and granular Role-Based Access Control for sensitive business records.",
    icon: Shield,
  },
];

const FAQS = [
  {
    question: "Why should a business choose Laravel over other backend frameworks?",
    answer:
      "Laravel provides an exceptional balance of development speed, architectural discipline, and enterprise scalability. Its built-in authentication, database migrations, queue management, and ORM (Eloquent) allow us to build secure, robust software faster without reinventing foundational boilerplate.",
  },
  {
    question: "How do you ensure high performance and sub-second response times in Laravel?",
    answer:
      "We avoid N+1 query traps with eager loading, index relational database columns systematically, implement Redis in-memory caching for repetitive database reads, and offload CPU-intensive tasks (like PDF generation and notification dispatch) to asynchronous queue workers.",
  },
  {
    question: "Can you take over or modernize an existing Laravel or PHP project?",
    answer:
      "Yes. We conduct a thorough architectural audit of your existing codebase, isolate bottlenecks, patch vulnerabilities, upgrade PHP/Laravel versions, and implement modular features without disrupting active daily operations.",
  },
  {
    question: "How does intellectual property and code ownership work?",
    answer:
      "Upon milestone delivery and settlement, 100% of the private Git repositories, deployment configurations, database schemas, and intellectual property are transferred directly to your organization. We never enforce vendor lock-in.",
  },
];

export default function LaravelDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enterprise Laravel Development Services",
    serviceType: "Web & API Development",
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
      telephone: COMPANY_INFO.contact.phone,
      email: COMPANY_INFO.contact.email,
    },
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    description:
      "Enterprise Laravel development company engineering custom web applications, REST APIs, and high-performance database architectures with 100% code ownership.",
    url: `${SITE_URL}/laravel-development`,
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Laravel Development",
        item: `${SITE_URL}/laravel-development`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b border-white/[0.08] relative">
          <Container>
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Services", href: "/services" },
                  { label: "Laravel Development" },
                ]}
              />
            </div>
            <div className="max-w-3xl">
              <FadeUp delay={0.05}>
                <Eyebrow>ENTERPRISE BACKEND &amp; API ENGINEERING</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mt-4 leading-tight">
                  Enterprise Laravel Development Company in India.
                </h1>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  We engineer resilient, sub-second web applications, robust REST APIs, and transactional database systems in Laravel. Built directly under senior engineering leadership with zero agency middlemen and 100% intellectual property ownership.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="pt-6 flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    href="/contact?service=Laravel%20Development"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    Discuss Your Laravel Project
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20am%20looking%20for%20an%20enterprise%20Laravel%20developer.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    iconLeft={<WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />}
                  >
                    Chat on WhatsApp
                  </Button>
                </div>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* Core Capabilities */}
        <Section spacing="lg" borderBottom>
          <Container>
            <SectionHeading
              eyebrow="ENGINEERING CAPABILITIES"
              title="What We Engineer With Laravel."
              description="From high-concurrency APIs to complete institutional ERP portals, we apply strict architecture standards to every line of code."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LARAVEL_CAPABILITIES.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <FadeUp key={cap.title} delay={0.05 * idx}>
                    <Card variant="interactive" padding="md" className="h-full flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{cap.title}</h3>
                        <p className="text-sm text-slate-300 leading-relaxed">{cap.description}</p>
                      </div>
                    </Card>
                  </FadeUp>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Real Production Proof */}
        <Section variant="surface" spacing="lg" borderBottom>
          <Container>
            <SectionHeading
              eyebrow="PROVEN IN PRODUCTION"
              title="Verified High-Volume Deployments."
              description="Real software serving thousands of concurrent users with zero downtime."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-[#090f1d] border border-white/[0.08] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Live Institutional Platform</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Jay Balaji Computer Education (JBCE)
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Architected centralized student lifecycle management, course administration, franchise center approvals, and an instant online roll-number certificate verification engine that eliminated document forgery.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Tamper-proof online certificate verification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Multi-branch franchise inquiry funnels</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <Link
                    href="/case-studies/jbce"
                    className="text-xs font-mono text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="https://jbce.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-400 hover:text-white"
                  >
                    jbce.in &rarr;
                  </a>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#090f1d] border border-white/[0.08] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Examination Portal &amp; High Traffic</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Mumbai Hindi Vidyapeeth (MHVP)
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Built a high-concurrency student examination query engine capable of serving thousands of simultaneous requests during annual results announcements with zero server crashes.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Zero-downtime during peak result traffic surges</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>100+ affiliated center administration workflows</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <Link
                    href="/case-studies/mhvp"
                    className="text-xs font-mono text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="https://mhvp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-400 hover:text-white"
                  >
                    mhvp.org &rarr;
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQs */}
        <Section spacing="lg" borderBottom>
          <Container>
            <SectionHeading
              eyebrow="FREQUENTLY ASKED QUESTIONS"
              title="Laravel Development FAQs"
              description="Everything you need to know about partnering with BRAYON Technologies on Laravel engineering."
            />

            <div className="max-w-3xl mx-auto space-y-4">
              {FAQS.map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 rounded-2xl bg-[#090e1b] border border-white/[0.08]"
                >
                  <h4 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Project Inquiry CTA */}
        <Section spacing="xl">
          <Container>
            <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-[#0e162a] to-[#090d18] border border-blue-500/20 text-center max-w-3xl mx-auto space-y-6 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Ready to Build Your Laravel Platform?
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Receive an architectural review and fixed milestone quote within 24 hours. Speak directly with Founder &amp; Solutions Architect Bajrangi Yadav.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact?service=Laravel%20Development"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Request Architecture Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20have%20a%20Laravel%20project%20requirement.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  iconLeft={<WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />}
                >
                  Instant WhatsApp Chat
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
