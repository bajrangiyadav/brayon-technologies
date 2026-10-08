"use client";

import React, { useState } from "react";
import { Calendar, Clock, Video, CheckCircle, ExternalLink, X } from "lucide-react";

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScheduleCallModal({ isOpen, onClose }: ScheduleCallModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#090f1e] border border-blue-500/30 p-6 sm:p-8 text-left shadow-2xl shadow-blue-950/40">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>ZERO COMMITMENT DISCOVERY</span>
        </div>

        <h3 className="text-2xl font-bold text-white tracking-tight">
          Book a Free 30-Minute Technical Call
        </h3>
        <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
          Skip sales pitches. Discuss your system requirements, get architecture recommendations, and receive an honest timeline estimate directly from founder &amp; senior engineer Bajrangi Yadav.
        </p>

        {/* Call Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 py-4 border-y border-white/[0.08]">
          <div className="flex items-center gap-2.5 text-xs text-slate-200">
            <Clock className="w-4 h-4 text-blue-400 shrink-0" />
            <span>30 Mins Focused</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-200">
            <Video className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Google Meet / Zoom</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-200">
            <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
            <span>No Sales Push</span>
          </div>
        </div>

        {/* Schedule Options */}
        <div className="space-y-3">
          <a
            href="https://wa.me/917385121432?text=Hi%20Bajrangi,%20I%20would%20like%20to%20schedule%20a%20free%2030-minute%20call%20for%20my%20software%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all cursor-pointer"
          >
            <span>Pick a Slot via Instant WhatsApp</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="mailto:hello@brayontech.com?subject=Book%20a%20Free%2030-Minute%20Call%20-%20BRAYON&body=Hi%20Bajrangi,%0A%0AI%20would%20like%20to%20schedule%20a%2030-min%20call%20to%20discuss%20my%20software%20requirements.%0A%0AMy%20Preferred%20Date%20%26%20Time:%0AProject%20Type:%0AWhatsApp/Phone:%0A%0AThanks!"
            className="w-full py-3.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-200 hover:text-white font-medium text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Schedule via Email (hello@brayontech.com)</span>
          </a>
        </div>

        <p className="text-[11px] font-mono text-slate-500 text-center mt-4">
          Guaranteed response within 3 hours · Direct founder dialogue
        </p>
      </div>
    </div>
  );
}

export default ScheduleCallModal;
