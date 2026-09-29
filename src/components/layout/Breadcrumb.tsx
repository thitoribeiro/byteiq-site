import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/** Shared breadcrumb trail for inner pages. Last item (no href) renders as plain text. */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <div className={cn("flex items-center gap-2 text-sm text-muted", className)}>
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 && <span>/</span>}
          {item.href ? (
            <Link href={item.href} className="link-underline hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-secondary">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
