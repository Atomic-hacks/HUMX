import React from "react";
import { cn } from "../../../lib/utils";

export default function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "mt-2 w-full rounded-[var(--ui-radius-sm)] border border-[var(--sage-border)] bg-white/70 px-4 py-3 text-sm text-[var(--sage-text)] outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-[var(--sage-accent)]/35",
        className,
      )}
      {...props}
    />
  );
}
