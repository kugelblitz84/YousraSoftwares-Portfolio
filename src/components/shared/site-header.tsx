"use client";

import Image from "next/image";
import Link from "next/link";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

type NavSection = (typeof siteConfig.nav)[number]["section"];

type SiteHeaderProps = {
  active?: NavSection | null;
};

export function SiteHeader({ active }: SiteHeaderProps) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dark, setDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const [visibleSection, setVisibleSection] = useState<NavSection>("home");
  const themeOrigin = useRef({ x: 0, y: 0 });
  const currentSection = active === undefined ? visibleSection : active;

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setDark(document.documentElement.classList.contains("dark"));
      setThemeReady(true);
    });
    const close = (event: KeyboardEvent) => event.key === "Escape" && setMobileMenu(false);
    window.addEventListener("keydown", close);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", close);
    };
  }, []);

  useEffect(() => {
    if (active !== undefined) return;

    const sections = siteConfig.nav
      .map((item) => ({
        id: item.href.split("#")[1],
        section: item.section as NavSection,
      }))
      .map((item) => ({
        ...item,
        element: document.getElementById(item.id),
      }))
      .filter((item) => item.element !== null);

    let animationFrame = 0;

    const updateVisibleSection = () => {
      animationFrame = 0;
      const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 280);
      let nextSection: NavSection = "home";

      for (const section of sections) {
        if (section.element && section.element.offsetTop <= marker) {
          nextSection = section.section;
        }
      }

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        nextSection = "contact";
      }

      setVisibleSection((current) => current === nextSection ? current : nextSection);
    };

    const scheduleUpdate = () => {
      if (animationFrame) return;
      animationFrame = requestAnimationFrame(updateVisibleSection);
    };

    updateVisibleSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, [active]);

  function selectSection(section: NavSection) {
    setMobileMenu(false);
    if (active === undefined) setVisibleSection(section);
  }

  function toggleTheme(next: boolean) {
    const applyTheme = () => {
      setDark(next);
      document.documentElement.classList.toggle("dark", next);
      localStorage.theme = next ? "dark" : "light";
    };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reducedMotion && "startViewTransition" in document) {
      const root = document.documentElement;
      const { x, y } = themeOrigin.current;
      const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
      root.style.setProperty("--theme-transition-x", `${x}px`);
      root.style.setProperty("--theme-transition-y", `${y}px`);
      root.style.setProperty("--theme-transition-radius", `${radius}px`);
      document.startViewTransition(applyTheme);
      return;
    }

    applyTheme();
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="glass fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 dark:border-zinc-800/70">
        <nav className="shell flex h-20 items-center justify-between" aria-label="Primary navigation">
          <Link href="/#hero" onClick={() => selectSection("home")} className="flex items-center gap-3" aria-label="YusraSoftwares home">
            <Image src="/assets/logos/yousrasoftware_logo.png" width={29} height={29} alt="" priority style={{ width: "auto", height: "auto" }} />
            <b className="font-display text-xl">Yusra<span className="text-accent">Softwares</span></b>
          </Link>
          <ul className="hidden items-center gap-7 text-sm lg:flex">
            {siteConfig.nav.map((item) => {
              const isCurrent = currentSection === item.section;
              return (
                <li key={item.label}>
                  <Link
                    className={isCurrent ? "nav-link text-accent" : "nav-link text-zinc-500"}
                    href={item.href}
                    onClick={() => selectSection(item.section)}
                    aria-current={isCurrent ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center">
              {themeReady && <DarkModeSwitch
                checked={dark}
                onChange={toggleTheme}
                onClick={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  themeOrigin.current = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
                }}
                size={24}
                aria-label={dark ? "Use light theme" : "Use dark theme"}
                className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 dark:border-zinc-800"
              />}
            </span>
            <Link href="/#contact" onClick={() => selectSection("contact")} className="btn-primary hidden rounded-full px-5 py-2.5 text-sm text-white sm:inline-flex">Start a Project →</Link>
            <button onClick={() => setMobileMenu((open) => !open)} aria-expanded={mobileMenu} aria-controls="mobile-nav" className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 lg:hidden dark:border-zinc-800" aria-label="Toggle navigation">☰</button>
          </div>
        </nav>
        {mobileMenu && (
          <nav id="mobile-nav" className="border-t border-zinc-200 px-5 py-5 lg:hidden dark:border-zinc-800" aria-label="Mobile navigation">
            <ul className="grid gap-4">
              {siteConfig.nav.map((item) => {
                const isCurrent = currentSection === item.section;
                return (
                  <li key={item.label}>
                    <Link
                      onClick={() => selectSection(item.section)}
                      href={item.href}
                      className={isCurrent ? "text-accent" : undefined}
                      aria-current={isCurrent ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
