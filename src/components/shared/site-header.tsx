"use client";

import Image from "next/image";
import Link from "next/link";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import type { NavSection } from "@/types";

export function SiteHeader({ active = "home" }: { active?: NavSection }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    const close = (event: KeyboardEvent) => event.key === "Escape" && setMobileMenu(false);
    window.addEventListener("keydown", close);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", close);
    };
  }, []);

  function toggleTheme(next: boolean) {
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.theme = next ? "dark" : "light";
  }

  const isCurrent = (label: string) =>
    (active === "home" && label === "Home") ||
    (active === "work" && label === "Work") ||
    (active === "insights" && label === "Insights");

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="glass fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 dark:border-zinc-800/70">
        <nav className="shell flex h-20 items-center justify-between" aria-label="Primary navigation">
          <Link href="/#hero" className="flex items-center gap-3" aria-label="YusraSoftwares home">
            <Image src="/assets/logos/yusrasoftwares-mark.svg" width={40} height={40} alt="" priority />
            <b className="font-display text-xl">Yusra<span className="text-accent">Softwares</span></b>
          </Link>
          <ul className="hidden items-center gap-7 text-sm lg:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.label}>
                <Link className={isCurrent(item.label) ? "nav-link text-accent" : "nav-link text-zinc-500"} href={item.href} aria-current={isCurrent(item.label) ? "page" : undefined}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <DarkModeSwitch
              checked={dark}
              onChange={toggleTheme}
              size={24}
              aria-label={dark ? "Use light theme" : "Use dark theme"}
              className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 dark:border-zinc-800"
            />
            <Link href="/#contact" className="btn-primary hidden rounded-full px-5 py-2.5 text-sm text-white sm:inline-flex">Start a Project →</Link>
            <button onClick={() => setMobileMenu((open) => !open)} aria-expanded={mobileMenu} aria-controls="mobile-nav" className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 lg:hidden dark:border-zinc-800" aria-label="Toggle navigation">☰</button>
          </div>
        </nav>
        {mobileMenu && (
          <nav id="mobile-nav" className="border-t border-zinc-200 px-5 py-5 lg:hidden dark:border-zinc-800" aria-label="Mobile navigation">
            <ul className="grid gap-4">
              {siteConfig.nav.map((item) => <li key={item.label}><Link onClick={() => setMobileMenu(false)} href={item.href}>{item.label}</Link></li>)}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
