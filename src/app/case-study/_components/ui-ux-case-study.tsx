import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { TextHoverRoll } from "@/components/motion/text-hover-roll";
import type { Project } from "@/data/project-data";

export function UiUxCaseStudy({ project }: { project: Project }) {
  const tags = project.services.split(" · ");

  return (
    <main id="main">
      <article>
        <header className="soft-grid section-pad pt-36 sm:pt-44">
          <div className="shell text-center">
            <Link
              href="/projects/ui-ux"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              <RiArrowLeftLine
                className="shrink-0 transition-transform duration-300 group-hover:-translate-x-1"
                size={18}
                aria-hidden="true"
              />
              <TextHoverRoll text="UI/UX projects" />
            </Link>
            <p className="eyebrow mt-10">UI/UX design case study</p>
            <KineticHeading
              as="h1"
              lines={[{ text: project.name }]}
              className="mx-auto mt-4 max-w-5xl h-bram-hero text-5xl sm:text-7xl"
            />
            <SplitTextReveal
              as="p"
              text={project.description}
              className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-zinc-500 dark:text-zinc-400"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-12 rounded-[2rem] border border-zinc-200 bg-white/80 p-3 shadow-2xl shadow-sky-500/10 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900/80">
              <Image
                src={project.cover}
                width={1200}
                height={760}
                className="w-full rounded-2xl"
                alt={`Placeholder for the ${project.name} presentation`}
                preload
              />
            </div>
          </div>
        </header>

        <section className="section-pad shell">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <p className="eyebrow">Design brief</p>
              <h2 className="balance mt-4 font-display text-4xl font-bold sm:text-5xl">
                Clarity built from evidence.
              </h2>
              <dl className="mt-8 grid gap-6 border-t border-zinc-200 pt-6 sm:grid-cols-2 lg:grid-cols-1 dark:border-zinc-800">
                <div>
                  <dt className="text-xs tracking-wider text-zinc-400 uppercase">
                    Product
                  </dt>
                  <dd className="mt-2">[PRODUCT TYPE]</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-wider text-zinc-400 uppercase">
                    Role
                  </dt>
                  <dd className="mt-2">[DESIGN CONTRIBUTION]</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-wider text-zinc-400 uppercase">
                    Duration
                  </dt>
                  <dd className="mt-2">[TIMELINE]</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-wider text-zinc-400 uppercase">
                    Deliverables
                  </dt>
                  <dd className="mt-2">[KEY DELIVERABLES]</dd>
                </div>
              </dl>
            </div>

            <div className="space-y-4">
              <details
                className="group rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900"
                open
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <div>
                    <span className="eyebrow">Phase 01</span>
                    <h3 className="mt-3 text-2xl font-semibold">
                      Research and framing
                    </h3>
                  </div>
                  <span
                    className="text-2xl text-accent group-open:rotate-45 transition-transform"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-6 grid gap-6 text-zinc-500 sm:grid-cols-2 dark:text-zinc-400">
                  <p>
                    [Explain the initial assumptions, research activities,
                    participants, and the insights that changed the brief.]
                  </p>
                  <ul className="space-y-2">
                    <li>• [RESEARCH METHOD]</li>
                    <li>• [KEY USER NEED]</li>
                    <li>• [DESIGN PRINCIPLE]</li>
                  </ul>
                </div>
              </details>
              <details className="group rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <div>
                    <span className="eyebrow">Phase 02</span>
                    <h3 className="mt-3 text-2xl font-semibold">
                      Flows and interaction design
                    </h3>
                  </div>
                  <span
                    className="text-2xl text-accent group-open:rotate-45 transition-transform"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-6 grid gap-6 text-zinc-500 sm:grid-cols-2 dark:text-zinc-400">
                  <p>
                    [Describe information architecture, key journeys,
                    prototypes, usability tests, and iteration decisions.]
                  </p>
                  <p>
                    [Call out one difficult interaction problem and show how
                    evidence guided the final pattern.]
                  </p>
                </div>
              </details>
              <details className="group rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <div>
                    <span className="eyebrow">Phase 03</span>
                    <h3 className="mt-3 text-2xl font-semibold">
                      Visual system and handoff
                    </h3>
                  </div>
                  <span
                    className="text-2xl text-accent group-open:rotate-45 transition-transform"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-6 grid gap-6 text-zinc-500 sm:grid-cols-2 dark:text-zinc-400">
                  <p>
                    [Document the visual direction, components, responsive
                    behavior, accessibility, and design-system decisions.]
                  </p>
                  <p>
                    [Explain developer collaboration, specifications, QA, and
                    the verified product or user outcomes.]
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {project.gallery.length > 0 && (
          <section className="section-pad border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
            <div className="shell">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="eyebrow">Selected frames</p>
                  <h2 className="mt-4 font-display text-4xl font-bold">
                    The experience in detail.
                  </h2>
                </div>
                <p className="max-w-md text-zinc-600 dark:text-zinc-400">
                  [Add captions that explain the design decision shown in each
                  frame.]
                </p>
              </div>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {project.gallery.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    width={1200}
                    height={760}
                    className="rounded-2xl"
                    alt={`${project.name} frame placeholder ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
      <section className="section-pad text-center">
        <p className="eyebrow">Need clarity in your product?</p>
        <KineticHeading
          lines={[
            { text: "Let's shape an experience" },
            { text: "people understand.", italic: true, gradient: true },
          ]}
          className="mx-auto mt-4 max-w-3xl h-bram-title text-4xl"
        />
        <Link
          href="/#contact"
          className="group btn-primary mt-7 inline-flex items-center rounded-full px-7 py-3.5 text-white"
        >
          <TextHoverRoll text="Start a design project" />
          <RiArrowRightLine
            className="ml-2 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            size={18}
            aria-hidden="true"
          />
        </Link>
      </section>
    </main>
  );
}
