import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../common/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/about#process" },
      { label: "Contact & Inquiries", href: "/contact" },
    ],
    services: [
      { label: "AI & Automation", href: "/services#ai-automation" },
      { label: "Web Applications", href: "/services#web-applications" },
      { label: "E-Commerce Systems", href: "/services#ecommerce" },
      { label: "Mobile Applications", href: "/services#mobile-apps" },
      { label: "Enterprise Software", href: "/services#enterprise" },
      { label: "Cloud & DevOps", href: "/services#cloud-devops" },
      { label: "API & Integrations", href: "/services#integrations" },
    ],
    industries: [
      { label: "E-Commerce & Retail", href: "/industries#ecommerce" },
      { label: "Mobility & Logistics", href: "/industries#logistics" },
      { label: "Wholesale & Trading", href: "/industries#wholesale" },
      { label: "B2B SaaS & Tech", href: "/industries#saas" },
    ],
    caseStudies: [
      { label: "Jay Balaji Computer Education (JBCE)", href: "/case-studies/jbce" },
      { label: "Mumbai Hindi Vidyapeeth (MHVP)", href: "/case-studies/mhvp" },
    ],
    technology: [
      { label: "Next.js & React", href: "/technology#frontend" },
      { label: "Laravel & Node.js", href: "/technology#backend" },
      { label: "PostgreSQL & MySQL", href: "/technology#database" },
      { label: "AI & Automation APIs", href: "/technology#ai" },
      { label: "Cloud Infrastructure", href: "/technology#cloud" },
    ],
    insights: [
      { label: "AI Automation Deep Dive", href: "/insights/ai-automation-from-experiment-to-business-workflow" },
      { label: "E-Commerce Backend Engineering", href: "/insights/building-scalable-ecommerce-systems-laravel-redis" },
      { label: "Custom vs. Off-the-Shelf Platforms", href: "/insights/why-modern-businesses-need-custom-digital-platforms" },
    ],
  };

  return (
    <footer className="w-full bg-[#05070d] border-t border-white/[0.08] text-slate-400 text-sm">
      <Container className="pt-16 pb-12">
        {/* Brand & Value statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-white/[0.08]">
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block relative h-8 w-44">
              <Image
                src="/brayon-logo-vector-dark.svg"
                alt="BRAYON Technologies"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-slate-300 font-medium text-base">
              We Build Digital Products That Move Businesses Forward.
            </p>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              BRAYON Technologies designs and engineers scalable digital products, custom platforms, and AI-driven solutions with senior engineering discipline.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-500">
              We don&apos;t just talk about technology. We build it.
            </div>
          </div>

          {/* Quick Stats / Delivery Highlights */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 self-center">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="font-mono text-2xl font-semibold text-slate-100">2</div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
                Completed Projects
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="font-mono text-2xl font-semibold text-slate-100">2</div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
                Production Clients
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] col-span-2 sm:col-span-1">
              <div className="font-mono text-2xl font-semibold text-blue-400">100%</div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
                IP & Code Ownership
              </div>
            </div>
          </div>
        </div>

        {/* Multi-column Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 py-12">
          {/* Company */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-200 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-200 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-200 mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-200 mb-4">
              Case Studies
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.caseStudies.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-200 mb-4">
              Technology
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.technology.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-200 mb-4">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <Link href="/contact" className="block text-blue-400 hover:text-blue-300 font-medium">
                Start a Project &rarr;
              </Link>
              <div className="text-slate-400 font-mono text-[11px] pt-1">
                Mumbai, Maharashtra, India
              </div>
              <a
                href="mailto:bajrangiyadav330@gmail.com"
                className="block hover:text-white font-mono text-[11px] transition-colors"
              >
                bajrangiyadav330@gmail.com
              </a>
              <a
                href="tel:+917385121432"
                className="block hover:text-white font-mono text-[11px] transition-colors"
              >
                +91 73851 21432
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 mt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            &copy; {currentYear} BRAYON Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-slate-200 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
