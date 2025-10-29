"use client";

import { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdfdfd] px-6 text-center">
      {children}
    </div>
  );
}
