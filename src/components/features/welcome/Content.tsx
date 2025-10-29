"use client";

import { motion } from "framer-motion";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";

export function Content() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading level={1} className=" mb-2">
          Employee Invite System
        </Heading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Text size="lg" className="mb-4 max-w-2xl">
          Streamline onboarding and manage invites efficiently.
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Text size="base" className="mb-6 max-w-3xl">
          Invite new employees, track their registration status, and ensure a
          smooth onboarding process — all from one centralized dashboard.
        </Text>
      </motion.div>
    </>
  );
}
