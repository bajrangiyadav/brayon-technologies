import React from "react";

interface TechnologyBadgeProps {
  name: string;
  category?: string;
  className?: string;
}

export function TechnologyBadge({ name, category, className = "" }: TechnologyBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.08] transition-colors ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
      <span className="font-medium text-slate-200">{name}</span>
      {category && <span className="text-slate-500 text-[10px]">· {category}</span>}
    </div>
  );
}

export default TechnologyBadge;
