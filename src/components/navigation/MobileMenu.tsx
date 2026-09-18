"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../common/Button";

interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  // Prevent body scrolling when menu is open & close on escape
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            id="mobile-navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#0a0f1d] border-l border-white/[0.08] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
                  Navigation
                </span>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <nav className="py-6 flex flex-col space-y-1">
                {items.map((item, idx) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-3 px-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/[0.04] transition-colors group"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-slate-500 group-hover:text-blue-400 transition-colors">
                        0{idx + 1}
                      </span>
                      <span>{item.label}</span>
                    </span>
                    {item.badge ? (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {item.badge}
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 transition-transform group-hover:translate-x-1" />
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom Contact & CTA */}
            <div className="pt-6 border-t border-white/[0.08] space-y-4">
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                onClick={onClose}
                className="w-full justify-center"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Start a Project
              </Button>

              <div className="space-y-2 pt-2 text-xs font-mono text-slate-400">
                <a
                  href="tel:+917385121432"
                  className="flex items-center gap-2 hover:text-slate-200 transition-colors py-1"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>+91 73851 21432</span>
                </a>
                <a
                  href="mailto:bajrangiyadav330@gmail.com"
                  className="flex items-center gap-2 hover:text-slate-200 transition-colors py-1"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>bajrangiyadav330@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
