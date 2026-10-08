import React from "react";
import Link from "next/link";
import {
  Lock,
  CloudUpload,
  UserCheck,
  KeyRound,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import FadeUp from "../animations/FadeUp";

interface SecurityPillar {
  title: string;
  icon: React.ElementType;
  description: string;
}

const SECURITY_PILLARS: SecurityPillar[] = [
  {
    title: "Secure Development",
    icon: Lock,
    description: "Input sanitization, parameterized SQL queries, CSRF tokens, and OWASP top-10 defense built-in.",
  },
  {
    title: "Backup Strategy",
    icon: CloudUpload,
    description: "Automated daily database snapshots with off-site retention so your records are never at risk.",
  },
  {
    title: "Role-Based Access",
    icon: UserCheck,
    description: "Strict isolation between Super-Admin, Branch Managers, Staff, and End Users with audit trails.",
  },
  {
    title: "Authentication",
    icon: KeyRound,
    description: "Encrypted password hashing (Argon2/Bcrypt), JWT/session rotation, and multi-factor ready security.",
  },
  {
    title: "Data Protection",
    icon: ShieldCheck,
    description: "Full TLS 1.3 encryption in transit, strict security headers, and zero third-party telemetry leakage.",
  },
];

export function SecurityOwnershipSection() {
  return (
    <Section spacing="lg" borderBottom className="bg-[#050811]">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <FadeUp delay={0.05}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <span>ZERO VENDOR LOCK-IN &amp; DATA PRIVACY</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Your Business. Your Data. Your Software.
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              We don&apos;t lock you into our platform. Your business data and project ownership remain 100% under your control from day one.
            </p>
          </FadeUp>
        </div>

        {/* 5 Security Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SECURITY_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <FadeUp key={pillar.title} delay={0.05 * idx}>
                <div className="h-full p-5 rounded-2xl bg-[#090f1d] border border-white/[0.08] hover:border-emerald-500/40 transition-all text-left flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Reassurance Callout */}
        <FadeUp delay={0.25}>
          <div className="mt-8 p-6 rounded-2xl bg-[#091122] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="text-xs sm:text-sm text-slate-300">
              <span className="text-white font-semibold">100% IP Handover:</span> At project completion, we hand over full Git repositories, database scripts, server access, and credentials.
            </div>
            <Link
              href="/contact"
              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 shrink-0"
            >
              <span>Speak with solutions architect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}

export default SecurityOwnershipSection;
