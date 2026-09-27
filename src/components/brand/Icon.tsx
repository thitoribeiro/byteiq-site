import React from "react";
import { cn } from "@/lib/utils";

export type IconName =
  | "agent" | "agent-memory" | "agent-workflow" | "ai-layers" | "ai-model" | "ai-prompt" | "ai-spark"
  | "alert" | "api" | "app-window" | "arrow-right" | "audit-log" | "award" | "bar-chart" | "bell"
  | "briefcase" | "bug" | "building" | "calendar" | "check" | "checklist" | "chevron-down" | "chevron-right"
  | "chunk" | "citation" | "close" | "cloud" | "code" | "container" | "copy" | "data-flow" | "database"
  | "deploy" | "document-search" | "download" | "edit" | "external-link" | "eye" | "filter" | "flask"
  | "gauge" | "gear" | "git-branch" | "graduation" | "home" | "human-approval" | "info" | "integration"
  | "key" | "knowledge-base" | "line-chart" | "lock" | "mail" | "menu" | "message" | "module" | "moon"
  | "more" | "pie-chart" | "plus" | "policy" | "refresh" | "retrieval" | "retry" | "ruler" | "scale"
  | "schedule" | "search" | "send" | "server" | "settings" | "shield" | "star" | "stopwatch" | "sun"
  | "table" | "target" | "test-run" | "tool-call" | "trash" | "trend-up" | "trigger" | "upload" | "user"
  | "users" | "workflow";

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: IconName;
  size?: number;
}

/** Official ByteIQ iconography (01_BRAND/iconography). Stroke-based, inherits currentColor. */
export function Icon({ name, size = 20, className, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden="true"
      {...rest}
    >
      <use href={`/brand/icons-sprite.svg#byteiq-icon-${name}`} />
    </svg>
  );
}
