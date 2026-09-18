"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Server,
  Database,
  Globe,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Cpu,
  Layers,
} from "lucide-react";

interface SystemTier {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  tech: string;
  spec: string;
  metrics: string;
  details: string[];
}

interface ProjectArchitecture {
  id: "jbce" | "mhvp";
  name: string;
  shortName: string;
  domain: string;
  url: string;
  purpose: string;
  tiers: SystemTier[];
}

const ARCHITECTURES: Record<"jbce" | "mhvp", ProjectArchitecture> = {
  jbce: {
    id: "jbce",
    name: "Jay Balaji Computer Education",
    shortName: "JBCE System",
    domain: "jbce.in",
    url: "https://jbce.in/",
    purpose: "Student Verification, Course Management & Center Administration",
    tiers: [
      {
        id: "ui",
        name: "Client Presentation Tier",
        category: "FRONTEND ARCHITECTURE",
        icon: Globe,
        tech: "React · TypeScript · Tailwind CSS",
        spec: "Mobile-responsive portal, instantaneous search index, sub-second LCP",
        metrics: "Verified across 100% mobile viewports",
        details: [
          "Optimized student enrollment & certificate search workflows",
          "Clean responsive UI for center managers and students",
          "Zero layout shift with strict font & asset preloading",
        ],
      },
      {
        id: "api",
        name: "Application & API Gateway",
        category: "BUSINESS LOGIC",
        icon: Cpu,
        tech: "RESTful API · Session Security · Input Sanitization",
        spec: "Center authentication, parameterized certificate validation requests",
        metrics: "Sub-100ms lookup latency",
        details: [
          "Strict input validation preventing SQL/XSS injection",
          "Role-based access controls for branch managers",
          "Structured JSON response contracts for instant verification",
        ],
      },
      {
        id: "db",
        name: "Relational Verification Store",
        category: "PERSISTENCE & INTEGRITY",
        icon: Database,
        tech: "MySQL / Relational Schema · B-Tree Indexing",
        spec: "ACID transactions, indexed student records, registration hash indexing",
        metrics: "Exact lookup query execution",
        details: [
          "Normalized schema for students, centers, and courses",
          "Indexed registration numbers for instantaneous lookup",
          "Relational foreign key constraints preventing orphan records",
        ],
      },
      {
        id: "infra",
        name: "Edge & Host Infrastructure",
        category: "PRODUCTION DEVOPS",
        icon: Server,
        tech: "Linux Host · NGINX · SSL/TLS Encryption",
        spec: "Production hardened, automated backup schedules, HTTPS enforcement",
        metrics: "Live active production system",
        details: [
          "Automated daily database dumps & offsite retention",
          "Full TLS 1.3 encryption with strict HTTP headers",
          "Direct production deployment maintained by BRAYON",
        ],
      },
    ],
  },
  mhvp: {
    id: "mhvp",
    name: "Mumbai Hindi Vidyapeeth",
    shortName: "MHVP System",
    domain: "mhvp.org",
    url: "https://mhvp.org/",
    purpose: "Institutional Portal, Examination Records & Marksheet Verification",
    tiers: [
      {
        id: "ui",
        name: "Institutional Web Portal",
        category: "FRONTEND ARCHITECTURE",
        icon: Globe,
        tech: "Semantic HTML5 · Responsive Engine · Modern CSS",
        spec: "Accessible typography for institutional visitors, high-contrast layouts",
        metrics: "Fast load on 3G/4G networks",
        details: [
          "Clear institutional information architecture and examination notices",
          "Dedicated online mark-sheet verification interface",
          "Bilingual readability with robust font rendering",
        ],
      },
      {
        id: "api",
        name: "Verification & Logic Tier",
        category: "BUSINESS LOGIC",
        icon: Cpu,
        tech: "Secure API Handler · Parameterized Query Filter",
        spec: "Multi-parameter verification (Roll No, Year, Examination Center)",
        metrics: "Zero false-positive lookups",
        details: [
          "Deterministic verification algorithm matching official registers",
          "Tamper-resistant response payloads with digital watermarking",
          "Rate-limited endpoints to prevent bulk student data scraping",
        ],
      },
      {
        id: "db",
        name: "Examination Registry Database",
        category: "PERSISTENCE & INTEGRITY",
        icon: Database,
        tech: "Relational Academic Ledger · Read-Replication Ready",
        spec: "Historical examination records, archival index, audit trails",
        metrics: "ACID transaction guarantees",
        details: [
          "Longitudinal schema accommodating decades of academic results",
          "Immutable grade verification tables with checksum audits",
          "Strict data privacy standards for student personal identifiers",
        ],
      },
      {
        id: "infra",
        name: "Host & Security Hardening",
        category: "PRODUCTION DEVOPS",
        icon: Server,
        tech: "Hardened Linux · Firewall Filter · SSL/TLS",
        spec: "Monitored uptime, security patching, reliable institutional hosting",
        metrics: "Continuous production uptime",
        details: [
          "Enterprise SSL encryption protecting institutional integrity",
          "DDoS mitigation and web application firewall rules",
          "Production infrastructure managed and maintained by BRAYON",
        ],
      },
    ],
  },
};

