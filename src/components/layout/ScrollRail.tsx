"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRailItem {
  id: string;
  label: string;
}

interface ScrollRailProps {
  items: ScrollRailItem[];
  className?: string;
  /**
   * Overrides the landmark's accessible name. Required when a page renders
   * more than one ScrollRail (e.g. Cases, one per case study) so each nav
   * landmark is distinguishable to assistive tech — see WCAG landmark-unique.
   */
  ariaLabel?: string;
}

/**
 * A sticky in-page index for genuinely long, structured content (Cases'
 * six-part reasoning chain, Process's five phases) — functional wayfinding,
 * not decoration. Desktop-only (mobile already reads the numbered section
 * labels in normal flow, which is enough at that width). Anchor links are
 * natively keyboard-operable; only the active-item highlight needs JS, and
 * it degrades to "no highlight, links still work" if JS never runs.
 */
export function ScrollRail({ items, className, ariaLabel = "Navegação da seção" }: ScrollRailProps) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={ariaLabel} className={cn("hidden lg:block sticky top-32", className)}>
      <ul className="space-y-3 border-l-2 border-border pl-4">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block text-sm transition-colors",
                activeId === item.id ? "text-brand-text font-semibold" : "text-muted hover:text-secondary"
              )}
            >
              {String(index + 1).padStart(2, "0")} {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
