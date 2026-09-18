import React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

export function Eyebrow({ children, className = "", dot = true }: EyebrowProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-3 py-1 text-xs font-mono font-medium tracking-wider uppercase text-blue-400 backdrop-blur-sm ${className}`}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}

export default Eyebrow;
