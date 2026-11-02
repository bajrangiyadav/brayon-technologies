import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Eyebrow from "@/components/common/Eyebrow";
import Button from "@/components/common/Button";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FadeUp from "@/components/animations/FadeUp";
import {
  industryDetailData,
  getIndustryBySlug,
  getAllIndustrySlugs,
} from "@/data/industryDetailData";
import { caseStudies } from "@/data/caseStudies";
import {
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { SITE_URL, COMPANY_INFO } from "@/utils/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllIndustrySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Not Found | BRAYON Technologies",
    };
  }

  const canonicalUrl = `${SITE_URL}/industries/${industry.slug}`;

  return {
    title: industry.seoTitle,
    description: industry.seoDescription,
    keywords: industry.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: industry.seoTitle,
      description: industry.seoDescription,
      url: canonicalUrl,
      siteName: COMPANY_INFO.name,
      type: "website",
      images: [
        {
          url: "/brayon-logo-showcase.png",
          width: 1200,
          height: 630,
          alt: `${industry.name} - BRAYON Technologies`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.seoTitle,
      description: industry.seoDescription,
      images: ["/brayon-logo-showcase.png"],
    },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const relatedProjects = caseStudies.filter((cs) =>
    industry.caseStudySlugs.includes(cs.slug)
  );

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
      {
        "@type": "ListItem",
        position: 3,
        name: industry.name,
        item: `${SITE_URL}/industries/${industry.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="flex-grow pt-28">
        {/* Industry Hero */}
        <section className="py-14 md:py-20 border-b border-white/[0.08] relative overflow-hidden bg-gradient-to-b from-[#080d1a] to-[#060913]">
          <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/[0.05] rounded-full blur-[140px] pointer-events-none" />

          <Container className="relative z-10">
            <div className="mb-6 text-left">
              <Breadcrumbs
                items={[
                  { label: "Industries", href: "/industries" },
                  { label: industry.name },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              <div className="lg:col-span-8 space-y-5">
                <FadeUp delay={0.05}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{industry.category}</span>
                  </div>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                    {industry.name} Software Solutions
                  </h1>
                </FadeUp>

                <FadeUp delay={0.15}>
                  <p className="text-lg sm:text-xl text-blue-200/90 font-medium leading-snug">
                    {industry.headline}
                  </p>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-3xl">
                    {industry.overview}
                  </p>
                </FadeUp>

                <FadeUp delay={0.25}>
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Button
                      variant="primary"
                      size="lg"
                      href="/contact"
                      iconRight={<ArrowRight className="w-4 h-4" />}
                    >
                      Start a Project
                    </Button>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20would%20like%20to%20discuss%20software%20solutions%20for%20${encodeURIComponent(
                        industry.name
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 font-mono text-xs transition-colors font-medium"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span>Chat on WhatsApp Direct</span>
                    </a>
                  </div>
                </FadeUp>
              </div>

              {/* Industry Quick Specs Card */}
              <div className="lg:col-span-4">
                <FadeUp delay={0.2}>
                  <div className="p-6 rounded-2xl bg-[#090f1f] border border-blue-500/25 space-y-4 shadow-xl">
                    <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold pb-2 border-b border-white/[0.08]">
                      Domain Architecture
                    </div>

                    <div className="space-y-2 text-xs font-mono text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Purpose-Engineered Schemas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Sub-Second Response Latency</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>100% Code &amp; IP Ownership</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-slate-400">
                      Stack: {industry.architectureStack.join(" · ")}
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </Container>
        </section>

        {/* Section: Domain Challenges vs Solutions */}
        <Section spacing="lg" borderBottom className="bg-[#050813]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
              {/* Left: Domain Challenges */}
              <div className="p-8 rounded-3xl bg-[#090f1f] border border-white/[0.08] space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold">
                  Common Bottlenecks
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Industry Friction We Eliminate
                </h2>
                <div className="space-y-3 pt-2">
                  {industry.domainChallenges.map((ch) => (
                    <div key={ch} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-2" />
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Tailored Solutions */}
              <div className="p-8 rounded-3xl bg-[#090f1f] border border-blue-500/25 space-y-5">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  Targeted Architecture
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Tailored Engineering Solutions
                </h2>
                <div className="space-y-4 pt-1">
                  {industry.tailoredSolutions.map((sol) => (
                    <div key={sol.title} className="space-y-1">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{sol.title}</span>
                      </h3>
                      <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                        {sol.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Section: Core Capabilities */}
        <Section spacing="lg" borderBottom className="bg-[#060a16]">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <Eyebrow>DOMAIN SPECIFICATIONS</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Delivered Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
              {industry.keyCapabilities.map((cap, i) => (
                <div
                  key={cap}
                  className="p-6 rounded-2xl bg-[#090e1d] border border-white/[0.08] hover:border-blue-500/30 transition-all space-y-2"
                >
                  <div className="font-mono text-xs text-blue-400 font-semibold">
                    0{i + 1}
                  </div>
                  <h3 className="text-sm font-bold text-white">{cap}</h3>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Section: Related Case Studies */}
        {relatedProjects.length > 0 && (
          <Section spacing="lg" borderBottom className="bg-[#050813]">
            <Container>
              <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
                <Eyebrow>PROVEN IN PRODUCTION</Eyebrow>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Featured Case Studies in This Domain
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {relatedProjects.map((proj) => (
                  <div
                    key={proj.slug}
                    className="p-7 rounded-3xl bg-[#090f1f] border border-white/[0.08] space-y-4 hover:border-blue-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-blue-400 uppercase">
                        {proj.industry}
                      </span>
                      {proj.liveUrl && (
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          Live Active
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {proj.shortDescription}
                    </p>
                    <div className="pt-2 flex items-center justify-between">
                      <Link
                        href={`/case-studies/${proj.slug}`}
                        className="text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                      >
                        <span>View Full Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
                        >
                          <span>Live Portal</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        )}

        {/* Section: FAQs */}
        {industry.faqs.length > 0 && (
          <Section spacing="lg" borderBottom className="bg-[#060a16]">
            <Container>
              <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
                <Eyebrow>QUESTIONS &amp; ANSWERS</Eyebrow>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-4 text-left">
                {industry.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="p-6 rounded-2xl bg-[#090e1d] border border-white/[0.08] space-y-2"
                  >
                    <h3 className="text-base font-semibold text-white flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6 font-normal">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        )}

        {/* Final Conversion CTA */}
        <Section spacing="lg" className="bg-[#050813]">
          <Container>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0c1428] via-[#091022] to-[#0c1428] border border-blue-500/30 text-center space-y-5 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Looking to Build Software for {industry.name}?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Schedule a consultation directly with senior solutions architect Bajrangi Yadav to discuss your operational requirements, timeline, and fixed milestone budget.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Button variant="primary" size="lg" href="/contact">
                  Start Your Project Inquiry
                </Button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(
                    industry.name
                  )}%20software.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 font-mono text-xs transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp +91 73851 21432</span>
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}