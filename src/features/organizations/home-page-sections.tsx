import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

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
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs text-sky-700 dark:border-sky-900 dark:bg-sky-950/50 dark:text-sky-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Available for new projects
          </div>
          <p className="eyebrow">Digital product development studio</p>
          <h1 className="balance mt-5 font-display text-5xl leading-[.94] font-bold tracking-[-.045em] uppercase sm:text-7xl xl:text-8xl">
            From idea to <span className="text-gradient">digital reality</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            We design, build, and scale modern web platforms, mobile apps, and
            AI-powered solutions for businesses.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="btn-primary rounded-full px-7 py-3.5 text-sm text-white"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-zinc-300 px-7 py-3.5 text-sm dark:border-zinc-700"
            >
              Start a Project
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
                  ↗
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
      <h2 className="mt-3 font-display text-5xl font-bold">Services</h2>
      <p className="mt-5 max-w-2xl text-zinc-500">
        End-to-end product expertise for new ideas, growing platforms, and
        software that needs a stronger next chapter.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {services.map(([number, title, text, stack, span]) => (
          <article key={number} className={"card p-7 " + span}>
            <span className="text-base font-extrabold text-accent">
              {number}
            </span>
            <h3 className="mt-8 font-display text-2xl font-bold">{title}</h3>
            <p className="mt-3 text-sm text-zinc-500">{text}</p>
            <p className="mt-7 text-xs text-zinc-400">{stack}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const projectTypes = ["Web Platform", "Mobile Application", "AI Product"];
const capabilities = [["WEB", "Next.js · React · Tailwind CSS"], ["BACKEND", "NestJS · Node.js · REST APIs"], ["MOBILE", "Flutter · Dart"], ["DESIGN", "Figma · Prototyping"], ["AI", "LLM Integration · AI APIs · RAG"]];
const insights = [["Engineering", "Building software that is ready to evolve"], ["Product", "From business problem to product scope"], ["AI", "Where AI integration creates real value"]];

export function CapabilitySection() { return <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"><div className="section-pad shell grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">End-to-end capability</p><h2 className="mt-3 font-display text-4xl font-bold">One team. From idea to production.</h2><p className="mt-5 text-zinc-500">From early product concepts and interface design to backend engineering, mobile development, AI integration, deployment, and ongoing improvement—we support the complete product lifecycle.</p></div><ol className="grid gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 sm:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-800">{["Discover","Design","Develop","Test","Deploy","Improve"].map((label,index)=><li key={label} className="bg-white p-6 dark:bg-zinc-950"><span className="mr-2 text-base font-extrabold text-accent">{String(index+1).padStart(2,"0")}</span>{label}</li>)}</ol></div></section>; }
export function WorkSection() { return <section id="work" className="section-pad shell"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Our work</p><h2 className="mt-3 font-display text-5xl font-bold">Selected Work</h2><p className="mt-4 max-w-2xl text-zinc-500">A selection of products, platforms, and experiences built by members of our team.</p></div><Link href="/projects" className="text-accent">Explore Projects →</Link></div><div className="mt-12 grid gap-6 lg:grid-cols-3">{projectTypes.map(type=><article key={type} className="card overflow-hidden"><Image src="/assets/projects/project-placeholder.svg" width={1200} height={760} alt={type+" project placeholder"}/><div className="p-6"><p className="eyebrow">{type} · Project slot</p><h3 className="mt-2 text-2xl font-bold">[PROJECT NAME]</h3><p className="mt-3 text-zinc-500">Add the verified problem and solution.</p><Link href="/case-study" className="mt-6 inline-flex text-accent">View Case Study →</Link></div></article>)}</div></section>; }
export function AboutSection() { return <section id="about" className="section-pad bg-zinc-950 text-white"><div className="shell grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">About us</p><h2 className="mt-3 font-display text-5xl font-bold">A small team built to create serious products.</h2></div><div className="space-y-5 text-zinc-400"><p>YusraSoftwares is a software development studio focused on turning business ideas into reliable digital products. Our team brings together experience in product design, full-stack development, mobile development, and AI integration.</p><p>We work across the complete development lifecycle—from understanding the problem and designing the experience to engineering, deployment, maintenance, and scaling.</p><p>Our approach combines thoughtful product decisions with clean engineering, clear communication, and technology selected for the problem rather than for hype.</p></div></div><div className="shell mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{capabilities.map(([name,tech])=><div key={name} className="rounded-2xl border border-zinc-800 p-5">{name}<br/><small>{tech}</small></div>)}</div></section>; }
export function TeamSection() { return <section className="section-pad shell"><p className="eyebrow">People</p><h2 className="mt-3 font-display text-5xl font-bold">Meet the Team</h2><p className="mt-4 text-zinc-500">Profiles are ready for verified names, roles, photos, and professional links.</p><div className="mt-10 grid gap-5 sm:grid-cols-2">{[1,2].map(member=><article key={member} className="card p-6"><div className="grid aspect-video place-items-center bg-zinc-100 dark:bg-zinc-800">[TEAM PHOTO]</div><h3 className="mt-5 font-bold">[TEAM MEMBER NAME]</h3><p className="text-accent">[ROLE]</p><p className="text-zinc-500">[ONE-LINE SPECIALIZATION]</p></article>)}</div></section>; }
export function WhyUsSection() { return <section className="section-pad border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"><div className="shell"><p className="eyebrow">Why YusraSoftwares</p><h2 className="mt-3 font-display text-4xl font-bold">Why Work With Us</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{[["End-to-End Capability","Design, web, mobile, backend, and AI under one team."],["Product-Focused Engineering","We build around the business problem, not just the technology."],["Built for the Long Term","Maintainable architecture designed to evolve as the product grows."]].map(([title,text])=><article key={title} className="card p-7"><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-zinc-500">{text}</p></article>)}</div></div></section>; }
export function InsightsSection() { return <section id="insights" className="section-pad shell"><p className="eyebrow">Insights</p><h2 className="mt-3 font-display text-5xl font-bold">Ideas, Engineering & Product</h2><p className="mt-4 max-w-2xl text-zinc-500">Thoughts from our team on building better digital products, software engineering, design, AI, and technology.</p><div className="mt-10 grid gap-5 md:grid-cols-3">{insights.map(([type,title])=><Link href="/blog-article" key={title} className="card p-7"><p className="eyebrow">{type}</p><h3 className="mt-5 text-xl font-bold">{title}</h3><span className="mt-7 inline-flex text-accent">Read Insight →</span></Link>)}</div></section>; }
export function ContactSection() { return <section id="contact" className="section-pad bg-zinc-950 text-white"><div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Start a project</p><h2 className="mt-3 font-display text-5xl font-bold">Let&apos;s Build Something</h2><p className="mt-5 text-zinc-400">Have a product to build, an existing system to improve, or a technical problem to solve? Tell us about it and we&apos;ll get back to you.</p><dl className="mt-9 text-sm"><dt className="text-zinc-500">Business email</dt><dd>[COMPANY EMAIL]</dd><dt className="mt-5 text-zinc-500">Profiles</dt><dd>Facebook · LinkedIn · GitHub — URLs pending</dd></dl></div><form className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8" aria-describedby="form-note"><div className="grid gap-5 sm:grid-cols-2">{[["Name*","name","name"],["Business / Company","company","organization"],["Email*","email","email"]].map(([label,name,auto])=><label key={name} className={name === "email" ? "sm:col-span-2" : ""}>{label}<input required={name !== "company"} name={name} autoComplete={auto} type={name === "email" ? "email" : "text"} className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3"/></label>)}<label className="sm:col-span-2">What do you need?*<select required name="service" defaultValue="" className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3"><option value="">Select a service</option>{["Web Development","Mobile App Development","UI/UX Design","AI Integration","Bug Fix / Existing Project","Migration / Scaling","Other"].map(option=><option key={option}>{option}</option>)}</select></label><label className="sm:col-span-2">Project Details*<textarea required name="details" rows={5} className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3"/></label></div><button disabled className="mt-6 cursor-not-allowed rounded-full bg-zinc-700 px-6 py-3 text-sm text-zinc-400">Send Project Details →</button><p id="form-note" className="mt-3 text-xs text-zinc-500">Submission is disabled until a verified business email or form service is connected.</p></form></div></section>; }
