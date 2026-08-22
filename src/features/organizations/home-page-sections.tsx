import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine, RiArrowRightUpLine } from "@remixicon/react";
import { Reveal } from "@/components/ui/reveal";
import { SplitTextReveal } from "@/components/ui/split-text-reveal";
import { KineticHeading } from "@/components/ui/kinetic-heading";
import { TextHoverRoll } from "@/components/ui/text-hover-roll";

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

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="soft-grid absolute inset-0 -z-10" />
      <div className="shell grid min-h-[720px] items-center gap-10 pb-20 lg:grid-cols-2">
        <Reveal>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-700 dark:border-sky-900 dark:bg-sky-950/50 dark:text-sky-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for new projects
          </div>
          <p className="eyebrow">Digital product development studio</p>
          <KineticHeading
            as="h1"
            className="mt-5 h-bram-hero text-5xl sm:text-7xl xl:text-8xl"
            lines={[
              { text: "From idea to" },
              { text: "digital reality", italic: true, gradient: true },
            ]}
          />
          <SplitTextReveal
            text="We design, build, and scale modern web platforms, mobile apps, and AI-powered solutions for businesses."
            className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
            delay={0.2}
          />
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              data-cursor-text="Explore"
              className="group btn-primary rounded-full px-7 py-3.5 text-sm text-white transition-all duration-300"
            >
              <TextHoverRoll text="View Our Work" />
            </a>
            <a
              href="#contact"
              data-cursor-text="Contact"
              className="group rounded-full border border-zinc-300 px-7 py-3.5 text-sm font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-500"
            >
              <TextHoverRoll text="Start a Project" />
            </a>
          </div>
          <p className="mt-10 text-xs font-semibold tracking-[.24em] text-zinc-400">
            DESIGN · DEVELOP · DEPLOY · SCALE
          </p>
        </Reveal>
        <Reveal
          className="product-stage"
          aria-label="Web and mobile product interface composition"
        >
          <div className="device absolute top-8 right-8 left-0 rounded-3xl p-4">
            <div className="mb-4 flex gap-2">
              <i className="h-2.5 w-2.5 rounded-full bg-sky-400" />
              <i className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <i className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            </div>
            <div className="grid grid-cols-[.35fr_.65fr] gap-3">
              <div className="h-64 rounded-2xl bg-zinc-100 dark:bg-zinc-800" />
              <div>
                <div className="brand-gradient h-32 rounded-2xl p-5 text-white">
                  Products that move businesses forward.
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="h-28 rounded-2xl bg-zinc-100 dark:bg-zinc-800" />
                  <div className="h-28 rounded-2xl bg-zinc-100 dark:bg-zinc-800" />
                </div>
              </div>
            </div>
          </div>
          <div className="device absolute right-0 bottom-0 w-44 rounded-[2rem] p-3">
            <div className="rounded-[1.5rem] bg-zinc-950 p-4 text-white">
              <p className="text-[10px] text-cyan-300">MOBILE PRODUCT</p>
              <p className="mt-2 font-display text-xl font-bold">
                Built for every screen.
              </p>
              <div className="brand-gradient mt-6 h-32 rounded-2xl" />
            </div>
          </div>
          <div className="absolute bottom-8 left-0 rounded-2xl border border-sky-200 bg-white p-4 shadow-xl dark:border-sky-900 dark:bg-zinc-900">
            <Image
              src="/assets/logos/yusrasoftwares-mark.svg"
              width={40}
              height={40}
              alt=""
            />
            <p className="mt-2 text-xs font-semibold">
              From Idea to Production
            </p>
          </div>
        </Reveal>
      </div>
      <div className="border-y border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/40">
        <div className="shell grid divide-y divide-zinc-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-zinc-800">
          {[
            [
              "01",
              "WEB",
              "Full-stack platforms",
              "Reliable foundations for ambitious products.",
            ],
            [
              "02",
              "MOBILE",
              "Cross-platform apps",
              "Native-feeling experiences on every screen.",
            ],
            [
              "03",
              "AI",
              "Intelligent integrations",
              "Practical automation that creates real value.",
            ],
          ].map(([number, name, title, text]) => (
            <div
              key={name}
              className="group relative overflow-hidden px-1 py-7 sm:px-8 sm:py-8 first:sm:pl-0 last:sm:pr-0"
            >
              <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-sky-400 to-cyan-300 transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-8 sm:first:inset-x-0 sm:last:right-0" />
              <div className="relative">
                <div>
                  <span className="text-base font-extrabold text-sky-500">
                    {number}
                  </span>
                  <p className="mt-3 text-xs font-bold tracking-[.24em] text-zinc-400">
                    {name}
                  </p>
                  <h2 className="mt-1 font-display text-xl font-bold tracking-tight">
                    {title}
                  </h2>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-500">
                    {text}
                  </p>
                </div>
                <span
                  className="absolute top-0 right-0 grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-zinc-200 text-sky-500 transition-colors group-hover:border-sky-300 group-hover:bg-sky-50 dark:border-zinc-700 dark:group-hover:border-sky-800 dark:group-hover:bg-sky-950/40"
                  aria-hidden="true"
                >
                  <RiArrowRightUpLine size={18} aria-hidden="true" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

const selectedWorks = [
  {
    projectType: "Design",
    projectName: "UI/UX",
  },
  {
    projectType: "Web Platform",
    projectName: "Web Application",
  },
  {
    projectType: "Mobile Platform",
    projectName: "Mobile Application",
  },
];
const insights = [
  ["Engineering", "Building software that is ready to evolve"],
  ["Product", "From business problem to product scope"],
  ["AI", "Where AI integration creates real value"],
];

export function CapabilitySection() {
  const lifecycle = [
    ["Discover", "Goals, users, and the right product scope."],
    ["Design", "Clear journeys and interfaces people enjoy."],
    ["Develop", "Reliable systems built for real-world use."],
    ["Test", "Quality, performance, and every critical detail."],
    ["Deploy", "A smooth, secure path into production."],
    ["Improve", "Measure, refine, maintain, and scale."],
  ];

  return (
    <section className="relative overflow-hidden border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
      <div className="soft-grid absolute inset-0 opacity-60" />
      <div className="section-pad shell relative">
        <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_30px_80px_rgba(2,132,199,0.08)] dark:border-zinc-800 dark:bg-zinc-950">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative overflow-hidden bg-zinc-950 p-7 text-white sm:p-10 lg:p-12">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
              <div className="absolute right-0 bottom-0 h-52 w-52 translate-x-1/3 translate-y-1/3 rounded-full border-[34px] border-cyan-300/10" />

              <div className="relative flex h-full min-h-[150px] flex-col justify-between">
                <div>
                  <p className="text-xs font-bold tracking-[.2em] text-cyan-300 uppercase">
                    End-to-end capability
                  </p>
                  <h2 className="balance mt-5 font-display text-4xl leading-[1.02] font-bold tracking-tight sm:text-5xl">
                    One team. Every step. No handoff gaps.
                  </h2>
                  <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
                    We bring product thinking, design, engineering, deployment,
                    and ongoing improvement together under one roof.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  {["Web", "Mobile", "Backend", "AI"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <ol className="grid sm:grid-cols-2">
              {lifecycle.map(([label, description], index) => (
                <li
                  key={label}
                  className="group relative min-h-44 border-b border-zinc-200 p-6 last:border-b-0 sm:p-8 sm:nth-[5]:border-b-0 dark:border-zinc-800 sm:odd:border-r"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="text-sm font-extrabold tracking-[.16em] text-sky-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-zinc-200 transition-all duration-300 group-hover:scale-150 group-hover:bg-cyan-400 dark:bg-zinc-700"
                    />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold tracking-tight">
                    {label}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-500">
                    {description}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-sky-500 to-cyan-300 transition-transform duration-300 group-hover:scale-x-100" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
export function WorkSection() {
  return (
    <section id="work" className="section-pad shell">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="eyebrow">Our works</p>
          <KineticHeading
            lines={[{ text: "Selected Works" }]}
            className="mt-3 h-bram-title text-4xl sm:text-5xl"
          />
          <p className="mt-4 max-w-2xl text-zinc-500 font-neue text-base">
            A selection of products, platforms, and experiences built by members
            of our team.
          </p>
        </div>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 font-medium text-accent hover:text-accent-strong"
        >
          <TextHoverRoll text="Explore Projects" />
          <RiArrowRightLine
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            size={18}
            aria-hidden="true"
          />
        </Link>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {selectedWorks.map((work) => (
          <article
            key={work.projectName}
            data-cursor-text="View Project"
            className="card group overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="overflow-hidden">
              <Image
                src="/assets/projects/project-placeholder.svg"
                width={1200}
                height={760}
                alt={work.projectType + " project placeholder"}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="eyebrow">{work.projectType} · Project slot</p>
              <h3 className="mt-2 font-neue text-2xl font-medium">
                {work.projectName}
              </h3>
              <p className="mt-3 text-sm text-zinc-500">
                Add the verified problem and solution.
              </p>
              <Link
                href="/case-study"
                className="mt-6 inline-flex items-center gap-1.5 font-medium text-accent"
              >
                <TextHoverRoll text="View Case Study" />
                <RiArrowRightLine
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  size={18}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
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
export function TeamSection() {
  return (
    <section className="section-pad shell">
      <p className="eyebrow">People</p>
      <KineticHeading
        lines={[
          { text: "Meet the" },
          { text: "team", italic: true, gradient: true },
        ]}
        className="mt-3 h-bram-title text-4xl sm:text-5xl"
      />
      <p className="mt-4 text-zinc-500 font-neue">
        Profiles are ready for verified names, roles, photos, and professional
        links.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {[1, 2].map((member) => (
          <article
            key={member}
            data-cursor-text="Team"
            className="card p-6 transition-all duration-300 hover:border-sky-400"
          >
            <div className="grid aspect-video place-items-center bg-zinc-100 dark:bg-zinc-800">
              [TEAM PHOTO]
            </div>
            <h3 className="mt-5 font-neue font-medium text-lg">
              [TEAM MEMBER NAME]
            </h3>
            <p className="text-accent text-sm">[ROLE]</p>
            <p className="text-zinc-500 text-sm">[ONE-LINE SPECIALIZATION]</p>
          </article>
        ))}
      </div>
    </section>
  );
}
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
        {insights.map(([type, title]) => (
          <Link
            href="/blog-article"
            key={title}
            data-cursor-text="Read"
            className="card group p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400"
          >
            <p className="eyebrow">{type}</p>
            <h3 className="mt-5 text-xl font-neue font-medium">{title}</h3>
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
export function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-white">
      <div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Start a project</p>
          <KineticHeading
            lines={[
              { text: "Ready to" },
              { text: "stand out?", italic: true, gradient: true },
            ]}
            className="mt-3 h-bram-title text-4xl sm:text-6xl"
          />
          <p className="mt-5 text-zinc-600 font-neue text-base dark:text-zinc-400">
            Have a product to build, an existing system to improve, or a
            technical problem to solve? Tell us about it and we&apos;ll get back
            to you.
          </p>
          <dl className="mt-9 text-sm">
            <dt className="text-zinc-500">Business email</dt>
            <dd>yusrasoftwares@gmail.com</dd>
            <dt className="mt-5 text-zinc-500">Profiles</dt>
            <dd>Facebook · LinkedIn · GitHub — URLs pending</dd>
          </dl>
        </div>
        <form
          className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-900"
          aria-describedby="form-note"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Name*", "name", "name"],
              ["Business / Company", "company", "organization"],
              ["Email*", "email", "email"],
            ].map(([label, name, auto]) => (
              <label
                key={name}
                className={name === "email" ? "sm:col-span-2" : ""}
              >
                {label}
                <input
                  required={name !== "company"}
                  name={name}
                  autoComplete={auto}
                  type={name === "email" ? "email" : "text"}
                  className="mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-950"
                />
              </label>
            ))}
            <label className="sm:col-span-2">
              What do you need?*
              <select
                required
                name="service"
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-950"
              >
                <option value="">Select a service</option>
                {[
                  "Web Development",
                  "Mobile App Development",
                  "UI/UX Design",
                  "AI Integration",
                  "Bug Fix / Existing Project",
                  "Migration / Scaling",
                  "Other",
                ].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="sm:col-span-2">
              Project Details*
              <textarea
                required
                name="details"
                rows={5}
                className="mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-950"
              />
            </label>
          </div>
          <button
            disabled
            className="mt-6 inline-flex cursor-not-allowed items-center gap-1.5 rounded-full bg-zinc-700 px-6 py-3 text-sm text-zinc-400"
          >
            Send Project Details{" "}
            <RiArrowRightLine
              className="shrink-0"
              size={18}
              aria-hidden="true"
            />
          </button>
          <p id="form-note" className="mt-3 text-xs text-zinc-500">
            Submission is disabled until a verified business email or form
            service is connected.
          </p>
        </form>
      </div>
    </section>
  );
}
