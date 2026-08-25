import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { projectCollections } from "./project-data";

const services = [
  ["01", "UI/UX Design", "Intuitive, modern interfaces designed around your users and business goals.", "Figma · Prototyping · Design Systems", "lg:col-span-2"],
  ["02", "Web Development", "Fast, secure, and scalable SaaS, dashboards, portals, commerce, and custom business systems.", "Next.js · NestJS · APIs", "lg:col-span-2"],
  ["03", "Mobile App Development", "Cross-platform mobile applications built for seamless Android and iOS experiences.", "Flutter · Android · iOS", "lg:col-span-2"],
  ["04", "AI Integration", "Intelligent automation and AI-powered features integrated into your digital products.", "LLMs · Automation · AI APIs", "lg:col-span-3"],
  ["05", "Maintenance & Engineering", "Bug fixes, migrations, refactoring, optimization, upgrades, features, and scaling for existing systems.", "Fix · Migrate · Optimize · Scale", "lg:col-span-3"],
];
const capabilities = [
  ["WEB", "Next.js · React · Tailwind CSS"], ["BACKEND", "NestJS · Node.js · REST APIs"],
  ["MOBILE", "Flutter · Dart"], ["DESIGN", "Figma · Prototyping"], ["AI", "LLM Integration · AI APIs · RAG"],
];

