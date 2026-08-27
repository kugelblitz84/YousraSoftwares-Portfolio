import { KineticHeading } from "@/components/motion/kinetic-heading";

export function WhyUsSection() {
  return (
    <section className="section-pad border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
      <div className="shell">
        <p className="eyebrow">Why YusraSoftwares</p>
        <KineticHeading
          lines={[{ text: "Why Work With Us" }]}
          className="mt-3 h-bram-title text-3xl"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            [
              "End-to-End Capability",
              "Design, web, mobile, backend, and AI under one team.",
            ],
            [
              "Product-Focused Engineering",
              "We build around the business problem, not just the technology.",
            ],
            [
              "Built for the Long Term",
              "Maintainable architecture designed to evolve as the product grows.",
            ],
          ].map(([title, text]) => (
            <article
              key={title}
              className="card p-7 transition-all duration-300 hover:border-sky-400"
            >
              <h3 className="text-xl font-neue font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
