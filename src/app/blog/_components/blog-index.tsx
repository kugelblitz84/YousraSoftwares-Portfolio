import Link from "next/link";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { TextHoverRoll } from "@/components/motion/text-hover-roll";
import { blogPosts } from "@/data/blog-data";

export function BlogIndex() {
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
          {blogPosts.map((post) => (
            <article key={post.slug} data-cursor-text="Read" className="card group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="project-visual placeholder-grid aspect-[16/9] p-7 text-white">
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-200">{post.slot}</span>
              </div>
              <div className="p-7">
                <p className="eyebrow">{post.category}</p>
                <h2 className="mt-4 font-neue text-2xl font-medium">
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-sky-500">{post.title}</Link>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-500">{post.summary}</p>
                <p className="mt-5 text-xs text-zinc-400 font-neue">{post.publishedLabel} · {post.readTime}</p>
                <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex font-medium text-accent">
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
