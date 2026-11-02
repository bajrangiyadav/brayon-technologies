import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Server,
  Layers,
  Sparkles,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";
import FadeUp from "../animations/FadeUp";
import { caseStudies } from "@/data/caseStudies";

export function FeaturedProjectsSection() {
  // Use the verified production projects
  const featured = caseStudies.slice(0, 4);

  return (
    <Section id="projects" spacing="xl" borderBottom className="bg-[#070b16] relative overflow-hidden">
      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <FadeUp delay={0.05}>
            <Eyebrow>PROVEN CLIENT RESULTS</Eyebrow>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Work That Speaks Through Results.
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              We build production software that powers active institutions, transactional trade, and mission-critical daily operations. Explore real systems engineered by BRAYON.
            </p>
          </FadeUp>
        </div>

        {/* Alternating Image-Led Project Showcases */}
        <div className="space-y-16 lg:space-y-24">
          {featured.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <FadeUp key={project.slug} delay={0.15}>
                <div className="rounded-3xl bg-[#0c1224] border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl shadow-blue-950/20 group">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content Column */}
                    <div
                      className={`lg:col-span-6 space-y-5 text-left ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 font-mono text-xs uppercase tracking-wider font-semibold">
                          {project.industry}
                        </span>
                        {project.liveUrl && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Live Production</span>
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                        {project.shortDescription}
                      </p>

                      {/* Business Challenge & Delivered Solution Pill */}
                      <div className="space-y-3 pt-2">
                        <div className="p-3.5 rounded-xl bg-[#070b16] border border-white/[0.06] space-y-1">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-semibold">
                            Business Challenge:
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {project.challenge.title} — {project.challenge.painPoints[0]}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#070b16] border border-white/[0.06] space-y-1">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                            Solution Delivered:
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {project.solution.title}
                          </p>
                        </div>
                      </div>

                      {/* Measurable Results */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {(project.results || []).slice(0, 2).map((res) => (
                          <div
                            key={res}
                            className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                          >
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300 font-mono">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span className="truncate">{res}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="pt-2 flex flex-wrap items-center gap-1.5">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-slate-300"
                          >
                            {tech.toUpperCase()}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="pt-4 flex flex-wrap items-center gap-4">
                        <Link
                          href={`/case-studies/${project.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono transition-all group/btn"
                        >
                          <span>Read Full Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-300 hover:text-white font-mono text-xs transition-colors"
                          >
                            <span>Visit Live Portal</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Visual Showcase Card Column */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="relative rounded-2xl bg-[#070b16] border border-white/[0.1] p-6 sm:p-8 overflow-hidden group-hover:border-blue-500/40 transition-colors shadow-inner">
                        {/* Realistic Mockup Window Header */}
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            <span className="ml-2 font-mono text-[11px] text-slate-400">
                              {project.liveUrl ? project.liveUrl.replace("https://", "") : `${project.slug}.brayontech.com`}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            HTTPS 200 OK
                          </span>
                        </div>

                        {/* Interactive UI Mockup Card Content */}
                        <div className="space-y-4 text-left">
                          <div className="p-4 rounded-xl bg-[#0c1224] border border-white/[0.06] space-y-2">
                            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                              <span className="font-semibold text-white">{project.clientDisplayName}</span>
                              <span className="text-blue-400">{project.projectType}</span>
                            </div>
                            <div className="text-xs text-slate-300 leading-relaxed font-normal">
                              {project.overview.slice(0, 160)}...
                            </div>
                          </div>

                          {/* Architecture Highlights Pill Matrix */}
                          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-300">
                              <span className="text-slate-500 block text-[9px] uppercase">Frontend</span>
                              <span className="text-blue-300 truncate block">
                                {project.architecture.frontend[0]}
                              </span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-300">
                              <span className="text-slate-500 block text-[9px] uppercase">Backend / API</span>
                              <span className="text-cyan-300 truncate block">
                                {project.architecture.backend[0]}
                              </span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-300">
                              <span className="text-slate-500 block text-[9px] uppercase">Database Store</span>
                              <span className="text-emerald-300 truncate block">
                                {project.architecture.database[0]}
                              </span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-300">
                              <span className="text-slate-500 block text-[9px] uppercase">Security / Cloud</span>
                              <span className="text-purple-300 truncate block">
                                {project.architecture.cloud[0]}
                              </span>
                            </div>
                          </div>

                          {/* Key Features List */}
                          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                              Delivered Modules:
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {project.features.slice(0, 4).map((f) => (
                                <span
                                  key={f}
                                  className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 text-[10px] font-mono"
                                >
                                  {f}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* View All Work CTA */}
        <FadeUp delay={0.25}>
          <div className="mt-16 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] text-white font-medium text-xs font-mono transition-all group"
            >
              <span>Explore All Verified Production Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}

export default FeaturedProjectsSection;