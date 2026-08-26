import Image from "next/image";
import { RiArrowRightUpLine } from "@remixicon/react";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { Reveal } from "@/components/motion/reveal";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { TextHoverRoll } from "@/components/motion/text-hover-roll";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-14 lg:pt-30 xl:pt-35"
    >
      <div className="soft-grid absolute inset-0 -z-10" />
      <div className="shell grid min-h-[600px] md:min-h-[680px] lg:min-h-[720px] items-center gap-10 pb-0 lg:pb-20 lg:grid-cols-2">
        <Reveal>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-700 dark:border-sky-900 dark:bg-sky-950/50 dark:text-sky-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for new projects
          </div>
          <p className="eyebrow">Digital product development studio</p>
          <KineticHeading
            as="h1"
            className="mt-5 h-bram-hero text-5xl sm:text-7xl xl:text-8xl"
            lines={[
              { text: "From idea to" },
              { text: "digital reality", italic: true, gradient: true },
            ]}
          />
          <SplitTextReveal
            text="We design, build, and scale modern web platforms, mobile apps, and AI-powered solutions for businesses."
            className="mt-7 max-w-full md:max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
            delay={0.2}
          />
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              data-cursor-text="Explore"
              className="group btn-primary rounded-full px-7 py-3.5 text-sm text-white transition-all duration-300"
            >
              <TextHoverRoll text="View Our Work" />
            </a>
            <a
              href="#contact"
              data-cursor-text="Contact"
              className="group rounded-full border border-zinc-300 px-7 py-3.5 text-sm font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-500"
            >
              <TextHoverRoll text="Start a Project" />
            </a>
          </div>
          <p className="mt-10 text-xs font-semibold tracking-[.24em] text-zinc-400">
            DESIGN · DEVELOP · DEPLOY · SCALE
          </p>
        </Reveal>
        <Reveal
          className="product-stage hidden lg:block"
          aria-label="Web and mobile product interface composition"
        >
          <div className="device absolute top-8 right-0 left-0 overflow-hidden rounded-[2rem] p-2">
            <Image
              src="/assets/logos/thumbnail.png"
              width={1024}
              height={768}
              alt="YusraSoftwares dashboard and mobile app preview"
              className="h-auto w-full rounded-[1.5rem] object-cover"
              preload
            />
          </div>
          <div className="absolute bottom-0 left-5 rounded-2xl border border-sky-200 bg-white p-4 shadow-xl dark:border-sky-900 dark:bg-zinc-900">
            <Image
              src="/assets/logos/yousrasoftware_logo.png"
              width={35}
              height={35}
              className="h-10 w-auto object-contain"
              alt=""
              preload
            />
            <p className="mt-2 text-xs font-semibold">
              From Idea to Production
            </p>
          </div>
        </Reveal>
      </div>
      <div className="border-y border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/40">
        <div className="shell grid divide-y divide-zinc-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-zinc-800">
          {[
            [
              "01",
              "WEB",
              "Full-stack platforms",
              "Reliable foundations for ambitious products.",
            ],
            [
              "02",
              "MOBILE",
              "Cross-platform apps",
              "Native-feeling experiences on every screen.",
            ],
            [
              "03",
              "AI",
              "Intelligent integrations",
              "Practical automation that creates real value.",
            ],
          ].map(([number, name, title, text]) => (
            <div
              key={name}
              className="group relative overflow-hidden px-1 py-7 sm:px-8 sm:py-8 first:sm:pl-0 last:sm:pr-0"
            >
              <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-sky-400 to-cyan-300 transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-8 sm:first:inset-x-0 sm:last:right-0" />
              <div className="relative">
                <div>
                  <span className="text-base font-extrabold text-sky-500">
                    {number}
                  </span>
                  <p className="mt-3 text-xs font-bold tracking-[.24em] text-zinc-400">
                    {name}
                  </p>
                  <h2 className="mt-1 font-display text-xl font-bold tracking-tight">
                    {title}
                  </h2>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-500">
                    {text}
                  </p>
                </div>
                <span
                  className="absolute top-0 right-0 grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-zinc-200 text-sky-500 transition-colors group-hover:border-sky-300 group-hover:bg-sky-50 dark:border-zinc-700 dark:group-hover:border-sky-800 dark:group-hover:bg-sky-950/40"
                  aria-hidden="true"
                >
                  <RiArrowRightUpLine size={18} aria-hidden="true" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
