const lifecycle = [
  ["Discover", "Goals, users, and the right product scope."],
  ["Design", "Clear journeys and interfaces people enjoy."],
  ["Develop", "Reliable systems built for real-world use."],
  ["Test", "Quality, performance, and every critical detail."],
  ["Deploy", "A smooth, secure path into production."],
  ["Improve", "Measure, refine, maintain, and scale."],
];

export function CapabilitySection() {
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
