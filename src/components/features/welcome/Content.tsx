"use client";

import { motion } from "framer-motion";

export function Content() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-extrabold text-green-300 mb-2"
      >
        Employee Invite System
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-400 text-base sm:text-lg mb-4 max-w-2xl"
      >
        Streamline onboarding and manage invites efficiently.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-gray-500 text-sm sm:text-base mb-6 max-w-3xl"
      >
        Invite new employees, track their registration status, and ensure a
        smooth onboarding process — all from one centralized dashboard.
      </motion.p>
    </>
  );
}
