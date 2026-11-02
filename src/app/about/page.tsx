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
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Code2,
  Mail,
  Phone,
  Terminal,
  Globe2,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";

export const metadata: Metadata = {
  title: "About BRAYON Technologies | Digital Engineering Team",
  description:
    "Learn about BRAYON Technologies. We combine strategy, design, and engineering to build powerful digital solutions that solve real business problems. Direct senior engineering leadership & 100% IP ownership.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About BRAYON Technologies | Digital Engineering Team",
    description:
      "Building Digital Experiences That Move Businesses Forward. Partner directly with senior engineering leadership.",
    url: `${SITE_URL}/about`,
    siteName: COMPANY_INFO.name,
    type: "website",
    images: [
      {
        url: "/brayon-logo-showcase.png",
        width: 1200,
        height: 630,
        alt: "About BRAYON Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About BRAYON Technologies | Digital Engineering Team",
    description: "Building Digital Experiences That Move Businesses Forward.",
    images: ["/brayon-logo-showcase.png"],
  },
};

const PRINCIPLES = [
  {
    title: "Engineering Discipline Over Agency Fluff",
    description:
      "We write production code with strict TypeScript, clean database indexing, and comprehensive error boundaries. We do not use bloated no-code wrappers or buggy pre-made templates.",
    icon: Code2,
  },
  {
    title: "Direct Senior Engineering Access",
    description:
      "You speak directly with the architects who design your database schemas and build your features. There are no commission-driven salespeople or account manager intermediaries.",
    icon: Terminal,
  },
  {
    title: "100% IP & Code Ownership",
    description:
      "Upon completion of milestones, 100% of the Git repository, deployment pipelines, cloud configurations, and database schemas are transferred to you. No vendor lock-in.",
    icon: ShieldCheck,
  },
  {
    title: "Architected for Real Operations",
    description:
      "Every architecture is designed to solve real business bottlenecks—from high-throughput wholesale ordering to sub-second student certificate verification.",
    icon: Zap,
  },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About BRAYON Technologies & Engineering Leadership",
    url: `${SITE_URL}/about`,
    description:
      "Learn about BRAYON Technologies, our engineering principles, and direct senior technology leadership by Founder Bajrangi Yadav.",
    mainEntity: {
      "@type": "Person",
      name: COMPANY_INFO.founder.name,
      jobTitle: COMPANY_INFO.founder.role,
      url: `${SITE_URL}/about#founder`,
      worksFor: {
        "@type": "Organization",
        name: COMPANY_INFO.name,
        url: SITE_URL,
      },
    },
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
        name: "About Us",
        item: `${SITE_URL}/about`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Editorial Header */}
        <section className="py-16 md:py-24 border-b border-white/[0.08] relative overflow-hidden bg-gradient-to-b from-[#080d1a] to-[#060913]">
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/[0.05] rounded-full blur-[140px] pointer-events-none" />

          <Container className="relative z-10">
            <div className="mb-6 text-left">
              <Breadcrumbs items={[{ label: "About Us" }]} />
            </div>

            <div className="max-w-4xl text-left space-y-4">
              <FadeUp delay={0.05}>
                <Eyebrow>BRAYON TECHNOLOGIES · BRAND MISSION &amp; ORIGIN</Eyebrow>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                  Building Digital Experiences That Move Businesses Forward.
                </h1>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="text-lg sm:text-xl text-blue-300 font-medium leading-relaxed">
                  We combine strategy, design, and engineering to build powerful digital solutions that solve real business problems.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-3xl">
                  BRAYON Technologies was founded on a simple premise: modern businesses deserve software built with rigorous engineering standards, transparent milestone delivery, and direct technical collaboration. We partner with ambitious startups, growing enterprises, and established institutions in India, the United States, the United Kingdom, and globally.
                </p>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* Founder Spotlight Section */}
        <Section id="founder" spacing="lg" borderBottom className="bg-[#050813]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
              <div className="lg:col-span-7 space-y-6">
                <Eyebrow>LEADERSHIP &amp; TECHNICAL PROMISE</Eyebrow>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Direct Engineering Ownership on Every Engagement
                </h2>

                <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed italic border-l-2 border-blue-500 pl-4 py-1">
                  &ldquo;Building technology with a focus on solving real business challenges. My vision is to make reliable, scalable, and meaningful digital solutions accessible to businesses of every size.&rdquo;
                </blockquote>

                <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                  Too many software projects fail not because of technology, but because of misaligned incentives, fragmented communication, and bloated agency layers that separate engineers from the real business problem.
                </p>

                <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                  At BRAYON Technologies, founder and solutions architect <strong>Bajrangi Yadav</strong> personally oversees the technical specification, database architecture, and code quality for every project. From schema design to production deployment, our engineering standards remain uncompromised.
                </p>

                <div className="p-6 rounded-2xl bg-[#090f1f] border border-white/[0.08] space-y-3">
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                    Our Engineering Commitments:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Direct technical collaboration with senior engineers—zero junior middlemen.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Modern stacks: Next.js, React, Laravel, Node.js, and PostgreSQL/MySQL.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>100% complete source code, private Git repositories, and cloud keys transferred upon delivery.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:hello@brayontech.com"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>hello@brayontech.com</span>
                  </a>

                  <a
                    href="https://github.com/bajrangiyadav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <GitHubIcon className="w-3.5 h-3.5 text-blue-400" />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20would%20like%20to%20discuss%20a%20software%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 font-mono text-xs transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                    <span>+91 73851 21432</span>
                  </a>
                </div>
              </div>

              {/* Delivery Verification Card */}
              <div className="lg:col-span-5">
                <div className="p-8 rounded-3xl bg-[#090f1f] border border-blue-500/30 space-y-6 shadow-2xl shadow-blue-950/30">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      ENGINEERING STANDARDS
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                      VERIFIED
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-[#060913] border border-white/[0.06]">
                      <div className="font-mono text-2xl font-bold text-white">100%</div>
                      <div className="text-xs font-mono text-slate-400 mt-1 uppercase">
                        Private Git &amp; Cloud Ownership Transfer
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#060913] border border-white/[0.06]">
                      <div className="font-mono text-2xl font-bold text-emerald-400">0 Seconds</div>
                      <div className="text-xs font-mono text-slate-400 mt-1 uppercase">
                        Peak Downtime Across Exam Result Portals
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#060913] border border-white/[0.06]">
                      <div className="font-mono text-2xl font-bold text-blue-400">30-Day</div>
                      <div className="text-xs font-mono text-slate-400 mt-1 uppercase">
                        Complimentary Hypercare Warranty
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button variant="primary" size="md" href="/contact" className="w-full">
                      Start a Project Discussion
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Operating Principles */}
        <Section spacing="lg" borderBottom className="bg-[#060a16]">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <Eyebrow>CORE VALUES</Eyebrow>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                How We Approach Software Development
              </h2>
              <p className="text-sm text-slate-300">
                Our principles guide every architectural decision, database query, and sprint demo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {PRINCIPLES.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={principle.title}
                    className="p-8 rounded-2xl bg-[#090e1d] border border-white/[0.08] hover:border-blue-500/30 transition-all space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{principle.title}</h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Bottom CTA */}
        <Section spacing="lg" className="bg-[#050813]">
          <Container>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0c1428] via-[#091022] to-[#0c1428] border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  Have a technical project to discuss?
                </h3>
                <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
                  Reach out for a direct technical review of your requirements, timeline, and recommended software architecture.
                </p>
              </div>
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                iconRight={<ArrowRight className="w-4 h-4" />}
                className="shrink-0"
              >
                Schedule Technical Review
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}