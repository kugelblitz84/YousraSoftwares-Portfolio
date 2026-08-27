"use client";

import {
  RiArrowRightUpLine,
  RiCheckboxCircleLine,
  RiMailLine,
  RiSparklingLine,
  RiTimeLine,
} from "@remixicon/react";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { Reveal } from "@/components/motion/reveal";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Brand Design / Rebranding",
  "AI Integration",
  "Bug Fix / Existing Project",
  "Migration / Scaling",
  "Other",
];
const field =
  "contact-field mt-2 w-full rounded-xl border border-zinc-200 border-b-2 border-b-zinc-300 bg-zinc-50/80 px-4 py-3.5 text-sm text-zinc-950 outline-none transition-[border-color,background-color] duration-200 placeholder:text-zinc-400 hover:border-zinc-300 focus:border-zinc-300 focus:border-b-sky-500 focus:bg-white focus-visible:outline-none dark:border-zinc-700 dark:border-b-zinc-600 dark:bg-zinc-950/70 dark:text-white dark:hover:border-zinc-600 dark:focus:border-zinc-600 dark:focus:border-b-cyan-400 dark:focus:bg-zinc-950";
const requiredMark = (
  <span aria-hidden className="ml-0.5 text-[22px] leading-none text-sky-500">
    *
  </span>
);

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-zinc-200 bg-zinc-50 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
    >
      <div className="soft-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/3 translate-x-1/3 rounded-full bg-sky-400/15 blur-[110px] dark:bg-cyan-400/10" />
      <div className="section-pad shell relative">
        <div className="mb-12 flex items-center gap-3 sm:mb-16">
          <span className="h-px w-10 bg-sky-500 dark:bg-cyan-300" />
          <p className="eyebrow">Start a project</p>
        </div>
        <div className="grid gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-16 xl:gap-24">
          <div className="flex flex-col lg:sticky lg:top-28 lg:min-h-[38rem]">
            <KineticHeading
              lines={[
                { text: "Let's build something" },
                { text: "worth remembering.", italic: true, gradient: true },
              ]}
              className="max-w-2xl h-bram-title"
            />
            <SplitTextReveal
              as="p"
              text="Bring us the idea, the challenge, or the product that needs a stronger next chapter. We will bring honest thinking and a team ready to make it real."
              className="mt-6 max-w-lg text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400"
              delay={0.15}
            />
            <Reveal className="mt-10">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=yusrasoftwares%40gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex max-w-lg items-center gap-4 border-y border-zinc-200 py-5 transition-colors hover:border-sky-300 dark:border-zinc-800 dark:hover:border-sky-800"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sky-500 text-white shadow-[0_8px_24px_rgba(14,165,233,.25)]">
                  <RiMailLine size={19} aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium uppercase tracking-[.12em] text-zinc-500">
                    Email us directly
                  </span>
                  <span className="mt-1 block truncate text-base font-medium sm:text-lg">
                    yusrasoftwares@gmail.com
                  </span>
                </span>
                <RiArrowRightUpLine
                  className="shrink-0 text-zinc-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-500"
                  size={20}
                  aria-hidden
                />
              </a>
            </Reveal>
            <Reveal className="mt-auto pt-10" transition={{ delay: 0.2 }}>
              <div className="grid max-w-lg grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800">
                <div className="bg-white/80 p-4 backdrop-blur sm:p-5 dark:bg-zinc-900/90">
                  <RiTimeLine className="text-sky-500" size={20} aria-hidden />
                  <p className="mt-3 text-sm font-medium">Quick response</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    Usually within 1-2 business days
                  </p>
                </div>
                <div className="bg-white/80 p-4 backdrop-blur sm:p-5 dark:bg-zinc-900/90">
                  <RiSparklingLine
                    className="text-cyan-500"
                    size={20}
                    aria-hidden
                  />
                  <p className="mt-3 text-sm font-medium">Clear first step</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    A focused conversation, no hard sell
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <form
              className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/85 p-5 shadow-[0_24px_80px_rgba(9,9,11,.08)] backdrop-blur-xl sm:p-8 lg:p-9 dark:border-zinc-800 dark:bg-zinc-900/80 dark:shadow-[0_24px_80px_rgba(0,0,0,.25)]"
              aria-describedby="form-note"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500" />
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-2xl font-medium sm:text-3xl">
                    Tell us about your project
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">
                    A few details will help us start in the right place.
                  </p>
                </div>
                <span className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 sm:inline-flex dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-400">
                  Open for projects
                </span>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  ["Your name", "name", "name", "Jane Smith"],
                  ["Company", "company", "organization", "Company name"],
                  ["Work email", "email", "email", "jane@company.com"],
                ].map(([label, name, auto, placeholder]) => (
                  <label
                    key={name}
                    className={`text-sm font-medium ${name === "email" ? "sm:col-span-2" : ""}`}
                  >
                    {label}
                    {name !== "company" && requiredMark}
                    <input
                      required={name !== "company"}
                      name={name}
                      autoComplete={auto}
                      type={name === "email" ? "email" : "text"}
                      placeholder={placeholder}
                      className={field}
                    />
                  </label>
                ))}
                <label className="text-sm font-medium sm:col-span-2">
                  What can we help with?{requiredMark}
                  <select
                    required
                    name="service"
                    defaultValue=""
                    className={field}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-medium sm:col-span-2">
                  Project details{requiredMark}
                  <textarea
                    required
                    name="details"
                    rows={6}
                    placeholder="What are you building, improving, or trying to solve?"
                    className={`${field} min-h-36 resize-y`}
                  />
                </label>
              </div>
              <div className="mt-7 flex flex-col gap-4 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
                <p
                  id="form-note"
                  className="flex max-w-xs items-start gap-2 text-xs leading-5 text-zinc-500"
                >
                  <RiCheckboxCircleLine
                    className="mt-0.5 shrink-0 text-sky-500"
                    size={15}
                    aria-hidden
                  />
                  Form delivery is being connected. Email us directly in the
                  meantime.
                </p>
                <a
                  href="mailto:yusrasoftwares@gmail.com?subject=New%20project%20inquiry"
                  className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium text-white"
                >
                  Start by email
                  <RiArrowRightUpLine size={18} aria-hidden />
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
