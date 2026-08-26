import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { Reveal } from "@/components/motion/reveal";
import { TextHoverRoll } from "@/components/motion/text-hover-roll";
import { projectCollections } from "@/data/project-data";

export function WorkSection() {
  return (
    <section id="work" className="section-pad shell">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="eyebrow">Our work</p>
          <KineticHeading
            lines={[{ text: "Choose a discipline" }]}
            className="mt-3 h-bram-title text-4xl sm:text-5xl"
          />
          <p className="mt-4 max-w-2xl text-base font-neue text-zinc-500">
            Explore real web and mobile products, plus our approach to clear,
            evidence-led digital experiences.
          </p>
        </div>
        <Link
          href="/projects/web"
          className="group inline-flex items-center gap-1.5 font-medium text-accent hover:text-accent-strong"
        >
          <TextHoverRoll text="Browse Projects" />
          <RiArrowRightLine
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            size={18}
            aria-hidden="true"
          />
        </Link>
      </div>
      <div
        id="work-categories"
        className="mt-12 grid scroll-mt-28 gap-6 lg:grid-cols-3"
      >
        {projectCollections.map((category, index) => (
          <Reveal
            key={category.slug}
            transition={{ delay: index * 0.08, duration: 0.65 }}
          >
            <Link
              href={`/projects/${category.slug}`}
              data-cursor-text="Explore"
              className="card group block h-full overflow-hidden"
            >
              <div className="relative h-72 overflow-hidden bg-zinc-950 sm:h-80 lg:h-72 xl:h-80">
                <Image
                  src={category.thumbnail}
                  alt={`${category.label} projects`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/45 via-transparent to-transparent" />
                <span className="absolute top-5 left-5 rounded-full border border-white/20 bg-zinc-950/60 px-3 py-1 text-xs font-semibold tracking-[.16em] text-white backdrop-blur-md">
                  {category.number}
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <p className="eyebrow">{category.quote}</p>
                <h3 className="mt-3 font-neue text-3xl font-medium tracking-tight transition-colors group-hover:text-sky-500">
                  {category.shortLabel}
                </h3>
                <p className="mt-3 min-h-16 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {category.description}
                </p>
                <span className="mt-7 inline-flex items-center gap-1.5 font-medium text-accent">
                  <TextHoverRoll
                    text={`Explore ${category.shortLabel} projects`}
                  />
                  <RiArrowRightLine
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    size={18}
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
