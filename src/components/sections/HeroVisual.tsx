"use client";

import React, { useState } from "react";
import { useReducedMotion } from "framer-motion";
import {
  Cpu,
  Database,
  Cloud,
  Globe,
  Smartphone,
  Zap,
  Activity,
  Shield,
  Layers,
} from "lucide-react";

interface NodeData {
  id: string;
  label: string;
  category: string;
  icon: React.ElementType;
  x: number;
  y: number;
  status: string;
  metric: string;
}

const NODES: NodeData[] = [
  {
    id: "ai",
    label: "AI & LLM RUNTIMES",
    category: "INTELLIGENCE",
    icon: Cpu,
    x: 22,
    y: 20,
    status: "ACTIVE",
    metric: "45ms LATENCY",
  },
  {
    id: "data",
    label: "DATA ARCHITECTURE",
    category: "PIPELINES",
    icon: Database,
    x: 78,
    y: 20,
    status: "SYNCED",
    metric: "ACID STRICT",
  },
  {
    id: "cloud",
    label: "CLOUD INFRASTRUCTURE",
    category: "DEVOPS",
    icon: Cloud,
    x: 88,
    y: 54,
    status: "DEPLOYED",
    metric: "99.99% UPTIME",
  },
  {
    id: "web",
    label: "WEB APPLICATIONS",
    category: "NEXT.JS / REACT",
    icon: Globe,
    x: 74,
    y: 84,
    status: "EDGE SSR",
    metric: "< 1.1s LCP",
  },
  {
    id: "mobile",
    label: "MOBILE RUNTIMES",
    category: "REACT NATIVE",
    icon: Smartphone,
    x: 26,
    y: 84,
    status: "COMPILED",
    metric: "60 FPS NATIVE",
  },
  {
    id: "automation",
    label: "BUSINESS AUTOMATION",
    category: "WORKFLOWS",
    icon: Zap,
    x: 12,
    y: 54,
    status: "QUEUED",
    metric: "REALTIME",
  },
];

export function HeroVisual() {
  const [activeNode, setActiveNode] = useState<string>("ai");
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square sm:aspect-[4/3] rounded-2xl border border-white/[0.08] bg-[#070b16]/90 p-4 sm:p-6 overflow-hidden shadow-2xl shadow-blue-950/20 backdrop-blur-xl">
      {/* Background Architectural Grid */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3b82f6 1px, transparent 1px),
            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial subtle gradient backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/[0.06] rounded-full blur-3xl pointer-events-none" />

      {/* SVG Circuit Lines connecting Center to Nodes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Center coordinates: (50, 52) */}
        {NODES.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <g key={`conn-${node.id}`}>
              <line
                x1="50"
                y1="52"
                x2={node.x}
                y2={node.y}
                stroke={isActive ? "#3b82f6" : "rgba(255, 255, 255, 0.1)"}
                strokeWidth={isActive ? "0.6" : "0.3"}
                strokeDasharray={isActive ? "none" : "1, 1"}
              />
              {/* Data packet motion */}
              {!shouldReduceMotion && (
                <circle r="0.8" fill={isActive ? "#60a5fa" : "#3b82f6"} opacity="0.8">
                  <animateMotion
                    path={`M 50 52 L ${node.x} ${node.y}`}
                    dur={`${2.2 + (node.x % 3) * 0.4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* Outer Orbit Rings */}
        <circle
          cx="50"
          cy="52"
          r="38"
          fill="none"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="0.3"
          strokeDasharray="2, 3"
        />
        <circle
          cx="50"
          cy="52"
          r="22"
          fill="none"
          stroke="rgba(37, 99, 235, 0.15)"
          strokeWidth="0.4"
        />
      </svg>

      {/* Top Telemetry Bar */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/[0.08] text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="text-slate-200">SYSTEM ARCHITECTURE</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-500">ENGINEERING DISCIPLINE</span>
          <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px]">
            PRODUCTION
          </span>
        </div>
      </div>

      {/* Central BRAYON CORE HUB */}
      <div
        className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-[#0c1324] border border-blue-500/40 shadow-xl shadow-blue-950/40 text-center cursor-pointer transition-transform hover:scale-105"
        style={{ width: "130px", height: "96px" }}
      >
        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 mb-1">
          <Layers className="w-4 h-4" />
        </div>
        <div className="font-mono text-[11px] font-bold tracking-wider text-white">
          BRAYON CORE
        </div>
        <div className="text-[9px] font-mono text-slate-400">ENGINEERING</div>
      </div>

      {/* Nodes Positioning */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {NODES.map((node) => {
          const isActive = activeNode === node.id;
          const Icon = node.icon;

          return (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div
                role="button"
                tabIndex={0}
                aria-label={`${node.label} — ${node.metric}`}
                aria-pressed={isActive}
                onMouseEnter={() => setActiveNode(node.id)}
                onFocus={() => setActiveNode(node.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveNode(node.id);
                  }
                }}
                className={`group flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                  isActive
                    ? "bg-[#11192e] border-blue-500 shadow-lg shadow-blue-500/20 scale-105"
                    : "bg-[#090e1b]/90 border-white/[0.08] hover:border-white/[0.2] hover:bg-[#0e1628]"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-400"
                      : "bg-white/[0.04] text-slate-300 border-white/[0.08] group-hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-[10px] font-mono font-medium text-slate-200 group-hover:text-white leading-tight">
                    {node.label}
                  </div>
                  <div className="text-[9px] font-mono text-slate-500">
                    {node.metric}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Architectural Info Footer */}
      <div className="absolute bottom-3 left-6 right-6 z-10 hidden sm:flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <Shield className="w-3 h-3 text-blue-400" />
          <span>ZERO VENDOR LOCK-IN · 100% CODE OWNERSHIP</span>
        </div>
        <div className="text-slate-400">
          NODE: <span className="text-blue-400 font-semibold">{activeNode.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}

export default HeroVisual;
