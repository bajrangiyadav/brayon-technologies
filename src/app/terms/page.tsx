import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Eyebrow from "@/components/common/Eyebrow";

export const metadata: Metadata = {
  title: "Terms of Service | BRAYON Technologies",
  description: "Terms of Service and Master Services Agreement framework at BRAYON Technologies.",
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
              <Eyebrow>LEGAL AGREEMENT</Eyebrow>
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Terms of Service
              </h1>
              <p className="text-xs font-mono text-slate-500">Last updated: September 2026</p>

              <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">1. Scope of Services</h2>
                  <p>
                    BRAYON Technologies provides bespoke software engineering, web application development, cloud architecture, and AI automation services according to formal Statements of Work (SOWs) signed by both parties.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">2. Intellectual Property Ownership</h2>
                  <p>
                    Upon full satisfaction of agreed milestone payments, BRAYON Technologies irrevocably transfers 100% of worldwide copyright, intellectual property rights, and source code ownership to the client. BRAYON retains zero vendor lock-in or proprietary runtime rights over delivered codebases.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">3. Milestone Payments & Delivery</h2>
                  <p>
                    Projects operate under transparent milestone structures. Software deliverables undergo User Acceptance Testing (UAT) in staging environments prior to production cutover.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">4. Inquiries</h2>
                  <p>
                    For contractual inquiries, contact{" "}
                    <a href="mailto:contact@brayontech.com" className="text-blue-400 hover:underline">
                      contact@brayontech.com
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
