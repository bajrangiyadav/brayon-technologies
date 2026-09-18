import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#070a12] flex items-center justify-center" aria-label="Loading page content">
      <div className="flex flex-col items-center gap-5">
        {/* Minimal monogram spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-white/[0.06]" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 animate-spin" />
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-slate-400 animate-pulse">
          Loading
        </span>
      </div>
    </div>
  );
}
