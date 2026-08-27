import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine, RiMailLine } from "@remixicon/react";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { Reveal } from "@/components/motion/reveal";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { TextHoverRoll } from "@/components/motion/text-hover-roll";
import { ProjectGallery } from "./project-gallery";
import { projectCollections, type ProjectCollection } from "@/data/project-data";

// "Web Development" renders as "Web" over an italic gradient "Development".
function headingLines(label: string) {
  const words = label.split(" ");

  if (words.length < 2) return [{ text: label }];

  return [
    { text: words.slice(0, -1).join(" ") },
    { text: words[words.length - 1], italic: true, gradient: true },
  ];
}

export function ProjectList({ collection }: { collection: ProjectCollection }) {
  const category = collection.slug;
  const projectCount = collection.projects.length;
  const stats = [
    { label: "Projects", value: String(projectCount).padStart(2, "0") },
    {
      label: "Collection",
      value: `${collection.number} / ${String(projectCollections.length).padStart(2, "0")}`,
    },
    { label: "Discipline", value: collection.shortLabel },
  ];

  return (
    <main id="main">
      <section className="relative isolate overflow-hidden border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="soft-grid pointer-events-none absolute inset-0 opacity-50" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-40 h-120 w-120 rounded-full bg-sky-400/15 blur-[110px] dark:bg-cyan-400/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-28 h-72 w-72 rounded-full bg-cyan-300/20 blur-[100px] dark:bg-sky-500/10"
        />

        <div className="shell relative pt-32 pb-14 sm:pt-40 sm:pb-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[.68rem] tracking-[.14em] text-zinc-400 uppercase">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-300 hover:text-accent"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">
                /
              </li>
              <li>
                <Link
                  href="/#work"
                  className="transition-colors duration-300 hover:text-accent"
                >
                  Our work
                </Link>
              </li>
              <li aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">
                /
              </li>
              <li
                aria-current="page"
                className="font-medium text-zinc-900 dark:text-white"
              >
                {collection.shortLabel}
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-sky-500 dark:bg-cyan-300" />
                <p className="eyebrow">Selected work</p>
              </div>
              <KineticHeading
                as="h1"
                lines={headingLines(collection.label)}
                className="mt-6 h-bram-hero text-5xl sm:text-6xl lg:text-7xl"
              />
              <SplitTextReveal
                as="p"
                text={collection.description}
                className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
                delay={0.15}
              />

              <div className="mt-10 flex flex-wrap items-center divide-x divide-zinc-200 dark:divide-zinc-800">
                {stats.map((stat) => (
                  <div key={stat.label} className="px-6 first:pl-0">
                    <p className="text-[.62rem] tracking-[.16em] text-zinc-400 uppercase">
                      {stat.label}
                    </p>
                    <p className="mt-1.5 font-display text-2xl font-medium tabular-nums text-zinc-900 dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Reveal transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
              <div className="relative aspect-4/3 overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-zinc-950 shadow-[0_24px_70px_rgba(9,9,11,.14)] sm:aspect-16/11 dark:border-zinc-800/80">
                <Image
                  src={collection.thumbnail}
                  alt={`${collection.label} work at YusraSoftwares`}
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                  preload
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-zinc-950/15 to-transparent" />
                <span className="absolute top-5 left-5 rounded-full border border-white/20 bg-zinc-950/60 px-3 py-1 text-xs font-semibold tracking-[.16em] text-white backdrop-blur-md">
                  {collection.number}
                </span>
                <p className="absolute inset-x-6 bottom-6 font-neue text-xl leading-snug font-medium text-white sm:text-2xl">
                  {collection.quote}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell pt-12 pb-16 sm:pt-14 sm:pb-26">
        <nav
          className="inline-flex w-fit max-w-full flex-wrap items-center gap-1 rounded-full border border-zinc-200/80 bg-white/70 p-1.5 shadow-[0_1px_2px_rgba(9,9,11,.05)] backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/60"
          aria-label="Project categories"
        >
          {projectCollections.map((item) => {
            const active = item.slug === category;

            return (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                aria-current={active ? "page" : undefined}
                className={
                  "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-300 " +
                  (active
                    ? "btn-primary font-medium text-white"
                    : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white")
                }
              >
                <TextHoverRoll text={item.shortLabel} />
                <span
                  className={
                    "rounded-full px-1.5 py-0.5 text-[.62rem] leading-none tabular-nums " +
                    (active
                      ? "bg-white/25 text-white"
                      : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400")
                  }
                >
                  {item.projects.length}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-10 border-t border-zinc-200 dark:border-zinc-800">
          {collection.projects.map((project, index) => (
            <Reveal key={project.id}>
              <article
                className={`project-list-tile group${
                  project.gallery.length === 0
                    ? " project-list-tile--no-gallery"
                    : ""
                }`}
              >
                <Link
                  href={project.detailHref}
                  className="project-primary-link"
                  aria-label={`View ${project.name} case study`}
                >
                  <div className="project-cover">
                    <Image
                      src={project.cover}
                      width={1200}
                      height={760}
                      alt={`${project.name} project preview`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      preload={index === 0}
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 40vw, 30vw"
                    />
                    <span className="absolute top-3 left-3 rounded-full border border-white/15 bg-zinc-950/55 px-2.5 py-1 text-[.6rem] tracking-[.14em] text-white/90 uppercase backdrop-blur-md">
                      Project cover
                    </span>
                  </div>
                  <div className="project-copy">
                    <p className="eyebrow">
                      {String(index + 1).padStart(2, "0")} ·{" "}
                      {collection.shortLabel}
                    </p>
                    <h2 className="mt-2 font-neue text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-sky-500 sm:text-3xl">
                      {project.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {project.description}
                    </p>
                    <p className="mt-4 text-[.68rem] tracking-[.12em] text-zinc-400 uppercase">
                      {project.services}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      <TextHoverRoll text="View case study" />
                      <RiArrowRightLine
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                        size={18}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
                <ProjectGallery
                  images={project.gallery}
                  projectName={project.name}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-t border-zinc-200 bg-zinc-50 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
        <div className="soft-grid pointer-events-none absolute inset-0 opacity-40" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 h-96 w-96 -translate-y-1/3 translate-x-1/3 rounded-full bg-sky-400/15 blur-[110px] dark:bg-cyan-400/10"
        />
        <div className="shell relative py-16 sm:py-26">
          <div className="relative overflow-hidden rounded-4xl border border-zinc-200 bg-white/85 p-7 shadow-[0_24px_80px_rgba(9,9,11,.08)] backdrop-blur-xl sm:rounded-[2.5rem] sm:p-10 lg:p-14 dark:border-zinc-800 dark:bg-zinc-900/80 dark:shadow-[0_24px_80px_rgba(0,0,0,.25)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-500 via-cyan-400 to-sky-500" />
            <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-sky-500 dark:bg-cyan-300" />
                  <p className="eyebrow">Your product could be next</p>
                </div>
                <KineticHeading
                  lines={[
                    { text: "Have a product" },
                    {
                      text: "challenge to solve?",
                      italic: true,
                      gradient: true,
                    },
                  ]}
                  className="mt-6 max-w-2xl h-bram-title"
                />
                <SplitTextReveal
                  as="p"
                  text="Bring us the idea, or the product that needs a stronger next chapter. We will start with a focused conversation, not a hard sell."
                  className="mt-6 max-w-lg text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400"
                  delay={0.15}
                />
              </div>

              <Reveal
                className="lg:w-full lg:max-w-sm lg:justify-self-end"
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              >
                <div className="flex flex-col gap-3">
                  <Link
                    href="/#contact"
                    className="group btn-primary inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium text-white"
                  >
                    <TextHoverRoll text="Start a Project" />
                    <RiArrowRightLine
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      size={18}
                      aria-hidden="true"
                    />
                  </Link>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=yusrasoftwares%40gmail.com&su=New%20project%20inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-7 text-sm font-medium text-zinc-700 transition-colors duration-300 hover:border-sky-300 hover:text-sky-600 dark:border-zinc-700 dark:bg-zinc-950/40 dark:text-zinc-300 dark:hover:border-sky-800 dark:hover:text-cyan-300"
                  >
                    <RiMailLine size={17} aria-hidden="true" />
                    Email us directly
                  </a>
                </div>
                <p className="mt-5 flex items-center justify-center gap-2.5 text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Usually within 1-2 business days
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
