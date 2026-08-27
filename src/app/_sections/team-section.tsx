import { KineticHeading } from "@/components/motion/kinetic-heading";

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
