"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Cpu,
  Layers,
  Search,
  Activity,
  ArrowUpRight,
  Database,
  Lock,
  Zap,
} from "lucide-react";

type ActiveTab = "verification" | "examination" | "commerce";

export function HeroVisual() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("verification");
  const [rollQuery, setRollQuery] = useState("JBCE-2026-9042");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifiedResult, setVerifiedResult] = useState<boolean | null>(true);

  const handleSimulatedSearch = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerifiedResult(true);
    }, 400);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Background radial glow */}
      <div className="absolute -top-12 -left-12 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Terminal / Dashboard Container */}
      <div className="relative rounded-2xl bg-[#0a0f1e] border border-white/[0.12] shadow-2xl shadow-blue-950/40 overflow-hidden backdrop-blur-xl">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#070b16] border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 font-medium">
              brayon://platform-runtime/v2.6
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Production Live</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              18ms · TLS 1.3
            </span>
          </div>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex items-center border-b border-white/[0.08] bg-[#0c1224]/80 p-1.5 gap-1 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("verification")}
            className={`flex-1 min-w-[130px] px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === "verification"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Verification Engine</span>
          </button>

          <button
            onClick={() => setActiveTab("examination")}
            className={`flex-1 min-w-[130px] px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === "examination"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
            }`}
          >
            <Activity className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Result Publication</span>
          </button>

          <button
            onClick={() => setActiveTab("commerce")}
            className={`flex-1 min-w-[130px] px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === "commerce"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
            }`}
          >
            <Database className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">B2B Commerce ERP</span>
          </button>
        </div>

        {/* Tab 1: Verification Engine (JBCE Live Model) */}
        {activeTab === "verification" && (
          <div className="p-5 sm:p-6 space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Real Production System · jbce.in</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mt-1">
                  Jay Balaji Computer Education (ISO 9001:2015)
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Tamper-proof student record indexing &amp; instant digital certificate authentication.
                </p>
              </div>
              <a
                href="https://jbce.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-300 hover:text-white transition-colors"
                title="Open live site jbce.in"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Simulated Live Query Engine */}
            <div className="p-3.5 rounded-xl bg-[#070b16] border border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5 text-blue-400" />
                  <span>Live Student Registry Query</span>
                </span>
                <span className="text-emerald-400 font-semibold">Sub-0.4s response</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    value={rollQuery}
                    onChange={(e) => setRollQuery(e.target.value)}
                    placeholder="Enter Student Roll No"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSimulatedSearch}
                  disabled={isVerifying}
                  className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium font-mono transition-colors disabled:opacity-50 shrink-0"
                >
                  {isVerifying ? "Verifying..." : "Authenticate"}
                </button>
              </div>

              {/* Verified Result Card */}
              {verifiedResult && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center justify-between animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Accredited Student:</span>{" "}
                      <span>Adv. Diploma in Computer Application</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[10px] font-bold uppercase text-emerald-200">
                    Verified Authentic
                  </span>
                </div>
              )}
            </div>

            {/* Architecture Telemetry Grid */}
            <div className="grid grid-cols-3 gap-3 text-left">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Verification Speed</div>
                <div className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                  &lt; 0.6s
                </div>
                <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Instant Lookup</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Document Fraud</div>
                <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono mt-0.5">
                  0%
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">Tamper-Proof</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Architecture</div>
                <div className="text-sm sm:text-base font-bold text-blue-400 font-mono mt-0.5">
                  PHP · MySQL
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">B-Tree Indexed</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Examination Result Engine (MHVP Live Model) */}
        {activeTab === "examination" && (
          <div className="p-5 sm:p-6 space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Real Production System · mhvp.org</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mt-1">
                  Mumbai Hindi Vidyapeeth (मुंबई हिन्दी विद्यापीठ)
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  High-concurrency academic portal powering multi-state examination management &amp; results.
                </p>
              </div>
              <a
                href="https://mhvp.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-300 hover:text-white transition-colors"
                title="Open live site mhvp.org"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* High Concurrency Telemetry Visual */}
            <div className="p-3.5 rounded-xl bg-[#070b16] border border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Peak Examination Result Traffic</span>
                <span className="text-emerald-400 font-semibold">0s Downtime Measured</span>
              </div>

              {/* Concurrency Bar Simulation */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>Simultaneous Lookups</span>
                  <span className="text-cyan-400 font-semibold">4,200+ candidates/min</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-full w-[84%]" />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Lock className="w-3 h-3 text-cyan-400" />
                  <span>Role Separation: Central Admin / Center Supervisors</span>
                </span>
                <span className="text-emerald-400">100+ Centers</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 text-left">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Affiliated Centers</div>
                <div className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                  100+ Centers
                </div>
                <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Multi-State Network</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Peak Downtime</div>
                <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono mt-0.5">
                  0 Seconds
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">Guaranteed Uptime</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Languages</div>
                <div className="text-sm sm:text-base font-bold text-blue-400 font-mono mt-0.5">
                  Bilingual
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">Hindi &amp; English</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: B2B Commerce & ERP */}
        {activeTab === "commerce" && (
          <div className="p-5 sm:p-6 space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Wholesale &amp; Retail Engine · safegrowtrade.com</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mt-1">
                  SafeGrowTrade &amp; Enterprise Operations
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Tiered wholesale pricing, automated order lifecycles &amp; multi-branch inventory sync.
                </p>
              </div>
              <a
                href="https://safegrowtrade.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-300 hover:text-white transition-colors"
                title="Open live site safegrowtrade.com"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Commerce Order Flow Visual */}
            <div className="p-3.5 rounded-xl bg-[#070b16] border border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Automated Order State Machine</span>
                <span className="text-emerald-400 font-semibold">100% Digital Reconciled</span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
                <div className="p-2 rounded bg-blue-600/20 border border-blue-500/30 text-blue-300">
                  1. Order Placed
                </div>
                <div className="p-2 rounded bg-blue-600/20 border border-blue-500/30 text-blue-300">
                  2. Payment Verified
                </div>
                <div className="p-2 rounded bg-cyan-600/20 border border-cyan-500/30 text-cyan-300">
                  3. Packing Slip
                </div>
                <div className="p-2 rounded bg-emerald-600/20 border border-emerald-500/30 text-emerald-300">
                  4. Dispatched
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-1">
                <span>Wholesale Tier Discount: Applied (-22%)</span>
                <span className="text-emerald-400 font-semibold">Payment: Gateway Verified ✓</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 text-left">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Time Saved</div>
                <div className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                  15+ Hrs/Wk
                </div>
                <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Manual Work Cut</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Stock Discrepancy</div>
                <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono mt-0.5">
                  0% Mismatch
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">Real-Time Sync</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Architecture</div>
                <div className="text-sm sm:text-base font-bold text-blue-400 font-mono mt-0.5">
                  Laravel · Next.js
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">Edge Deployed</div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Code / Trust Strip */}
        <div className="px-4 py-2.5 bg-[#070b16] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-slate-300">100% Private Git &amp; Cloud Ownership</span>
          </div>
          <Link
            href="/work"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
          >
            <span>Explore All 6 Case Studies</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Floating Accent Cards for depth & art direction */}
      <div className="hidden md:flex items-center gap-3 absolute -bottom-6 -left-6 p-3.5 rounded-xl bg-[#0e1629]/95 border border-blue-500/30 shadow-xl backdrop-blur-md text-xs">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <div className="font-semibold text-white font-mono">98+ Core Web Vitals</div>
          <div className="text-slate-400 text-[11px]">Sub-second edge response</div>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-3 absolute -top-5 -right-5 p-3.5 rounded-xl bg-[#0e1629]/95 border border-cyan-500/30 shadow-xl backdrop-blur-md text-xs">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <div className="font-semibold text-white font-mono">Senior Architect Led</div>
          <div className="text-slate-400 text-[11px]">Zero junior agency handoffs</div>
        </div>
      </div>
    </div>
  );
}

export default HeroVisual;