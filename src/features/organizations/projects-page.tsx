"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ProjectCategory } from "@/types";
import { KineticHeading } from "@/components/ui/kinetic-heading";
import { SplitTextReveal } from "@/components/ui/split-text-reveal";
import { TextHoverRoll } from "@/components/ui/text-hover-roll";

const filters: Array<[ProjectCategory, string]> = [
  ["all", "All"],
  ["web", "Web"],
  ["mobile", "Mobile"],
  ["ai", "Ai"],
  ["uiux", "UI/UX"],
];
const projects = [
  { id: 1, category: "web", type: "Web Platform" },
  { id: 2, category: "mobile", type: "Mobile Application" },
  { id: 3, category: "ai", type: "AI Product" },
] as const;

export function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory>("all");
  const visible =
    active === "all"
      ? projects
      : projects.filter((project) => project.category === active);
  return (
    <main id="main">
      <section className="section-pad shell pt-36 sm:pt-44">
        <p className="eyebrow">Our work</p>
        <KineticHeading
          as="h1"
          lines={[
            { text: "A selection of" },
            { text: "digital projects", italic: true, gradient: true },
          ]}
          className="mt-4 h-bram-hero text-5xl sm:text-7xl"
        />
        <SplitTextReveal
          text="Explore digital products, platforms, mobile applications, and technical solutions built by our team."
          className="mt-6 max-w-2xl text-lg font-neue text-zinc-500"
        />
        <div
          className="mt-10 flex flex-wrap gap-2"
          aria-label="Project filters"
        >
          {filters.map(([value, label]) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              aria-pressed={active === value}
              className={
                "group rounded-full border px-5 py-2.5 text-sm font-neue transition-all duration-300 " +
                (active === value
                  ? "border-sky-500 bg-sky-500 text-white shadow-lg"
                  : "border-zinc-200 hover:border-sky-400 dark:border-zinc-700")
              }
            >
              <TextHoverRoll text={label} />
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article
              key={project.id}
              data-cursor-text="View"
              className="card group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Link href="/case-study" className="block overflow-hidden">
                <Image
                  src="/assets/projects/project-placeholder.svg"
                  width={1200}
                  height={760}
                  alt="Project screenshot placeholder"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="p-6">
                <p className="eyebrow">{project.type}</p>
                <h2 className="mt-3 font-neue text-2xl font-medium">
                  [PROJECT NAME]
                </h2>
                <p className="mt-3 text-sm text-zinc-500">
                  Add a verified project summary describing the problem and
                  delivered solution.
                </p>
                <p className="mt-5 text-xs text-zinc-400 font-neue">
                  Built by members of the YusraSoftwares team
                </p>
                <Link
                  href="/case-study"
                  className="group/link mt-6 inline-flex font-medium text-accent"
                >
                  <TextHoverRoll text="View Case Study →" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        {visible.length === 0 && (
          <div className="mt-12 rounded-3xl border border-dashed border-zinc-300 p-10 text-center dark:border-zinc-700">
            <h2 className="font-neue text-xl font-medium">
              No verified projects in this category yet.
            </h2>
            <p className="mt-2 text-zinc-500">
              This filter is ready for future case studies.
            </p>
          </div>
        )}
      </section>
      <section className="section-pad bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-white">
        <div className="shell text-center">
          <p className="eyebrow">Your product could be next</p>
          <KineticHeading
            lines={[{ text: "Ready to stand out?" }]}
            className="mt-4 h-bram-title text-4xl sm:text-5xl"
            indent
          />
          <Link
            href="/#contact"
            className="group btn-primary mt-7 inline-flex rounded-full px-7 py-3.5 text-sm text-white"
          >
            <TextHoverRoll text="Start a Project →" />
          </Link>
        </div>
      </section>
    </main>
  );
}
