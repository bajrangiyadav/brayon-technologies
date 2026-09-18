import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Eyebrow from "@/components/common/Eyebrow";

export const metadata: Metadata = {
  title: "Cookie Policy | BRAYON Technologies",
  description: "Cookie Policy and analytics tracking transparency at BRAYON Technologies.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28">
        <Section spacing="lg">
          <Container>
            <div className="max-w-3xl mx-auto space-y-8">
              <Eyebrow>DATA PRIVACY</Eyebrow>
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Cookie Policy
              </h1>
              <p className="text-xs font-mono text-slate-500">Last updated: September 2026</p>

              <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">1. Use of Cookies</h2>
                  <p>
                    BRAYON Technologies uses essential technical cookies and anonymized performance analytics to understand website performance and improve user experience.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">2. Essential Cookies</h2>
                  <p>
                    Essential cookies are required for site security, navigation state, and form submissions. These cannot be disabled as the site cannot function properly without them.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">3. Third-Party Tracking</h2>
                  <p>
                    We do not deploy invasive third-party cross-site tracking pixels or commercial ad retargeting networks.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-white">4. Questions</h2>
                  <p>
                    Direct questions to{" "}
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
