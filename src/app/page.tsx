"use client";

import { Content } from "@/components/features/welcome/Content";
import { CTA } from "@/components/features/welcome/CTA";
import { PageLayout } from "@/components/layout/WelcomePageLayout";

export default function WelcomePage() {
  return (
    <PageLayout>
      <Content />
      <CTA />
    </PageLayout>
  );
}
