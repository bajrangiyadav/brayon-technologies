import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";
import FadeUp from "../animations/FadeUp";

export function TrustProofSection() {
  const verifiedProjects = [
    {
      name: "Jay Balaji Computer Education (JBCE)",
      category: "Education & Student Verification Portal",
      stack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "REST APIs"],
      href: "/case-studies/jbce",
      liveUrl: "https://jbce.in/",
    },
    {
      name: "Mumbai Hindi Vidyapeeth (MHVP)",
      category: "Academic Examination & Result System",
      stack: ["Enterprise Application", "SQL Database", "Result Engine", "Bootstrap"],
      href: "/case-studies/mhvp",
      liveUrl: "https://mhvp.org/",
    },
  ];

  const clients = [
    {
      name: "Jay Balaji Computer Education",
      sub: "ISO 9001:2015 Certified Institute",
      url: "https://jbce.in/",
      status: "Live & Active",
    },
    {
      name: "Mumbai Hindi Vidyapeeth",
      sub: "Historic Academic Examination Institution",
      url: "https://mhvp.org/",
      status: "Live & Active",
    },
  ];

  return (
    <Section variant="surface" spacing="lg" borderBottom>
      <Container>
        <SectionHeading
          eyebrow="VERIFIED WORK & TRACK RECORD"
          title="Built for Real Organizations."
          description="BRAYON Technologies designs and delivers production-grade software engineered to solve operational bottlenecks, process real records, and scale reliably."
        />

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FadeUp delay={0.05}>
            <Card variant="default" padding="md" className="h-full">
              <div className="font-mono text-3xl sm:text-4xl font-semibold text-white">2</div>
              <div className="text-sm font-medium text-slate-200 mt-2">
                Active Production Platforms
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Live educational management portals, student verification engines, and multi-center examination systems.
              </p>
            </Card>
          </FadeUp>

          <FadeUp delay={0.1}>
            <Card variant="default" padding="md" className="h-full">
              <div className="font-mono text-3xl sm:text-4xl font-semibold text-white">2</div>
              <div className="text-sm font-medium text-slate-200 mt-2">
                Real Client Partnerships
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Direct long-term engineering collaboration with educational institutions and administrative stakeholders.
              </p>
            </Card>
          </FadeUp>

          <FadeUp delay={0.15}>
            <Card variant="default" padding="md" className="h-full">
              <div className="font-mono text-3xl sm:text-4xl font-semibold text-blue-400">100%</div>
              <div className="text-sm font-medium text-slate-200 mt-2">
                Intellectual Property Ownership
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Complete Git repository, database architecture, and deployment pipeline transfer upon delivery.
              </p>
            </Card>
          </FadeUp>
        </div>

        {/* Client Transparency Cards */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-mono tracking-wider uppercase text-slate-400">
              PRODUCTION CLIENT PARTNERSHIPS
            </h3>
            <span className="text-[11px] font-mono text-slate-500">
              VERIFIED LIVE PLATFORMS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {clients.map((client, idx) => (
              <div
                key={client.name}
                className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-mono text-xs font-bold text-blue-400 shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <div className="font-mono text-sm font-semibold text-slate-200">{client.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{client.sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{client.status}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Projects List */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white">2 Active Production Projects</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Delivered and actively operational platforms serving real users, students, and institutional administrators daily.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>View detailed case studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verifiedProjects.map((proj) => (
              <Link
                key={proj.name}
                href={proj.href}
                className="group p-6 rounded-2xl bg-[#0a0f1d] border border-white/[0.08] hover:border-blue-500/30 hover:bg-[#0e1629] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-blue-400">{proj.category}</span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Live Site
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {proj.name}
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white">
                  <span>Explore Case Study & Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-blue-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default TrustProofSection;
