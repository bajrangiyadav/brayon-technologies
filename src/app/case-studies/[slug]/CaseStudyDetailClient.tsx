"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Eyebrow from "@/components/common/Eyebrow";
import Button from "@/components/common/Button";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import TechStackGrid from "@/components/case-studies/TechStackGrid";
import ProjectGallery from "@/components/case-studies/ProjectGallery";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import FadeUp from "@/components/animations/FadeUp";
import { CaseStudy } from "@/types/caseStudy";

interface CaseStudyDetailClientProps {
  caseStudy: CaseStudy;
  relatedProjects: CaseStudy[];
}

export function CaseStudyDetailClient({
  caseStudy,
  relatedProjects,
}: CaseStudyDetailClientProps) {
  return (
    <main className="flex-grow pt-28">
      {/* Breadcrumb & Project Hero */}
      <section className="py-12 md:py-20 border-b border-white/[0.08] relative">
        <Container>
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: "Case Studies", href: "/case-studies" },
                { label: caseStudy.title },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <FadeUp delay={0.05}>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-blue-600/15 text-blue-400 border border-blue-500/30 uppercase tracking-wider">
                    {caseStudy.projectType}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">{caseStudy.industry}</span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
                  {caseStudy.title}
                </h1>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                  {caseStudy.shortDescription}
                </p>
              </FadeUp>
            </div>

            {/* Quick Metadata Box */}
            <div className="lg:col-span-4 bg-[#0d1322] border border-white/[0.08] rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/[0.06]">
                <span className="text-slate-500">CLIENT</span>
                <span className="text-slate-200 font-medium">{caseStudy.clientDisplayName}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/[0.06]">
                <span className="text-slate-500">CATEGORY</span>
                <span className="text-slate-200">{caseStudy.category}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/[0.06]">
                <span className="text-slate-500">DELIVERY SPEC</span>
                <span className="text-emerald-400">Production Verified</span>
              </div>
              {caseStudy.liveUrl && (
                <div className="flex items-center justify-between text-xs font-mono pt-1">
                  <span className="text-slate-500">LIVE WEBSITE</span>
                  <a
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    <span>{caseStudy.liveUrl.replace("https://", "").replace(/\/$/, "")}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Large Featured Project Visual Hero */}
      <section className="py-8 bg-[#050811] border-b border-white/[0.08]">
        <Container>
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#070b16] flex items-center justify-center">
            {/* Grid texture */}
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #3b82f6 1px, transparent 1px),
                  linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
                `,
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative w-64 sm:w-80 h-32 sm:h-44">
              <Image
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <Section spacing="lg" borderBottom>
        <Container>
          <div className="max-w-4xl space-y-4">
            <Eyebrow>PROJECT BRIEF</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Overview</h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {caseStudy.overview}
            </p>
          </div>
        </Container>
      </Section>

      {/* Challenge & Solution Grid */}
      <Section variant="surface" spacing="lg" borderBottom>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Challenge */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090e1b] border border-white/[0.08] space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <AlertCircle className="w-4 h-4" />
                <span className="uppercase tracking-wider">OPERATIONAL BOTTLENECK</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">The Challenge</h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {caseStudy.challenge.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  IDENTIFIED DEFECTS & FRICTION:
                </div>
                <ul className="space-y-2">
                  {caseStudy.challenge.painPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* The Solution */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090e1b] border border-blue-500/20 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                <Sparkles className="w-4 h-4" />
                <span className="uppercase tracking-wider">ENGINEERING RESOLUTION</span>
              </div>

              <h3 className="text-2xl font-semibold text-white">Our Solution</h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {caseStudy.solution.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  ARCHITECTURAL HIGHLIGHTS:
                </div>
                <ul className="space-y-2">
                  {caseStudy.solution.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Features Grid */}
      <Section spacing="lg" borderBottom>
        <Container>
          <div className="max-w-3xl mb-10">
            <Eyebrow>FUNCTIONAL SCOPE</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-3">
              Implemented Key Features
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              All listed features represent verified code deployed and tested in staging/production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseStudy.features.map((feature, idx) => (
              <div
                key={feature}
                className="p-4 rounded-xl bg-[#0d1322] border border-white/[0.08] flex items-center gap-3"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center font-mono text-xs text-blue-400 shrink-0">
                  0{idx + 1}
                </div>
                <span className="text-sm font-medium text-slate-200">{feature}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Architecture & Engineering Stack */}
      <Section variant="surface" spacing="lg" borderBottom>
        <Container>
          <div className="max-w-3xl mb-10">
            <Eyebrow>TECHNICAL BLUEPRINT</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-3">
              Full-Stack Architecture Matrix
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              The infrastructure layers and communication protocols powering {caseStudy.title}.
            </p>
          </div>

          <TechStackGrid architecture={caseStudy.architecture} />
        </Container>
      </Section>

      {/* Project Gallery */}
      <Section spacing="lg" borderBottom>
        <Container>
          <div className="max-w-3xl mb-10">
            <Eyebrow>VISUAL DOCUMENTATION</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-3">
              Project Architecture & Interface Gallery
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Click any image to inspect architecture blueprints and component workflows in full resolution.
            </p>
          </div>

          <ProjectGallery items={caseStudy.gallery} />
        </Container>
      </Section>

      {/* Verified Results (Rendered ONLY if verified data exists) */}
      {caseStudy.results && caseStudy.results.length > 0 && (
        <Section variant="surface" spacing="lg" borderBottom>
          <Container>
            <div className="max-w-3xl mb-10">
              <Eyebrow>VERIFIED METRICS</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-3">
                Production Impact
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.results.map((result, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#090e1b] border border-white/[0.08]"
                >
                  <p className="text-sm text-slate-300 font-mono">{result}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Client Testimonial (Rendered ONLY if real testimonial data exists) */}
      {caseStudy.testimonial && (
        <Section spacing="lg" borderBottom>
          <Container>
            <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#0d1322] border border-blue-500/20 text-center space-y-6">
              <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                CLIENT CONFIRMATION
              </div>
              <blockquote className="text-lg sm:text-xl font-medium text-white italic leading-relaxed">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </blockquote>
              <div className="pt-2 text-xs font-mono text-slate-400">
                <span className="text-white font-semibold">{caseStudy.testimonial.author}</span>
                {caseStudy.testimonial.role && <span> · {caseStudy.testimonial.role}</span>}
                {caseStudy.testimonial.company && <span>, {caseStudy.testimonial.company}</span>}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section variant="surface" spacing="lg" borderBottom>
          <Container>
            <div className="flex items-center justify-between mb-8">
              <div>
                <Eyebrow>MORE ENGINEERING</Eyebrow>
                <h2 className="text-2xl font-semibold text-white mt-2">Explore More Work</h2>
              </div>
              <Link
                href="/case-studies"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>View all case studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <CaseStudyCard key={p.id} caseStudy={p} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Case Study Consultation CTA */}
      <Section spacing="xl">
        <Container>
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-[#0e162a] to-[#090d18] border border-blue-500/20 text-center max-w-3xl mx-auto space-y-6 shadow-2xl">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              COMMENCE TECHNICAL DIALOGUE
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Have a Project in Mind?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Let&apos;s discuss the product, platform or technology challenge you are solving. Partner directly with senior engineers who understand architecture.
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
                href="/contact"
              >
                Contact BRAYON
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default CaseStudyDetailClient;
