import Image from "next/image";
import Link from "next/link";
import { RiArrowUpLine } from "@remixicon/react";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 text-white">
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
                src="/assets/logos/yusrasoftwares-mark.svg"
                width={42}
                height={42}
                alt=""
              />
              <span className="font-display text-xl font-bold">
                Yusra<span className="text-accent">Softwares</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-500">
              {siteConfig.description} Thoughtful products, dependable
              engineering, and a team built for the full journey.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="text-xs font-bold tracking-[.18em] text-zinc-500 uppercase">
              Explore
            </p>
            <div className="mt-5 grid gap-3 text-sm text-zinc-300">
              {siteConfig.nav.slice(1).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit transition-colors hover:text-cyan-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <div>
            <p className="text-xs font-bold tracking-[.18em] text-zinc-500 uppercase">
              Contact
            </p>
            <div className="mt-5 grid gap-3 text-sm text-zinc-300">
              <span>yusrasoftwares@gmail.com</span>
              <span className="mt-2 text-zinc-500">Profiles coming soon</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-zinc-800 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} YusraSoftwares. All rights
            reserved.
          </p>
          <a
            href="#hero"
            className="inline-flex w-fit items-center gap-2 text-zinc-400 transition-colors hover:text-white"
          >
            Back to top{" "}
            <span className="grid h-7 w-7 place-items-center rounded-full border border-zinc-700">
              <RiArrowUpLine size={15} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
