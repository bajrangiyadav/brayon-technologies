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
  Building2,
  Package,
  Receipt,
  Users,
  Shield,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom CRM & ERP Software Development Company India | BRAYON Technologies",
  description:
    "Custom CRM and ERP software development in India. Eliminate spreadsheets with centralized multi-branch operational platforms, inventory tracking, role-based security, and automated GST billing.",
  alternates: {
    canonical: "/crm-erp-development",
  },
  openGraph: {
    title: "Custom CRM & ERP Software Development Company India | BRAYON Technologies",
    description:
      "Enterprise CRM & ERP software engineered for multi-branch operations, real-time inventory control, and automated billing with 100% IP ownership.",
    url: `${SITE_URL}/crm-erp-development`,
    siteName: COMPANY_INFO.name,
    type: "website",
    images: [
      {
        url: "/brayon-logo-showcase.png",
        width: 1200,
        height: 630,
        alt: "Custom CRM and ERP Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom CRM & ERP Software Development Company India | BRAYON Technologies",
    description:
      "Custom CRM and ERP software engineered for growing enterprises.",
    images: ["/brayon-logo-showcase.png"],
  },
};

const CRM_ERP_CAPABILITIES = [
  {
    title: "Multi-Branch & Center Operations",
    description:
      "Unified dashboards connecting regional branch locations, warehouse hubs, or franchisee centers with centralized data oversight.",
    icon: Building2,
  },
  {
    title: "Real-Time Inventory & Stock Management",
    description:
      "Batch tracking, barcode/QR code lookup, automated low-stock reorder thresholds, and multi-location warehouse reconciliation.",
    icon: Package,
  },
  {
    title: "Automated GST Invoicing & Billing",
    description:
      "Dynamic PDF generation, automated GST tax calculations, vendor credit ledgers, and automated payment status tracking.",
    icon: Receipt,
  },
  {
    title: "Sales Pipeline & Kanban Lead Tracking",
    description:
      "Custom lead funnels capturing inquiries from web and WhatsApp, automated agent assignments, follow-up alerts, and deal stage metrics.",
    icon: Users,
  },
  {
    title: "Role-Based Access Control (RBAC)",
    description:
      "Granular permissions for Super Admins, Branch Managers, Accountants, and Staff with immutable audit trails recording all actions.",
    icon: Shield,
  },
  {
    title: "Legacy Data Migration & Integration",
    description:
      "Safe, zero-data-loss extraction from Excel workbooks, Tally, or outdated legacy databases into a clean relational schema.",
    icon: Database,
  },
];

const FAQS = [
  {
    question: "Why should we build a custom CRM/ERP instead of using Zoho or Salesforce?",
    answer:
      "Off-the-shelf platforms charge heavy recurring monthly fees per user (often tens of thousands of rupees monthly for a growing team) while restricting customizations to their rigid templates. A custom BRAYON system has zero recurring seat licenses, is built 100% around your exact operational workflows, and remains your proprietary asset forever.",
  },
  {
    question: "Can you migrate our existing Excel sheets and paper records safely?",
    answer:
      "Yes. We design structured data mapping scripts that clean, normalize, and validate your historical spreadsheet records before importing them into your new relational database with zero data loss.",
  },
  {
    question: "How long does it take to develop a custom ERP or CRM system?",
    answer:
      "A core operational MVP typically takes 4 to 6 weeks. Complete multi-branch ERP platforms with inventory, GST billing, and multi-role dashboards take 6 to 10 weeks, delivered in weekly milestone demos.",
  },
  {
    question: "How do you ensure data security and prevent employee data theft?",
    answer:
      "We enforce strict Role-Based Access Control (RBAC). Branch managers and staff only see the data their role permits, export buttons are permission-gated, and an immutable audit log records who accessed or edited records at any time.",
  },
];

export default function CrmErpDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom CRM & ERP Software Development",
    serviceType: "Enterprise Software",
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
      "Custom CRM and ERP software development company in India engineering multi-branch business management platforms, inventory control, and automated GST billing with 100% code ownership.",
    url: `${SITE_URL}/crm-erp-development`,
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
        name: "CRM & ERP Development",
        item: `${SITE_URL}/crm-erp-development`,
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
                  { label: "CRM & ERP Development" },
                ]}
              />
            </div>
            <div className="max-w-3xl">
              <FadeUp delay={0.05}>
                <Eyebrow>ENTERPRISE OPERATIONS &amp; GOVERNANCE</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mt-4 leading-tight">
                  Custom CRM &amp; ERP Software Development for Growing Enterprises.
                </h1>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  Eliminate fragmented spreadsheets, lost sales leads, and manual paperwork. We design and build bespoke CRM and ERP platforms tailored to your company&apos;s exact operational workflows, user roles, and business goals.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="pt-6 flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    href="/contact?service=CRM%20%2F%20ERP%20Development"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    Discuss Your CRM / ERP Scope
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20want%20to%20discuss%20custom%20CRM/ERP%20software.`}
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
              eyebrow="SYSTEM MODULES"
              title="Tailored Modules Built Around Your Operations."
              description="Unified dashboards that give leadership 360-degree visibility while keeping daily team operations fast and simple."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CRM_ERP_CAPABILITIES.map((cap, idx) => {
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
              eyebrow="PROVEN SCALE"
              title="Operational Platforms Engineered by BRAYON."
              description="Real systems handling daily institutional and business operations."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-[#090f1d] border border-white/[0.08] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Multi-Center Institutional ERP</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Mumbai Hindi Vidyapeeth (MHVP)
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Unified 100+ examination centers across Maharashtra into a centralized portal for candidate registration, examination hall ticketing, and high-concurrency results publication.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Role-based portal for center directors and administrators</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Zero data discrepancy across thousands of historical records</span>
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

              <div className="p-8 rounded-3xl bg-[#090f1d] border border-white/[0.08] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Wholesale Order Pipeline</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">SafeGrowTrade</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Custom wholesale order and customer pipeline replacing fragmented manual spreadsheets with real-time order status tracking, stock reconciliation, and payment status ledgers.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Saved 15+ hours of manual paperwork per week</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Automated GST invoice generation on order settlement</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <Link
                    href="/case-studies/safegrowtrade"
                    className="text-xs font-mono text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="https://safegrowtrade.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-400 hover:text-white"
                  >
                    safegrowtrade.com &rarr;
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
              title="CRM &amp; ERP Development FAQs"
              description="Clear answers regarding data ownership, migrations, and development timelines."
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
                Ready to Modernize Your Operations?
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Schedule a 30-minute consultation with Solutions Architect Bajrangi Yadav. We will examine your daily bottlenecks and map out a practical custom CRM/ERP roadmap.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact?service=CRM%20%2F%20ERP%20Development"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Request Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20want%20to%20discuss%20a%20CRM/ERP%20system.`}
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
