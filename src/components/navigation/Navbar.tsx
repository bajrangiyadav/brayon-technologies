"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import MobileMenu from "./MobileMenu";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies", badge: "2 Active" },
  { label: "BRAYON AI", href: "/brayon-ai" },
  { label: "Technology", href: "/technology" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-[#070a12]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
              aria-label="BRAYON Technologies Home"
            >
              <div className="relative h-8 sm:h-9 w-36 sm:w-44">
                <Image
                  src="/brayon-logo-vector-dark.svg"
                  alt="BRAYON Technologies"
                  fill
                  priority
                  className="object-contain object-left transition-opacity group-hover:opacity-90"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1.5 text-[13px] font-medium text-slate-300"
              aria-label="Main Navigation"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-1.5 rounded-lg transition-all duration-150 flex items-center gap-1.5 ${
                      isActive
                        ? "text-white bg-white/[0.06] font-semibold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-blue-500"
                        : "hover:text-white hover:bg-white/[0.04]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-blue-500/15 text-blue-300 border border-blue-500/30">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block lg:hidden xl:block">
                <Button
                  variant="primary"
                  size="sm"
                  href="/contact"
                  iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Start a Project
                </Button>
              </div>

              {/* Mobile menu button - only visible below lg breakpoint */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] border border-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={NAV_ITEMS}
      />
    </>
  );
}

export default Navbar;
