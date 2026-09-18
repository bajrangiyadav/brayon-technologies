import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import Eyebrow from "@/components/common/Eyebrow";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import FadeUp from "@/components/animations/FadeUp";
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Code2,
  Mail,
  Phone,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Engineering Leadership | BRAYON Technologies",
  description:
    "Learn about BRAYON Technologies. Direct engineering leadership, modern software architecture, and zero agency middlemen. We build digital products that move businesses forward.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us & Engineering Leadership | BRAYON Technologies",
    description:
      "Direct senior engineering leadership, modern architecture, and 100% IP ownership. We don't just talk about technology. We build it.",
    url: "https://brayontech.com/about",
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
      "Every architecture is designed to solve real business bottlenecks—from high-throughput wholesale ordering to automated AI voice qualification—engineered for 99.9% uptime.",
    icon: Zap,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Editorial Header */}
        <section className="py-16 md:py-24 border-b border-white/[0.08] relative">
          <Container>
            <div className="max-w-3xl">
              <FadeUp delay={0.05}>
                <Eyebrow>BRAYON TECHNOLOGIES · ENGINEERING LEADERSHIP</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mt-4 leading-tight">
                  We Don&apos;t Just Talk About Technology. We Build It.
                </h1>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  BRAYON Technologies was founded on a simple premise: modern businesses deserve software built with rigorous engineering standards, transparent delivery, and direct technical collaboration.
                </p>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* Engineering Lead Spotlight */}
        <Section spacing="lg" borderBottom>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <Eyebrow>TECHNICAL LEADERSHIP</Eyebrow>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                  Direct Engineering Ownership on Every Engagement
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Too many software projects fail not because of technology, but because of misaligned incentives, fragmented communication, and bloated agency layers that separate engineers from the business problem.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  At BRAYON Technologies, technology lead <strong>Bajrangi Yadav</strong> personally oversees the technical specification, database architecture, and code quality for every project. From schema design to production deployment, our engineering standards remain uncompromised.
                </p>

                <div className="p-6 rounded-2xl bg-[#0d1322] border border-white/[0.08] space-y-3">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Our Engineering Commitments:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Direct technical collaboration with senior engineers.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Modern stacks: Next.js, React, Laravel, Node.js, and PostgreSQL/MySQL.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Complete source code and cloud ownership transferred upon delivery.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:contact@brayontech.com"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>contact@brayontech.com</span>
                  </a>
                  <a
                    href="tel:+917385121432"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>+91 73851 21432</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <Card variant="elevated" padding="lg" className="space-y-6 border-blue-500/20">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      DELIVERY VERIFICATION
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      ACTIVE
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="font-mono text-3xl font-semibold text-white">2</div>
                      <div className="text-xs font-mono text-slate-400 mt-1 uppercase">
                        Active Production Platforms
                      </div>
                    </div>
                    <div className="pt-3 border-t border-white/[0.06]">
                      <div className="font-mono text-3xl font-semibold text-white">2</div>
                      <div className="text-xs font-mono text-slate-400 mt-1 uppercase">
                        Real Production Clients
                      </div>
                    </div>
                    <div className="pt-3 border-t border-white/[0.06]">
                      <div className="font-mono text-3xl font-semibold text-blue-400">0%</div>
                      <div className="text-xs font-mono text-slate-400 mt-1 uppercase">
                        Vendor Lock-In Guarantee
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08]">
                    <Button variant="primary" size="md" href="/contact" className="w-full">
                      Start a Project
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </Section>

        {/* Operating Principles */}
        <Section variant="surface" spacing="lg" borderBottom>
          <Container>
            <SectionHeading
              eyebrow="CORE VALUES"
              title="How We Approach Software Development."
              description="Our principles guide every architectural decision, commit, and client interaction."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRINCIPLES.map((principle, idx) => {
                const Icon = principle.icon;
                return (
                  <FadeUp key={principle.title} delay={0.05 * idx}>
                    <Card variant="default" padding="md" className="h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {principle.description}
                      </p>
                    </Card>
                  </FadeUp>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Bottom CTA */}
        <Section spacing="lg">
          <Container>
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0d1322] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-left">
                <h3 className="text-2xl font-semibold text-white">
                  Have a technical project to discuss?
                </h3>
                <p className="text-sm text-slate-400 max-w-lg">
                  Reach out for a direct technical review of your requirements, timeline, and recommended architecture.
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
