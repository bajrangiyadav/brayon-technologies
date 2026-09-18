import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { caseStudies, getCaseStudyBySlug, getRelatedCaseStudies } from "@/data/caseStudies";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

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
      url: `https://brayontech.com/case-studies/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.heroImage,
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
      images: [project.heroImage],
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: project.title,
    description: project.shortDescription,
    image: `https://brayontech.com${project.heroImage}`,
    url: `https://brayontech.com/case-studies/${project.slug}`,
    author: {
      "@type": "Organization",
      name: "BRAYON Technologies",
      url: "https://brayontech.com",
    },
    publisher: {
      "@type": "Organization",
      name: "BRAYON Technologies",
      url: "https://brayontech.com",
    },
    about: {
      "@type": "SoftwareSourceCode",
      programmingLanguage: project.architecture.backend.join(", "),
    },
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <CaseStudyDetailClient caseStudy={project} relatedProjects={related} />
      <Footer />
    </div>
  );
}
