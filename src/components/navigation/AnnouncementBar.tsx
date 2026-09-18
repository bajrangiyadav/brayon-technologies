'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, X } from 'lucide-react';

interface AnnouncementBarProps {
  onDismiss?: () => void;
}

export function AnnouncementBar({ onDismiss }: AnnouncementBarProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  const handleDismiss = () => {
    setIsDismissed(true);
    onDismiss?.();
  };

  if (isDismissed) return null;

  return (
    <div
      role="region"
      aria-label="Announcement"
      className="relative z-50 bg-gradient-to-r from-[#060e20] via-[#0c1f44] to-[#060e20] border-b border-blue-500/25 text-xs text-slate-200 transition-all duration-300 shadow-sm shadow-blue-950/30"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-between gap-3">
        {/* Centered Referral Pitch */}
        <div className="flex-1 flex items-center justify-center text-center gap-2 flex-wrap">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 uppercase tracking-wider shrink-0">
              <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
              <span>Partner Program</span>
            </span>

            <span className="font-medium text-slate-100 flex items-center gap-1.5 text-xs sm:text-[13px]">
              <strong className="font-semibold text-white">Refer a Client &amp; Earn 15%</strong>
              <span className="text-slate-400 hidden md:inline">—</span>
              <span className="text-slate-300 hidden md:inline">
                Get 15% of the Total Project Value for Every Successful Referral.
              </span>
            </span>

            <span className="inline-flex items-center gap-1 font-mono text-[11px] text-blue-400 group-hover:text-blue-300 font-semibold underline underline-offset-4 decoration-blue-500/40 group-hover:decoration-blue-400 ml-1">
              <span>Refer a Client</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        {/* Dismiss Button */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss referral announcement"
          className="text-slate-400 hover:text-white hover:bg-white/[0.08] p-1 rounded-md transition-colors shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default AnnouncementBar;
