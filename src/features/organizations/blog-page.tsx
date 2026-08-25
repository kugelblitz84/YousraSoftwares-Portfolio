import Link from "next/link";
import { KineticHeading } from "@/components/ui/kinetic-heading";
import { SplitTextReveal } from "@/components/ui/split-text-reveal";
import { TextHoverRoll } from "@/components/ui/text-hover-roll";

const posts = [
  ["STARTER INSIGHT 01", "Engineering", "Building software that is ready to evolve", "Architecture choices for a focused first release and a maintainable path forward."],
  ["STARTER INSIGHT 02", "Product", "From business problem to product scope", "A practical discovery approach for defining priorities before development begins."],
  ["STARTER INSIGHT 03", "AI", "Where AI integration creates real value", "How to evaluate AI opportunities by workflow impact instead of novelty."],
];

export function BlogPage() {
  return (
    <main id="main">
      <section className="section-pad shell pt-36 sm:pt-44">
        <p className="eyebrow">Ideas from our team</p>
        <KineticHeading
          as="h1"
          lines={[
            { text: "Ideas, engineering &" },
            { text: "product vision", italic: true, gradient: true },
          ]}
          className="mt-4 h-bram-hero text-5xl sm:text-7xl"
        />
        <SplitTextReveal
          text="Practical ideas on software engineering, product development, design, mobile applications, AI, and building technology for businesses."
          className="mt-6 max-w-3xl text-lg font-neue text-zinc-500"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map(([slot,category,title,summary]) => (
            <article key={slot} data-cursor-text="Lees" className="card group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="project-visual placeholder-grid aspect-[16/9] p-7 text-white">
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-200">{slot}</span>
              </div>
              <div className="p-7">
                <p className="eyebrow">{category}</p>
                <h2 className="mt-4 font-neue text-2xl font-medium">
                  <Link href="/blog-article" className="transition-colors hover:text-sky-500">{title}</Link>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-500">{summary}</p>
                <p className="mt-5 text-xs text-zinc-400 font-neue">[PUBLICATION DATE] · [READ TIME]</p>
                <Link href="/blog-article" className="mt-6 inline-flex font-medium text-accent">
                  <TextHoverRoll text="Read Insight →" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
