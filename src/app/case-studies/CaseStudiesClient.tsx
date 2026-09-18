"use client";

import React, { useState, useMemo } from "react";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Eyebrow from "@/components/common/Eyebrow";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import EmptyState from "@/components/common/EmptyState";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import CaseStudyFilters from "@/components/case-studies/CaseStudyFilters";
import FadeUp from "@/components/animations/FadeUp";
import { CaseStudy } from "@/types/caseStudy";
import { technologies } from "@/data/technologies";

interface CaseStudiesClientProps {
  initialCaseStudies: CaseStudy[];
}

export function CaseStudiesClient({ initialCaseStudies }: CaseStudiesClientProps) {
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    technology: "All",
    industry: "All",
  });

  const availableCategories = [
    "E-commerce",
    "Mobility",
    "AI",
    "Enterprise",
    "Web Applications",
    "Automation",
  ];

  const availableTechnologies = technologies.map((t) => ({ id: t.id, name: t.name }));
  const availableIndustries = Array.from(new Set(initialCaseStudies.map((c) => c.industry)));

  const filteredCaseStudies = useMemo(() => {
    return initialCaseStudies.filter((cs) => {
      // Category filter
      if (filters.category !== "All" && cs.category !== filters.category) {
        return false;
      }

      // Technology filter
      if (filters.technology !== "All" && !cs.technologies.includes(filters.technology)) {
        return false;
      }

      // Industry filter
      if (filters.industry !== "All" && cs.industry !== filters.industry) {
        return false;
      }

      // Keyword search
      if (filters.search.trim() !== "") {
        const query = filters.search.toLowerCase();
        const matchesTitle = cs.title.toLowerCase().includes(query);
        const matchesDesc = cs.shortDescription.toLowerCase().includes(query);
        const matchesType = cs.projectType.toLowerCase().includes(query);
        const matchesFeatures = cs.features.some((f) => f.toLowerCase().includes(query));
        const matchesTech = cs.technologies.some((t) => t.toLowerCase().includes(query));

        if (!matchesTitle && !matchesDesc && !matchesType && !matchesFeatures && !matchesTech) {
          return false;
        }
      }

      return true;
    });
  }, [initialCaseStudies, filters]);



  return (
    <main className="flex-grow pt-28">
      {/* Header Hero */}
      <section className="py-16 md:py-24 border-b border-white/[0.08] relative">
        <Container>
          <div className="mb-6">
            <Breadcrumbs items={[{ label: "Case Studies" }]} />
          </div>

          <div className="max-w-3xl">
            <FadeUp delay={0.05}>
              <Eyebrow>VERIFIED WORK & CASE STUDIES</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mt-4 leading-tight">
                Real Projects. Real Engineering.
              </h1>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                A selection of digital products and technology platforms designed and engineered for real business requirements.
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Case Studies Filter & Catalog Section */}
      <Section spacing="lg">
        <Container>
          {/* Multi-axis Filter Bar */}
          <CaseStudyFilters
            filters={filters}
            onFilterChange={setFilters}
            availableCategories={availableCategories}
            availableTechnologies={availableTechnologies}
            availableIndustries={availableIndustries}
            totalResults={filteredCaseStudies.length}
          />

          {/* Results Display */}
          {filteredCaseStudies.length === 0 ? (
            <EmptyState
              title="No matching case studies found"
              description="No projects matched your active search or filter criteria. Try clearing filters or using broader search terms."
              actionLabel="Clear All Filters"
              onAction={() =>
                setFilters({
                  search: "",
                  category: "All",
                  technology: "All",
                  industry: "All",
                })
              }
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCaseStudies.map((project, idx) => (
                <FadeUp key={project.id} delay={0.05 * idx}>
                  <CaseStudyCard caseStudy={project} />
                </FadeUp>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}

export default CaseStudiesClient;
