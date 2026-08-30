"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { Reveal } from "@/components/motion/reveal";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type CaseStudyFoundationsProps = {
  /**
   * Load-bearing: must keep matching this template's `chapters` entry, which
   * `CaseStudyChrome` scroll-spies against.
   */
  id: string;
  eyebrow: string;
  /** Mirrors `KineticHeading`'s line model so a variant can accent a line. */
  headingLines: readonly {
    text: string;
    italic?: boolean;
    gradient?: boolean;
  }[];
  lede: string;
  items: readonly { title: string; description: string }[];
};

/**
 * The product-foundation stages, drawn as a system diagram: a numbered chip per
 * stage on a rail that runs across the top, with a spine dropping from each chip
 * down its own column.
 *
 * A rail rather than another card grid, for two reasons. The heading promises a
 * system "across every stage", and a connected track is that sentence in layout
 * form. And the article already carries two hairline-divided grids (overview
 * facts, core experience) plus the audience roster — a third grid here would
 * flatten the page's rhythm, which is the same argument `CaseStudyAudience`
 * makes for its own lane list.
 *
 * Below `lg` the diagram folds into a single vertical rail: the same chips on
 * one continuous spine, content indented beside it. That reuses the vertical
 * connector rather than adding a second one — see the geometry note on the
 * connectors before touching either grid gap.
 *
 * Reveal orchestration lives on the `<ol>`, never on the chips or connectors.
 * Those animate from `scale: 0` / `scaleX: 0`, and an element scaled to nothing
 * has no painted area — `IntersectionObserver` would report it 0% visible and
 * its own `whileInView` would never fire. The full-size list sidesteps that
 * deadlock and buys the stage-by-stage cascade for free.
 */
export function CaseStudyFoundations({
  id,
  eyebrow,
  headingLines,
  lede,
  items,
}: CaseStudyFoundationsProps) {
  const reduceMotion = useReducedMotion();

  // `useReducedMotion()` is false during SSR and only resolves at hydration, so
  // it may only change how far a value travels — never which properties exist.
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
  };

  const stage: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
  };

  const chip: Variants = {
    hidden: { scale: reduceMotion ? 1 : 0.4, opacity: reduceMotion ? 1 : 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.55, ease: EASE },
    },
  };

  // The chip lands first, then its lines draw away from it.
  const trackX: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.95, delay: 0.14, ease: EASE },
    },
  };

  const trackY: Variants = {
    hidden: { scaleY: reduceMotion ? 1 : 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.95, delay: 0.14, ease: EASE },
    },
  };

  return (
    <section
      id={id}
      className="section-pad relative border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="shell relative">
        {/* Editorial stack: the lede reads as a deck under the headline, not as
            a second column beside it. */}
        <div className="max-w-3xl">
          <Reveal className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="brand-gradient size-1.5 shrink-0 rounded-full"
            />
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>

          <KineticHeading
            as="h2"
            lines={[...headingLines]}
            className="balance mt-4 font-display text-4xl font-bold sm:text-5xl"
          />

          <Reveal>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {lede}
            </p>
          </Reveal>
        </div>

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"
        >
          {items.map((foundation, index) => {
            const isLast = index === items.length - 1;
            // At `lg` the rail wraps every third stage, so a stage that ends a
            // row gets no outgoing line even when more stages follow.
            const linksAcross = !isLast && (index + 1) % 3 !== 0;

            return (
              <motion.li
                key={foundation.title}
                variants={stage}
                className="group relative pl-12 sm:pl-14 lg:pt-12 lg:pl-8"
              >
                {/* Connector geometry. The chip is `size-8` at `top-0 left-0`,
                    so it spans 0–32px on both axes and its centre is (16, 16).
                    Lines start at a chip edge and stop at the next chip's edge,
                    which is why each carries a grid gap:

                      -right-8   = lg:gap-x-8 (32px), chip edge to chip edge
                      -bottom-12 = gap-12 (48px), same on the vertical

                    Re-derive both if either gap changes. */}
                <motion.span
                  aria-hidden="true"
                  variants={trackY}
                  className={`absolute top-8 -bottom-12 left-4 w-px origin-top bg-zinc-300 transition-colors duration-500 group-hover:bg-sky-400 lg:bottom-0 dark:bg-zinc-700 dark:group-hover:bg-cyan-400 ${
                    // Below `lg` this line joins one chip to the next, so the
                    // last stage must not draw it — the rail ends there. At `lg`
                    // it is the column spine, which every stage gets.
                    isLast ? "hidden lg:block" : ""
                  }`}
                />
                {linksAcross ? (
                  <motion.span
                    aria-hidden="true"
                    variants={trackX}
                    className="absolute top-4 -right-8 left-8 hidden h-px origin-left bg-zinc-300 transition-colors duration-500 group-hover:bg-sky-400 lg:block dark:bg-zinc-700 dark:group-hover:bg-cyan-400"
                  />
                ) : null}

                {/* Numbered chip: the stage marker and its index in one object,
                    so the column needs no second numeral. The `<ol>` supplies
                    the real ordinality, hence `aria-hidden`. */}
                <motion.span
                  aria-hidden="true"
                  variants={chip}
                  className="absolute top-0 left-0 grid size-8 place-items-center rounded-lg border border-sky-500/30 bg-white text-[.7rem] font-semibold text-sky-600 tabular-nums shadow-sm transition duration-500 group-hover:border-sky-500 group-hover:ring-4 group-hover:ring-sky-500/10 dark:border-cyan-400/30 dark:bg-zinc-900 dark:text-cyan-400 dark:group-hover:border-cyan-300 dark:group-hover:ring-cyan-400/10"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.span>

                <div className="relative">
                  {/* Hover wash. The overhang must stay under the shell's
                      narrowest gutter — 10px below 640px — or it pushes the page
                      sideways, hence 8px rather than the 12px the lane tints
                      elsewhere use. */}
                  <span
                    aria-hidden="true"
                    className="absolute -inset-x-2 -inset-y-4 rounded-2xl transition-colors duration-500 group-hover:bg-white/70 dark:group-hover:bg-white/5"
                  />
                  <div className="relative">
                    <h3 className="font-display text-xl font-semibold text-zinc-900 sm:text-2xl dark:text-zinc-50">
                      <span className="relative inline-block">
                        {foundation.title}
                        <span
                          aria-hidden="true"
                          className="brand-gradient absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                        />
                      </span>
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {foundation.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
