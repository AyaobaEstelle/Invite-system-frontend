import NextLink from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function Link({ href, children, className }: LinkProps) {
  return (
    <NextLink
      href={href}
      className={cn(
        "text-green-700 hover:text-green-900 underline-offset-4 hover:underline transition-colors",
        className
      )}
    >
      {children}
    </NextLink>
  );
}
