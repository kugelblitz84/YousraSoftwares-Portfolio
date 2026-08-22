"use client";

import { motion, type Variants } from "framer-motion";
import React, { useMemo } from "react";

interface SplitTextRevealProps {
  text: string;
  className?: string;
  as?: "div" | "p" | "h1" | "h2" | "h3" | "span";
  delay?: number;
  stagger?: number;
  duration?: number;
  mode?: "lines" | "words";
  indent?: boolean;
}

export function SplitTextReveal({
  text,
  className = "",
  as = "div",
  delay = 0,
  stagger = 0.08,
  duration = 0.85,
  mode = "lines",
  indent = false,
}: SplitTextRevealProps) {
  const lines = useMemo(() => {
    if (mode === "words") {
      return text.split(" ");
    }
    return text.split("\n").flatMap((t) => t.trim()).filter(Boolean);
  }, [text, mode]);

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: {
      y: "110%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };

  const ComponentMotion = as === "p" ? motion.p : as === "h1" ? motion.h1 : as === "h2" ? motion.h2 : as === "h3" ? motion.h3 : as === "span" ? motion.span : motion.div;

  return (
    <ComponentMotion
      className={`${className} ${indent ? "indent-heading" : ""}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {lines.map((line, idx) => (
        <span key={idx} className="line-wrap">
          <motion.span variants={lineVariants} className="split-line">
            {line}
          </motion.span>
        </span>
      ))}
    </ComponentMotion>
  );
}
