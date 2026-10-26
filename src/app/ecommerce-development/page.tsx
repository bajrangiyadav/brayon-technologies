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
  ShoppingCart,
  Zap,
  CreditCard,
  Package,
  Layers,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce Website & Platform Development Company India | BRAYON Technologies",
  description:
    "High-conversion e-commerce development company in India. We engineer custom B2B wholesale portals, headless Next.js storefronts, dynamic pricing engines, and sub-second checkout workflows.",
  alternates: {
    canonical: "/ecommerce-development",
  },
  openGraph: {
    title: "E-Commerce Website & Platform Development Company India | BRAYON Technologies",
    description:
      "Custom e-commerce platforms engineered for high order concurrency, sub-second product search, and automated inventory sync with 100% IP ownership.",
    url: `${SITE_URL}/ecommerce-development`,
    siteName: COMPANY_INFO.name,
    type: "website",
    images: [
      {
        url: "/brayon-logo-showcase.png",
        width: 1200,
        height: 630,
        alt: "High-Conversion E-Commerce Platform Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Website & Platform Development Company India | BRAYON Technologies",
    description:
      "Custom e-commerce platforms engineered for speed, conversions, and scale.",
    images: ["/brayon-logo-showcase.png"],
  },
};

const ECOMMERCE_CAPABILITIES = [
  {
    title: "B2B Wholesale & Distributor Portals",
    description:
      "Tiered pricing matrices by customer tier, minimum order quantities (MOQ), tax exemption workflows, and credit limit invoice management.",
    icon: Layers,
  },
  {
    title: "High-Speed D2C Brand Storefronts",
    description:
      "Sub-second catalog browsing, instant variant switching (sizes, weights, packs), and optimized mobile-first checkout flows that minimize cart drop-offs.",
    icon: ShoppingCart,
  },
  {
    title: "Payment Gateway Architecture",
    description:
      "Robust integration with Razorpay, Stripe, Cashfree, and UPI with automated webhook reconciliation and instant payment failure recovery.",
    icon: CreditCard,
  },
  {
    title: "Real-Time Inventory Reservation",
    description:
      "Lock stock in real-time during active checkout sessions to eliminate overselling during festive sale surges and promotional campaigns.",
    icon: Package,
  },
  {
    title: "Automated GST Billing & Shipping Tracking",
    description:
      "Instant PDF invoice creation with compliant GST calculation, automated packaging slips, and courier API synchronization for live delivery updates.",
    icon: Zap,
  },
  {
    title: "Headless Commerce (Next.js & Edge API)",
    description:
      "Decoupled edge-rendered frontend architectures achieving 95+ Google PageSpeed scores, zero layout shifts, and exceptional organic search visibility.",
    icon: TrendingUp,
  },
];

const FAQS = [
  {
    question: "How much does a custom e-commerce website cost in India?",
    answer:
      "A focused D2C online store typically starts from ₹35,000 to ₹75,000. Comprehensive B2B wholesale portals and multi-vendor systems generally range from ₹75,000 to ₹1,80,000+ depending on inventory complexity, custom pricing matrices, and third-party ERP integrations. We provide fixed milestone quotes with zero hidden surprises.",
  },
  {
    question: "Custom e-commerce vs. Shopify/WooCommerce: Which should I choose?",
    answer:
      "Shopify is fine for basic retail, but monthly app subscription fees, transaction penalties, and rigid checkout restrictions become expensive as volume grows. A custom BRAYON platform gives you 100% source code ownership, zero monthly transaction cuts, completely bespoke B2B workflows, and instant sub-second speed.",
  },
  {
    question: "How do you prevent inventory overselling during flash sales?",
    answer:
      "We implement transactional database row-level locking and Redis memory counters that temporarily reserve item inventory during the active 10-minute checkout window. If the payment fails or times out, stock is instantly released back to the catalog.",
  },
  {
    question: "Which payment gateways and shipping aggregators can you integrate?",
    answer:
      "We integrate all leading Indian and international providers: Razorpay, Stripe, Cashfree, PayU, and PhonePe for payments, plus Shiprocket, Delhivery, and Blue Dart for automated logistics and manifest generation.",
  },
];

export default function EcommerceDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-Commerce Website & Platform Development",
    serviceType: "E-Commerce Development",
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
      "Custom e-commerce development company engineering high-conversion B2B wholesale portals and D2C online storefronts with sub-second page delivery and 100% IP ownership.",
    url: `${SITE_URL}/ecommerce-development`,
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
        name: "E-Commerce Development",
        item: `${SITE_URL}/ecommerce-development`,
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
                  { label: "E-Commerce Development" },
                ]}
              />
            </div>
            <div className="max-w-3xl">
              <FadeUp delay={0.05}>
                <Eyebrow>TRANSACTIONAL COMMERCE &amp; WHOLESALE PLATFORMS</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mt-4 leading-tight">
                  High-Conversion E-Commerce Website &amp; Platform Development.
                </h1>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  Turn casual visitors into paying customers. We engineer bespoke B2B wholesale portals and D2C online storefronts with sub-second page speeds, seamless multi-gateway payments, and zero vendor lock-in.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="pt-6 flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    href="/contact?service=E-Commerce%20Development"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    Start Your E-Commerce Project
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20want%20to%20discuss%20an%20e-commerce%20website%20project.`}
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
              eyebrow="COMMERCE CAPABILITIES"
              title="Everything Needed for High-Volume Commerce."
              description="Built to handle complex catalog taxonomies, concurrent transaction spikes, and multi-tier wholesale ordering."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ECOMMERCE_CAPABILITIES.map((cap, idx) => {
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
              eyebrow="VERIFIED CLIENT RESULTS"
              title="Real E-Commerce Platforms Built by BRAYON."
              description="Actual client stores handling real inventory, orders, and payments."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-[#090f1d] border border-white/[0.08] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Live Wholesale B2B Commerce</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">SafeGrowTrade</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Engineered a complete wholesale trading engine with tiered customer pricing, bulk cart purchasing, automated invoicing, and admin order lifecycle workflows saving over 15 hours of manual phone coordination weekly.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Wholesale tiered pricing &amp; MOQ validation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Online payment gateway &amp; ledger reconciliation</span>
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

              <div className="p-8 rounded-3xl bg-[#090f1d] border border-white/[0.08] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Delivered D2C Retail Platform</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Ashapura Dry Fruits</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Designed a fast direct-to-consumer store with dynamic packaging weights (250g, 500g, 1kg), festive gift hamper customizers, automated dispatch slips, and seamless UPI &amp; card checkout handling 3x higher volume during peak festive sales.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Dynamic weight pricing &amp; instant variant switcher</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Zero inventory mismatches during promotional surges</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <Link
                    href="/case-studies/ashapura-dry-fruits"
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
              title="E-Commerce Development FAQs"
              description="Common questions about building custom online storefronts and wholesale platforms."
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
                Ready to Launch Your E-Commerce Store?
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Connect directly with Founder &amp; Solutions Architect Bajrangi Yadav. We will help you select the ideal architecture, payment gateways, and delivery roadmap.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact?service=E-Commerce%20Development"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Request E-Commerce Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20want%20to%20discuss%20an%20e-commerce%20store.`}
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
