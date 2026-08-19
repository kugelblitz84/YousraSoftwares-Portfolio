import Link from "next/link";

const posts = [
  ["STARTER INSIGHT 01", "Engineering", "Building software that is ready to evolve", "Architecture choices for a focused first release and a maintainable path forward."],
  ["STARTER INSIGHT 02", "Product", "From business problem to product scope", "A practical discovery approach for defining priorities before development begins."],
  ["STARTER INSIGHT 03", "AI", "Where AI integration creates real value", "How to evaluate AI opportunities by workflow impact instead of novelty."],
];

export function BlogPage() {
  return (
    <main id="main"><section className="section-pad shell pt-36 sm:pt-44">
      <p className="eyebrow">Ideas from our team</p><h1 className="mt-4 font-display text-6xl font-bold sm:text-7xl">Insights</h1>
      <p className="mt-6 max-w-3xl text-lg text-zinc-500">Practical ideas on software engineering, product development, design, mobile applications, AI, and building technology for businesses.</p>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">{posts.map(([slot,category,title,summary]) => <article key={slot} className="card overflow-hidden"><div className="project-visual placeholder-grid aspect-[16/9] p-7 text-white"><span className="text-xs tracking-wider text-cyan-200">{slot}</span></div><div className="p-7"><p className="eyebrow">{category}</p><h2 className="mt-4 text-2xl font-bold"><Link href="/blog-article">{title}</Link></h2><p className="mt-4 text-zinc-500">{summary}</p><p className="mt-5 text-xs text-zinc-400">[PUBLICATION DATE] · [READ TIME]</p><Link href="/blog-article" className="mt-6 inline-flex text-accent">Read Insight →</Link></div></article>)}</div>
    </section></main>
  );
}
