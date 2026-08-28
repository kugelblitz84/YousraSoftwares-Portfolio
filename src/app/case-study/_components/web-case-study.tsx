import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { TextHoverRoll } from "@/components/motion/text-hover-roll";
import type { WebProject } from "@/data/web-project-data";

export function WebCaseStudy({ project }: { project: WebProject }) {
  const study = project.caseStudy;

  return (
    <main id="main">
      <article>
        <header className="overflow-hidden border-b border-zinc-200 bg-zinc-50 pt-36 sm:pt-44 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
          <div className="shell pb-16 sm:pb-20">
            <Link
              href="/projects/web"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 transition hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
            >
              <RiArrowLeftLine
                className="shrink-0 transition-transform duration-300 group-hover:-translate-x-1"
                size={18}
                aria-hidden="true"
              />
              <TextHoverRoll text="Web projects" />
            </Link>

            <div className="mt-10 grid items-end gap-8 lg:grid-cols-[.82fr_1.18fr]">
              <div>
                <p className="eyebrow">{study.eyebrow}</p>
                <KineticHeading
                  as="h1"
                  lines={[{ text: project.name }]}
                  className="mt-4 h-bram-hero text-5xl sm:text-7xl"
                />
                <SplitTextReveal
                  as="p"
                  text={study.tagline}
                  className="mt-6 max-w-xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400"
                />
                <div className="mt-8 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag bg-white/70 dark:border-white/15 dark:bg-white/5 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/15 sm:rounded-3xl dark:border-white/10 dark:bg-zinc-900 dark:shadow-black/40">
                <Image
                  src={project.cover}
                  width={3840}
                  height={2160}
                  className="aspect-video h-full w-full object-cover"
                  alt={study.gallery[0].alt}
                  preload
                  sizes="(max-width: 1023px) 100vw, 58vw"
                />
              </div>
            </div>
          </div>
        </header>

        <section className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <div className="shell grid sm:grid-cols-2 lg:grid-cols-4">
            {study.facts.map(([label, value]) => (
              <div
                key={label}
                className="border-b border-zinc-200 py-6 sm:border-r sm:px-6 sm:first:pl-0 sm:nth-[2]:border-r-0 lg:border-b-0 lg:nth-[2]:border-r lg:last:border-r-0 dark:border-zinc-800"
              >
                <p className="text-[.68rem] tracking-[.16em] text-zinc-400 uppercase">
                  {label}
                </p>
                <p className="mt-2 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad shell grid gap-10 lg:grid-cols-[.35fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Overview</p>
            <h2 className="balance mt-4 font-display text-3xl font-bold">
              One product for the whole travel journey.
            </h2>
          </div>
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {study.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="section-pad border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="shell">
            <p className="eyebrow">Product thinking</p>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div className="card p-7 sm:p-9">
                <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                  01 · The challenge
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold">
                  Make travel complexity feel manageable.
                </h2>
                <p className="mt-5 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {study.challenge}
                </p>
              </div>
              <div className="card p-7 sm:p-9">
                <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                  02 · The approach
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold">
                  Guide intent, one decision at a time.
                </h2>
                <p className="mt-5 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {study.approach}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad shell">
          <p className="eyebrow">Core experience</p>
          <h2 className="balance mt-4 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
            From inspiration to a completed booking.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-800">
            {study.featureGroups.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white p-7 dark:bg-zinc-950"
              >
                <span className="text-xs font-semibold tracking-[.16em] text-sky-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
          <div className="shell">
            <p className="eyebrow">Product foundation</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <h2 className="balance font-display text-4xl font-bold sm:text-5xl">
                A coherent system across every stage.
              </h2>
              <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
                The interfaces maintain a familiar product language as
                travellers move from broad exploration into detailed,
                transaction-heavy flows.
              </p>
            </div>
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {study.productFoundations.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <span className="text-xs font-semibold tracking-[.16em] text-cyan-600 dark:text-cyan-400">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad shell">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Who it serves</p>
              <h2 className="mt-4 font-display text-4xl font-bold">
                Designed for different ways of travelling.
              </h2>
              <div className="mt-7 flex flex-wrap gap-2">
                {study.audience.map((audience) => (
                  <span key={audience} className="tag">
                    {audience}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-sky-200 bg-sky-50 p-7 sm:p-10 dark:border-sky-900 dark:bg-sky-950/30">
              <p className="eyebrow">Product outcome</p>
              <p className="mt-5 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {study.outcome}
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad border-y border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="shell">
            <p className="eyebrow">Project gallery</p>
            <h2 className="mt-4 font-display text-4xl font-bold">
              The journey in context.
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {study.gallery.map((image, index) => (
                <figure
                  key={image.src}
                  className={index === 0 ? "lg:col-span-2" : ""}
                >
                  <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 shadow-lg dark:border-zinc-800">
                    <Image
                      src={image.src}
                      width={3840}
                      height={2160}
                      className="aspect-video w-full object-cover"
                      alt={image.alt}
                      sizes={
                        index === 0
                          ? "100vw"
                          : "(max-width: 1023px) 100vw, 50vw"
                      }
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </article>

      <section className="section-pad border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
        <div className="shell flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Planning a web platform?</p>
            <KineticHeading
              lines={[{ text: "Let's shape the complete customer journey." }]}
              className="mt-4 max-w-2xl h-bram-title text-4xl"
            />
            <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
              Turn a complex service into a clear, responsive product
              experience.
            </p>
          </div>
          <Link
            href="/#contact"
            className="group btn-primary inline-flex shrink-0 items-center rounded-full px-7 py-3.5 text-white"
          >
            <TextHoverRoll text="Start a web project" />
            <RiArrowRightLine
              className="ml-2 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              size={18}
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
