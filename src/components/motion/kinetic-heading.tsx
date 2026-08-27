"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

interface KineticHeadingProps {
  lines: Array<{
    text: string;
    italic?: boolean;
    gradient?: boolean;
    className?: string;
  }>;
  as?: "h1" | "h2" | "h3" | "div";
  className?: string;
  indent?: boolean;
}

export function KineticHeading({
  lines,
  as = "h2",
  className = "",
  indent = false,
}: KineticHeadingProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: {
      y: "115%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: "easeOut",
      },
    },
  };

  const ComponentMotion = as === "h1" ? motion.h1 : as === "h3" ? motion.h3 : as === "div" ? motion.div : motion.h2;

  return (
    <ComponentMotion
      className={`${className} ${indent ? "indent-heading" : ""}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {lines.map((item, idx) => (
        <span key={idx} className="line-wrap inline-block">
          <motion.span
            variants={lineVariants}
            className={`split-line ${item.italic ? "italic-accent font-normal" : ""} ${
              item.gradient ? "text-gradient" : ""
            } ${item.className || ""}`}
          >
            {item.text}&nbsp;
          </motion.span>
        </span>
      ))}
    </ComponentMotion>
  );
}
