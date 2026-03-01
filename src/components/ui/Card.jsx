import React from "react";
import { cn } from "../../../lib/utils";
import { animateCardHover } from "../../../lib/animations/gsap";

export default function Card({
  className,
  glass = false,
  interactive = false,
  as: Tag = "article",
  children,
  ...props
}) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!interactive || !ref.current) return undefined;
    return animateCardHover(ref.current);
  }, [interactive]);

  return (
    <Tag
      ref={ref}
      className={cn(glass ? "ui-glass" : "ui-card", "p-6 sm:p-8", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
