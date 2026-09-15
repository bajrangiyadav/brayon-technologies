import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#050814] text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-Footer Bento Banner */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950/40 via-slate-900 to-indigo-950/40 border border-blue-500/20 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>DIRECT FOUNDER ARCHITECTURE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Ready to turn your web project into a verified growth engine?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Skip the sales intermediaries. Review your roadmap directly with Founder & Full-Stack Architect Bajrangi Yadav.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/917385121432?text=Hi%20Bajrangi,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Hotline</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Bento Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Agency Identity */}
          <div className="lg:col-span-2 space-y-5">
            <div className="relative h-11 w-52">
              <Image
                src="/brayon-logo-horizontal.png"
                alt="BRAYON Technologies"
                fill
                className="object-contain object-left"
                unoptimized
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              High-performance web applications, enterprise ERP systems, and modern digital commerce engineered with zero technical debt and 100% intellectual property ownership.
            </p>
            <div className="space-y-2 pt-1 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>30-Day Post-Launch Hypercare Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Google PageSpeed 90+ Score Guarantee</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-white text-xs font-mono uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-blue-400 transition-colors">
                  Work & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About & Founder
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-blue-400 transition-colors">
                  Process & Timeline
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-blue-400 transition-colors">
                  Pricing & Packages
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-blue-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Featured Case Studies */}
          <div>
            <h4 className="text-white text-xs font-mono uppercase tracking-widest mb-4">Case Studies</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/work/safegrowtrade" className="hover:text-blue-400 transition-colors block">
                  <span className="text-slate-200">SafeGrowTrade</span>
                  <span className="block text-xs text-slate-500">Commodity Trading Platform</span>
                </Link>
              </li>
              <li>
                <Link href="/work/ashapura-dry-fruits" className="hover:text-blue-400 transition-colors block">
                  <span className="text-slate-200">Ashapura Dry Fruits</span>
                  <span className="block text-xs text-slate-500">D2C Gourmet E-Commerce</span>
                </Link>
              </li>
              <li>
                <Link href="/work/brayon-crm" className="hover:text-blue-400 transition-colors block">
                  <span className="text-slate-200">BRAYON CRM</span>
                  <span className="block text-xs text-slate-500">Sales Pipeline Automation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Engineering Hotline */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-mono uppercase tracking-widest mb-4">Founder Direct</h4>
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 text-xs">
              <div className="font-semibold text-slate-200">Bajrangi Yadav</div>
              <div className="text-slate-400">Founder & Technology Lead</div>
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <a
                  href="mailto:bajrangiyadav330@gmail.com"
                  className="flex items-center gap-2 text-slate-300 hover:text-blue-400 break-all transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>bajrangiyadav330@gmail.com</span>
                </a>
                <a
                  href="tel:+917385121432"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>+91 73851 21432</span>
                </a>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Mumbai & Pune, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} BRAYON Technologies. All rights reserved. Technology. Innovation. Beyond.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/services" className="hover:text-slate-300 transition-colors">
              Enterprise Services
            </Link>
            <Link href="/work" className="hover:text-slate-300 transition-colors">
              Client Proof
            </Link>
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Leadership
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
