import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";

const variants = {
  primary:
    "border border-[var(--sage-accent)] bg-[var(--sage-accent)] text-[var(--sage-text)] hover:bg-[var(--sage-accent-dark)] hover:text-white hover:border-[var(--sage-accent-dark)]",
  secondary:
    "border border-[var(--sage-border)] bg-[var(--sage-surface)] text-[var(--sage-text)] hover:bg-[var(--sage-bg)]",
  ghost:
    "border border-transparent bg-transparent text-[var(--sage-text)] hover:bg-[var(--sage-surface)]",
};

const sizes = {
  sm: "px-5 py-2 text-xs",
  md: "px-7 py-2.5 text-sm",
  lg: "px-8 py-3 text-sm",
};

function ButtonBase({ className, variant = "secondary", size = "md", children, ...props }) {
  return (
    <button
      className={cn(
        "ui-button inline-flex items-center justify-center gap-2 rounded-[var(--ui-radius-pill)] font-medium tracking-[0.02em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage-accent)]/55",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({ to, className, ...props }) {
  const { variant = "secondary", size = "md", children, ...rest } = props;
  return (
    <Link
      to={to}
      className={cn(
        "ui-button inline-flex items-center justify-center gap-2 rounded-[var(--ui-radius-pill)] font-medium tracking-[0.02em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage-accent)]/55",
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default ButtonBase;
