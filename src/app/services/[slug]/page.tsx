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
  servicesData,
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/data/servicesData";
import { caseStudies } from "@/data/caseStudies";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  ExternalLink,
  HelpCircle,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { SITE_URL, COMPANY_INFO } from "@/utils/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | BRAYON Technologies",
    };
  }

  const canonicalUrl = `${SITE_URL}/services/${service.slug}`;

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: canonicalUrl,
      siteName: COMPANY_INFO.name,
      type: "website",
      images: [
        {
          url: "/brayon-logo-showcase.png",
          width: 1200,
          height: 630,
          alt: `${service.title} - BRAYON Technologies`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
      images: ["/brayon-logo-showcase.png"],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = caseStudies.filter((cs) =>
    service.relatedCaseStudySlugs.includes(cs.slug)
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
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.shortTitle,
        item: `${SITE_URL}/services/${service.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.shortTitle,
    description: service.seoDescription,
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
    },
    areaServed: ["India", "United States", "United Kingdom", "International"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.keyCapabilities.map((cap) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: cap,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="flex-grow pt-28">
        {/* Service Hero */}
        <section className="py-14 md:py-20 border-b border-white/[0.08] relative overflow-hidden bg-gradient-to-b from-[#080d1a] to-[#060913]">
          <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/[0.05] rounded-full blur-[140px] pointer-events-none" />

          <Container className="relative z-10">
            <div className="mb-6 text-left">
              <Breadcrumbs
                items={[
                  { label: "Services", href: "/services" },
                  { label: service.shortTitle },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              <div className="lg:col-span-8 space-y-5">
                <FadeUp delay={0.05}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{service.category}</span>
                  </div>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                    {service.title}
                  </h1>
                </FadeUp>

                <FadeUp delay={0.15}>
                  <p className="text-lg sm:text-xl text-blue-200/90 font-medium leading-snug">
                    {service.headline}
                  </p>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-3xl">
                    {service.description}
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
                      href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(
                        service.title
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

              {/* Service Summary Card */}
              <div className="lg:col-span-4">
                <FadeUp delay={0.2}>
                  <div className="p-6 rounded-2xl bg-[#090f1f] border border-blue-500/25 space-y-4 shadow-xl">
                    <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold pb-2 border-b border-white/[0.08]">
                      Service Overview
                    </div>

                    <div className="space-y-1 text-xs">
                      <span className="text-slate-400 font-mono block">Ideal For:</span>
                      <p className="text-slate-200 leading-relaxed">
                        {service.targetAudience}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/[0.06] text-xs font-mono">
                      <div className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>100% Code &amp; IP Ownership</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Senior Architect Led</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>30-Day Hypercare Warranty</span>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </Container>
        </section>

        {/* Section: Problems Solved & BRAYON Approach */}
        <Section spacing="lg" borderBottom className="bg-[#050813]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
              {/* Left: Problems Solved */}
              <div className="p-8 rounded-3xl bg-[#090f1f] border border-white/[0.08] space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold">
                  The Friction We Eliminate
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Business Challenges We Solve
                </h2>
                <div className="space-y-3 pt-2">
                  {service.problemsSolved.map((prob) => (
                    <div key={prob} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-2" />
                      <span>{prob}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: The BRAYON Approach */}
              <div className="p-8 rounded-3xl bg-[#090f1f] border border-blue-500/25 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  Engineering Standards
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  The BRAYON Architectural Approach
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {service.brayonApproach}
                </p>
                <div className="space-y-2 pt-2 text-xs font-mono text-emerald-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Predictable Milestone Sprints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Sub-Second Response Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Section: Key Capabilities */}
        <Section spacing="lg" borderBottom className="bg-[#060a16]">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <Eyebrow>CORE DELIVERABLES</Eyebrow>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Key Features &amp; Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
              {service.keyCapabilities.map((cap, i) => (
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

        {/* Section: Supported Technology Stack */}
        <Section spacing="lg" borderBottom className="bg-[#050813]">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
              <Eyebrow>TECHNOLOGY STACK</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Verified Technologies Supported
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {service.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2 text-xs font-mono"
                >
                  <span className="font-semibold text-white">{tech.name}</span>
                  <span className="text-[10px] text-slate-500 uppercase">
                    ({tech.category})
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Section: Development Process */}
        <Section spacing="lg" borderBottom className="bg-[#060a16]">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <Eyebrow>HOW WE BUILD</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Sprint Process &amp; Roadmap
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {service.process.map((p) => (
                <div
                  key={p.step}
                  className="p-6 rounded-2xl bg-[#090e1d] border border-white/[0.08] space-y-3"
                >
                  <div className="font-mono text-2xl font-bold text-blue-400">
                    {p.step}
                  </div>
                  <h3 className="text-base font-bold text-white">{p.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {p.description}
                  </p>
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
                <Eyebrow>PROVEN CLIENT RESULTS</Eyebrow>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Relevant Case Studies
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

        {/* Section: Frequently Asked Questions */}
        <Section spacing="lg" borderBottom className="bg-[#060a16]">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <Eyebrow>QUESTIONS &amp; ANSWERS</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4 text-left">
              {service.faqs.map((faq) => (
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

        {/* Final Conversion CTA */}
        <Section spacing="lg" className="bg-[#050813]">
          <Container>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0c1428] via-[#091022] to-[#0c1428] border border-blue-500/30 text-center space-y-5 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Ready to Build Your {service.shortTitle}?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Consult directly with senior solutions architect Bajrangi Yadav. We will review your requirements, prepare a technical blueprint, and provide a fixed milestone proposal.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Button variant="primary" size="lg" href="/contact">
                  Start Your Project Inquiry
                </Button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hi%20Bajrangi,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(
                    service.title
                  )}.`}
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