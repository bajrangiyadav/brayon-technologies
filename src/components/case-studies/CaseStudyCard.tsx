import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CaseStudy } from "@/types/caseStudy";
import { getTechnologyById } from "@/data/technologies";
import Card from "../common/Card";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
}

export function CaseStudyCard({ caseStudy, featured = false }: CaseStudyCardProps) {
  const techNames = caseStudy.technologies
    .map((id) => getTechnologyById(id)?.name || id)
    .slice(0, featured ? 6 : 4);

  if (featured) {
    return (
      <div className="relative rounded-3xl bg-[#0d1322] border border-white/[0.08] hover:border-white/[0.18] transition-all overflow-hidden group">
        <Link href={`/case-studies/${caseStudy.slug}`} className="block">
          {/* Featured Visual */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#070b16] border-b border-white/[0.08] overflow-hidden flex items-center justify-center">
            {/* Architectural Grid Overlay */}
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
            <div className="relative w-48 sm:w-64 h-24 sm:h-32 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={caseStudy.thumbnailImage}
                alt={caseStudy.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-600/20 text-blue-400 border border-blue-500/30 backdrop-blur-sm">
                FEATURED ARCHITECTURE
              </span>
            </div>
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-xs font-mono text-slate-400 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
              {caseStudy.industry}
            </div>
          </div>

          {/* Featured Content */}
          <div className="p-6 sm:p-10 lg:p-12 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="font-mono text-xs text-blue-400 uppercase tracking-wider">
                {caseStudy.projectType}
              </div>
              <div className="text-xs font-mono text-slate-500">
                CLIENT: <span className="text-slate-300">{caseStudy.clientDisplayName}</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white group-hover:text-blue-300 transition-colors">
              {caseStudy.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              {caseStudy.shortDescription}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {techNames.map((name) => (
                <span
                  key={name}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                >
                  {name}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-sm font-mono text-blue-400 group-hover:text-blue-300">
              <span className="font-medium">Explore Complete Engineering Case Study</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <Card variant="interactive" padding="none" className="h-full flex flex-col justify-between group">
      <Link href={`/case-studies/${caseStudy.slug}`} className="flex flex-col h-full">
        {/* Card Thumbnail */}
        <div className="relative w-full aspect-[16/9] bg-[#070b16] border-b border-white/[0.08] overflow-hidden flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, #3b82f6 1px, transparent 1px),
                linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative w-36 h-20 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={caseStudy.thumbnailImage}
              alt={caseStudy.title}
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-3 left-3">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.06] text-slate-300 border border-white/[0.1] backdrop-blur-sm">
              {caseStudy.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono text-blue-400 mb-1">
              <span>{caseStudy.projectType}</span>
              <span className="text-slate-500 font-normal">{caseStudy.clientDisplayName}</span>
            </div>

            <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors mb-2">
              {caseStudy.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
              {caseStudy.shortDescription}
            </p>
          </div>

          <div>
            {/* Tech tags */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5 mb-4">
              {techNames.map((name) => (
                <span
                  key={name}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-400 border border-white/[0.06]"
                >
                  {name}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-blue-400 transition-colors">
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}

export default CaseStudyCard;
