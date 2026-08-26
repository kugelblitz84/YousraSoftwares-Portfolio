import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { TextHoverRoll } from "@/components/motion/text-hover-roll";
import { blogPosts } from "@/data/blog-data";

export function InsightsSection() {
  return (
    <section id="insights" className="section-pad shell">
      <p className="eyebrow">Insights</p>
      <KineticHeading
        lines={[
          { text: "Ideas, engineering &" },
          { text: "product vision", italic: true, gradient: true },
        ]}
        className="mt-3 h-bram-title text-4xl sm:text-5xl"
      />
      <p className="mt-4 max-w-2xl text-zinc-500 font-neue">
        Thoughts from our team on building better digital products, software
        engineering, design, AI, and technology.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            data-cursor-text="Read"
            className="card group p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400"
          >
            <p className="eyebrow">{post.category}</p>
            <h3 className="mt-5 text-xl font-neue font-medium">{post.title}</h3>
            <span className="mt-7 inline-flex items-center gap-1.5 font-medium text-accent">
              <TextHoverRoll text="Read Insight" />
              <RiArrowRightLine
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                size={18}
                aria-hidden="true"
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
