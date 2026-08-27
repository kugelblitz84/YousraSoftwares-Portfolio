import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { Reveal } from "@/components/motion/reveal";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { TextHoverRoll } from "@/components/motion/text-hover-roll";
import { ProjectGallery } from "./project-gallery";
import { projectCollections, type ProjectCollection } from "@/data/project-data";

export function ProjectList({ collection }: { collection: ProjectCollection }) {
  const category = collection.slug;

  return (
    <main id="main">
      <section className="section-pad shell pt-36 sm:pt-44">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          <RiArrowLeftLine
            className="shrink-0 transition-transform duration-300 group-hover:-translate-x-1"
            size={18}
            aria-hidden="true"
          />
          <TextHoverRoll text="All project categories" />
        </Link>

        <p className="eyebrow mt-10">
          Selected work · {collection.number}
        </p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <KineticHeading
            as="h1"
            lines={[{ text: collection.label }]}
            className="h-bram-hero text-5xl sm:text-7xl"
          />
          <SplitTextReveal
            as="p"
            text={collection.description}
            className="max-w-xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400"
          />
        </div>

        <nav
          className="mt-12 flex flex-wrap gap-2"
          aria-label="Project categories"
        >
          {projectCollections.map((item) => (
            <Link
              key={item.slug}
              href={`/projects/${item.slug}`}
              aria-current={item.slug === category ? "page" : undefined}
              className={
                "group rounded-full border px-5 py-2.5 text-sm transition-all duration-300 " +
                (item.slug === category
                  ? "border-sky-500 bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                  : "border-zinc-200 text-zinc-500 hover:border-sky-400 hover:text-sky-600 dark:border-zinc-700 dark:hover:border-sky-600 dark:hover:text-sky-400")
              }
            >
              <TextHoverRoll text={item.shortLabel} />
            </Link>
          ))}
        </nav>

        <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800">
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

      <section className="section-pad bg-zinc-950 text-white">
        <div className="shell text-center">
          <p className="eyebrow">Your product could be next</p>
          <KineticHeading
            lines={[
              { text: "Have a product" },
              { text: "challenge to solve?", italic: true, gradient: true },
            ]}
            className="mx-auto mt-4 max-w-3xl h-bram-title text-4xl sm:text-5xl"
          />
          <Link
            href="/#contact"
            className="group btn-primary mt-7 inline-flex items-center gap-1.5 rounded-full px-7 py-3.5 text-sm text-white"
          >
            <TextHoverRoll text="Start a Project" />
            <RiArrowRightLine
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              size={18}
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
