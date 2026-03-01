import React from "react";
import { cn } from "../../../lib/utils";

export default function Section({ className, as: Tag = "section", children, ...props }) {
  return (
    <Tag className={cn("ui-section", className)} {...props}>
      {children}
    </Tag>
  );
}
