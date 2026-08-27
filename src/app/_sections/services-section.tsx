import { KineticHeading } from "@/components/motion/kinetic-heading";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { ServiceCard } from "./service-card";

const services = [
  ["01", "UI/UX Design", "Intuitive, modern interfaces designed around your users and business goals.", "Figma · Prototyping · Design systems", "design"],
  ["02", "Web Development", "Fast, secure, and scalable SaaS, dashboards, portals, commerce, and custom business systems.", "Next.js · NestJS · APIs", "web"],
  ["03", "Mobile App Development", "Cross-platform mobile applications built for seamless Android and iOS experiences.", "Flutter · Android · iOS", "mobile"],
  ["04", "AI Integration", "Intelligent automation and AI-powered features integrated into your digital products.", "LLMs · Automation · AI APIs", "ai"],
  ["05", "Maintenance & Engineering", "Bug fixes, migrations, refactoring, optimization, upgrades, features, and scaling for existing systems.", "Fix · Migrate · Optimize · Scale", "maintenance"],
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
        className="mt-5 max-w-2xl text-lg font-neue text-zinc-500"
        delay={0.15}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {services.map(([number, title, text, stack, icon], index) => (
          <ServiceCard
            key={number}
            number={number}
            title={title}
            text={text}
            stack={stack}
            icon={icon}
            index={index}
            wide={index >= 3}
          />
        ))}
      </div>
    </section>
  );
}
