"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projects";
import {
  ArrowRight,
  ExternalLink,
  TrendingUp,
} from "lucide-react";

export default function WorkClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "E-Commerce", "Enterprise Systems"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Work Header */}
        <section className="relative py-20 border-b border-slate-800/80 bg-gradient-to-b from-[#0A1128] to-[#070B19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-mono mb-6">
              <span>AUTHENTIC PROOF OVER PROMISES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
              Production Work &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                Architectural Case Studies
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Every digital product showcased here is a verified client platform or internal system engineered for real businesses with measurable revenue growth and zero technical debt.
            </p>

            {/* Filter Tabs */}
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies List */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="rounded-3xl bg-slate-900/50 border border-slate-800/90 overflow-hidden hover:border-blue-500/40 transition-all hover:bg-slate-900/70 p-6 sm:p-10 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Overview Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-mono">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{project.industry}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-mono text-slate-400">Duration: {project.duration}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {project.title}
                  </h2>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.tagline}
                  </p>

                  <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Business Challenge Solved:
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.challenge.description}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Core Technologies:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-slate-300"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/work/${project.slug}`}
                      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-blue-600/30 flex items-center gap-2"
                    >
                      <span>Read Full Architecture Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
                      >
                        <span>Visit Live Website</span>
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Metrics & Proof Column */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6 sm:p-8 space-y-6">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span>Verified Business Impact</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {project.results.map((res, rIdx) => (
                        <div
                          key={rIdx}
                          className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 text-center"
                        >
                          <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">
                            {res.metric}
                          </div>
                          <div className="text-xs font-semibold text-slate-200 mt-1">
                            {res.label}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                            {res.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    {project.testimonial && (
                      <div className="pt-4 border-t border-slate-800/80">
                        <p className="text-xs italic text-slate-300 leading-relaxed">
                          &ldquo;{project.testimonial.quote}&rdquo;
                        </p>
                        <div className="mt-3 text-xs font-medium text-slate-400">
                          <span className="text-white font-semibold">{project.testimonial.author}</span>
                          {" • "}
                          <span>{project.testimonial.role}, {project.testimonial.company}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Bottom Consultation Banner */}
        <section className="py-20 border-t border-slate-800/80 bg-[#050814]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-extrabold text-white">Have a project with similar technical requirements?</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide direct consultation with our lead engineers. We will review your architecture, identify potential bottlenecks, and outline a realistic 2-week sprint plan.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
