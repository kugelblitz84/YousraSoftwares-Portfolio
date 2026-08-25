import Image from "next/image";
import Link from "next/link";
import { RiArrowUpLine } from "@remixicon/react";
import { siteConfig } from "@/config/site";
import { TextHoverRoll } from "@/components/ui/text-hover-roll";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-10 text-white">
      <div className="shell flex flex-col gap-7 lg:flex-row lg:justify-between">
        <div>
          <Link href="/#hero" className="flex items-center gap-3">
            <Image src="/assets/logos/yousrasoftware_logo.png" width={38} height={38} alt="" style={{ width: "auto", height: "auto" }} />
            <b>{siteConfig.name}</b>
          </Link>
          <p className="mt-3 text-sm text-zinc-500">{siteConfig.description}</p>
        </div>
        <div className="flex flex-col gap-4 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:text-zinc-600">
          <p className="font-neue">
            Copyright {new Date().getFullYear()} YusraSoftwares. All rights
            reserved.
          </p>
          <a
            href="#hero"
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
