import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "surface" | "surface-2";
  borderTop?: boolean;
  borderBottom?: boolean;
}

export function Section({
  children,
  id,
  className = "",
  spacing = "lg",
  variant = "default",
  borderTop = false,
  borderBottom = false,
  ...props
}: SectionProps) {
  const spacingStyles = {
    none: "",
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16 lg:py-20",
    lg: "py-16 md:py-24 lg:py-28",
    xl: "py-20 md:py-32 lg:py-36",
  }[spacing];

  const variantStyles = {
    default: "bg-[#070a12]",
    surface: "bg-[#0d1322]",
    "surface-2": "bg-[#141c30]",
  }[variant];

  const borderStyles = `
    ${borderTop ? "border-t border-white/[0.08]" : ""}
    ${borderBottom ? "border-b border-white/[0.08]" : ""}
  `;

  return (
    <section
      id={id}
      className={`relative w-full ${variantStyles} ${spacingStyles} ${borderStyles} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
