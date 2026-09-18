import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "interactive";
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
}

export function Card({
  children,
  variant = "default",
  padding = "md",
  className = "",
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-[#0d1322] border border-white/[0.08]",
    elevated: "bg-[#141c30] border border-white/[0.1] shadow-xl shadow-black/20",
    interactive:
      "bg-[#0d1322] border border-white/[0.08] hover:border-white/[0.18] hover:bg-[#11192c] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30",
  }[variant];

  const paddingStyles = {
    none: "",
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-7",
    lg: "p-8 sm:p-10",
  }[padding];

  return (
    <div
      className={`rounded-2xl relative overflow-hidden ${variantStyles} ${paddingStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
