"use client";

import { motion } from "framer-motion";
import { Link } from "@/components/ui/Link";
import { WelcomeButton } from "@/components/ui/WelcomeButton";

export function CTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Link href="/admin/register">
        <WelcomeButton>Get Started</WelcomeButton>
      </Link>
    </motion.div>
  );
}
