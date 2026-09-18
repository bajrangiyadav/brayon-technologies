import React from "react";
import { Loader2 } from "lucide-react";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

export function Loader({ size = "md", label, className = "" }: LoaderProps) {
  const sizeStyles = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }[size];

  return (
    <div className={`flex flex-col items-center justify-center gap-3 p-6 text-slate-400 ${className}`}>
      <Loader2 className={`${sizeStyles} animate-spin text-blue-500`} />
      {label && <p className="text-xs font-mono tracking-wide">{label}</p>}
    </div>
  );
}

export default Loader;
