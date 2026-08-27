"use client";

import {
  RiArrowRightUpLine,
  RiCodeSSlashLine,
  RiRocketLine,
  RiShieldCheckLine,
  RiTeamLine,
  type RemixiconComponentType,
} from "@remixicon/react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";

type Benefit = {
  number: string;
  title: string;
  text: string;
  detail: string;
  icon: RemixiconComponentType;
};

const benefits: Benefit[] = [
  {
    number: "01",
    title: "One team, every layer",
    text: "Strategy, design, web, mobile, backend, and AI move together from day one.",
    detail: "Less handoff. More momentum.",
    icon: RiTeamLine,
  },
  {
    number: "02",
    title: "Product thinking first",
    text: "Every technical decision starts with the user need and the business outcome.",
    detail: "Purpose before technology.",
    icon: RiRocketLine,
  },
  {
    number: "03",
    title: "Engineering that lasts",
    text: "Clean, maintainable foundations built to adapt as your product and team grow.",
    detail: "Ready for the next chapter.",
    icon: RiCodeSSlashLine,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function WhyUsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-us"
      className="relative isolate overflow-hidden border-y border-zinc-200 bg-zinc-50 text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
    >
      <div className="soft-grid pointer-events-none absolute inset-0 opacity-50" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-28 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-sky-400/15 blur-[100px] dark:bg-cyan-400/10"
        animate={
          reduceMotion ? undefined : { scale: [1, 1.13, 1], x: [0, -24, 0] }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-300/20 blur-[100px] dark:bg-sky-500/10" />

      <div className="section-pad shell relative">
        <div className="grid items-start gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 xl:gap-28">
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-sky-500 dark:bg-cyan-300" />
              <p className="eyebrow">Why YusraSoftwares</p>
            </div>
            <KineticHeading
              lines={[
                { text: "More than a vendor." },
                { text: "A product partner.", italic: true, gradient: true },
              ]}
              className="mt-6 max-w-xl h-bram-title"
            />
            <SplitTextReveal
              as="p"
              text="We bring the clarity, craft, and technical depth needed to turn ambitious ideas into dependable digital products."
              className="mt-6 max-w-md text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400"
              delay={0.15}
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white/70 px-4 py-2.5 text-sm text-zinc-700 shadow-sm backdrop-blur-md dark:border-sky-900/70 dark:bg-zinc-900/70 dark:text-zinc-300"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Built around your product, not our process
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute bottom-7 left-7 top-7 hidden w-px bg-gradient-to-b from-transparent via-sky-300 to-transparent sm:block dark:via-sky-800" />
            <div className="space-y-4 sm:space-y-5">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.article
                    key={benefit.number}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    whileHover={reduceMotion ? undefined : { x: 8 }}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-zinc-200/90 bg-white/80 p-5 shadow-[0_16px_50px_rgba(9,9,11,0.05)] backdrop-blur-xl transition-colors duration-300 hover:border-sky-300 sm:rounded-[2rem] sm:p-7 dark:border-zinc-800 dark:bg-zinc-900/70 dark:shadow-[0_16px_60px_rgba(0,0,0,0.18)] dark:hover:border-sky-800"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-gradient-to-b from-cyan-300 to-sky-500 transition-transform duration-500 group-hover:scale-y-100" />
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-400/0 blur-3xl transition-colors duration-500 group-hover:bg-sky-400/15" />
                    <div className="relative grid gap-5 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-6">
                      <div className="flex items-center justify-between sm:block">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-sky-200 bg-sky-50 text-sky-600 transition-all duration-500 group-hover:rotate-[-4deg] group-hover:scale-105 group-hover:bg-sky-500 group-hover:text-white dark:border-sky-900 dark:bg-sky-950/70 dark:text-cyan-300 dark:group-hover:bg-sky-500">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
                        <span className="font-display text-sm text-zinc-400 sm:hidden">
                          {benefit.number}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-medium tracking-[-0.025em] sm:text-2xl">
                          {benefit.title}
                        </h3>
                        <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7 dark:text-zinc-400">
                          {benefit.text}
                        </p>
                        <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-sky-600 dark:text-cyan-300">
                          <RiShieldCheckLine className="h-4 w-4" aria-hidden />
                          {benefit.detail}
                        </div>
                      </div>
                      <div className="hidden h-full min-h-28 flex-col items-end justify-between sm:flex">
                        <span className="font-display text-sm text-zinc-400">
                          {benefit.number}
                        </span>
                        <RiArrowRightUpLine
                          className="h-5 w-5 text-zinc-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-500 dark:text-zinc-700"
                          aria-hidden
                        />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
            <motion.div
              initial={{ opacity: 0, scaleX: 0.8 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-5 flex origin-left flex-col gap-3 rounded-2xl border border-dashed border-zinc-300 px-5 py-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-700 dark:text-zinc-400"
            >
              <span>From first conversation to long-term growth.</span>
              <span className="font-medium text-zinc-900 dark:text-white">
                One accountable team.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
