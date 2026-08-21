"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";

type RevealProps = ComponentProps<typeof motion.div>;

export function Reveal({ children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
