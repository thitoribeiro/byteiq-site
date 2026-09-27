import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ByteIQLogoProps {
  className?: string;
  /** 'light' = official color lockup for use on light/white surfaces. 'dark' = negative lockup for the navy footer. */
  tone?: "light" | "dark";
  /** Tailwind height utility classes for the mark itself, e.g. "h-9 sm:h-11". Responsive-friendly. */
  imgClassName?: string;
}

/**
 * Renders the approved ByteIQ logo master.
 * `light` uses the official complete lockup (public/brand/logos), symbol +
 * wordmark + "TECNOLOGIA" descriptor.
 * `dark` uses the official stacked monochrome lockup for the Footer's navy surface.
 */
export function ByteIQLogo({ className, tone = "light", imgClassName = "h-9" }: ByteIQLogoProps) {
  const isDark = tone === "dark";
  const src = isDark
    ? "/brand/logos/byteiq-logo-empilhado-mono.svg"
    : "/brand/logos/logo-completa-aficial.svg";

  // The stacked mono mark is ~1:1 (icon over wordmark), far narrower than the
  // previous wide horizontal lockup at the same height — a fixed taller size
  // keeps comparable visual weight in the Footer, independent of whatever
  // height the caller passes for the light/Header lockup.
  const effectiveImgClassName = isDark ? "h-20" : imgClassName;

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-xs",
        className
      )}
      aria-label="ByteIQ Tecnologia — AI Engineering & Software Development"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="ByteIQ" className={cn("w-auto", effectiveImgClassName)} />
    </Link>
  );
}
