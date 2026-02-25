"use client";

import { cn } from "@/lib/utils";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

type Size = "sm" | "md" | "lg";

interface StatHighlightProps {
  value: string;
  label: string;
  className?: string;
  size?: Size;
}

const valueSizes: Record<Size, string> = {
  sm: "text-3xl",
  md: "text-5xl",
  lg: "text-7xl",
};

const labelSizes: Record<Size, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export default function StatHighlight({
  value,
  label,
  className,
  size = "md",
}: StatHighlightProps) {
  return (
    <RevealOnScroll direction="up">
      <div className={cn("flex flex-col gap-2", className)}>
        <span
          className={cn(
            "font-data font-bold leading-none tracking-tight text-saffron",
            valueSizes[size],
          )}
        >
          {value}
        </span>
        <span className={cn("font-inter text-slate", labelSizes[size])}>
          {label}
        </span>
      </div>
    </RevealOnScroll>
  );
}
