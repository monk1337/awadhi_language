"use client";

import {
  politicalTimeline,
  type RecognitionStatus,
} from "@/data/political-timeline";
import { cn } from "@/lib/utils";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const statusColors: Record<RecognitionStatus, string> = {
  pending: "bg-amber",
  failed: "bg-slate",
  partial: "bg-terracotta",
  symbolic: "bg-saffron",
};

const statusLabels: Record<RecognitionStatus, string> = {
  pending: "Pending",
  failed: "Failed",
  partial: "Partial",
  symbolic: "Symbolic",
};

export default function PoliticalTimeline() {
  // Reverse chronological order -- latest events first
  const sorted = [...politicalTimeline].sort(
    (a, b) => Number(b.year) - Number(a.year),
  );

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-px bg-parchment/30 md:left-1/2 md:-translate-x-px" />

      <div className="space-y-12">
        {sorted.map((event, i) => {
          const isEven = i % 2 === 0;

          return (
            <RevealOnScroll
              key={`${event.year}-${event.title}`}
              direction={isEven ? "left" : "right"}
              delay={i * 0.08}
            >
              <div
                className={cn(
                  "relative flex items-start gap-6 pl-12 md:pl-0",
                  isEven ? "md:flex-row" : "md:flex-row-reverse",
                )}
              >
                {/* Content card */}
                <div
                  className={cn(
                    "w-full rounded-lg border border-parchment/10 bg-cream-dark p-5 md:w-[calc(50%-2rem)]",
                    isEven ? "md:text-right" : "md:text-left",
                  )}
                >
                  {/* Year badge */}
                  <span className="font-data text-sm font-bold text-terracotta">
                    {event.year}
                  </span>

                  <h4 className="mt-1 font-playfair text-lg font-bold text-charcoal md:text-xl">
                    {event.title}
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-slate md:text-base">
                    {event.description}
                  </p>

                  {/* Status badge */}
                  <div
                    className={cn(
                      "mt-3 inline-flex items-center gap-2",
                      isEven ? "md:flex-row-reverse" : "",
                    )}
                  >
                    <span
                      className={cn(
                        "size-2.5 rounded-full",
                        statusColors[event.status],
                      )}
                    />
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-light">
                      {statusLabels[event.status]}
                    </span>
                  </div>
                </div>

                {/* Center dot (visible on md+) */}
                <div className="absolute left-2.5 top-6 z-10 md:left-1/2 md:-translate-x-1/2">
                  <div
                    className={cn(
                      "size-3 rounded-full ring-4 ring-cream",
                      statusColors[event.status],
                    )}
                  />
                </div>

                {/* Spacer for the other side */}
                <div className="hidden w-[calc(50%-2rem)] md:block" />
              </div>
            </RevealOnScroll>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
        {(Object.keys(statusColors) as RecognitionStatus[]).map((status) => (
          <div key={status} className="flex items-center gap-2">
            <span
              className={cn("size-2.5 rounded-full", statusColors[status])}
            />
            <span className="text-xs font-medium uppercase tracking-wider text-slate">
              {statusLabels[status]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
