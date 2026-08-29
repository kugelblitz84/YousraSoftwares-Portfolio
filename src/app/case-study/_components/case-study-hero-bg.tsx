"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Ambient backdrop for the case-study hero: the project cover blurred and
 * bleeded behind the scrim, drifting slightly as the hero scrolls away.
 * Purely decorative — the sharp image above it carries the alt text.
 */
export function CaseStudyHeroBg({ src }: { src: string }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Reduced motion flattens the output ranges rather than swapping the style
  // props out, so the server and client always render the same keys.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "24%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, reduceMotion ? 1 : 0.15]);

  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={src}
          alt=""
          fill
          sizes="100vw"
          preload
          className="scale-110 object-cover opacity-15 blur-2xl dark:opacity-25"
        />
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-b from-zinc-50/85 via-zinc-50/60 to-zinc-50 dark:from-zinc-950/90 dark:via-zinc-950/70 dark:to-zinc-950"
      />
    </div>
  );
}
