'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Handshake, ArrowRight, X } from 'lucide-react';

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
      aria-label="Referral Partner Program Announcement"
      className="relative z-50 bg-[#050b16] border-b border-white/[0.08] text-xs text-slate-300 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-1.5 sm:py-2 flex items-center justify-between gap-3">
        {/* Referral Message */}
        <div className="flex-1 flex items-center justify-center text-center gap-2 flex-wrap">
          <Link
            href="/contact?type=referral"
            className="group inline-flex items-center gap-2 hover:text-white transition-colors text-xs sm:text-[13px]"
          >
            <Handshake className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />

            <span className="font-medium text-slate-200">
              Bring a Client. Earn <span className="font-semibold text-white underline decoration-blue-400 underline-offset-2">15%</span>.
            </span>

            <span className="text-slate-500 hidden md:inline" aria-hidden="true">|</span>

            <span className="text-slate-400 hidden md:inline">
              Get 15% of the project value for every successful referral.
            </span>

            <span className="inline-flex items-center gap-1 font-medium text-blue-400 group-hover:text-blue-300 ml-1">
              <span>Refer a Client</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        </div>

        {/* Dismiss Button */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss referral announcement"
          className="text-slate-400 hover:text-white hover:bg-white/[0.06] p-1 rounded transition-colors shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
        >
          <X className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default AnnouncementBar;
