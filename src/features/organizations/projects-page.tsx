import Image from "next/image";
import Link from "next/link";
import { ProjectGallery } from "./project-gallery";
import { getProjectCollection, projectCollections } from "./project-data";
import type { ProjectCategory } from "@/types";
import { KineticHeading } from "@/components/ui/kinetic-heading";
import { SplitTextReveal } from "@/components/ui/split-text-reveal";
import { TextHoverRoll } from "@/components/ui/text-hover-roll";

export function ProjectsPage({ category }: { category: ProjectCategory }) {
  const collection = getProjectCollection(category);

  if (!collection) return null;

  return (
    <main id="main">
      <section className="section-pad shell pt-36 sm:pt-44">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400">
          <span aria-hidden="true">←</span> All project categories
        </Link>
        <p className="eyebrow mt-10">Selected work · {collection.number}</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <h1 className="balance font-display text-5xl font-bold sm:text-7xl">{collection.label}</h1>
          <p className="max-w-xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">{collection.description}</p>
        </div>

        <nav className="mt-12 flex flex-wrap gap-2" aria-label="Project categories">
          {projectCollections.map((item) => (
            <Link
              key={item.slug}
              href={`/projects/${item.slug}`}
              aria-current={item.slug === category ? "page" : undefined}
              className={
                "rounded-full border px-5 py-2.5 text-sm transition " +
                (item.slug === category
                  ? "border-sky-500 bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                  : "border-zinc-200 text-zinc-500 hover:border-sky-400 hover:text-sky-600 dark:border-zinc-700 dark:hover:border-sky-600 dark:hover:text-sky-400")
              }
            >
              {item.shortLabel}
            </Link>
          ))}
        </nav>

        <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800">
          {collection.projects.map((project, index) => (
            <article key={project.id} className={`project-list-tile group${project.gallery.length === 0 ? " project-list-tile--no-gallery" : ""}`}>
              <Link href={project.detailHref} className="project-primary-link" aria-label={`View ${project.name} case study`}>
                <div className="project-cover">
                  <Image
                    src={project.cover}
                    width={1200}
                    height={760}
                    alt={`${project.name} project preview`}
                    className="h-full w-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <span className="absolute top-3 left-3 rounded-full border border-white/15 bg-zinc-950/55 px-2.5 py-1 text-[.6rem] tracking-[.14em] text-white/90 uppercase backdrop-blur-md">
                    Project cover
                  </span>
                </div>
                <div className="project-copy">
                  <p className="eyebrow">{String(index + 1).padStart(2, "0")} · {collection.shortLabel}</p>
                  <h2 className="mt-2 font-display text-2xl font-bold transition-colors duration-200 group-hover:text-sky-500 sm:text-3xl">{project.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{project.description}</p>
                  <p className="mt-4 text-[.68rem] tracking-[.12em] text-zinc-400 uppercase">{project.services}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-600 dark:text-sky-400">
                    View case study <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
              <ProjectGallery images={project.gallery} projectName={project.name} />
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-zinc-950 text-center text-white">
        <div className="shell">
          <p className="eyebrow">Your product could be next</p>
          <h2 className="mt-4 font-display text-4xl font-bold">Have a product challenge to solve?</h2>
          <Link href="/#contact" className="btn-primary mt-7 inline-flex rounded-full px-7 py-3.5">Start a Project →</Link>
        </div>
      </section>
    </main>
  );
}
