"use client";

import Image from "next/image";
import Link from "next/link";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { TextHoverRoll } from "@/components/motion/text-hover-roll";

type NavSection = (typeof siteConfig.nav)[number]["section"];

// Routes that belong to a nav section but do not live under that item's href.
// "Works" links to the home #work anchor, so its sub-routes are listed here.
const sectionRoutes: Partial<Record<NavSection, readonly string[]>> = {
  work: ["/projects", "/case-study"],
};

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dark, setDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const themeOrigin = useRef({ x: 0, y: 0 });

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
    let frame = 0;

    const updateFromScroll = () => {
      if (frame) return;

      frame = requestAnimationFrame(() => {
        frame = 0;
        setIsScrolled(window.scrollY > 16);

        if (pathname !== "/") return;

        const marker = Math.min(window.innerHeight * 0.35, 280);
        const atPageEnd =
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2;
        let currentSection: (typeof siteConfig.nav)[number]["section"] =
          siteConfig.nav[0].section;

        for (const item of siteConfig.nav) {
          const section = document.getElementById(item.section);
          if (section && section.getBoundingClientRect().top <= marker) {
            currentSection = item.section;
          }
        }

        if (atPageEnd) {
          currentSection = siteConfig.nav.at(-1)?.section ?? currentSection;
        }

        setActiveSection(currentSection);
      });
    };

    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, [pathname]);

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

  function selectSection(section: NavSection) {
    setMobileMenu(false);
    setActiveSection(section);
  }

  const isCurrent = (item: (typeof siteConfig.nav)[number]) => {
    if (pathname === "/") return activeSection === item.section;

    const covers = (base: string) =>
      pathname === base || pathname.startsWith(`${base}/`);

    const itemPath = item.href.split("#")[0];

    return (
      (itemPath !== "/" && covers(itemPath)) ||
      (sectionRoutes[item.section] ?? []).some(covers)
    );
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header
        className={`glass fixed inset-x-0 top-0 z-50 border-b transition-[border-color,box-shadow] duration-300 ${
          isScrolled
            ? "border-zinc-200 shadow-[0_10px_35px_rgba(9,9,11,0.08)] dark:border-zinc-800 dark:shadow-[0_10px_35px_rgba(0,0,0,0.28)]"
            : "border-zinc-200/70 dark:border-zinc-800/70"
        }`}
      >
        <nav
          className={`shell flex items-center justify-between transition-[height] duration-300 ${isScrolled ? "h-16" : "h-20"}`}
          aria-label="Primary navigation"
        >
          <Link href="/#hero" className="flex items-center gap-3" aria-label="YusraSoftwares home">
            <Image src="/assets/logos/yousrasoftware_logo.png" width={35} height={35} className="h-10 w-auto object-contain" alt="" preload />
            <b className="font-neue text-xl tracking-tight font-medium">Yusra<span className="text-accent font-semibold">Softwares</span></b>
          </Link>
          <ul className="hidden items-center gap-7 text-sm lg:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.label}>
                <Link
                  onClick={() => selectSection(item.section)}
                  className={`group nav-link inline-flex items-center ${
                    isCurrent(item) ? "text-accent font-medium" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                  href={item.href}
                  aria-current={isCurrent(item) ? "location" : undefined}
                >
                  <TextHoverRoll text={item.label} />
                </Link>
              </li>
            ))}
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
              {siteConfig.nav.map((item) => (
                <li key={item.label}>
                  <Link
                    onClick={() => selectSection(item.section)}
                    className={isCurrent(item) ? "font-medium text-accent" : "text-zinc-600 dark:text-zinc-300"}
                    href={item.href}
                    aria-current={isCurrent(item) ? "location" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
