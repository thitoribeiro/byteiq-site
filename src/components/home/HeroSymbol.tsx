"use client";

import React, { useEffect, useRef } from "react";

/**
 * Scroll-driven rotation for the Hero B: progress through the Hero section's
 * own height (0 at its top, 1 at its bottom) maps 1:1 to rotateY(0deg..360deg).
 * No React state — a passive, rAF-throttled scroll listener writes straight to
 * a CSS custom property, so scrolling never triggers a re-render. Reduced
 * motion is enforced independently by the `!important` override in
 * globals.css (a live media query), which wins regardless of what this sets.
 */
export function HeroSymbol() {
  const stageRef = useRef<HTMLDivElement>(null);
  const rotorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const rotor = rotorRef.current;
    const section = stage?.closest("section");
    if (!stage || !rotor || !section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let heroTop = 0;
    let heroHeight = 0;
    let ticking = false;

    const measure = () => {
      const rect = section.getBoundingClientRect();
      heroTop = rect.top + window.scrollY;
      heroHeight = rect.height;
    };

    const apply = () => {
      ticking = false;
      const progress =
        heroHeight > 0 ? Math.min(1, Math.max(0, (window.scrollY - heroTop) / heroHeight)) : 0;
      rotor.style.setProperty("--hero-symbol-rotation", `${progress * 90}deg`);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };

    measure();
    apply();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure, { passive: true });

    // Catches layout shifts a resize event wouldn't (e.g. web font swap
    // changing Hero height) so the progress mapping doesn't drift.
    const resizeObserver = new ResizeObserver(() => {
      measure();
      apply();
    });
    resizeObserver.observe(section);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={stageRef} className="hero-symbol-enter" style={{ perspective: "1400px" }}>
      <div ref={rotorRef} className="hero-symbol-rotate">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/icons/byteiq-icon.svg" alt="" className="w-full h-auto" />
      </div>
    </div>
  );
}
