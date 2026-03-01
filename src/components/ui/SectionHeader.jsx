import React from "react";
import { cn } from "../../../lib/utils";

export default function SectionHeader({
  title,
  subtitle,
  action,
  align = "left",
  className,
  titleClassName,
}) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-4 sm:mb-12",
        centered ? "items-center text-center" : "items-start",
        action && !centered ? "md:flex-row md:items-end md:justify-between" : "",
        className,
      )}
    >
      <div className={cn("max-w-3xl", centered ? "mx-auto" : "")}> 
        <h2
          className={cn("text-[clamp(34px,4.8vw,46px)] leading-[1.06] text-[var(--sage-text)]", titleClassName)}
        >
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--sage-muted)]/90">
            {subtitle}
          </p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
