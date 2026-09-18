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
import { technologies } from "@/data/technologies";
import { TechnologyCategory } from "@/types/technology";
import { caseStudies } from "@/data/caseStudies";
import {
  Code,
  Server,
  Database,
  Cpu,
  Cloud,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Stack & Architecture Matrix | BRAYON Technologies",
  description:
    "The technology behind what we build. We select technologies based on product requirements, scalability, maintainability and business needs: React, Laravel, Node.js, AWS, and AI APIs.",
  alternates: {
    canonical: "/technology",
  },
  openGraph: {
    title: "Technology Stack & Architecture Matrix | BRAYON Technologies",
    description:
      "The technology behind what we build. Rigorous full-stack engineering across modern frameworks, relational databases, and AI inference runtimes.",
    url: "https://brayontech.com/technology",
  },
};

interface CategoryConfig {
  id: TechnologyCategory;
  title: string;
  icon: React.ElementType;
  eyebrow: string;
  explanation: string;
}

const CATEGORIES: CategoryConfig[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: Code,
    eyebrow: "REACTIVE CLIENT ARCHITECTURES",
    explanation:
      "Type-safe, component-driven client applications optimized for sub-second interactions, edge static generation, and high conversion velocity.",
  },
  {
    id: "backend",
    title: "Backend & Systems",
    icon: Server,
    eyebrow: "HIGH-THROUGHPUT RUNTIMES",
    explanation:
      "Robust transactional backends, asynchronous worker queues, and secure API scaffolding constructed with Laravel and Node.js.",
  },
  {
    id: "database",
    title: "Database & In-Memory Stores",
    icon: Database,
    eyebrow: "DATA INTEGRITY & CACHING",
    explanation:
      "Relational ACID compliance, composite query indexing, sub-millisecond Redis caching, and document storage architectures.",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: Cpu,
    eyebrow: "LLM INFERENCE & AGENTS",
    explanation:
      "Production integrations with frontier model APIs, full-duplex voice streams, deterministic rule validation, and automated workflows.",
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    icon: Cloud,
    eyebrow: "DEPLOYMENT & RELIABILITY",
    explanation:
      "Hardened Linux environments, containerized Docker deployments, automated GitHub Actions CI/CD pipelines, and AWS cloud services.",
  },
  {
    id: "integration",
    title: "Integrations & Gateways",
    icon: Layers,
    eyebrow: "COMMUNICATION PROTOCOLS",
    explanation:
      "Resilient third-party bridges, payment gateway integrations, mapping matrix APIs, and idempotent webhook processors.",
  },
];

export default function TechnologyPage() {
  // Helper to count how many case studies reference each technology
  const getProjectUsageCount = (techId: string) => {
    return caseStudies.filter((cs) => cs.technologies.includes(techId)).length;
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Header Hero */}
        <section className="py-16 md:py-24 border-b border-white/[0.08] relative">
          <Container>
            <div className="mb-8">
              <Breadcrumbs items={[{ label: "Technology" }]} />
            </div>

            <div className="max-w-3xl">
              <FadeUp delay={0.05}>
                <Eyebrow>ENGINEERING ARCHITECTURE</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mt-4 leading-tight">
                  The Technology Behind What We Build.
                </h1>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  We select technologies based on product requirements, scalability, maintainability and business needs. Every tool in our stack is proven in production.
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
                    Consult on Architecture
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href="/case-studies"
                  >
                    Explore Delivered Work
                  </Button>
                </div>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* Dynamic Categorized Technology Sections */}
        <Section spacing="lg">
          <Container>
            <div className="space-y-16">
              {CATEGORIES.map((category) => {
                const CategoryIcon = category.icon;
                const categoryTechs = technologies.filter((t) => t.category === category.id);

                return (
                  <div key={category.id} id={category.id} className="scroll-mt-28">
                    {/* Category Header */}
                    <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/[0.08]">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                          <CategoryIcon className="w-4 h-4" />
                          <span>{category.eyebrow}</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                          {category.title}
                        </h2>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 max-w-lg">
                        {category.explanation}
                      </p>
                    </div>

                    {/* Technology Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {categoryTechs.map((tech) => {
                        const usageCount = getProjectUsageCount(tech.id);
                        return (
                          <div
                            key={tech.id}
                            className="p-5 rounded-2xl bg-[#090e1b] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <h3 className="text-base font-semibold text-white">
                                  {tech.name}
                                </h3>
                                {usageCount > 0 ? (
                                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                    {usageCount} {usageCount === 1 ? "project" : "projects"}
                                  </span>
                                ) : (
                                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-500">
                                    Supported
                                  </span>
                                )}
                              </div>

                              <p className="text-xs text-slate-400 leading-relaxed">
                                {tech.description}
                              </p>
                            </div>

                            {usageCount > 0 && (
                              <div className="pt-3 mt-4 border-t border-white/[0.04]">
                                <Link
                                  href={`/case-studies?tech=${tech.id}`}
                                  className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                  <span>View verified case studies</span>
                                  <ArrowRight className="w-3 h-3" />
                                </Link>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Architectural Principles Card */}
        <Section variant="surface" spacing="lg">
          <Container>
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0d1322] border border-white/[0.08] space-y-6">
              <div className="max-w-2xl">
                <Eyebrow>CORE SELECTION PHILOSOPHY</Eyebrow>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-3">
                  How We Select Our Engineering Stack
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                  We don&apos;t chase speculative trends or wrap buggy no-code tools. We engineer using languages and frameworks with active global communities, strong security auditing, and long-term LTS support.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/[0.08]">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Sub-Second Response Latencies</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Database composite indexing and Redis caching guarantee sub-second server responses under concurrent load.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Strict Type Safety & Zero Crashes</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Strict TypeScript across client and server ensures schema defects are caught at compile time, not in front of users.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Complete Code & Cloud IP Transfer</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Zero vendor lock-in. Full Git repository, container recipes, and database schemas are handed over directly to you.
                  </p>
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
                Have Architectural Questions About Your Stack?
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Connect directly with senior engineers to discuss your database sizing, API design, or tech stack migration.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Start a Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/case-studies"
                >
                  Explore Delivered Work
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
