"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notification / Urgency Bar */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border-b border-blue-500/20 text-xs py-2 px-4 text-center font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Now accepting 2 client projects for current sprint</span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline text-blue-300 font-semibold">Free 15-Minute Technical Architecture Audit</span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070B19]/90 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-11 sm:h-12 w-48 sm:w-56">
              <Image
                src="/brayon-logo-horizontal.png"
                alt="BRAYON Technologies - Technology. Innovation. Beyond."
                fill
                className="object-contain object-left group-hover:scale-[1.02] transition-transform"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-300">
            <Link href="/services" className="hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="/work" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
              <span>Work & Case Studies</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Verified
              </span>
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors">
              About & Founder
            </Link>
            <Link href="/#process" className="hover:text-blue-400 transition-colors">
              Process
            </Link>
            <Link href="/#pricing" className="hover:text-blue-400 transition-colors">
              Pricing
            </Link>
          </nav>

          {/* Desktop Direct Hotline & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/917385121432?text=Hi%20Bajrangi,%20I%20would%20like%20to%20discuss%20a%20web%20or%20software%20project%20with%20BRAYON%20Technologies."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 73851 21432</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-md shadow-blue-600/30 hover:shadow-blue-500/50 flex items-center gap-2"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1128] border-b border-slate-800 px-6 py-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-blue-400 font-medium py-1"
            >
              Services
            </Link>
            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-blue-400 font-medium py-1"
            >
              Work & Case Studies
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-blue-400 font-medium py-1"
            >
              About & Founder
            </Link>
            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-blue-400 font-medium py-1"
            >
              Process & Timeline
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-blue-400 font-medium py-1"
            >
              Pricing & Packages
            </Link>

            <div className="pt-3 border-t border-slate-800 space-y-3">
              <a
                href="https://wa.me/917385121432?text=Hi%20Bajrangi,%20I%20would%20like%20to%20discuss%20a%20project%20with%20BRAYON."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 text-xs font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Direct WhatsApp: +91 73851 21432</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold shadow-md shadow-blue-600/30"
              >
                Book Discovery Call
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
