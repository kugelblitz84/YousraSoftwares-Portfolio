import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-10 text-white">
      <div className="shell flex flex-col gap-7 lg:flex-row lg:justify-between">
        <div>
          <Link href="/#hero" className="flex items-center gap-3">
            <Image src="/assets/logos/yousrasoftware_logo.png" width={38} height={38} alt="" />
            <b>{siteConfig.name}</b>
          </Link>
          <p className="mt-3 text-sm text-zinc-500">{siteConfig.description}</p>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-zinc-400" aria-label="Footer navigation">
          {siteConfig.nav.slice(1).map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
        </nav>
      </div>
      <div className="shell mt-8 border-t border-zinc-800 pt-6 text-xs text-zinc-600">
        © {new Date().getFullYear()} YusraSoftwares. All rights reserved.<br />
        Template by <a className="underline" href="https://lbegey78.gumroad.com/" target="_blank" rel="noopener noreferrer">Laurent Begey</a> · Distributed by <a className="underline" href="https://themewagon.com/" target="_blank" rel="noopener noreferrer">ThemeWagon</a>
      </div>
    </footer>
  );
}
