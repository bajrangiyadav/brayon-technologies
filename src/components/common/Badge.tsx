import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "neutral" | "accent" | "success" | "warning" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "neutral",
  size = "md",
  className = "",
  ...props
}: BadgeProps) {
  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px]",
    md: "px-2.5 py-1 text-xs",
  }[size];

  const variantStyles = {
    neutral: "bg-white/[0.06] text-slate-300 border border-white/[0.08]",
    accent: "bg-blue-600/15 text-blue-400 border border-blue-500/30",
    success: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
    warning: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
    outline: "bg-transparent text-slate-400 border border-white/[0.14]",
  }[variant];

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-md tracking-wide transition-colors ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