export function HomePage() {
  return (
    <main id="main">
      <section id="hero" className="relative overflow-hidden pt-32 sm:pt-40">
        <div className="soft-grid absolute inset-0 -z-10" />
        <div className="shell grid min-h-[720px] items-center gap-10 pb-20 lg:grid-cols-2">
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs text-sky-700 dark:border-sky-900 dark:bg-sky-950/50 dark:text-sky-300"><span className="h-2 w-2 rounded-full bg-cyan-400" />Available for new projects</div>
            <p className="eyebrow">Digital product development studio</p>
            <h1 className="balance mt-5 font-display text-5xl leading-[.94] font-bold tracking-[-.045em] uppercase sm:text-7xl xl:text-8xl">From idea to <span className="text-gradient">digital reality</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">We design, build, and scale modern web platforms, mobile apps, and AI-powered solutions for businesses.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#work" className="btn-primary rounded-full px-7 py-3.5 text-sm text-white">View Our Work</a><a href="#contact" className="rounded-full border border-zinc-300 px-7 py-3.5 text-sm dark:border-zinc-700">Start a Project</a></div>
            <p className="mt-10 text-xs font-semibold tracking-[.24em] text-zinc-400">DESIGN · DEVELOP · DEPLOY · SCALE</p>
          </Reveal>
          <Reveal className="product-stage" aria-label="Web and mobile product interface composition">
            <div className="relative mx-auto max-w-[760px]">
              <div className="relative overflow-hidden rounded-[2rem] border border-sky-200/15 bg-[#061a2e] p-3 shadow-[0_0_50px_rgba(34,211,238,0.12)] ring-1 ring-sky-300/10">
                <div className="mb-4 flex gap-2 pl-2">
                  <span className="h-3 w-3 rounded-full bg-sky-400" />
                  <span className="h-3 w-3 rounded-full bg-zinc-400/80" />
                  <span className="h-3 w-3 rounded-full bg-zinc-400/80" />
                </div>
                <div className="relative h-[420px] overflow-hidden rounded-[1.6rem] border border-sky-200/10 bg-[#061a2e]">
                  <Image src="/assets/logos/thumbnail.png" alt="YusraSoftwares dashboard and product preview" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
                </div>
              </div>

              <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-sky-200/20 bg-white/5 px-3 py-2 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur-md">
                <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#0b1830] ring-1 ring-sky-300/10">
                  <Image src="/assets/logos/yousrasoftware_logo.png" alt="YusraSoftwares logo" width={36} height={36} className="object-contain" style={{ width: "auto", height: "auto" }} />
                </div>
                <p className="text-xs font-semibold text-slate-100">From Idea to Production</p>
              </div>
            </div>
          </Reveal>
        </div>
        {/* <div className="border-y border-zinc-200 dark:border-zinc-800"><div className="shell grid sm:grid-cols-3">{[["WEB","Full-stack platforms"],["MOBILE","Cross-platform apps"],["AI","Intelligent integrations"]].map(([name, text], index) => <div key={name} className={"py-6 " + (index === 1 ? "sm:px-8" : "")}><b>{name}</b><p className="text-sm text-zinc-500">{text}</p></div>)}</div></div> */}
      </section>
      <section id="services" className="section-pad shell">
        <p className="eyebrow">What we do</p><h2 className="mt-3 font-display text-5xl font-bold">Services</h2><p className="mt-5 max-w-2xl text-zinc-500">End-to-end product expertise for new ideas, growing platforms, and software that needs a stronger next chapter.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">{services.map(([number, title, text, stack, span]) => <article key={number} className={"card p-7 " + span}><span className="text-accent">{number}</span><h3 className="mt-8 font-display text-2xl font-bold">{title}</h3><p className="mt-3 text-sm text-zinc-500">{text}</p><p className="mt-7 text-xs text-zinc-400">{stack}</p></article>)}</div>
      </section>
      <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"><div className="section-pad shell grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">End-to-end capability</p><h2 className="mt-3 font-display text-4xl font-bold">One team. From idea to production.</h2><p className="mt-5 text-zinc-500">From early product concepts and interface design to backend engineering, mobile development, AI integration, deployment, and ongoing improvement—we support the complete product lifecycle.</p></div><ol className="grid gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 sm:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-800">{["01 · Discover","02 · Design","03 · Develop","04 · Test","05 · Deploy","06 · Improve"].map((step) => <li key={step} className="bg-white p-6 dark:bg-zinc-950">{step}</li>)}</ol></div></section>
      <section id="work" className="section-pad shell">
        <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Our work</p><h2 className="mt-3 font-display text-5xl font-bold">Selected Work</h2><p className="mt-4 max-w-2xl text-zinc-500">A selection of products, platforms, and experiences built by members of our team.</p></div><a href="#work-categories" className="text-accent">Browse Categories ↓</a></div>
        <div id="work-categories" className="mt-12 grid scroll-mt-28 gap-6 lg:grid-cols-3">{projectCollections.map((category) => <Link href={`/projects/${category.slug}`} key={category.slug} className="card group overflow-hidden"><div className="relative aspect-[16/10] overflow-hidden"><Image src={category.thumbnail} alt={`${category.label} projects`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /><span className="absolute top-5 left-5 rounded-full border border-white/20 bg-zinc-950/60 px-3 py-1 text-xs tracking-wider text-white backdrop-blur-md">{category.number}</span></div><div className="p-7"><p className="eyebrow">{category.quote}</p><h3 className="mt-3 font-display text-3xl font-bold transition-colors group-hover:text-sky-500">{category.shortLabel}</h3><p className="mt-3 text-zinc-500">{category.description}</p><span className="mt-7 inline-flex items-center gap-3 text-accent">Explore {category.shortLabel} projects <span className="transition-transform group-hover:translate-x-1">→</span></span></div></Link>)}</div>
      </section>
      <section id="about" className="section-pad bg-zinc-950 text-white"><div className="shell grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">About us</p><h2 className="mt-3 font-display text-5xl font-bold">A small team built to create serious products.</h2></div><div className="space-y-5 text-zinc-400"><p>YusraSoftwares is a software development studio focused on turning business ideas into reliable digital products. Our team brings together experience in product design, full-stack development, mobile development, and AI integration.</p><p>We work across the complete development lifecycle from understanding the problem and designing the experience to engineering, deployment, maintenance, and scaling.</p><p>Our approach combines thoughtful product decisions with clean engineering, clear communication, and technology selected for the problem rather than for hype.</p></div></div><div className="shell mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{capabilities.map(([name, tech]) => <div key={name} className="rounded-2xl border border-zinc-800 p-5">{name}<br /><small>{tech}</small></div>)}</div></section>
      {/* <section className="section-pad shell"><p className="eyebrow">People</p><h2 className="mt-3 font-display text-5xl font-bold">Meet the Team</h2><p className="mt-4 text-zinc-500">Profiles are ready for verified names, roles, photos, and professional links.</p><div className="mt-10 grid gap-5 sm:grid-cols-2">{[1,2].map((member) => <article key={member} className="card p-6"><div className="grid aspect-video place-items-center bg-zinc-100 dark:bg-zinc-800">[TEAM PHOTO]</div><h3 className="mt-5 font-bold">[TEAM MEMBER NAME]</h3><p className="text-accent">[ROLE]</p><p className="text-zinc-500">[ONE-LINE SPECIALIZATION]</p></article>)}</div></section> */}
      <section className="section-pad border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"><div className="shell"><p className="eyebrow">Why YusraSoftwares</p><h2 className="mt-3 font-display text-4xl font-bold">Why Work With Us</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{[["End-to-End Capability","Design, web, mobile, backend, and AI under one team."],["Product-Focused Engineering","We build around the business problem, not just the technology."],["Built for the Long Term","Maintainable architecture designed to evolve as the product grows."]].map(([title,text]) => <article key={title} className="card p-7"><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-zinc-500">{text}</p></article>)}</div></div></section>
      <section id="contact" className="section-pad bg-zinc-950 text-white"><div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Start a project</p><h2 className="mt-3 font-display text-5xl font-bold">Let&apos;s Build Something</h2><p className="mt-5 text-zinc-400">Have a product to build, an existing system to improve, or a technical problem to solve? Tell us about it and we&apos;ll get back to you.</p><dl className="mt-9 text-sm"><dt className="text-zinc-500">Business email</dt><dd>[COMPANY EMAIL]</dd><dt className="mt-5 text-zinc-500">Profiles</dt><dd>Facebook · LinkedIn · GitHub — URLs pending</dd></dl></div><form className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8" aria-describedby="form-note"><div className="grid gap-5 sm:grid-cols-2"><label>Name*<input required name="name" autoComplete="name" className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3" /></label><label>Business / Company<input name="company" autoComplete="organization" className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3" /></label><label className="sm:col-span-2">Email*<input required name="email" autoComplete="email" className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3" type="email" /></label><label className="sm:col-span-2">What do you need?*<select required name="service" defaultValue="" className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3"><option value="">Select a service</option>{["Web Development","Mobile App Development","UI/UX Design","AI Integration","Bug Fix / Existing Project","Migration / Scaling","Other"].map((option) => <option key={option}>{option}</option>)}</select></label><label className="sm:col-span-2">Project Details*<textarea required name="details" rows={5} className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3" /></label><label className="sm:col-span-2">Budget Range (optional)<select name="budget" defaultValue="" className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3"><option value="">Prefer not to say yet</option><option>[ADD VERIFIED RANGE]</option></select></label></div><button disabled className="mt-6 cursor-not-allowed rounded-full bg-zinc-700 px-6 py-3 text-sm text-zinc-400">Send Project Details →</button><p id="form-note" className="mt-3 text-xs text-zinc-500">Submission is disabled until a verified business email or form service is connected.</p></form></div></section>
    </main>
  );
}
