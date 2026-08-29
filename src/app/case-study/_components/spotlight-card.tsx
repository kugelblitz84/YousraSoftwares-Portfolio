"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Card with a soft radial light that follows the pointer across its surface.
 * The glow is a motion-template gradient, so nothing re-renders on hover —
 * motion values update the style directly.
 */
export function SpotlightCard({ children, className = "", delay = 0 }: SpotlightCardProps) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const light = useMotionTemplate`radial-gradient(340px circle at ${x}px ${y}px, rgba(14, 165, 233, 0.13), transparent 65%)`;
  const dark = useMotionTemplate`radial-gradient(340px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.15), transparent 65%)`;

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={`group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-7 transition-colors duration-300 hover:border-sky-300/90 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-sky-800 ${className}`}
    >
      <motion.div
        aria-hidden="true"
        style={{ background: light }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:hidden"
      />
      <motion.div
        aria-hidden="true"
        style={{ background: dark }}
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:block"
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
