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
import Breadcrumbs from "@/components/common/Breadcrumbs";
import AIPipelineVisual from "@/components/brayon-ai/AIPipelineVisual";
import FadeUp from "@/components/animations/FadeUp";
import {
  Bot,
  Mic,
  Workflow,
  Headphones,
  FileSearch,
  Cpu,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "BRAYON AI — Enterprise AI Engineering & Workflow Automation",
  description:
    "AI that works with your business. BRAYON Technologies designs practical AI-powered systems, voice bots, autonomous agents, and document intelligence workflows.",
  alternates: {
    canonical: "/brayon-ai",
  },
  openGraph: {
    title: "BRAYON AI — Enterprise AI Engineering & Automation",
    description:
      "We design practical AI-powered systems that automate workflows, improve customer interactions and help teams work more efficiently.",
    url: "https://brayontech.com/brayon-ai",
  },
};

const CAPABILITIES = [
  {
    id: "agents",
    title: "AI Agents",
    icon: Bot,
    category: "AUTONOMOUS EXECUTION",
    description:
      "Business-specific AI agents designed around workflows and operational requirements. Agents evaluate incoming events, invoke authenticated tools, and record structured results.",
    useCase: "Autonomous data reconciliation, ticket triage, and operational auditing.",
  },
  {
    id: "voice",
    title: "Voice AI",
    icon: Mic,
    category: "TELEPHONY AUTOMATION",
    description:
      "Voice-based automation, lead qualification and conversational workflows. Integrated with Twilio Media Streams and WebSockets for natural, latency-free telephone dialogues.",
    useCase: "Inbound sales qualification, appointment confirmations, and service dispatch.",
  },
  {
    id: "automation",
    title: "Business Automation",
    icon: Workflow,
    category: "WORKFLOW ORCHESTRATION",
    description:
      "Automate repetitive operational tasks by chaining LLM reasoning stages with scheduled background queue workers and existing relational databases.",
    useCase: "Elimination of repetitive administrative spreadsheets and manual verification steps.",
  },
  {
    id: "support",
    title: "AI Customer Support",
    icon: Headphones,
    category: "CONVERSATIONAL COPILOTS",
    description:
      "AI-assisted customer interaction and support workflows strictly grounded in verified internal documentation, reducing resolution times with zero hallucination.",
    useCase: "24/7 Tier-1 resolution with seamless human engineer fallback routing.",
  },
  {
    id: "documents",
    title: "Document Intelligence",
    icon: FileSearch,
    category: "STRUCTURED EXTRACTION",
    description:
      "Extract, classify and process information from documents. Turn unstructured PDFs, purchase invoices, and vendor bills into normalized relational records.",
    useCase: "Automated invoice parsing, contract indexing, and KYC validation.",
  },
  {
    id: "workflows",
    title: "AI Workflows",
    icon: Cpu,
    category: "SYSTEM BRIDGES",
    description:
      "Connect AI models with existing business systems and APIs. Deterministic guardrails ensure predictable execution and audit compliance across every step.",
    useCase: "Multi-system synchronization, media processing pipelines, and data transformations.",
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: BarChart3,
    category: "BUSINESS INTELLIGENCE",
    description:
      "AI-assisted insights and business intelligence. Transform raw event streams and relational transactions into clear executive summaries and trend forecasts.",
    useCase: "Real-time anomaly detection, churn risk indicators, and supply chain telemetry.",
  },
  {
    id: "integrations",
    title: "Enterprise Integrations",
    icon: Workflow,
    category: "DATA PIPELINES",
    description:
      "Embed AI into ERPs, relational databases, CRM platforms, and legacy backends via robust, typed middleware layers with full audit tracking.",
    useCase: "Bi-directional CRM synchronization and ERP intelligence layers.",
  },
];

