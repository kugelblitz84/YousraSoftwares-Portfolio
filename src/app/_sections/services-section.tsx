import { KineticHeading } from "@/components/motion/kinetic-heading";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";

const services = [
  [
    "01",
    "UI/UX Design",
    "Intuitive, modern interfaces designed around your users and business goals.",
    "Figma · Prototyping · Design Systems",
    "lg:col-span-2",
  ],
  [
    "02",
    "Web Development",
    "Fast, secure, and scalable SaaS, dashboards, portals, commerce, and custom business systems.",
    "Next.js · NestJS · APIs",
    "lg:col-span-2",
  ],
  [
    "03",
    "Mobile App Development",
    "Cross-platform mobile applications built for seamless Android and iOS experiences.",
    "Flutter · Android · iOS",
    "lg:col-span-2",
  ],
  [
    "04",
    "AI Integration",
    "Intelligent automation and AI-powered features integrated into your digital products.",
    "LLMs · Automation · AI APIs",
    "lg:col-span-3",
  ],
  [
    "05",
    "Maintenance & Engineering",
    "Bug fixes, migrations, refactoring, optimization, upgrades, features, and scaling for existing systems.",
    "Fix · Migrate · Optimize · Scale",
    "lg:col-span-3",
  ],
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="section-pad shell">
      <p className="eyebrow">What we do</p>
      <KineticHeading
        lines={[{ text: "Services" }]}
        className="mt-3 h-bram-title text-4xl sm:text-5xl lg:text-6xl"
      />
      <SplitTextReveal
        text="End-to-end product expertise for new ideas, growing platforms, and software that needs a stronger next chapter."
        className="mt-5 max-w-2xl text-zinc-500 font-neue text-lg"
        delay={0.15}
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {services.map(([number, title, text, stack, span]) => (
          <article
            key={number}
            data-cursor-text="Service"
            className={
              "card p-7 transition-all duration-300 hover:border-sky-400 " +
              span
            }
          >
            <span className="text-base font-extrabold text-accent">
              {number}
            </span>
            <h3 className="mt-8 font-neue text-2xl font-medium tracking-tight">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">{text}</p>
            <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {stack}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
