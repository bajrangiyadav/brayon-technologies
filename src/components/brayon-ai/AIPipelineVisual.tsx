"use client";

import React, { useState } from "react";
import {
  FileText,
  Cpu,
  GitFork,
  Zap,
  CheckCircle2,
  ArrowRight,
  Shield,
} from "lucide-react";

interface PipelineStage {
  id: string;
  step: string;
  label: string;
  category: string;
  icon: React.ElementType;
  description: string;
  telemetry: string;
  specs: string[];
}

const STAGES: PipelineStage[] = [
  {
    id: "input",
    step: "01",
    label: "Input Ingestion",
    category: "UNSTRUCTURED INGEST",
    icon: FileText,
    description: "Multi-channel ingestion of customer voice streams, invoices, and webhook events.",
    telemetry: "RAW AUDIO / JSON / PDF",
    specs: ["Twilio Media Streams", "REST Webhook Payloads", "Document Buffers"],
  },
  {
    id: "processing",
    step: "02",
    label: "AI Processing",
    category: "LLM INFERENCE",
    icon: Cpu,
    description: "Speech-to-text transcription, context grounding, and structured JSON entity extraction.",
    telemetry: "45ms INFERENCE P95",
    specs: ["OpenAI / Anthropic APIs", "Custom System Prompts", "Strict JSON Schemas"],
  },
  {
    id: "decision",
    step: "03",
    label: "Decision Engine",
    category: "DETERMINISTIC EVAL",
    icon: GitFork,
    description: "Hybrid rule checks validating qualification score, budget limits, and routing logic.",
    telemetry: "100% AUDITABLE RULES",
    specs: ["Deterministic Guardrails", "Budget Threshold Rules", "Human Fallback Check"],
  },
  {
    id: "automation",
    step: "04",
    label: "Workflow Automation",
    category: "ASYNCHRONOUS JOBS",
    icon: Zap,
    description: "Queue workers trigger database updates, dispatch WhatsApp notifications, and sync CRMs.",
    telemetry: "JOB DISPATCH < 100ms",
    specs: ["Redis Task Queues", "CRM Webhook Sync", "Automated SMS / WhatsApp"],
  },
  {
    id: "outcome",
    step: "05",
    label: "Business Outcome",
    category: "PRODUCTION VALUE",
    icon: CheckCircle2,
    description: "Qualified sales lead in database, verified invoice booked, and zero manual data entry.",
    telemetry: "ZERO HUMAN FRICTION",
    specs: ["Instant Lead Routing", "Normalized Database Record", "Audit Trail Recorded"],
  },
];

export function AIPipelineVisual() {
  const [activeStageId, setActiveStageId] = useState<string>("processing");

  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[1];

  return (
    <div className="w-full rounded-3xl bg-[#090e1b] border border-white/[0.08] p-6 sm:p-10 shadow-2xl shadow-blue-950/20">
      {/* Visual Header / Telemetry Bar */}
      <div className="flex flex-wrap items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
        <div>
          <div className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">
            PIPELINE ARCHITECTURE
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mt-0.5">
            Deterministic AI Workflow Execution
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06]">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>REAL-TIME PIPELINE TELEMETRY</span>
        </div>
      </div>

      {/* Interactive Pipeline Stages Sequence */}
      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStageId === stage.id;

            return (
              <div key={stage.id} className="relative flex flex-col">
                <button
                  type="button"
                  onClick={() => setActiveStageId(stage.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-full group ${
                    isActive
                      ? "bg-[#111a33] border-blue-500 shadow-lg shadow-blue-500/20"
                      : "bg-[#0c1324] border-white/[0.08] hover:border-white/[0.18] hover:bg-[#0f172b]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-blue-400 font-bold">
                        {stage.step}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-colors ${
                          isActive
                            ? "bg-blue-600 text-white border-blue-400"
                            : "bg-white/[0.04] text-slate-400 border-white/[0.06] group-hover:text-white"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wide">
                      {stage.category}
                    </div>
                    <div className="text-sm font-semibold text-white mt-1">
                      {stage.label}
                    </div>
                  </div>

                  <div className="mt-4 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-slate-400">
                    {stage.telemetry}
                  </div>
                </button>

                {/* Connecting arrow indicator for desktop */}
                {idx < STAGES.length - 1 && (
                  <div className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-[#070a12] border border-white/[0.12] items-center justify-center text-slate-400 pointer-events-none">
                    <ArrowRight className="w-2.5 h-2.5 text-blue-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Stage Deep-Dive Detail View */}
      <div className="p-6 rounded-2xl bg-[#0c1324] border border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                PHASE {activeStage.step}: {activeStage.category}
              </span>
              <span className="text-xs font-mono text-slate-500">STAGE SPECIFICATION</span>
            </div>
            <h4 className="text-xl font-semibold text-white">{activeStage.label}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {activeStage.description}
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#070b16] p-4 rounded-xl border border-white/[0.06]">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-blue-400" />
              <span>TECHNICAL IMPLEMENTATION STACK</span>
            </div>
            <ul className="space-y-1.5 text-xs font-mono text-slate-300">
              {activeStage.specs.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIPipelineVisual;
