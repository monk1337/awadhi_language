"use client";

import { cn } from "@/lib/utils";

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
  side: "left" | "right";
}

export default function TimelineEvent({
  year,
  title,
  description,
  highlight = false,
  side,
}: TimelineEventProps) {
  return (
    <div
      className={cn(
        "rounded-lg border px-5 py-4 shadow-sm transition-shadow duration-300 hover:shadow-md",
        highlight
          ? "border-saffron/30 border-l-4 border-l-saffron bg-saffron/5"
          : "border-parchment bg-cream",
        side === "left" ? "text-right md:text-right" : "text-left md:text-left",
      )}
    >
      <span className="font-data text-sm font-semibold tracking-wider text-saffron">
        {year}
      </span>
      <h3 className="mt-1 font-playfair text-lg font-bold leading-snug text-charcoal">
        {title}
      </h3>
      <p className="mt-2 font-inter text-sm leading-relaxed text-slate">
        {description}
      </p>
    </div>
  );
}
