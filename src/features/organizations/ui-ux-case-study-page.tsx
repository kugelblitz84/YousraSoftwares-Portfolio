import Image from "next/image";
import Link from "next/link";

export function UiUxCaseStudyPage() {
  return (
    <main id="main">
      <article>
        <header className="soft-grid section-pad pt-36 sm:pt-44">
          <div className="shell text-center">
            <Link href="/projects/ui-ux" className="inline-flex items-center gap-2 text-sm text-accent">
              <span aria-hidden="true">←</span> UI/UX projects
            </Link>
            <p className="eyebrow mt-10">UI/UX design case study</p>
            <h1 className="balance mx-auto mt-4 max-w-5xl font-display text-5xl font-bold sm:text-7xl">[DESIGN PROJECT NAME]</h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-zinc-500 dark:text-zinc-400">
              [A concise summary of the user problem, the experience redesigned, and the intended product outcome.]
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <span className="tag">[RESEARCH]</span>
              <span className="tag">[PRODUCT DESIGN]</span>
              <span className="tag">[DESIGN SYSTEM]</span>
            </div>
            <div className="mt-12 rounded-[2rem] border border-zinc-200 bg-white/80 p-3 shadow-2xl shadow-sky-500/10 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900/80">
              <Image src="/assets/projects/project-placeholder.svg" width={1200} height={760} className="w-full rounded-2xl" alt="Placeholder for the UI/UX project presentation" priority />
            </div>
          </div>
        </header>

        <section className="section-pad shell">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <p className="eyebrow">Design brief</p>
              <h2 className="balance mt-4 font-display text-4xl font-bold sm:text-5xl">Clarity built from evidence.</h2>
              <dl className="mt-8 grid gap-6 border-t border-zinc-200 pt-6 sm:grid-cols-2 lg:grid-cols-1 dark:border-zinc-800">
                <div><dt className="text-xs tracking-wider text-zinc-400 uppercase">Product</dt><dd className="mt-2">[PRODUCT TYPE]</dd></div>
                <div><dt className="text-xs tracking-wider text-zinc-400 uppercase">Role</dt><dd className="mt-2">[DESIGN CONTRIBUTION]</dd></div>
                <div><dt className="text-xs tracking-wider text-zinc-400 uppercase">Duration</dt><dd className="mt-2">[TIMELINE]</dd></div>
                <div><dt className="text-xs tracking-wider text-zinc-400 uppercase">Deliverables</dt><dd className="mt-2">[KEY DELIVERABLES]</dd></div>
              </dl>
            </div>

            <div className="space-y-4">
              <details className="group rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900" open>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <div><span className="eyebrow">Phase 01</span><h3 className="mt-3 text-2xl font-semibold">Research and framing</h3></div>
                  <span className="text-2xl text-accent group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <div className="mt-6 grid gap-6 text-zinc-500 sm:grid-cols-2 dark:text-zinc-400">
                  <p>[Explain the initial assumptions, research activities, participants, and the insights that changed the brief.]</p>
                  <ul className="space-y-2">
                    <li>• [RESEARCH METHOD]</li>
                    <li>• [KEY USER NEED]</li>
                    <li>• [DESIGN PRINCIPLE]</li>
                  </ul>
                </div>
              </details>
              <details className="group rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <div><span className="eyebrow">Phase 02</span><h3 className="mt-3 text-2xl font-semibold">Flows and interaction design</h3></div>
                  <span className="text-2xl text-accent group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <div className="mt-6 grid gap-6 text-zinc-500 sm:grid-cols-2 dark:text-zinc-400">
                  <p>[Describe information architecture, key journeys, prototypes, usability tests, and iteration decisions.]</p>
                  <p>[Call out one difficult interaction problem and show how evidence guided the final pattern.]</p>
                </div>
              </details>
              <details className="group rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <div><span className="eyebrow">Phase 03</span><h3 className="mt-3 text-2xl font-semibold">Visual system and handoff</h3></div>
                  <span className="text-2xl text-accent group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <div className="mt-6 grid gap-6 text-zinc-500 sm:grid-cols-2 dark:text-zinc-400">
                  <p>[Document the visual direction, components, responsive behavior, accessibility, and design-system decisions.]</p>
                  <p>[Explain developer collaboration, specifications, QA, and the verified product or user outcomes.]</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="section-pad bg-zinc-950 text-white">
          <div className="shell">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div><p className="eyebrow">Selected frames</p><h2 className="mt-4 font-display text-4xl font-bold">The experience in detail.</h2></div>
              <p className="max-w-md text-zinc-400">[Add captions that explain the design decision shown in each frame.]</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <Image src="/assets/projects/project-placeholder.svg" width={1200} height={760} className="rounded-2xl" alt="UI/UX case study frame placeholder one" />
              <Image src="/assets/projects/project-placeholder.svg" width={1200} height={760} className="rounded-2xl" alt="UI/UX case study frame placeholder two" />
            </div>
          </div>
        </section>
      </article>
      <section className="section-pad text-center">
        <p className="eyebrow">Need clarity in your product?</p>
        <h2 className="mt-4 font-display text-4xl font-bold">Let&apos;s shape an experience people understand.</h2>
        <Link href="/#contact" className="btn-primary mt-7 inline-flex rounded-full px-7 py-3.5 text-white">Start a design project →</Link>
      </section>
    </main>
  );
}
