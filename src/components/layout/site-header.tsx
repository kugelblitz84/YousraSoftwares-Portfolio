"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RiArrowRightUpLine, RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

type NavSection = (typeof siteConfig.nav)[number]["section"];
type NavItem = (typeof siteConfig.nav)[number];

// Routes that belong to a nav section but do not live under that item's href.
// "Works" links to the home #work anchor, so its sub-routes are listed here.
const sectionRoutes: Partial<Record<NavSection, readonly string[]>> = {
  work: ["/projects", "/case-study"],
};

export function SiteHeader() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dark, setDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const [activeSection, setActiveSection] = useState<NavSection>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<NavSection | null>(null);
  const themeOrigin = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setDark(document.documentElement.classList.contains("dark"));
      setThemeReady(true);
    });
    const close = (event: KeyboardEvent) =>
      event.key === "Escape" && setMobileMenu(false);
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
        let currentSection: NavSection = siteConfig.nav[0].section;

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
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!reducedMotion && "startViewTransition" in document) {
      const root = document.documentElement;
      const { x, y } = themeOrigin.current;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );
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

  const isCurrent = (item: NavItem) => {
    if (pathname === "/") return activeSection === item.section;

    const covers = (base: string) =>
      pathname === base || pathname.startsWith(`${base}/`);

    const itemPath = item.href.split("#")[0];

    return (
      (itemPath !== "/" && covers(itemPath)) ||
      (sectionRoutes[item.section] ?? []).some(covers)
    );
  };

  // The pill rests on the current section and follows the pointer or keyboard
  // focus while the user is inside the nav.
  const currentSection = siteConfig.nav.find(isCurrent)?.section ?? null;
  const pilledSection = hoveredSection ?? currentSection;
  const pillTransition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 380, damping: 32, mass: 0.8 };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-3 transition-[padding] sm:px-5 ${isScrolled ? "pt-3" : "pt-4 sm:pt-5"}`}
      >
        <nav
          className="glass shell flex h-16 items-center justify-between rounded-full border border-zinc-200/80 px-3 shadow-[0_10px_35px_rgba(9,9,11,.07)] sm:px-4 dark:border-zinc-800/80"
          aria-label="Primary navigation"
        >
          <Link
            href="/#hero"
            className="flex items-center gap-2.5"
            aria-label="YusraSoftwares home"
          >
            <Image
              src="/assets/logos/yousrasoftware_logo.png"
              width={35}
              height={35}
              className="h-9 w-auto sm:h-10"
              alt=""
              preload
            />
            <b className="font-neue text-lg font-medium sm:text-xl">
              Yusra<span className="text-accent font-semibold">Softwares</span>
            </b>
          </Link>
          <ul
            onMouseLeave={() => setHoveredSection(null)}
            onBlur={() => setHoveredSection(null)}
            className="hidden items-center gap-0.5 rounded-full border border-zinc-200/70 bg-zinc-50/60 p-1 text-sm lg:flex dark:border-zinc-800/70 dark:bg-zinc-900/40"
          >
            {siteConfig.nav.map((item) => {
              const current = isCurrent(item);
              const hovered = hoveredSection === item.section;

              return (
                <li key={item.label} className="relative">
                  {pilledSection === item.section && (
                    <motion.span
                      layoutId="nav-pill"
                      aria-hidden="true"
                      transition={pillTransition}
                      className="absolute inset-0 rounded-full bg-white shadow-[0_1px_2px_rgba(9,9,11,.08),0_6px_16px_-6px_rgba(9,9,11,.18)] ring-1 ring-zinc-200/80 dark:bg-zinc-800 dark:shadow-[0_1px_2px_rgba(0,0,0,.4)] dark:ring-zinc-700/70"
                    />
                  )}
                  <Link
                    onClick={() => selectSection(item.section)}
                    onMouseEnter={() => setHoveredSection(item.section)}
                    onFocus={() => setHoveredSection(item.section)}
                    className={`relative z-10 block rounded-full px-3.5 py-2 transition-colors duration-200 ${
                      current
                        ? "text-accent font-medium"
                        : hovered
                          ? "text-zinc-900 dark:text-white"
                          : "text-zinc-500 dark:text-zinc-400"
                    }`}
                    href={item.href}
                    aria-current={current ? "location" : undefined}
                  >
                    <span
                      className={`inline-flex items-center gap-1.5 transition-transform duration-200 ${hovered && !reduceMotion ? "-translate-y-px" : ""}`}
                    >
                      {item.label}
                      <motion.span
                        aria-hidden="true"
                        className="brand-gradient block size-1 rounded-full"
                        initial={false}
                        animate={{
                          opacity: current ? 1 : 0,
                          scale: current ? 1 : 0.4,
                        }}
                        transition={
                          reduceMotion ? { duration: 0 } : { duration: 0.22 }
                        }
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-2">
            {themeReady && (
              <DarkModeSwitch
                checked={dark}
                onChange={toggleTheme}
                onClick={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  themeOrigin.current = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                  };
                }}
                size={22}
                aria-label={dark ? "Use light theme" : "Use dark theme"}
                className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 dark:border-zinc-800"
              />
            )}
            <Link
              href="/#contact"
              onClick={() => selectSection("contact")}
              className="btn-primary hidden items-center gap-1 rounded-full px-4 py-2.5 text-sm text-white sm:inline-flex"
            >
              Start a Project
              <RiArrowRightUpLine size={16} />
            </Link>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-expanded={mobileMenu}
              aria-controls="mobile-nav"
              className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 lg:hidden dark:border-zinc-800"
              aria-label="Toggle navigation"
            >
              {mobileMenu ? (
                <RiCloseLine size={21} />
              ) : (
                <RiMenu3Line size={20} />
              )}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {mobileMenu && (
            <motion.nav
              id="mobile-nav"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              className="glass shell mt-2 rounded-3xl border border-zinc-200/80 p-2 shadow-xl lg:hidden dark:border-zinc-800/80"
              aria-label="Mobile navigation"
            >
              <ul className="grid gap-1">
                {siteConfig.nav.map((item, index) => {
                  const current = isCurrent(item);

                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.045 }}
                    >
                      <Link
                        onClick={() => selectSection(item.section)}
                        className={`flex justify-between rounded-xl px-4 py-3.5 text-base ${
                          current
                            ? "text-accent bg-sky-500/10 font-medium"
                            : "text-zinc-600 dark:text-zinc-300"
                        }`}
                        href={item.href}
                        aria-current={current ? "location" : undefined}
                      >
                        <span>
                          0{index + 1}　{item.label}
                        </span>
                        <RiArrowRightUpLine size={17} />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
