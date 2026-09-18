import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import Eyebrow from "@/components/common/Eyebrow";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import FadeUp from "@/components/animations/FadeUp";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries Served | BRAYON Technologies",
  description:
    "Technology built around your business. BRAYON Technologies engineers digital platforms around real operational requirements across commerce, logistics, and technology.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries Served | BRAYON Technologies",
    description:
      "Technology built around your business. Resilient software engineering across e-commerce, mobility, automation, and enterprise domains.",
    url: "https://brayontech.com/industries",
  },
};

export default function IndustriesPage() {
  const verifiedIndustries = industries.filter((ind) => ind.hasDirectExperience);
  const adaptableIndustries = industries.filter((ind) => !ind.hasDirectExperience);

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Header Hero */}
        <section className="py-16 md:py-24 border-b border-white/[0.08] relative">
          <Container>
            <div className="max-w-3xl">
              <FadeUp delay={0.05}>
                <Eyebrow>INDUSTRY DOMAINS</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mt-4 leading-tight">
                  Technology Built Around Your Business.
                </h1>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  Every business operates differently. BRAYON Technologies builds digital platforms around real operational requirements, workflows and customer experiences.
                </p>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* Verified Industry Sectors */}
        <Section spacing="lg" borderBottom>
          <Container>
            <SectionHeading
              eyebrow="DIRECT PROJECT EVIDENCE"
              title="Verified Industry Experience"
              description="Domains where BRAYON Technologies has delivered production software and verified operational systems."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {verifiedIndustries.map((ind, idx) => {
                const relatedProjects = caseStudies.filter((cs) =>
                  ind.caseStudyIds.includes(cs.slug)
                );

                return (
                  <FadeUp key={ind.id} delay={0.05 * idx}>
                    <Card
                      variant="interactive"
                      padding="md"
                      className="h-full flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Verified Project Delivery</span>
                          </span>
                          <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-2">{ind.name}</h3>

                        <p className="text-sm text-slate-400 leading-relaxed mb-5">
                          {ind.description}
                        </p>

                        <div className="mb-6">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                            CORE CAPABILITIES
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                            {ind.capabilities.map((cap) => (
                              <li key={cap} className="flex items-start gap-2">
                                <span className="h-1 w-1 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/[0.06] space-y-2">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                          VERIFIED CASE STUDIES
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {relatedProjects.map((p) => (
                            <Link
                              key={p.slug}
                              href={`/case-studies/${p.slug}`}
                              className="inline-flex items-center justify-between text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors group/link"
                            >
                              <span>{p.title}</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </FadeUp>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Adaptable Industry Sectors */}
        <Section variant="surface" spacing="lg" borderBottom>
          <Container>
            <SectionHeading
              eyebrow="CROSS-INDUSTRY ADAPTABILITY"
              title="Adaptable Architecture Framework"
              description="For sectors without direct case studies, we apply our proven full-stack and cloud architectures tailored to your specific business requirements."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {adaptableIndustries.map((ind, idx) => (
                <FadeUp key={ind.id} delay={0.04 * idx}>
                  <div className="p-6 rounded-2xl bg-[#090e1b] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between h-full">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                        ADAPTABLE DOMAIN
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{ind.name}</h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                        {ind.description}
                      </p>

                      <div className="space-y-1.5 mb-4">
                        {ind.capabilities.map((cap) => (
                          <div
                            key={cap}
                            className="p-1.5 rounded-lg bg-white/[0.02] text-[11px] font-mono text-slate-300"
                          >
                            {cap}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/[0.06]">
                      <span className="text-[11px] font-mono text-slate-500">
                        Tailored architecture on consultation
                      </span>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </Container>
        </Section>

        {/* Bottom Consultation CTA */}
        <Section spacing="lg">
          <Container>
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0d1322] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-left">
                <h3 className="text-2xl font-semibold text-white">
                  Operating in a Specialized Industry?
                </h3>
                <p className="text-sm text-slate-400 max-w-lg">
                  Let&apos;s evaluate your operational workflows, data schemas, and regulatory constraints together.
                </p>
              </div>
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                iconRight={<ArrowRight className="w-4 h-4" />}
                className="shrink-0"
              >
                Schedule Technical Review
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
