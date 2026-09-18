import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Eyebrow from "@/components/common/Eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy | BRAYON Technologies",
  description: "Privacy Policy and data governance practices at BRAYON Technologies.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28">
        <Section spacing="lg">
          <Container>
            <div className="max-w-3xl mx-auto space-y-8">
              <Eyebrow>LEGAL & DATA GOVERNANCE</Eyebrow>
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-xs font-mono text-slate-500">Last updated: September 2026</p>

              <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">1. Information We Collect</h2>
                  <p>
                    BRAYON Technologies collects information you provide directly through our project inquiry forms, technical consultation requests, or direct correspondence (such as name, company name, email address, phone number, and project specifications).
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">2. How We Use Information</h2>
                  <p>
                    Collected information is used strictly to evaluate software project scopes, generate technical proposals, establish Master Services Agreements (MSAs), and communicate regarding project deliverables. We never sell, rent, or trade client information to third-party data brokers.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">3. Intellectual Property & Confidentiality</h2>
                  <p>
                    All project documentation, proprietary source code, database architectures, and technical specifications shared with BRAYON Technologies are protected under strict Non-Disclosure Agreements (NDAs).
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">4. Contact</h2>
                  <p>
                    For inquiries regarding data protection and confidentiality practices, contact our team at{" "}
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
