import React from "react";
import { cn } from "../../../lib/utils";

export default function Container({ className, as: Tag = "div", children }) {
  return <Tag className={cn("ui-container", className)}>{children}</Tag>;
}
