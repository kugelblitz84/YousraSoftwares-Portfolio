import Link from "next/link";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { getRelatedPosts, type BlogPost } from "@/data/blog-data";

type BlogArticleProps = {
  post: BlogPost;
};

export function BlogArticle({ post }: BlogArticleProps) {
  const related = getRelatedPosts(post.slug);

  return (
    <main id="main">
      <article>
        <header className="section-pad shell max-w-4xl pt-36 sm:pt-44">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-accent"><RiArrowLeftLine className="shrink-0" size={18} aria-hidden="true" /> All insights</Link>
          <p className="eyebrow mt-10">{post.category}</p>
          <h1 className="balance mt-5 font-display text-5xl font-bold sm:text-7xl">{post.title}</h1>
          <p className="mt-6 text-xl text-zinc-500">{post.summary}</p>
          <div className="mt-7 flex flex-wrap gap-4 text-sm text-zinc-400"><span>{post.publishedLabel}</span><span>{post.readTime}</span><span>YusraSoftwares Team</span></div>
          <div className="project-visual placeholder-grid mt-12 aspect-[16/8] rounded-3xl p-8 text-white"><p className="eyebrow !text-cyan-200">{post.hero.eyebrow}</p><p className="mt-4 max-w-lg font-display text-3xl font-bold">{post.hero.statement}</p></div>
        </header>
        <div className="section-pad shell prose-company max-w-3xl">
          {post.body.map((block, index) => {
            if (block.kind === "heading") return <h2 key={index}>{block.text}</h2>;

            if (block.kind === "list") {
              return (
                <ul key={index}>
                  {block.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              );
            }

            return <p key={index}>{block.text}</p>;
          })}
        </div>
      </article>
      {related.length > 0 && (
        <section className="section-pad border-y border-zinc-200 dark:border-zinc-800">
          <div className="shell">
            <p className="eyebrow">Related insights</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {related.map((item) => (
                <Link key={item.slug} className="card p-7" href={`/blog/${item.slug}`}>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-accent">Read Insight <RiArrowRightLine className="shrink-0" size={18} aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="section-pad bg-zinc-950 text-white"><div className="shell"><p className="eyebrow">Have a product challenge we can help solve?</p><Link href="/#contact" className="btn-primary mt-6 inline-flex items-center gap-1.5 rounded-full px-7 py-3.5">Start a Project <RiArrowRightLine className="shrink-0" size={18} aria-hidden="true" /></Link></div></section>
    </main>
  );
}
