import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
    target?: string;
    rel?: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  iconLeft,
  iconRight,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-medium gap-1.5 rounded-lg",
    md: "px-5 py-2.5 text-sm font-medium gap-2 rounded-xl",
    lg: "px-6 py-3.5 text-base font-semibold gap-2.5 rounded-xl",
  }[size];

  const variantStyles = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white shadow-sm shadow-blue-600/20 active:scale-[0.99] border border-blue-500/40",
    secondary:
      "bg-[#141c30] hover:bg-[#1a253e] text-slate-100 border border-white/[0.1] active:scale-[0.99]",
    outline:
      "bg-transparent hover:bg-white/[0.05] text-slate-200 border border-white/[0.14] hover:border-white/[0.24] active:scale-[0.99]",
    ghost:
      "bg-transparent hover:bg-white/[0.05] text-slate-300 hover:text-white active:scale-[0.99]",
  }[variant];

  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12] disabled:opacity-50 disabled:pointer-events-none group cursor-pointer";

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        iconLeft && <span className="transition-transform duration-150 group-hover:-translate-x-0.5">{iconLeft}</span>
      )}
      <span>{children}</span>
      {!isLoading && iconRight && (
        <span className="transition-transform duration-150 group-hover:translate-x-0.5">{iconRight}</span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, target, rel, ...linkProps } = props;
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  const { disabled, ...buttonProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...buttonProps}
    >
      {content}
    </button>
  );
}

export default Button;
