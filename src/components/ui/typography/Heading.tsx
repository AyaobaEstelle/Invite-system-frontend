import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}

export function Heading({ level = 1, children, className }: HeadingProps) {
  // eslint-disable-next-line no-undef
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const baseStyles = {
    1: "text-4xl font-bold text-green-300",
    2: "text-3xl font-bold text-green-900",
    3: "text-2xl font-semibold text-green-700",
    4: "text-xl font-semibold text-green-600",
  }[level];

  return <Tag className={cn(baseStyles, className)}>{children}</Tag>;
}
