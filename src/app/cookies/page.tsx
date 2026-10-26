import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Eyebrow from "@/components/common/Eyebrow";
import Breadcrumbs from "@/components/common/Breadcrumbs";


export const metadata: Metadata = {
  title: "Cookie Policy | BRAYON Technologies",
  description: "Cookie Policy and tracking transparency at BRAYON Technologies.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28">
        <Section spacing="lg">
          <Container>
            <div className="max-w-3xl mx-auto space-y-8">
              <Breadcrumbs items={[{ label: "Cookie Policy" }]} />
              <Eyebrow>TRANSPARENCY & TRACKING</Eyebrow>
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Cookie Policy
              </h1>
              <p className="text-xs font-mono text-slate-500">Last updated: October 2026</p>

              <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">1. What Are Cookies</h2>
                  <p>
                    Cookies are small text files stored on your device that help web applications remember preferences, analyze site traffic, and optimize performance.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">2. Cookies We Use</h2>
                  <p>
                    BRAYON Technologies utilizes essential performance and anonymous telemetry cookies (such as Vercel Speed Insights and aggregated analytics) to understand site performance and visitor interactions without collecting personally identifiable information.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">3. Questions</h2>
                  <p>
                    For inquiries regarding cookies or data practices, contact us at{" "}
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
