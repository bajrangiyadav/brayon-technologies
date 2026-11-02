import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Container from "../common/Container";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import { GitHubIcon } from "../icons/GitHubIcon";
import { COMPANY_INFO } from "@/utils/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Our Work", href: "/work" },
      { label: "Contact Us", href: "/contact" },
    ],
    services: [
      { label: "Custom Software Development", href: "/services/custom-software-development" },
      { label: "Web Application Development", href: "/services/web-application-development" },
      { label: "CRM & ERP Solutions", href: "/services/crm-development" },
      { label: "E-commerce Development", href: "/services/ecommerce-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "AI & Business Automation", href: "/services/ai-automation" },
      { label: "API Engineering & Integration", href: "/services/api-development" },
      { label: "UI/UX Product Design", href: "/services/ui-ux-design" },
    ],
    industries: [
      { label: "Education & EdTech", href: "/industries/education" },
      { label: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
      { label: "Healthcare & Life Sciences", href: "/industries/healthcare" },
      { label: "Logistics & Supply Chain", href: "/industries/logistics" },
      { label: "Finance & Invoicing", href: "/industries/finance" },
      { label: "Startups & Growth Ventures", href: "/industries/startups" },
    ],
    caseStudies: [
      { label: "Jay Balaji Computer Education (JBCE)", href: "/case-studies/jbce" },
      { label: "Mumbai Hindi Vidyapeeth (MHVP)", href: "/case-studies/mhvp" },
      { label: "SafeGrowTrade B2B Commerce", href: "/case-studies/safegrowtrade" },
      { label: "Ashapura Dry Fruits D2C", href: "/case-studies/ashapura-dry-fruits" },
      { label: "DriveZone Automotive Care", href: "/case-studies/drivezone" },
      { label: "HR SaaS Workforce Platform", href: "/case-studies/hr-saas" },
    ],
  };

  return (
    <footer className="w-full bg-[#03050a] border-t border-white/[0.08] text-slate-400 text-sm">
      <Container className="pt-16 pb-12">
        {/* Brand & Value statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-white/[0.08]">
          <div className="lg:col-span-6 space-y-4 text-left">
            <Link href="/" className="inline-block relative h-8 w-44">
              <Image
                src="/brayon-logo-vector-dark.svg"
                alt="BRAYON Technologies"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-slate-200 font-semibold text-base sm:text-lg">
              Building Digital Experiences That Move Businesses Forward.
            </p>
            <p className="text-slate-400 text-sm max-w-lg leading-relaxed font-normal">
              BRAYON Technologies combines strategy, design, and engineering to build powerful digital solutions that solve real business problems. We partner with ambitious companies in India, the US, the UK, and internationally.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
                title="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-emerald-400 transition-colors"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              </a>
            </div>
          </div>

          {/* Quick Engineering Guarantees */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4 self-center">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
              <div className="font-mono text-xl sm:text-2xl font-bold text-slate-100">100%</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-1">
                IP &amp; Git Ownership
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
              <div className="font-mono text-xl sm:text-2xl font-bold text-emerald-400">0s</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-1">
                Peak Load Downtime
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left col-span-2 sm:col-span-1">
              <div className="font-mono text-xl sm:text-2xl font-bold text-blue-400">30-Day</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-1">
                Hypercare Warranty
              </div>
            </div>
          </div>
        </div>

        {/* Multi-column Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 text-left">
          {/* Column 1: Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
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

          {/* Column 3: Industries */}
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

          {/* Column 4: Production Projects & Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-200 mb-4">
              Verified Projects
            </h4>
            <ul className="space-y-2.5 text-xs mb-6">
              {footerLinks.caseStudies.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-200 mb-2">
              Direct Contact
            </h4>
            <div className="space-y-1.5 text-xs font-mono">
              <a
                href="mailto:hello@brayontech.com"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                hello@brayontech.com
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>+91 73851 21432</span>
              </a>
              <div className="text-slate-500 text-[11px] pt-1">
                Mumbai, Maharashtra, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 mt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {currentYear} BRAYON Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/cookies" className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;