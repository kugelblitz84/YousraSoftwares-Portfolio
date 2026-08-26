import Image from "next/image";
import Link from "next/link";
import { RiArrowUpLine } from "@remixicon/react";
import { siteConfig } from "@/config/site";
import { TextHoverRoll } from "@/components/motion/text-hover-roll";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
      <div className="soft-grid absolute inset-x-0 top-0 h-72 opacity-40" />
      <div className="shell relative py-8 sm:py-10">
        <div className="grid gap-12 py-12 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <Link
              href="/#hero"
              className="inline-flex items-center gap-3"
              aria-label="YusraSoftwares home"
            >
              <Image
                src="/assets/logos/yousrasoftware_logo.png"
                width={42}
                height={42}
                alt=""
              />
              <span className="font-neue text-xl font-medium tracking-tight">
                Yusra<span className="text-accent font-semibold">Softwares</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm font-neue leading-relaxed text-zinc-500">
              {siteConfig.description} Thoughtful products, dependable
              engineering, and a team built for the full journey.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold tracking-[.18em] text-zinc-500 uppercase">
              Explore
            </p>
            <div className="mt-5 grid gap-3 text-sm text-zinc-300">
              {siteConfig.nav.slice(1).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group w-fit font-neue text-zinc-600 transition-colors hover:text-cyan-600 dark:text-zinc-300 dark:hover:text-cyan-300"
                >
                  <TextHoverRoll text={item.label} />
                </Link>
              ))}
            </div>
          </nav>
          <div>
            <p className="text-xs font-semibold tracking-[.18em] text-zinc-500 uppercase">
              Contact
            </p>
            <div className="mt-5 grid gap-3 text-sm font-neue text-zinc-600 dark:text-zinc-300">
              <a href="mailto:yusrasoftwares@gmail.com" className="group w-fit hover:text-cyan-600 dark:hover:text-cyan-300">
                <TextHoverRoll text="yusrasoftwares@gmail.com" />
              </a>
              <span className="mt-2 text-zinc-500 text-xs uppercase tracking-wider">Profiles coming soon</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:text-zinc-600">
          <p className="font-neue">
            Copyright {new Date().getFullYear()} YusraSoftwares. All rights
            reserved.
          </p>
          <a
            href="#main"
            className="group inline-flex w-fit items-center gap-2 text-zinc-600 font-neue transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            <TextHoverRoll text="Back to top" />
            <span className="grid h-7 w-7 place-items-center rounded-full border border-zinc-300 transition-transform duration-300 group-hover:-translate-y-1 dark:border-zinc-700">
              <RiArrowUpLine size={15} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
