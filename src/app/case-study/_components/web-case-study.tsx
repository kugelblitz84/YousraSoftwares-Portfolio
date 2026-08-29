import Link from "next/link";
import { RiArrowLeftLine } from "@remixicon/react";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { TextHoverRoll } from "@/components/motion/text-hover-roll";
import { CaseStudyAudience } from "./case-study-audience";
import { CaseStudyChrome } from "./case-study-chrome";
import { CaseStudyHeroBg } from "./case-study-hero-bg";
import { CaseStudyOutro } from "./case-study-outro";
import { MaskImage } from "./mask-image";
import { OverviewFacts } from "./overview-facts";
import { OverviewProse } from "./overview-prose";
import { SpotlightCard } from "./spotlight-card";
import type { WebProject } from "@/data/web-project-data";

const chapters = [
  { id: "overview", label: "Overview" },
  { id: "thinking", label: "Product thinking" },
  { id: "experience", label: "Core experience" },
  { id: "foundations", label: "Foundations" },
  { id: "audience", label: "Audience" },
  { id: "gallery", label: "Gallery" },
] as const;

export function WebCaseStudy({ project }: { project: WebProject }) {
  const study = project.caseStudy;

  return (
    <main id="main">
      <CaseStudyChrome chapters={chapters} />
      <article>
        <header className="relative overflow-hidden border-b border-zinc-200 pt-36 pb-16 sm:pt-44 sm:pb-20 dark:border-zinc-800">
          <CaseStudyHeroBg src={project.cover} />
          <div className="shell relative">
            <Link
              href="/projects/web"
              className="group relative inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 transition hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
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

              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-sky-500/25 via-cyan-400/10 to-transparent blur-2xl"
                />
                <MaskImage
                  src={project.cover}
                  alt={study.gallery[0].alt}
                  sizes="(max-width: 1023px) 100vw, 58vw"
                  delay={0.25}
                  parallax={0.22}
                  preload
                  className="aspect-video rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/15 sm:rounded-3xl dark:border-white/10 dark:bg-zinc-900 dark:shadow-black/40"
                />
              </div>
            </div>
          </div>
        </header>

        {/* No `overflow-hidden` here: the facts card is deliberately pulled up
            past this section's top edge, and clipping the section would shear
            off the card's first 56px — its rule and index number. The ambient
            wash below is inset instead, so nothing needs clipping. */}
        <section
          id="overview"
          className="relative border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
        >
          {/* Ambient wash anchoring the facts card to the hero above it. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-sky-500/7 to-transparent dark:from-sky-400/6"
          />
          <div className="shell relative">
            {/* Pulled up so the card overlaps the hero's lower edge. */}
            <div className="-mt-10 sm:-mt-14">
              <OverviewFacts facts={study.facts} />
            </div>
            <div className="section-pad">
              <OverviewProse
                heading="One product for the whole travel journey."
                paragraphs={study.overview}
              />
            </div>
          </div>
        </section>

        <section
          id="thinking"
          className="section-pad border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
        >
          <div className="shell">
            <p className="eyebrow">Product thinking</p>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <SpotlightCard delay={0}>
                <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                  01 · The challenge
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold">
                  Make travel complexity feel manageable.
                </h2>
                <p className="mt-5 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {study.challenge}
                </p>
              </SpotlightCard>
              <SpotlightCard delay={0.09}>
                <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                  02 · The approach
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold">
                  Guide intent, one decision at a time.
                </h2>
                <p className="mt-5 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {study.approach}
                </p>
              </SpotlightCard>
            </div>
          </div>
        </section>

        <section id="experience" className="section-pad shell">
          <p className="eyebrow">Core experience</p>
          <h2 className="balance mt-4 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
            From inspiration to a completed booking.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-800">
            {study.featureGroups.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-white p-7 dark:bg-zinc-950"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-sky-500 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100"
                />
                <span className="text-xs font-semibold tracking-[.16em] text-sky-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-semibold transition-colors duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="foundations"
          className="section-pad border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
        >
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
                  className="group rounded-2xl border border-zinc-200 bg-white p-7 transition-colors duration-300 hover:border-sky-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-sky-800"
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

        <CaseStudyAudience
          headingLines={[
            { text: "Designed for different" },
            { text: "ways of travelling.", italic: true, gradient: true },
          ]}
          audience={study.audience}
          outcome={study.outcome}
        />

        <section
          id="gallery"
          className="section-pad border-y border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60"
        >
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
                  <MaskImage
                    src={image.src}
                    alt={image.alt}
                    sizes={
                      index === 0
                        ? "100vw"
                        : "(max-width: 1023px) 100vw, 50vw"
                    }
                    delay={index * 0.12}
                    className="aspect-video rounded-2xl border border-zinc-200 bg-zinc-950 shadow-lg dark:border-zinc-800"
                  />
                  <figcaption className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </article>

      <CaseStudyOutro
        eyebrow="Planning a web platform?"
        headingLines={[
          { text: "Let's shape the complete" },
          { text: "customer journey.", italic: true, gradient: true },
        ]}
        description="Turn a complex service into a clear, responsive product experience."
        primary={{ href: "/#contact", label: "Start a web project" }}
        secondary={{ href: "/projects/web", label: "Browse all web projects" }}
      />
    </main>
  );
}
