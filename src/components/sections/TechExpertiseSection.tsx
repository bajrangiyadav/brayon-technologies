import React from "react";
import Link from "next/link";
import {
  Code2,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Cpu,
} from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";
import FadeUp from "../animations/FadeUp";

export function TechExpertiseSection() {
  const techCategories = [
    {
      category: "Frontend & Mobile",
      icon: Code2,
      description: "Sub-second, responsive user interfaces and cross-platform mobile apps.",
      technologies: [
        { name: "React", level: "Production Core", note: "Component architectures & SPAs" },
        { name: "Next.js", level: "Production Core", note: "Server components, SSR & Edge" },
        { name: "JavaScript / TypeScript", level: "Senior Mastery", note: "Type safety & modern ES6+" },
        { name: "Vue.js", level: "Supported", note: "Reactive interfaces & portals" },
        { name: "React Native / Flutter", level: "Production Active", note: "iOS & Android mobile apps" },
        { name: "Tailwind CSS", level: "Production Core", note: "Design systems & atomic styling" },
      ],
    },
    {
      category: "Backend & API Engineering",
      icon: Server,
      description: "High-concurrency servers, deterministic APIs, and secure business logic.",
      technologies: [
        { name: "PHP", level: "Production Core", note: "High-availability web systems" },
        { name: "Laravel", level: "Production Core", note: "Enterprise MVC, queues & ORM" },
        { name: "Node.js & Express", level: "Production Core", note: "Microservices & event loops" },
        { name: "RESTful APIs", level: "Senior Mastery", note: "Clean contracts & sub-100ms response" },
        { name: "ASP.NET / C#", level: "Production Active", note: "Enterprise exam result engine" },
        { name: "WebSockets", level: "Production Active", note: "Real-time state synchronization" },
      ],
    },
    {
      category: "Databases & Data Integrity",
      icon: Database,
      description: "Normalized schemas, ACID compliance, and instant indexed search queries.",
      technologies: [
        { name: "MySQL", level: "Production Core", note: "Student & order verification stores" },
        { name: "PostgreSQL", level: "Production Core", note: "Complex relational schemas & JSONB" },
        { name: "SQL Server", level: "Production Active", note: "Institutional academic databases" },
        { name: "Redis", level: "Production Core", note: "In-memory caching & rate limiting" },
        { name: "B-Tree Indexing", level: "Senior Mastery", note: "Sub-second roll-number search" },
        { name: "Automated Backup Pipelines", level: "Standard", note: "Zero-data-loss protection" },
      ],
    },
    {
      category: "Cloud, DevOps & Security",
      icon: Cloud,
      description: "Hardened infrastructure, continuous deployment, and encryption.",
      technologies: [
        { name: "Linux & NGINX", level: "Production Core", note: "Production server administration" },
        { name: "Docker", level: "Production Active", note: "Reproducible container environments" },
        { name: "AWS (EC2, S3, RDS)", level: "Production Active", note: "Scalable cloud infrastructure" },
        { name: "Vercel Edge", level: "Production Core", note: "Global CDN & serverless edge" },
        { name: "TLS 1.3 & SSL", level: "Standard", note: "End-to-end encrypted traffic" },
        { name: "Private Git CI/CD", level: "Standard", note: "100% Client ownership" },
      ],
    },
  ];

  return (
    <Section id="technology" spacing="xl" borderBottom className="bg-[#060a16] relative overflow-hidden">
      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <FadeUp delay={0.05}>
            <Eyebrow>VERIFIED ENGINEERING STACK</Eyebrow>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Technology Expertise Proven in Production.
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              We only claim expertise in technologies actively proven across our deployed production systems. Every tool in our stack is chosen for stability, performance, and long-term maintainability.
            </p>
          </FadeUp>
        </div>

        {/* 4-Column Technology Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <FadeUp key={cat.category} delay={0.08 * (idx + 1)}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#090e1d] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between text-left group hover:shadow-xl hover:shadow-blue-950/20">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-blue-600/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                      {cat.category}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed mb-5">
                      {cat.description}
                    </p>

                    {/* Tech List */}
                    <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                      {cat.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] space-y-1"
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-white">{tech.name}</span>
                            <span className="text-[10px] font-mono text-emerald-400">
                              {tech.level}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-400 font-normal">
                            {tech.note}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/[0.06] text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Production Verified</span>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default TechExpertiseSection;