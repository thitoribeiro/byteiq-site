import React from "react";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  /** Matches the two heading treatments already in use across inner pages. */
  titleAs?: "h2" | "h3";
  showIcon?: boolean;
  className?: string;
}

/** Shared CTA banner used at the bottom of every inner page. */
export function CTABanner({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  titleAs = "h3",
  showIcon = false,
  className,
}: CTABannerProps) {
  const Heading = titleAs;
  return (
    <div
      className={cn(
        "mt-16 p-8 sm:p-10 rounded-xl bg-bg-subtle flex flex-col sm:flex-row items-center justify-between gap-6",
        className
      )}
    >
      <div>
        <Heading
          className={cn(
            "font-semibold text-primary",
            titleAs === "h2" ? "text-xl mb-1" : "text-lg"
          )}
        >
          {title}
        </Heading>
        <p className={cn("text-sm text-secondary", titleAs === "h3" && "mt-1")}>{subtitle}</p>
      </div>
      <Link
        href={ctaHref}
        className="group inline-flex items-center gap-2 h-11 px-6 bg-brand text-white font-medium text-sm rounded-md transition-all duration-200 ease-out hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 shrink-0"
      >
        <span>{ctaLabel}</span>
        {showIcon && (
          <Icon
            name="arrow-right"
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
          />
        )}
      </Link>
    </div>
  );
}
