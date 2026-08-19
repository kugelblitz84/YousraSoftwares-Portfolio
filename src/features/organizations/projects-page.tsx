"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ProjectCategory } from "@/types";

const filters: Array<[ProjectCategory, string]> = [["all","All"],["web","Web"],["mobile","Mobile"],["ai","Ai"],["uiux","UI/UX"]];
const projects = [
  { id: 1, category: "web", type: "Web Platform" },
  { id: 2, category: "mobile", type: "Mobile Application" },
  { id: 3, category: "ai", type: "AI Product" },
] as const;

export function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory>("all");
  const visible = active === "all" ? projects : projects.filter((project) => project.category === active);
  return (
    <main id="main">
      <section className="section-pad shell pt-36 sm:pt-44">
        <p className="eyebrow">Our work</p><h1 className="balance mt-4 font-display text-5xl font-bold sm:text-7xl">Projects & Case Studies</h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-500">Explore digital products, platforms, mobile applications, and technical solutions built by our team.</p>
        <div className="mt-10 flex flex-wrap gap-2" aria-label="Project filters">
          {filters.map(([value,label]) => <button key={value} onClick={() => setActive(value)} aria-pressed={active === value} className={"rounded-full border px-4 py-2 text-sm " + (active === value ? "border-sky-500 bg-sky-500 text-white" : "border-zinc-200 dark:border-zinc-700")}>{label}</button>)}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => <article key={project.id} className="card overflow-hidden"><Link href="/case-study"><Image src="/assets/projects/project-placeholder.svg" width={1200} height={760} alt="Project screenshot placeholder" /></Link><div className="p-6"><p className="eyebrow">{project.type}</p><h2 className="mt-3 text-2xl font-bold">[PROJECT NAME]</h2><p className="mt-3 text-sm text-zinc-500">Add a verified project summary describing the problem and delivered solution.</p><p className="mt-5 text-xs text-zinc-400">Built by members of the YusraSoftwares team</p><Link href="/case-study" className="mt-6 inline-flex text-accent">View Case Study →</Link></div></article>)}
        </div>
        {visible.length === 0 && <div className="mt-12 rounded-3xl border border-dashed border-zinc-300 p-10 text-center dark:border-zinc-700"><h2 className="text-xl font-bold">No verified projects in this category yet.</h2><p className="mt-2 text-zinc-500">This filter is ready for future case studies.</p></div>}
      </section>
      <section className="section-pad bg-zinc-950 text-center text-white"><div className="shell"><p className="eyebrow">Your product could be next</p><h2 className="mt-4 font-display text-4xl font-bold">Have a product challenge to solve?</h2><Link href="/#contact" className="btn-primary mt-7 inline-flex rounded-full px-7 py-3.5">Start a Project →</Link></div></section>
    </main>
  );
}
