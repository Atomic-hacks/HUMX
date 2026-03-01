import React from "react";
import { cn } from "../../../lib/utils";

export default function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--ui-radius-pill)] border border-[var(--sage-border)]/75 bg-[var(--sage-surface)] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[var(--sage-kicker)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
