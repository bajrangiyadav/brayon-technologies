"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export function FloatingWhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 4 seconds to invite conversation politely
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const prefilledMessage = encodeURIComponent(
    "Hi, mujhe ek project discuss karna hai with BRAYON Technologies."
  );
  const whatsappUrl = `https://wa.me/917385121432?text=${prefilledMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2 pointer-events-none">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="pointer-events-auto bg-[#0d1424] text-slate-100 border border-emerald-500/30 rounded-2xl p-3.5 shadow-2xl shadow-black/60 max-w-xs text-xs animate-in fade-in slide-in-from-bottom-2 duration-200 relative mb-1">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white font-mono text-[11px]">
              Direct WhatsApp Support
            </span>
          </div>
          <p className="text-slate-300 pr-3 leading-relaxed">
            Have a project idea? Chat directly with Founder &amp; Engineer Bajrangi on WhatsApp.
          </p>
        </div>
      )}

      {/* WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BRAYON on WhatsApp"
        className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-xl shadow-emerald-950/50 hover:shadow-emerald-600/30 transition-all duration-200 hover:scale-105"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="font-semibold tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

export default FloatingWhatsAppButton;
