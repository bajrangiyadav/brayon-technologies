import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Eyebrow from "@/components/common/Eyebrow";
import Button from "@/components/common/Button";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FadeUp from "@/components/animations/FadeUp";
import { industryDetailData, getAllIndustrySlugs } from "@/data/industryDetailData";
import { caseStudies } from "@/data/caseStudies";
import {
  GraduationCap,
  ShoppingCart,
  HeartPulse,
  Truck,
  Landmark,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { SITE_URL, COMPANY_INFO } from "@/utils/siteConfig";

export const metadata: Metadata = {
  title: "Industry Software Solutions & Domain Expertise | BRAYON Technologies",
  description:
    "Engineered software solutions tailored to real operational workflows across Education, Retail & E-Commerce, Healthcare, Logistics, Finance, and Startups.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industry Software Solutions & Domain Expertise | BRAYON Technologies",
    description:
      "Technology built around your business. Resilient software engineering across education, e-commerce, mobility, logistics, and enterprise domains.",
    url: `${SITE_URL}/industries`,
    siteName: COMPANY_INFO.name,
    type: "website",
    images: [
      {
        url: "/brayon-logo-showcase.png",
        width: 1200,
        height: 630,
        alt: "BRAYON Technologies Industries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Software Solutions & Domain Expertise | BRAYON Technologies",
    description: "Technology built around your business.",
    images: ["/brayon-logo-showcase.png"],
  },
};

const ICONS_MAP: Record<string, React.ElementType> = {
  education: GraduationCap,
  "retail-ecommerce": ShoppingCart,
  healthcare: HeartPulse,
  logistics: Truck,
  finance: Landmark,
  startups: Rocket,
};

export default function IndustriesPage() {
  const industriesList = Object.values(industryDetailData);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: `${SITE_URL}/industries`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Header Hero */}
        <section className="py-16 md:py-24 border-b border-white/[0.08] relative overflow-hidden bg-gradient-to-b from-[#080d1a] to-[#060913]">
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/[0.05] rounded-full blur-[140px] pointer-events-none" />

          <Container className="relative z-10">
            <div className="mb-6 text-left">
              <Breadcrumbs items={[{ label: "Industries" }]} />
            </div>

            <div className="max-w-3xl text-left space-y-4">
              <FadeUp delay={0.05}>
                <Eyebrow>DOMAIN SPECIFIC ENGINEERING</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                  Technology For Every Business Ambition.
                </h1>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  Every business operates under distinct industry realities. BRAYON Technologies engineers digital platforms around real operational workflows, customer touchpoints, and regulatory demands.
                </p>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* Industry Grid */}
        <Section spacing="lg" borderBottom className="bg-[#050813]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {industriesList.map((ind, idx) => {
                const Icon = ICONS_MAP[ind.slug] || Sparkles;
                const relatedProjects = caseStudies.filter((cs) =>
                  ind.caseStudySlugs.includes(cs.slug)
                );

                return (
                  <FadeUp key={ind.slug} delay={0.08 * (idx + 1)}>
                    <div className="h-full p-8 rounded-3xl bg-[#090f1f] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-blue-950/20 group">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600/20 transition-all">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-blue-400 transition-colors">
                            {ind.category}
                          </span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                          {ind.name}
                        </h2>

                        <p className="text-xs font-mono text-blue-400 mb-4 font-medium">
                          {ind.headline}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                          {ind.overview}
                        </p>

                        {/* Capabilities preview */}
                        <div className="space-y-2 pt-2 border-t border-white/[0.06] mb-6">
                          {ind.keyCapabilities.slice(0, 3).map((cap) => (
                            <div key={cap} className="flex items-start gap-2 text-xs text-slate-300 font-normal">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>

                        {/* Related Projects Pill */}
                        {relatedProjects.length > 0 && (
                          <div className="p-3 rounded-xl bg-[#060913] border border-white/[0.06] mb-4 text-xs font-mono">
                            <span className="text-slate-400 block text-[10px] uppercase mb-1">
                              Production Projects:
                            </span>
                            <div className="text-emerald-300 font-semibold truncate">
                              {relatedProjects.map((p) => p.title).join(", ")}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                        <Link
                          href={`/industries/${ind.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all"
                        >
                          <span>Explore Domain Blueprints</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <span className="text-[11px] font-mono text-slate-500">Tailored Stack</span>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Consultation Callout */}
        <Section spacing="lg" className="bg-[#060a16]">
          <Container>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0c1428] via-[#091022] to-[#0c1428] border border-blue-500/30 text-center space-y-5 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Don&apos;t See Your Specific Industry Listed?
              </h2>
              <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                Our architectural principles apply to any complex, data-driven business workflow. Reach out to discuss your specific operations with our senior engineering team.
              </p>
              <div className="pt-2">
                <Button variant="primary" size="lg" href="/contact">
                  Discuss Your Industry Requirements
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}