import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { KineticHeading } from "@/components/ui/kinetic-heading";
import { TextHoverRoll } from "@/components/ui/text-hover-roll";

const facts = [
  ["Project Type", "[PROJECT TYPE]"], ["Industry", "[INDUSTRY]"], ["Our Contribution", "[CONTRIBUTION]"],
  ["Technology", "[TECHNOLOGY]"], ["Timeline", "[IF KNOWN]"],
];

export function CaseStudyPage() {
  return (
    <main id="main">
      <article>
        <header className="section-pad shell pt-36 sm:pt-44">
          <Link href="/projects" className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            <RiArrowLeftLine className="shrink-0 transition-transform duration-300 group-hover:-translate-x-1" size={18} aria-hidden="true" />
            <TextHoverRoll text="All projects" />
          </Link>
          <p className="eyebrow mt-10">[PROJECT CATEGORY]</p>
          <div className="mt-4 flex flex-wrap gap-2"><span className="tag">[TECHNOLOGY]</span><span className="tag">[TECHNOLOGY]</span></div>
          <KineticHeading
            as="h1"
            lines={[
              { text: "[PROJECT" },
              { text: "NAME]", italic: true, gradient: true },
            ]}
            className="mt-6 h-bram-hero text-5xl sm:text-7xl"
          />
          <p className="mt-6 max-w-3xl text-xl font-neue text-zinc-500">[ONE-SENTENCE PROJECT SUMMARY]</p>
          <Image src="/assets/projects/project-placeholder.svg" width={1200} height={760} className="mt-12 w-full rounded-3xl" alt="Placeholder for the project cover image" priority />
        </header>
        <section className="shell grid gap-4 border-y border-zinc-200 py-8 sm:grid-cols-2 lg:grid-cols-5 dark:border-zinc-800">{facts.map(([label,value]) => <div key={label}><p className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">{label}</p><p className="mt-2 text-sm font-neue">{value}</p></div>)}</section>
        <div className="section-pad shell prose-company max-w-4xl font-neue">
          <p className="rounded-2xl border border-sky-200 bg-sky-50 p-5 text-sm dark:border-sky-900 dark:bg-sky-950/30"><strong>Team contribution:</strong> Built by members of the YusraSoftwares team. Replace this attribution with “YusraSoftwares Project” when applicable.</p>
          <h2>Overview</h2><p>[Explain what the project is, who it serves, and why it was built.]</p>
          <h2>The Challenge</h2><p>[Describe the real problem that existed and what the product needed to solve.]</p>
          <h2>Our Approach</h2><p>[Describe the verified research, product, design, and engineering approach.]</p>
          <h2>Key Features</h2><ul><li>[VERIFIED FEATURE]</li><li>[VERIFIED FEATURE]</li><li>[VERIFIED FEATURE]</li></ul>
          <h2>Technical Implementation</h2><h3>Architecture</h3><p>[Describe the relevant architecture and important tradeoffs.]</p><h3>Frontend, backend, and data</h3><p>[Include only technologies and implementation details actually used.]</p><h3>Authentication, integrations, AI, and deployment</h3><p>[Retain only the relevant subsections and add verified detail.]</p>
          <h2>Challenges & Solutions</h2><p>[Explain a concrete technical or product problem and how it was solved.]</p>
          <h2>Results</h2><p>[Describe concrete delivered outcomes. Add metrics only when verified.]</p>
          <h2>Technologies</h2><div className="flex flex-wrap gap-2"><span className="tag">[ACTUAL TECHNOLOGY]</span><span className="tag">[ACTUAL TECHNOLOGY]</span></div>
          <h2>Project Gallery</h2><div className="grid gap-5 sm:grid-cols-2"><Image src="/assets/projects/project-placeholder.svg" width={1200} height={760} alt="Project gallery placeholder one" /><Image src="/assets/projects/project-placeholder.svg" width={1200} height={760} alt="Project gallery placeholder two" /></div>
        </div>
      </article>
      <section className="section-pad bg-zinc-950 text-white font-neue">
        <p className="eyebrow">Have a similar project in mind?</p>
        <KineticHeading
          lines={[
            { text: "Ready to" },
            { text: "stand out?", italic: true, gradient: true },
          ]}
          className="mt-4 h-bram-title text-4xl sm:text-5xl"
        />
        <Link href="/#contact" className="group btn-primary mt-7 inline-flex items-center gap-1.5 rounded-full px-7 py-3.5 text-sm text-white">
          <TextHoverRoll text="Start a Project" />
          <RiArrowRightLine className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" size={18} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
