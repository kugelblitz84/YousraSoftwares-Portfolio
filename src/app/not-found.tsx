import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import { KineticHeading } from "@/components/motion/kinetic-heading";
import { TextHoverRoll } from "@/components/motion/text-hover-roll";

const suggestions = [
  { href: "/projects/web", label: "Web projects" },
  { href: "/projects/mobile", label: "Mobile projects" },
  { href: "/projects/ui-ux", label: "UI/UX projects" },
  { href: "/blog", label: "Insights" },
];

export default function NotFound() {
  return (
    <main id="main">
      <section className="soft-grid section-pad shell pt-36 text-center sm:pt-44">
        <p className="eyebrow">Error 404</p>
        <KineticHeading
          as="h1"
          lines={[
            { text: "This page has" },
            { text: "moved on.", italic: true, gradient: true },
          ]}
          className="mx-auto mt-4 max-w-3xl h-bram-hero text-5xl sm:text-7xl"
        />
        <p className="mx-auto mt-6 max-w-xl text-lg font-neue leading-relaxed text-zinc-500 dark:text-zinc-400">
          The address you followed does not match anything on the site. It may
          have been renamed, or the link that brought you here may be out of
          date.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {suggestions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-full border border-zinc-200 px-5 py-2.5 text-sm text-zinc-500 transition-all duration-300 hover:border-sky-400 hover:text-sky-600 dark:border-zinc-700 dark:hover:border-sky-600 dark:hover:text-sky-400"
            >
              <TextHoverRoll text={item.label} />
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="group btn-primary mt-10 inline-flex items-center rounded-full px-7 py-3.5 text-sm text-white"
        >
          <TextHoverRoll text="Back to home" />
          <RiArrowRightLine
            className="ml-2 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            size={18}
            aria-hidden="true"
          />
        </Link>
      </section>
    </main>
  );
}
