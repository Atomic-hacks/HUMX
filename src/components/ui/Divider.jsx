import React from "react";
import { cn } from "../../../lib/utils";

export default function Divider({ className }) {
  return <div className={cn("ui-divider", className)} />;
}
