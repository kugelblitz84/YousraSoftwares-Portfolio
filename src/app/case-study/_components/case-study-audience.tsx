"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { Reveal } from "@/components/motion/reveal";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type CaseStudyAudienceProps = {
  /** Mirrors `KineticHeading`'s line model so a variant can accent a line. */
  headingLines: readonly {
    text: string;
    italic?: boolean;
    gradient?: boolean;
  }[];
  audience: readonly string[];
  outcome: string;
};

/**
 * "Who it serves" — the audience roster paired with the product outcome.
 *
 * The audience entries are full phrases ("Visa-assistance customers"), which the
 * old `tag` pills wrapped into an unreadable cluster. They read far better as a
 * roster: one lane per group, each opening with a hairline that draws in, so the
 * cascade doubles as the reveal.
 *
 * A lane list also keeps this section distinct from its neighbours — the page
 * already carries three hairline-divided *grids* (overview facts, core
 * experience, foundations), and a fourth would flatten the whole article.
 *
 * `id="audience"` is load-bearing: it must keep matching the `audience` entry in
 * each template's `chapters` array, which `CaseStudyChrome` scroll-spies against.
 *
 * Reveal orchestration lives on the `<ol>` and on the outcome panel, never on
 * the hairlines themselves. A hairline animates from `scaleX: 0`, and an element
 * scaled to nothing has no painted area — `IntersectionObserver` would report it
 * 0% visible and its own `whileInView` would never fire. For the same reason the
 * roster's closing rule is a second span *inside* the last row rather than a
 * sibling after the list: it inherits the row's variant instead of needing an
 * observer of its own.
 */
export function CaseStudyAudience({
  headingLines,
  audience,
  outcome,
}: CaseStudyAudienceProps) {
  const reduceMotion = useReducedMotion();

  // `useReducedMotion()` is false during SSR and only resolves at hydration, so
  // it may only change how far a value travels — never which properties exist.
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
  };

  const rule: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: { scaleX: 1, transition: { duration: 0.9, ease: EASE } },
  };

  return (
    <section id="audience" className="section-pad">
      <div className="shell">
        <Reveal className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="brand-gradient size-1.5 shrink-0 rounded-full"
          />
          <p className="eyebrow">Who it serves</p>
        </Reveal>

        <KineticHeading
          as="h2"
          lines={[...headingLines]}
          className="balance mt-4 max-w-2xl font-display text-4xl font-bold sm:text-5xl"
        />

        <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-16">
          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {audience.map((group, index) => (
              <motion.li key={group} variants={item} className="group relative">
                {/* Drawn on reveal, then re-lit on hover. */}
                <motion.span
                  aria-hidden="true"
                  variants={rule}
                  className="brand-gradient absolute inset-x-0 top-0 h-px origin-left opacity-30 transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* Lane tint. Kept to 12px of overhang: the shell's gutter is
                    16px, so a wider lane would push the page horizontally. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 -right-3 -left-3 rounded-lg transition-colors duration-500 group-hover:bg-sky-50/70 dark:group-hover:bg-sky-950/25"
                />
                <div className="relative flex items-center gap-5 py-5 sm:gap-7 sm:py-6">
                  <span
                    aria-hidden="true"
                    className="font-neue text-xs font-semibold tracking-[.18em] text-sky-600 tabular-nums dark:text-sky-400"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium text-zinc-900 transition-transform duration-500 group-hover:translate-x-1 sm:text-lg dark:text-zinc-50">
                    {group}
                  </span>
                  <span
                    aria-hidden="true"
                    className="brand-gradient ml-auto size-1.5 shrink-0 scale-0 rounded-full opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100"
                  />
                </div>
                {/* Closes the roster so it reads as a finished table. */}
                {index === audience.length - 1 ? (
                  <motion.span
                    aria-hidden="true"
                    variants={rule}
                    className="brand-gradient absolute inset-x-0 bottom-0 h-px origin-left opacity-30"
                  />
                ) : null}
              </motion.li>
            ))}
          </motion.ol>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-sky-200 bg-sky-50 p-7 sm:p-10 dark:border-sky-900 dark:bg-sky-950/30"
          >
            <motion.span
              aria-hidden="true"
              variants={rule}
              className="brand-gradient absolute inset-x-0 top-0 h-px origin-left"
            />
            <motion.div variants={item} className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="brand-gradient size-1.5 shrink-0 rounded-full"
              />
              <p className="eyebrow">Product outcome</p>
            </motion.div>
            <motion.p
              variants={item}
              className="mt-5 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300"
            >
              {outcome}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
