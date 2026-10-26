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
  Smartphone,
  MapPin,
  Bell,
  Lock,
  WifiOff,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Company India | iOS & Android | BRAYON Technologies",
  description:
    "Cross-platform mobile app development company in India. We build high-performance React Native iOS & Android applications for field operations, customer booking, and commerce with 100% IP ownership.",
  alternates: {
    canonical: "/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development Company India | iOS & Android | BRAYON Technologies",
    description:
      "Native-performance mobile apps built with React Native. Real-time GPS tracking, push notifications, offline caching, and 100% source code ownership.",
    url: `${SITE_URL}/mobile-app-development`,
    siteName: COMPANY_INFO.name,
    type: "website",
    images: [
      {
        url: "/brayon-logo-showcase.png",
        width: 1200,
        height: 630,
        alt: "Cross-Platform Mobile App Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company India | BRAYON Technologies",
    description: "Cross-platform iOS and Android mobile app development.",
    images: ["/brayon-logo-showcase.png"],
  },
};

const MOBILE_CAPABILITIES = [
  {
    title: "Single Codebase for iOS & Android",
    description:
      "Engineered with React Native and Expo to deliver 60fps native performance on both Apple App Store and Google Play, cutting development cost and time in half.",
    icon: Smartphone,
  },
  {
    title: "Real-Time GPS & Location Tracking",
    description:
      "Live vehicle/field technician routing, geofenced customer arrival alerts, and interactive Google Maps/Mapbox integrations.",
    icon: MapPin,
  },
  {
    title: "Targeted Push Notifications (FCM)",
    description:
      "Automated transactional alerts, booking status updates, abandoned cart reminders, and promotional campaigns via Firebase Cloud Messaging.",
    icon: Bell,
  },
  {
    title: "Offline-First Data Synchronization",
    description:
      "Allow field workers to record job status, capture signatures, and scan barcodes even without internet; data syncs automatically upon reconnecting.",
    icon: WifiOff,
  },
  {
    title: "Biometric & Secure Session Auth",
    description:
      "Fingerprint and FaceID biometric unlock combined with encrypted JWT storage for sensitive business and customer transactional apps.",
    icon: Lock,
  },
  {
    title: "Hardware & Device Sensor Integration",
    description:
      "Direct integration with device cameras for QR/barcode scanning, Bluetooth thermal receipt printers, and microphone audio capture.",
    icon: Cpu,
  },
];

const FAQS = [
  {
    question: "Why should we choose React Native over pure native (Swift / Kotlin)?",
    answer:
      "React Native compiles to real native UI components on both iOS and Android. Developing two separate native codebases doubles your initial cost and ongoing maintenance overhead. With React Native, over 90% of business logic is shared, bug fixes are pushed once, and performance is completely indistinguishable from pure native apps.",
  },
  {
    question: "How long does mobile app development take from start to store launch?",
    answer:
      "A standard commercial MVP takes 4 to 8 weeks. More complex applications with live GPS dispatch, in-app payments, and offline syncing typically take 8 to 12 weeks. We assist with Google Play Console and Apple App Store review approvals.",
  },
  {
    question: "How do you handle App Store and Google Play compliance?",
    answer:
      "We prepare all necessary signing certificates, privacy manifests, permission disclosures (camera, location), and screenshots required by Apple's App Review Guidelines and Google Play policies to ensure first-time approval.",
  },
  {
    question: "Who owns the mobile application source code upon completion?",
    answer:
      "You do. Upon milestone delivery and final settlement, 100% of the Git repository, app store keys, configuration assets, and intellectual property are officially transferred to your organization.",
  },
];

export default function MobileAppDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile App Development Services",
    serviceType: "Mobile Development",
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
      "Cross-platform mobile app development company in India engineering native-performance React Native iOS and Android apps with 100% code ownership.",
    url: `${SITE_URL}/mobile-app-development`,
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
        name: "Mobile App Development",
        item: `${SITE_URL}/mobile-app-development`,
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
                  { label: "Mobile App Development" },
                ]}
              />
            </div>
            <div className="max-w-3xl">
              <FadeUp delay={0.05}>
                <Eyebrow>CROSS-PLATFORM MOBILE ENGINEERING</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mt-4 leading-tight">
                  Cross-Platform Mobile App Development (iOS &amp; Android).
                </h1>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  Launch a high-performance mobile application for iOS and Android without paying double for two separate codebases. We engineer native-speed React Native apps for field operations, customer portals, and mobile commerce.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="pt-6 flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    href="/contact?service=Mobile%20App%20Development"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    Discuss Your Mobile App Idea
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20want%20to%20discuss%20mobile%20app%20development.`}
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
              eyebrow="MOBILE ARCHITECTURE"
              title="Native Performance. Half the Overhead."
              description="Built with TypeScript and React Native for buttery-smooth animations, low battery consumption, and rock-solid stability."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOBILE_CAPABILITIES.map((cap, idx) => {
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
              eyebrow="MOBILE IN ACTION"
              title="Real Mobile Solutions Delivered by BRAYON."
              description="Mobile platforms engineered for field reliability, real-time sync, and intuitive user experiences."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-[#090f1d] border border-white/[0.08] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Delivered Field Operational App</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">DriveZone Mobile</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Mobile application for workshop technicians to capture vehicle condition photos, scan parts barcodes, update repair progress in real time, and generate instant digital estimates for car owners.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Camera photo uploads with automatic compression</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Live status updates sent directly to customer WhatsApp</span>
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
                    <span>Mobile Commerce &amp; Wholesale</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">SafeGrow Wholesale Mobile</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Mobile-optimized ordering interface enabling B2B buyers to reorder wholesale commodities with two taps, download invoice PDFs, and receive real-time push notifications on shipment dispatch.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>One-click repeat ordering for repeat B2B buyers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>Instant offline cart saving with zero data loss</span>
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
              title="Mobile App Development FAQs"
              description="Common questions about cross-platform frameworks, App Store approvals, and maintenance."
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
                Ready to Launch Your Mobile App?
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Connect directly with Founder &amp; Solutions Architect Bajrangi Yadav. We will help you validate technical feasibility and prepare an agile sprint roadmap for iOS and Android.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact?service=Mobile%20App%20Development"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Request Mobile App Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20have%20a%20mobile%20app%20requirement.`}
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
