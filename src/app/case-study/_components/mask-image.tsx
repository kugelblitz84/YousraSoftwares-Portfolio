"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type MaskImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
  /** 0–1. How strongly the image drifts against scroll. */
  parallax?: number;
  preload?: boolean;
  /** Whether the image zooms gently on hover. */
  hover?: boolean;
};

/**
 * Mask-revealed image: a curtain wipes up off the frame as it scrolls into
 * view, while the image inside drifts against scroll (transforms only, GPU
 * friendly).
 *
 * The wipe is a sibling overlay rather than a `clip-path` on the frame itself,
 * and that is load-bearing. `clip-path` removes an element's painted area, so
 * `IntersectionObserver` — which measures painted area — reports a 0%
 * intersection ratio for a clipped frame and `whileInView` never fires. The
 * clip then never opens: a deadlock that leaves the image permanently
 * invisible. Animating an overlay keeps the frame itself full-size and
 * observable, so the reveal always resolves. The same reasoning rules out
 * animating the frame's `opacity`/`scale` to nothing or giving it zero size.
 */
export function MaskImage({
  src,
  alt,
  sizes,
  className = "",
  imgClassName = "",
  delay = 0,
  parallax = 0.35,
  preload,
  hover = true,
}: MaskImageProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // `useReducedMotion()` is always falsy during SSR and only resolves at
  // hydration, so it must never decide *which* properties animate — only how
  // far they travel. Swapping property sets between renders leaves whatever
  // the server wrote stranded in the DOM with nothing left to animate it.
  const drift = reduceMotion ? 0 : parallax * 8;
  const y = useTransform(scrollYProgress, [0, 1], [`${drift}%`, `${-drift}%`]);
  // Cover-scale is expressed against the frame's own height, like the drift, so
  // the image always overflows further than it travels — no matter how short
  // the frame gets on small screens, its edges stay covered.
  const scale = drift ? 1 + (drift * 2) / 100 + 0.02 : 1;

  return (
    <div ref={ref} className={`group relative overflow-hidden ${className}`}>
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 will-change-transform"
        style={{ y, scale }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          className={`object-cover ${
            hover ? "transition-transform duration-900 ease-out group-hover:scale-[1.035]" : ""
          } ${imgClassName}`}
        />
      </motion.div>
      {/* The curtain: sits over the image and slides up out of the frame.
          `scaleY` with a bottom origin keeps it to a compositor-only
          transform, and `pointer-events-none` keeps hover on the frame. */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 1.05, delay, ease: EASE }}
        className="pointer-events-none absolute inset-0 origin-bottom bg-zinc-100 dark:bg-zinc-900"
      />
    </div>
  );
}
