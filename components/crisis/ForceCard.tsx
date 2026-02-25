"use client";

import type { ForceOfErasure } from "@/types";
import { cn } from "@/lib/utils";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

interface ForceCardProps {
  force: ForceOfErasure;
  index: number;
  className?: string;
}

export default function ForceCard({ force, index, className }: ForceCardProps) {
  return (
    <RevealOnScroll direction="up" delay={index * 0.1}>
      <article
        className={cn(
          "rounded-lg border-l-4 border-terracotta bg-dark-surface p-6 md:p-8",
          className,
        )}
      >
        {/* Force number */}
        <span className="font-data text-5xl font-bold leading-none text-terracotta/40 md:text-7xl">
          {index + 1}
        </span>

        {/* Title */}
        <h3 className="mt-4 font-playfair text-2xl font-bold text-parchment md:text-3xl">
          {force.title}
        </h3>

        {/* Description */}
        <p className="mt-4 font-inter text-base leading-relaxed text-parchment/80 md:text-lg">
          {force.description}
        </p>

        {/* Stats */}
        {force.stats && force.stats.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {force.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-data text-2xl font-bold text-saffron md:text-3xl">
                  {stat.value}
                </span>
                <span className="text-sm text-parchment/60">{stat.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Quotes / Examples */}
        {force.examples && force.examples.length > 0 && (
          <div className="mt-6 space-y-3">
            {force.examples.map((example) => (
              <p
                key={example}
                className="font-quote text-lg leading-relaxed text-parchment/70 md:text-xl"
              >
                {example}
              </p>
            ))}
          </div>
        )}
      </article>
    </RevealOnScroll>
  );
}
