import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Eyebrow from "@/components/common/Eyebrow";
import Breadcrumbs from "@/components/common/Breadcrumbs";


export const metadata: Metadata = {
  title: "Terms of Service | BRAYON Technologies",
  description: "Terms of Service, delivery terms, and Master Services Agreement framework at BRAYON Technologies.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28">
        <Section spacing="lg">
          <Container>
            <div className="max-w-3xl mx-auto space-y-8">
              <Breadcrumbs items={[{ label: "Terms of Service" }]} />
              <Eyebrow>LEGAL & COMMERCIAL FRAMEWORK</Eyebrow>
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Terms of Service
              </h1>
              <p className="text-xs font-mono text-slate-500">Last updated: October 2026</p>

              <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">1. Scope of Engagement</h2>
                  <p>
                    All software engineering, consultation, architecture auditing, and development services provided by BRAYON Technologies are governed by individual Statements of Work (SOWs) executed between the client and BRAYON Technologies.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">2. Intellectual Property & Code Ownership</h2>
                  <p>
                    Upon full milestone payment settlement, 100% of all custom written source code, private Git repositories, database migration scripts, configuration recipes, and digital deliverables created specifically for the client become the exclusive property of the client.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">3. Warranty & Post-Launch Support</h2>
                  <p>
                    Every production deployment includes standard post-launch hypercare support and bug warranties as specified in the agreed project SOW.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">4. Inquiries</h2>
                  <p>
                    For contractual or legal inquiries, reach out to{" "}
                    <a href="mailto:hello@brayontech.com" className="text-blue-400 hover:underline">
                      hello@brayontech.com
                    </a>.
                  </p>
                </section>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
