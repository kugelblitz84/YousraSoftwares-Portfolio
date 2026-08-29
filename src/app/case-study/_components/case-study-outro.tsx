"use client";

import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import type { MouseEvent } from "react";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { TextHoverRoll } from "@/components/motion/text-hover-roll";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type OutroLink = {
  href: string;
  label: string;
};

type CaseStudyOutroProps = {
  eyebrow: string;
  /** Mirrors `KineticHeading`'s line model so a variant can accent a line. */
  headingLines: readonly {
    text: string;
    italic?: boolean;
    gradient?: boolean;
  }[];
  description: string;
  primary: OutroLink;
  secondary?: OutroLink;
};

/**
 * The closing beat of every case study, sitting directly on top of the footer.
 *
 * The footer is also `bg-zinc-50 dark:bg-zinc-950`, so a flat band here reads as
 * footer chrome rather than the article's final call. The fix is depth: a washed
 * ground (grid + blooms) with a blurred card floating on it, which gives the
 * closing ask its own surface without introducing a new colour.
 *
 * Reveal orchestration lives on the card, not on each child. The hairline
 * animates from `scaleX: 0`, and an element scaled to nothing has no painted
 * area — `IntersectionObserver` would report it 0% visible and its own
 * `whileInView` would never fire. Triggering on the full-size card sidesteps
 * that and buys the stagger for free.
 */
export function CaseStudyOutro({
  eyebrow,
  headingLines,
  description,
  primary,
  secondary,
}: CaseStudyOutroProps) {
  const reduceMotion = useReducedMotion();

  // Parked far off-canvas so the glow is absent until the pointer arrives,
  // rather than blooming from the card's top-left corner on first hover.
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const lightGlow = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, rgba(14, 165, 233, 0.13), transparent 68%)`;
  const darkGlow = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.15), transparent 68%)`;

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  // `useReducedMotion()` is false during SSR and only resolves at hydration, so
  // it may only change how far a value travels — never which properties exist.
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  const rule: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: { scaleX: 1, transition: { duration: 1, ease: EASE } },
  };

  return (
    <section className="section-pad relative overflow-hidden border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
      {/* Washed ground: the grid carries the seam down from the article, the
          blooms lift the card off the page. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="soft-grid absolute inset-x-0 top-0 h-72 opacity-60" />
        <div className="absolute -right-24 -bottom-32 h-72 w-96 rounded-full bg-cyan-300/15 blur-3xl dark:bg-cyan-400/10" />
      </div>

      <div className="shell relative">
        <motion.div
          onMouseMove={handleMove}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/80 p-7 shadow-xl shadow-zinc-900/5 backdrop-blur-xl sm:p-10 lg:p-12 dark:border-zinc-800 dark:bg-zinc-900/55 dark:shadow-black/40"
        >
          <motion.div
            aria-hidden="true"
            style={{ background: lightGlow }}
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:hidden"
          />
          <motion.div
            aria-hidden="true"
            style={{ background: darkGlow }}
            className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:block"
          />
          {/* Drawn left-to-right as the card arrives. */}
          <motion.span
            aria-hidden="true"
            variants={rule}
            className="brand-gradient absolute inset-x-0 top-0 h-px origin-left"
          />

          <div className="relative grid gap-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-14">
            <div>
              <motion.div variants={item} className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="brand-gradient size-1.5 shrink-0 rounded-full"
                />
                <p className="eyebrow">{eyebrow}</p>
              </motion.div>

              <KineticHeading
                lines={[...headingLines]}
                className="mt-5 h-bram-title"
              />

              <motion.p
                variants={item}
                className="balance mt-5 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400"
              >
                {description}
              </motion.p>
            </div>

            <motion.div
              variants={item}
              className="flex flex-col items-start gap-6 lg:items-end"
            >
              <Link
                href={primary.href}
                className="btn-primary group/cta relative inline-flex items-center gap-3 overflow-hidden rounded-full px-6 py-3.5 text-white sm:px-8 sm:py-4"
              >
                {/* Sheen sweeping across the pill on hover. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 blur-md transition-[left] duration-700 ease-out group-hover/cta:left-[120%]"
                />
                <span className="relative font-medium">
                  <TextHoverRoll text={primary.label} />
                </span>
                <span
                  aria-hidden="true"
                  className="relative grid size-7 shrink-0 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                >
                  <RiArrowRightUpLine size={15} />
                </span>
              </Link>

              {secondary ? (
                <Link
                  href={secondary.href}
                  className="group/alt inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400"
                >
                  <TextHoverRoll text={secondary.label} />
                  <RiArrowRightUpLine
                    className="shrink-0 transition-transform duration-300 group-hover/alt:translate-x-0.5 group-hover/alt:-translate-y-0.5"
                    size={15}
                    aria-hidden="true"
                  />
                </Link>
              ) : null}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
