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
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development Company India | BRAYON Technologies",
  description:
    "Bespoke custom software development company in India. Partner directly with senior architects to engineer scalable web platforms, SaaS MVPs, and internal workflow tools with 100% IP ownership.",
  alternates: {
    canonical: "/custom-software-development",
  },
  openGraph: {
    title: "Custom Software Development Company India | BRAYON Technologies",
    description:
      "Enterprise custom software engineering. Modern architectures, 2-week sprint cycles, direct senior developer oversight, and 100% source code ownership.",
    url: `${SITE_URL}/custom-software-development`,
    siteName: COMPANY_INFO.name,
    type: "website",
    images: [
      {
        url: "/brayon-logo-showcase.png",
        width: 1200,
        height: 630,
        alt: "Custom Software Development Company India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company India | BRAYON Technologies",
    description:
      "Enterprise custom software engineering with direct senior technical oversight.",
    images: ["/brayon-logo-showcase.png"],
  },
};

const CUSTOM_SOFTWARE_CAPABILITIES = [
  {
    title: "Bespoke Web Applications & Portals",
    description:
      "Web applications tailored strictly to your company's operational processes, data models, and team approval hierarchies with sub-second page delivery.",
    icon: Code2,
  },
  {
    title: "SaaS MVP Development in 30 Days",
    description:
      "Fast-track your software idea from wireframes to a production-ready MVP with multi-tenancy, Stripe/Razorpay billing, and secure authentication.",
    icon: Zap,
  },
  {
    title: "Operational Tooling & Backoffices",
    description:
      "Replace fragile spreadsheets, WhatsApp coordination, and paper files with unified internal tools designed for high daily throughput.",
    icon: Layers,
  },
  {
    title: "Legacy System Modernization",
    description:
      "Audit, refactor, and migrate outdated systems (classic ASP, old PHP, VB) into modern cloud-native architectures with zero operational data loss.",
    icon: Cpu,
  },
  {
    title: "100% IP & Code Ownership",
    description:
      "Complete GitHub/GitLab repositories, database schemas, Docker files, and cloud deployment access are transferred upon delivery. Zero vendor lock-in.",
    icon: ShieldCheck,
  },
  {
    title: "Direct Senior Engineering Oversight",
    description:
      "Work directly with Solutions Architect Bajrangi Yadav. No junior account managers, no commission-driven sales pitches.",
    icon: Users,
  },
];

const FAQS = [
  {
    question: "When should a business invest in custom software instead of ready-made tools?",
    answer:
      "When off-the-shelf software forces your team to change how you work, charges steep per-user monthly subscription fees, or fragments your customer data across 5 different disconnected apps. Custom software gives you complete operational control, proprietary competitive advantage, and zero recurring seat license costs.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "A focused business portal or MVP starts from ₹75,000 to ₹1,50,000. Full-scale multi-department operational systems and SaaS platforms generally range from ₹1,50,000 to ₹4,00,000+. We operate on fixed milestone pricing with explicit deliverables and zero hidden extras.",
  },
  {
    question: "How long does custom software development take from kickoff to launch?",
    answer:
      "Most custom software MVPs and business portals are delivered in 3 to 6 weeks. We break projects into agile 1-to-2 week sprint milestones with live staging demos every 7 days so you see working software continually.",
  },
  {
    question: "What happens after the software goes live?",
    answer:
      "Every project includes 30 days of complimentary hypercare support and bug warranties. Following launch, we offer low-cost monthly maintenance retainers for continuous feature updates, security patches, and server monitoring.",
  },
];

export default function CustomSoftwareDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Software Development Services",
    serviceType: "Software Engineering",
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
      telephone: COMPANY_INFO.contact.phone,
      email: COMPANY_INFO.contact.email,
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    description:
      "Bespoke custom software development company in India engineering high-performance web platforms, SaaS applications, and business operational tools with 100% IP ownership.",
    url: `${SITE_URL}/custom-software-development`,
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
        name: "Custom Software Development",
        item: `${SITE_URL}/custom-software-development`,
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
                  { label: "Custom Software Development" },
                ]}
              />
            </div>
            <div className="max-w-3xl">
              <FadeUp delay={0.05}>
                <Eyebrow>ENTERPRISE FULL-STACK SOFTWARE</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mt-4 leading-tight">
                  Custom Software Development Company in India.
                </h1>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  Stop settling for rigid off-the-shelf software that doesn&apos;t fit your business. We engineer bespoke web applications, SaaS platforms, and operational tools built strictly around your workflow with 100% intellectual property ownership.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="pt-6 flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    href="/contact?service=Custom%20Software"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    Discuss Your Software Idea
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20am%20looking%20for%20custom%20software%20development.`}
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

        {/* Capabilities Grid */}
        <Section spacing="lg" borderBottom>
          <Container>
            <SectionHeading
              eyebrow="ENGINEERING ADVANTAGE"
              title="Software Tailored to How You Operate."
              description="Built to eliminate manual paperwork, automate repetitive workflows, and scale alongside your business revenue."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CUSTOM_SOFTWARE_CAPABILITIES.map((cap, idx) => {
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

        {/* Real Production Case Studies */}
        <Section variant="surface" spacing="lg" borderBottom>
          <Container>
            <SectionHeading
              eyebrow="PROVEN DELIVERIES"
              title="Verified Custom Systems Built by BRAYON."
              description="Real software architectures serving active operations every day."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-[#090f1d] border border-white/[0.08] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Delivered Operational Platform</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">DriveZone</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Custom automotive workshop platform featuring service bay allocation calendars, digital job cards, real-time vehicle repair status tracking, and parts inventory auto-deduction.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Digital inspection job cards with photo uploads</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Reduced workshop check-in turnaround by 40%</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <Link
                    href="/case-studies/drivezone"
                    className="text-xs font-mono text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-xs font-mono text-slate-500">Delivered Production System</span>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#090f1d] border border-white/[0.08] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Delivered B2B SaaS Platform</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">HR SaaS &amp; Payroll Platform</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Engineered a multi-tenant HR &amp; workforce management system with multi-level leave approvals, automated monthly payroll calculations, and batch PDF payslip generation.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Batch PDF payslip generation in under 15 minutes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Role-based access for Admins, Managers, and Employees</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <Link
                    href="/case-studies/hr-saas"
                    className="text-xs font-mono text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-xs font-mono text-slate-500">Delivered Production System</span>
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
              title="Custom Software FAQs"
              description="Common questions about scope, costs, intellectual property, and timelines."
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
                Have a Custom Software Idea?
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Connect directly with Founder &amp; Solutions Architect Bajrangi Yadav. We will help you turn your operational requirements into a clean, scalable digital product.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact?service=Custom%20Software"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Request Architecture Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20have%20a%20custom%20software%20project%20idea.`}
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
