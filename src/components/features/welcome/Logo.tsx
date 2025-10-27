"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-4"
    >
      <Image
        src="https://i.postimg.cc/9fC6k7nL/sleeky-icon.webp"
        alt="Sleeky Logo"
        width={70}
        height={70}
      />
    </motion.div>
  );
}
