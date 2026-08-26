"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CursorFollower() {
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = (e.target as HTMLElement)?.closest("[data-cursor-text]");
      if (target) {
        const text = target.getAttribute("data-cursor-text") || "View";
        setCursorText(text);
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (typeof window === "undefined" || !isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-950 shadow-xl backdrop-blur-md dark:bg-sky-400 dark:text-zinc-950"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-150%",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {cursorText}
    </motion.div>
  );
}
