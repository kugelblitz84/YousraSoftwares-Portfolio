"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Fixed navigational chrome for case-study pages: a thin scroll-progress bar
 * along the top edge and a chapter rail pinned to the right on large
 * screens. Rail items are plain anchors — Lenis (`anchors: true`) handles the
 * smooth scroll, and `section[id]` supplies the scroll margin.
 */
export function CaseStudyChrome({ chapters }: { chapters: readonly { id: string; label: string }[] }) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.4 });
  const [active, setActive] = useState(chapters[0]?.id ?? "");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const marker = Math.min(window.innerHeight * 0.38, 300);
      let current = chapters[0]?.id ?? "";

      for (const chapter of chapters) {
        const el = document.getElementById(chapter.id);
        if (el && el.getBoundingClientRect().top <= marker) current = chapter.id;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = chapters.at(-1)?.id ?? current;
      }

      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [chapters]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400"
        style={{ scaleX: reduceMotion ? scrollYProgress : progress }}
      />
      {/* The shell caps at 1180px, so the rail only has clear gutter once the
          viewport exceeds roughly 1180 + 2×rail width. Below that it would sit
          on top of the content, so it stays hidden until 1360px. */}
      <nav
        aria-label="Case study sections"
        className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 min-[1360px]:block"
      >
        <ul className="flex flex-col items-end gap-4">
          {chapters.map((chapter) => {
            const current = active === chapter.id;
            return (
              <li key={chapter.id}>
                <a
                  href={`#${chapter.id}`}
                  className={`group flex items-center gap-3 text-[.66rem] font-semibold tracking-[.2em] uppercase transition-colors duration-300 ${
                    current
                      ? "text-sky-600 dark:text-sky-400"
                      : "text-zinc-400 hover:text-zinc-800 dark:text-zinc-600 dark:hover:text-zinc-200"
                  }`}
                >
                  <span
                    className={`transition-opacity duration-300 ${
                      current ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {chapter.label}
                  </span>
                  <span className="relative grid size-3 place-items-center">
                    <span
                      className={`absolute inset-0 rounded-full border transition-transform duration-300 ${
                        current
                          ? "scale-100 border-sky-500 dark:border-sky-400"
                          : "scale-[.6] border-zinc-300 dark:border-zinc-700 group-hover:scale-100"
                      }`}
                    />
                    <span
                      className={`size-1 rounded-full bg-sky-500 transition-transform duration-300 dark:bg-sky-400 ${
                        current ? "scale-100" : "scale-0"
                      }`}
                    />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
