"use client";

import { motion, type Variants } from "framer-motion";
import {
  RiArrowRightUpLine,
  RiBrushLine,
  RiCodeSSlashLine,
  RiCpuLine,
  RiLoopLeftLine,
  RiSmartphoneLine,
} from "@remixicon/react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: index * 0.09,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const icons = {
  design: RiBrushLine,
  web: RiCodeSSlashLine,
  mobile: RiSmartphoneLine,
  ai: RiCpuLine,
  maintenance: RiLoopLeftLine,
};

export function ServiceCard({
  number,
  title,
  text,
  stack,
  icon,
  index,
  wide,
}: {
  number: string;
  title: string;
  text: string;
  stack: string;
  icon: keyof typeof icons;
  index: number;
  wide: boolean;
}) {
  const Icon = icons[icon];
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      whileHover={{ y: -7, transition: { duration: 0.25 } }}
      className={`group relative overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white/75 p-6 shadow-[0_12px_40px_rgba(9,9,11,0.04)] transition-colors duration-300 hover:border-sky-400/70 hover:shadow-[0_20px_55px_rgba(2,132,199,0.12)] sm:p-7 dark:border-zinc-800 dark:bg-zinc-900/60 ${wide ? "lg:col-span-3" : "lg:col-span-2"}`}
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-400/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />
      <div className="relative flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 dark:bg-sky-400/10 dark:text-cyan-300">
          <Icon size={22} aria-hidden="true" />
        </span>
        <span className="text-sm font-bold tracking-[.16em] text-zinc-500 dark:text-zinc-400">
          {number}
        </span>
      </div>
      <h3 className="relative mt-8 font-display text-2xl font-bold tracking-tight sm:text-[1.65rem]">
        {title}
      </h3>
      <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        {text}
      </p>
      <div className="relative mt-8 flex items-center justify-between gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[.12em] text-zinc-400">
          {stack}
        </p>
        <RiArrowRightUpLine
          className="shrink-0 text-zinc-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-500"
          size={20}
          aria-hidden="true"
        />
      </div>
    </motion.article>
  );
}