export function HeroVisual() {
  const [activeProject, setActiveProject] = useState<"jbce" | "mhvp">("jbce");
  const [selectedTierIndex, setSelectedTierIndex] = useState<number>(0);

  const currentArch = ARCHITECTURES[activeProject];
  const activeTier = currentArch.tiers[selectedTierIndex] || currentArch.tiers[0];

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-xl border border-white/[0.12] bg-[#070d1a] overflow-hidden shadow-2xl shadow-blue-950/40 text-left">
      {/* Workbench Header: Project Selector & Live Status */}
      <div className="px-4 py-3 bg-[#0a1224] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2.5">
        {/* Project Selector Tabs */}
        <div className="flex items-center gap-1.5 p-0.5 rounded-lg bg-black/40 border border-white/[0.06]" role="tablist" aria-label="Delivered Production Systems">
          <button
            type="button"
            role="tab"
            aria-selected={activeProject === "jbce"}
            aria-controls="workbench-panel"
            onClick={() => {
              setActiveProject("jbce");
              setSelectedTierIndex(0);
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all ${
              activeProject === "jbce"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            jbce.in
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeProject === "mhvp"}
            aria-controls="workbench-panel"
            onClick={() => {
              setActiveProject("mhvp");
              setSelectedTierIndex(0);
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all ${
              activeProject === "mhvp"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            mhvp.org
          </button>
        </div>

        {/* Live System Indicator */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ACTIVE PRODUCTION</span>
          </span>
          <Link
            href={currentArch.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white p-1 rounded transition-colors"
            title={`Visit live production site ${currentArch.domain}`}
            aria-label={`Visit live site ${currentArch.domain}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Project Title & Purpose */}
      <div className="px-4 py-2.5 bg-[#080f1e] border-b border-white/[0.06] flex items-center justify-between gap-3 text-xs">
        <div className="min-w-0">
          <div className="text-white font-medium truncate">{currentArch.name}</div>
          <div className="text-slate-400 text-[11px] truncate">{currentArch.purpose}</div>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400 shrink-0">
          <Layers className="w-3.5 h-3.5 text-blue-400" />
          <span>4-TIER ARCHITECTURE</span>
        </div>
      </div>

      {/* Architectural Stack Tiers Grid */}
      <div id="workbench-panel" className="p-4 space-y-2">
        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center justify-between">
          <span>System Tiers (Click to inspect)</span>
          <span className="text-blue-400">Inspecting: Tier {selectedTierIndex + 1}/4</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {currentArch.tiers.map((tier, idx) => {
            const isSelected = selectedTierIndex === idx;
            const Icon = tier.icon;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => setSelectedTierIndex(idx)}
                className={`w-full p-2.5 rounded-lg border text-left transition-all flex items-start gap-2.5 ${
                  isSelected
                    ? "bg-blue-950/40 border-blue-500/60 ring-1 ring-blue-500/40"
                    : "bg-[#0a1222] border-white/[0.08] hover:border-white/[0.2] hover:bg-[#0c162a]"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 border ${
                    isSelected
                      ? "bg-blue-600 text-white border-blue-400"
                      : "bg-white/[0.04] text-slate-300 border-white/[0.08]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[11px] font-mono font-medium text-white truncate">
                      {tier.name}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                    )}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">
                    {tier.tech}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Tier Inspection Workbench */}
        <div className="mt-3 p-3.5 rounded-lg bg-[#050a14] border border-blue-500/30 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] mb-2.5">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-blue-500/15 text-blue-300 border border-blue-500/30">
                {activeTier.category}
              </span>
              <span className="font-mono text-white font-medium text-[11px]">
                {activeTier.name}
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-medium">
              {activeTier.metrics}
            </span>
          </div>

          <p className="text-slate-300 text-[11px] leading-relaxed mb-2.5">
            {activeTier.spec}
          </p>

          <ul className="space-y-1 text-[11px] text-slate-400">
            {activeTier.details.map((detail) => (
              <li key={detail} className="flex items-start gap-1.5">
                <span className="text-blue-400 font-mono mt-0.5">›</span>
                <span className="text-slate-300">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Guarantees */}
      <div className="px-4 py-2 bg-[#080f1e] border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>DIRECT SENIOR ENGINEERING · 100% IP HANDOVER</span>
        </div>
        <Link
          href={`/case-studies/${activeProject}`}
          className="text-blue-400 hover:text-blue-300 hover:underline inline-flex items-center gap-1"
        >
          <span>Read Case Study</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}

export default HeroVisual;
