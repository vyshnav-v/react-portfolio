"use client";

import { ReactNode } from "react";

import { motion } from "framer-motion";

export interface FadeUpProps {
  children: ReactNode;
  duration: number;
  delay?: number;
  whileInView?: boolean;
}

export default function FadeUp({
  children,
  duration,
  delay,
  whileInView = false,
}: FadeUpProps) {
  const animation = {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      // Use a numeric cubic-bezier easing compatible with Framer Motion v12
      ease: [0.42, 0, 0.58, 1] as const,
      delay,
    },
  };
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={whileInView ? animation : undefined}
      animate={!whileInView ? animation : undefined}
    >
      {children}
    </motion.div>
  );
}
