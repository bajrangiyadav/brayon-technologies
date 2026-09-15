import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  Server,
  Layers,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found | BRAYON Technologies",
    };
  }

  return {
    title: `${project.title} | Case Study | BRAYON Technologies`,
    description: project.overview,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find other projects for "More Case Studies"
  const otherProjects = projects.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Back Link & Header */}
        <section className="pt-12 pb-16 border-b border-slate-800/80 bg-gradient-to-b from-[#0A1128] to-[#070B19]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all Case Studies</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-mono">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">{project.industry}</span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-mono text-slate-400">Timeline: {project.duration}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              {project.tagline}
            </p>

            {project.liveUrl && (
              <div className="pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-all"
                >
                  <span>Visit Production Platform</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Quantified Results Bar */}
        <section className="py-12 bg-[#050814] border-b border-slate-800/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Verified Production Impact</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.results.map((res, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 text-center space-y-1"
                >
                  <div className="text-3xl font-extrabold text-blue-400">{res.metric}</div>
                  <div className="text-xs font-semibold text-slate-200">{res.label}</div>
                  <div className="text-[11px] text-slate-400 leading-snug">{res.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Case Study Body */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Executive Overview */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Executive Overview</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{project.overview}</p>
          </div>

          {/* The Challenge */}
          <div className="rounded-3xl bg-slate-900/50 border border-slate-800 p-6 sm:p-10 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-mono">
              THE BUSINESS BOTTLENECK
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{project.challenge.title}</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.challenge.description}
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Identified Operational Pain Points:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.challenge.painPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5"
                  >
                    <span className="text-red-400 font-bold shrink-0">!</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The Technical Solution */}
          <div className="rounded-3xl bg-slate-900/50 border border-slate-800 p-6 sm:p-10 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono">
              ENGINEERING & ARCHITECTURE
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{project.solution.title}</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.solution.description}
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Architectural Implementations:
              </div>
              <div className="space-y-2.5">
                {project.solution.architecturalHighlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Breakdown */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Full Technology Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {project.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-center"
                >
                  <div className="text-sm font-bold text-white">{tech.name}</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-950/30 to-slate-900 border border-blue-500/20 space-y-4">
              <p className="text-sm sm:text-base italic text-slate-200 leading-relaxed">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <div className="text-xs text-slate-400">
                <span className="font-bold text-white">{project.testimonial.author}</span>
                {" • "}
                <span>{project.testimonial.role}, {project.testimonial.company}</span>
              </div>
            </div>
          )}

          {/* Other Projects */}
          <div className="pt-8 border-t border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white">Explore More Case Studies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherProjects.map((op) => (
                <Link
                  key={op.slug}
                  href={`/work/${op.slug}`}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all block group"
                >
                  <div className="text-xs font-mono text-blue-300 mb-1">{op.category}</div>
                  <div className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {op.client}
                  </div>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {op.tagline}
                  </p>
                  <div className="mt-3 text-xs font-semibold text-blue-400 flex items-center gap-1">
                    <span>View Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Discovery CTA */}
        <section className="py-20 border-t border-slate-800/80 bg-[#050814]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-extrabold text-white">
              Want similar results for your business platform?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Let&apos;s evaluate your current technical stack and identify high-impact opportunities for speed, stability, and conversion optimization.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <span>Book Architecture Discovery Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition-all border border-slate-700"
              >
                <span>Back to Case Studies</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
