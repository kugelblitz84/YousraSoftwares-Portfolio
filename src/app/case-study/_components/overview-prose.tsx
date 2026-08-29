"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type OverviewProseProps = {
  heading: string;
  paragraphs: readonly string[];
};

/**
 * Editorial body for the overview: a sticky label column with a rail that
 * fills as the prose scrolls past, and paragraphs that rise in sequence.
 *
 * As in `OverviewFacts`, the reveal trigger sits on the full-size list rather
 * than on the scaled rule elements — a `scaleX: 0` element paints nothing, so
 * an `IntersectionObserver` on it would never report it visible.
 */
export function OverviewProse({ heading, paragraphs }: OverviewProseProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  // Spring-smoothed so the rail glides rather than tracking scroll jitter.
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const railScale = useTransform(smooth, [0, 1], [reduceMotion ? 1 : 0.02, 1]);

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.06 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  const marker: Variants = {
    hidden: { scaleY: reduceMotion ? 1 : 0 },
    visible: { scaleY: 1, transition: { duration: 0.85, ease: EASE } },
  };

  return (
    <div ref={ref} className="grid gap-10 lg:grid-cols-[.34fr_1fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow">Overview</p>
        <h2 className="balance mt-4 font-display text-3xl font-bold sm:text-4xl">
          {heading}
        </h2>
        {/* Track + fill: the fill is a child transform, so the track keeps its
            painted area and stays measurable. */}
        <div
          aria-hidden="true"
          className="relative mt-8 hidden h-0.5 w-full max-w-52 overflow-hidden rounded-full bg-zinc-200 lg:block dark:bg-zinc-800"
        >
          <motion.span
            style={{ scaleX: railScale }}
            className="brand-gradient absolute inset-0 origin-left rounded-full"
          />
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "some" }}
        className="max-w-3xl"
      >
        {paragraphs.map((paragraph, index) => (
          <motion.div key={paragraph} variants={item} className="group relative pl-6 sm:pl-8">
            {/* Vertical marker per paragraph. It scales from nothing, so it gets
                no `whileInView` of its own — a zero-area element is never
                reported visible. The parent's stagger supplies the timing. */}
            <motion.span
              aria-hidden="true"
              variants={marker}
              className="absolute top-1.5 bottom-1.5 left-0 w-0.5 origin-top rounded-full bg-zinc-200 transition-colors duration-500 group-hover:bg-sky-400 dark:bg-zinc-700 dark:group-hover:bg-sky-500"
            />
            <p
              className={`text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 ${
                index > 0 ? "mt-6" : ""
              }`}
            >
              {/* The opening phrase of the first paragraph carries the eye in. */}
              {index === 0 ? (
                <>
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">
                    {paragraph.split(". ")[0]}.
                  </span>{" "}
                  {paragraph.split(". ").slice(1).join(". ")}
                </>
              ) : (
                paragraph
              )}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
