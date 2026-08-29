import Link from "next/link";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { TextHoverRoll } from "@/components/motion/text-hover-roll";
import { CaseStudyChrome } from "./case-study-chrome";
import { CaseStudyHeroBg } from "./case-study-hero-bg";
import { MaskImage } from "./mask-image";
import { SpotlightCard } from "./spotlight-card";
import { mobileProjects, type MobileProject } from "@/data/mobile-project-data";

const chapters = [
  { id: "overview", label: "Overview" },
  { id: "thinking", label: "Product thinking" },
  { id: "experience", label: "Core experience" },
  { id: "engineering", label: "Engineering" },
  { id: "audience", label: "Audience" },
  { id: "gallery", label: "Gallery" },
] as const;

export function MobileCaseStudy({ project }: { project: MobileProject }) {
  const study = project.caseStudy;
  const projectIndex = mobileProjects.findIndex(
    (item) => item.id === project.id,
  );
  const nextProject =
    mobileProjects[(projectIndex + 1) % mobileProjects.length];

  return (
    <main id="main">
      <CaseStudyChrome chapters={chapters} />
      <article>
        <header className="relative overflow-hidden border-b border-zinc-200 pt-36 pb-16 sm:pt-44 sm:pb-20 dark:border-zinc-800">
          <CaseStudyHeroBg src={project.cover} />
          <div className="shell relative">
            <Link
              href="/projects/mobile"
              className="group relative inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 transition hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
            >
              <RiArrowLeftLine
                className="shrink-0 transition-transform duration-300 group-hover:-translate-x-1"
                size={18}
                aria-hidden="true"
              />
              <TextHoverRoll text="Mobile projects" />
            </Link>

            <div className="mt-10 grid items-end gap-8 lg:grid-cols-[.85fr_1.15fr]">
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

        <section id="overview" className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
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
              A product built around the whole journey.
            </h2>
          </div>
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {study.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
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
                  Make complexity feel clear.
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
                  Design around real user intent.
                </h2>
                <p className="mt-5 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {study.approach}
                </p>
              </SpotlightCard>
            </div>
          </div>
        </section>

        <section id="experience" className="section-pad shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Core experience</p>
            <h2 className="balance mt-4 font-display text-4xl font-bold sm:text-5xl">
              One application, connected capabilities.
            </h2>
          </div>
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
          id="engineering"
          className="section-pad border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
        >
          <div className="shell">
            <p className="eyebrow">Engineering</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <h2 className="balance font-display text-4xl font-bold sm:text-5xl">
                Built as a scalable mobile product.
              </h2>
              <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
                The implementation connects interface design, application
                architecture, external services, and product operations in a
                maintainable cross-platform foundation.
              </p>
            </div>
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {study.engineering.map((item, index) => (
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

        <section id="audience" className="section-pad shell">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Who it serves</p>
              <h2 className="mt-4 font-display text-4xl font-bold">
                Designed for a broad, real-world audience.
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

        <section
          id="gallery"
          className="section-pad border-y border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60"
        >
          <div className="shell">
            <p className="eyebrow">Project gallery</p>
            <h2 className="mt-4 font-display text-4xl font-bold">
              The product in context.
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

      <section className="section-pad border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
        <div className="shell flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Next mobile case study</p>
            <KineticHeading
              lines={[{ text: nextProject.name }]}
              className="mt-4 h-bram-title text-4xl"
            />
            <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
              {nextProject.description}
            </p>
          </div>
          <Link
            href={nextProject.detailHref}
            className="group btn-primary inline-flex shrink-0 items-center rounded-full px-7 py-3.5 text-white"
          >
            <TextHoverRoll text={`View ${nextProject.name}`} />
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
