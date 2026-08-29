"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type OverviewFactsProps = {
  facts: readonly (readonly [string, string])[];
};

/**
 * The case-study spec card: project facts as a hairline-divided grid that
 * straddles the seam below the hero.
 *
 * Reveal orchestration lives on the `<dl>`, not on each cell. The cells and
 * their rules animate from `scaleX: 0` / `y`, and an element scaled to nothing
 * has no painted area — so `IntersectionObserver` would report it 0% visible
 * and its own `whileInView` would never fire. Keeping the trigger on the
 * full-size container sidesteps that deadlock and buys a clean stagger.
 *
 * The card is short (~144px) and deliberately overlaps the hero, so a
 * percentage `amount` can be satisfied by the fixed header alone — it would sit
 * at `opacity: 0` forever. `amount: "some"` fires on the first visible pixel,
 * and the card is also already on screen at first paint on tall viewports, so
 * `animate` (not `whileInView`) drives it: it plays once on mount regardless of
 * observer behaviour, which is the failure mode worth engineering against here.
 */
export function OverviewFacts({ facts }: OverviewFactsProps) {
  const reduceMotion = useReducedMotion();

  // `useReducedMotion()` is false during SSR and only resolves at hydration, so
  // it may only change how far a value travels — never which properties exist.
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
  };

  const cell: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  const rule: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: { scaleX: 1, transition: { duration: 0.9, ease: EASE } },
  };

  return (
    <motion.dl
      variants={container}
      initial="hidden"
      animate="visible"
      className="grid gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 shadow-xl shadow-zinc-900/5 sm:grid-cols-2 lg:grid-cols-4 dark:border-zinc-700/70 dark:bg-zinc-700/70 dark:shadow-black/40"
    >
      {facts.map(([label, value], index) => (
        <motion.div
          key={label}
          variants={cell}
          className="group relative bg-white p-6 transition-colors duration-500 hover:bg-sky-50/60 sm:p-7 dark:bg-zinc-900 dark:hover:bg-zinc-800/80"
        >
          {/* Drawn on reveal, then re-lit on hover as a brighter sweep. */}
          <motion.span
            aria-hidden="true"
            variants={rule}
            className="brand-gradient absolute inset-x-0 top-0 h-px origin-left opacity-70 transition-opacity duration-500 group-hover:opacity-100"
          />
          <span
            aria-hidden="true"
            className="font-neue text-xs font-semibold tracking-[.18em] text-sky-600 tabular-nums dark:text-sky-400"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <dt className="mt-4 text-[.68rem] font-semibold tracking-[.16em] text-zinc-500 uppercase dark:text-zinc-400">
            {label}
          </dt>
          <dd className="mt-1.5 font-medium text-zinc-900 transition-transform duration-500 group-hover:translate-x-0.5 dark:text-zinc-50">
            {value}
          </dd>
        </motion.div>
      ))}
    </motion.dl>
  );
}
