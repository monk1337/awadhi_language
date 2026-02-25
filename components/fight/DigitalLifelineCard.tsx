"use client";

import type { DigitalLifeline } from "@/types";
import { cn } from "@/lib/utils";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

interface DigitalLifelineCardProps {
  lifeline: DigitalLifeline;
  index: number;
  className?: string;
}

const typeLabels: Record<DigitalLifeline["type"], string> = {
  app: "App",
  website: "Website",
  "social-media": "Social Media",
  publication: "Publication",
  broadcast: "Broadcast",
  organization: "Organization",
};

export default function DigitalLifelineCard({
  lifeline,
  index,
  className,
}: DigitalLifelineCardProps) {
  return (
    <RevealOnScroll direction="up" delay={index * 0.1}>
      <article
        className={cn(
          "flex h-full flex-col rounded-lg border border-parchment/30 bg-cream-dark p-6 transition-shadow hover:shadow-lg",
          className,
        )}
      >
        {/* Header with type badge and year */}
        <div className="flex items-start justify-between gap-3">
          <span className="inline-block rounded-full bg-saffron/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-saffron">
            {typeLabels[lifeline.type]}
          </span>
          {lifeline.founded && (
            <span className="font-data text-sm font-bold text-terracotta">
              {lifeline.founded}
            </span>
          )}
        </div>

        {/* Name */}
        <h4 className="mt-4 font-playfair text-xl font-bold text-charcoal">
          {lifeline.name}
        </h4>

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate md:text-base">
          {lifeline.description}
        </p>

        {/* Reach */}
        {lifeline.reach && (
          <div className="mt-4 border-t border-parchment/20 pt-4">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-light">
              Reach
            </span>
            <p className="mt-1 font-data text-sm font-semibold text-saffron">
              {lifeline.reach}
            </p>
          </div>
        )}

        {/* Link */}
        {lifeline.url && (
          <a
            href={lifeline.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-saffron transition-colors hover:text-saffron-dark"
          >
            Visit
            <span aria-hidden="true">&rarr;</span>
          </a>
        )}
      </article>
    </RevealOnScroll>
  );
}
