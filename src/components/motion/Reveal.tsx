"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type RevealVariant = "up" | "up-sm" | "left" | "right";

interface RevealProps {
  children: React.ReactNode;
  /** "up" (16px) = standard reveal. "up-sm" (8px) = editorial text reveal. "left"/"right" = horizontal reveal (12-20px) for flow/graphic elements. */
  variant?: RevealVariant;
  /** Stagger delay in ms — applied via transition-delay, not a setTimeout, so it costs nothing until the element is actually in view. */
  delay?: number;
  className?: string;
}

/**
 * Viewport reveal via IntersectionObserver — one class toggle, no scroll
 * listener, animates only opacity/transform. Server-rendered content is
 * visible by default (see the `.reveal` base rule + the no-JS override in
 * layout.tsx); this component only ever ADDS the "in view" state, so a JS
 * failure leaves content in its normal, fully visible layout position.
 */
export function Reveal({ children, variant = "up", delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", `reveal-${variant}`, visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
