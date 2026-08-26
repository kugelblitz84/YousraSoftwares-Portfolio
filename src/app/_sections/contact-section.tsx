import { RiArrowRightLine } from "@remixicon/react";
import { KineticHeading } from "@/components/motion/kinetic-heading";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-pad bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-white"
    >
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
                  "Brand Design / Rebranding",
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