export default function BrayonAiPage() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Header Hero Section */}
        <section className="py-16 md:py-24 border-b border-white/[0.08] relative">
          <Container>
            <div className="mb-8">
              <Breadcrumbs items={[{ label: "BRAYON AI" }]} />
            </div>

            <div className="max-w-3xl">
              <FadeUp delay={0.05}>
                <Eyebrow>BRAYON AI & INTELLIGENT SYSTEMS</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mt-4 leading-tight">
                  Pragmatic AI Engineered for Real Business Operations.
                </h1>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  We don&apos;t build AI for hype. We build intelligent systems that solve real operational bottlenecks, automate repetitive labor, and create tangible competitive advantage.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="pt-6 flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    href="/contact"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    Discuss an AI Project
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href="/case-studies"
                  >
                    Explore Production Work
                  </Button>
                </div>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* Technical Data Flow Visual Section */}
        <Section variant="surface" spacing="lg" borderBottom>
          <Container>
            <SectionHeading
              eyebrow="SYSTEMATIC DATA FLOW"
              title="From Raw Input to Business Outcome"
              description="An architectural blueprint of how BRAYON AI chains unstructured data ingest, LLM reasoning, deterministic decision rules, and automated queue execution."
            />

            <AIPipelineVisual />
          </Container>
        </Section>

        {/* 8 Practical AI Capabilities Grid */}
        <Section spacing="lg" borderBottom>
          <Container>
            <SectionHeading
              eyebrow="PRODUCTION CAPABILITIES"
              title="8 Enterprise AI Solutions"
              description="Practical business applications engineered for high reliability, data privacy, and zero vendor lock-in."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CAPABILITIES.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <FadeUp key={cap.id} delay={0.04 * idx}>
                    <Card
                      variant="interactive"
                      padding="md"
                      className="h-full flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                        </div>

                        <div className="text-[10px] font-mono uppercase tracking-wider text-blue-400 mb-1">
                          {cap.category}
                        </div>

                        <h3 className="text-lg font-semibold text-white mb-2">{cap.title}</h3>

                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                          {cap.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/[0.06] space-y-2">
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-0.5">
                            BUSINESS USE CASE
                          </div>
                          <p className="text-xs font-mono text-slate-300 leading-snug">
                            {cap.useCase}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </FadeUp>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Integration Architecture */}
        <Section variant="surface" spacing="lg" borderBottom>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <Eyebrow>ENTERPRISE CONNECTIVITY</Eyebrow>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                  Designed to Connect With Your Existing Stack
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  We don&apos;t ask you to migrate your entire database or discard existing business tools. We construct secure API communication layers and queue listeners that integrate seamlessly with:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm font-mono text-slate-300 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>CRM systems and custom lead pipelines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Relational databases (MySQL, PostgreSQL) & NoSQL (MongoDB)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Telephony & messaging (Twilio, WhatsApp Business, SendGrid)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Internal ERPs and role-based administrative dashboards</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-[#090e1b] border border-white/[0.08] space-y-4">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                    <span>SECURITY & DATA GOVERNANCE</span>
                    <span className="text-emerald-400">ENCRYPTED AT REST & TRANSIT</span>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed font-mono">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <div className="font-semibold text-slate-200 mb-1">Zero Training on Client Data</div>
                      <div>We enforce zero-data retention agreements with model providers so proprietary business data is never used to train public models.</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <div className="font-semibold text-slate-200 mb-1">Auditable Decision Records</div>
                      <div>Every AI reasoning step is logged with input hashes, prompt versioning, and latency metrics for complete operational compliance.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Bottom Consultation CTA */}
        <Section spacing="xl">
          <Container>
            <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-[#0e162a] to-[#090d18] border border-blue-500/20 text-center max-w-3xl mx-auto space-y-6 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Evaluate an AI Implementation for Your Business
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Connect directly with senior engineers to explore technical feasibility, inference latency, and architecture options.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Start an AI Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/case-studies"
                >
                  Explore All Case Studies
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
