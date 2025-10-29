import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TextProps {
  size?: "xs" | "sm" | "base" | "lg" | "body";
  className?: string;
  children: ReactNode;
}

export function Text({ size = "base", className, children }: TextProps) {
  const baseStyles = {
    xs: "text-sm text-green-800",
    sm: "text-sm text-gray-500",
    base: "text-base text-gray-400",
    lg: "text-lg text-green-700",
    body: "text-base text-green-600",
  }[size];

  return <p className={cn(baseStyles, className)}>{children}</p>;
}
