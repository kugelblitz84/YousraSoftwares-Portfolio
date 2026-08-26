import { KineticHeading } from "@/components/motion/kinetic-heading";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-zinc-200 bg-zinc-50 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
    >
      <div className="soft-grid absolute inset-0 opacity-30" />
      <div className="absolute top-1/2 left-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-500/10" />
      <div className="section-pad shell relative">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-sky-500 dark:bg-cyan-300" />
              <p className="eyebrow">About us</p>
            </div>
            <KineticHeading
              lines={[
                { text: "A small team built to create" },
                { text: "serious products.", italic: true, gradient: true },
              ]}
              className="mt-6 max-w-lg h-bram-title text-4xl sm:text-6xl"
            />
          </div>
          <div>
            <div className="space-y-6 border-l border-zinc-300 pl-6 text-base leading-8 text-zinc-600 sm:pl-10 sm:text-lg dark:border-white/10 dark:text-zinc-400">
              <SplitTextReveal text="YusraSoftwares is a software development studio focused on turning business ideas into reliable digital products. Our team brings together experience in product design, full-stack development, mobile development, and AI integration." />
              <SplitTextReveal
                text="We work across the complete development lifecycle—from understanding the problem and designing the experience to engineering, deployment, maintenance, and scaling."
                delay={0.1}
              />
              <SplitTextReveal
                text="Our approach combines thoughtful product decisions with clean engineering, clear communication, and technology selected for the problem rather than for hype."
                delay={0.2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
