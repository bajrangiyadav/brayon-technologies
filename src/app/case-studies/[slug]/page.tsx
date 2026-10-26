import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { caseStudies, getCaseStudyBySlug, getRelatedCaseStudies } from "@/data/caseStudies";
import { CaseStudyDetailClient } from "./CaseStudyDetailClient";
import { SITE_URL, COMPANY_INFO } from "@/utils/siteConfig";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    return {
      title: "Case Study Not Found | BRAYON Technologies",
    };
  }

  const pageUrl = `${SITE_URL}/case-studies/${project.slug}`;
  const ogImageUrl = project.heroImage.startsWith("http")
    ? project.heroImage
    : `${SITE_URL}${project.heroImage}`;

  return {
    title: `${project.title} — Case Study | BRAYON Technologies`,
    description: project.seo.description,
    keywords: project.seo.keywords,
    alternates: {
      canonical: `/case-studies/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | BRAYON Technologies Case Study`,
      description: project.shortDescription,
      url: pageUrl,
      type: "article",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | BRAYON Technologies`,
      description: project.shortDescription,
      images: [ogImageUrl],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedCaseStudies(slug, 2);

  const ogImageUrl = project.heroImage.startsWith("http")
    ? project.heroImage
    : `${SITE_URL}${project.heroImage}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: project.title,
    description: project.shortDescription,
    image: ogImageUrl,
    url: `${SITE_URL}/case-studies/${project.slug}`,
    author: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
    },
    about: {
      "@type": "SoftwareSourceCode",
      programmingLanguage: project.architecture.backend.join(", "),
    },
  };

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
        name: "Case Studies",
        item: `${SITE_URL}/case-studies`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${SITE_URL}/case-studies/${project.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <CaseStudyDetailClient caseStudy={project} relatedProjects={related} />
      <Footer />
    </div>
  );
}
