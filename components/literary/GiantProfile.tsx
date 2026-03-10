"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ANIMATION_DEFAULTS } from "@/lib/constants";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

interface Work {
  title: string;
  date?: string;
  description: string;
}

interface GiantProfileProps {
  name: string;
  dates: string;
  title: string;
  achievement: string;
  works: Work[];
  quote?: string;
  quoteAttribution?: string;
  significance?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export default function GiantProfile({
  name,
  dates,
  title,
  achievement,
  works,
  quote,
  quoteAttribution,
  significance,
  imageSrc,
  imageAlt,
  className,
}: GiantProfileProps) {
  return (
    <RevealOnScroll>
      <div className={cn("space-y-8", className)}>
        {/* Header with optional portrait */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          {/* Portrait */}
          {imageSrc && (
            <div className="shrink-0 mx-auto md:mx-0">
              <img
                src={imageSrc}
                alt={imageAlt || name}
                className="h-auto w-48 rounded-lg border-2 border-parchment shadow-lg md:w-56"
              />
            </div>
          )}

          <div className="space-y-4">
            {/* Header area with saffron accent */}
            <div className="border-l-4 border-saffron pl-6">
              <h3 className="font-playfair text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
                {name}
              </h3>
              <p className="mt-2 font-data text-base text-slate">{dates}</p>
              <p className="mt-1 font-quote text-xl text-saffron-dark md:text-2xl">
                {title}
              </p>
            </div>

            {/* Achievement prose */}
            <p className="max-w-3xl text-lg leading-relaxed text-charcoal-light md:text-xl">
              {achievement}
            </p>
          </div>
        </div>

        {/* Quote */}
        {quote && (
          <blockquote className="rounded-r-lg border-l-4 border-amber bg-parchment/50 py-5 pl-6 pr-4">
            <p className="font-quote text-xl leading-relaxed text-charcoal md:text-2xl">
              &ldquo;{quote}&rdquo;
            </p>
            {quoteAttribution && (
              <footer className="mt-3 text-sm text-slate">
                {quoteAttribution}
              </footer>
            )}
          </blockquote>
        )}

        {/* Works mini-cards */}
        {works.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate">
              Major Works
            </h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((work, i) => (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={ANIMATION_DEFAULTS.viewport}
                  transition={{
                    duration: ANIMATION_DEFAULTS.duration,
                    delay: i * ANIMATION_DEFAULTS.stagger,
                    ease: ANIMATION_DEFAULTS.ease,
                  }}
                  className="rounded-lg border border-parchment bg-cream-dark p-5 transition-colors hover:border-saffron/40"
                >
                  <h5 className="font-playfair text-lg font-bold text-charcoal">
                    {work.title}
                  </h5>
                  {work.date && (
                    <p className="mt-1 font-data text-xs text-saffron">
                      {work.date}
                    </p>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                    {work.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Significance */}
        {significance && (
          <div className="rounded-xl bg-saffron/5 p-6">
            <p className="text-base leading-relaxed text-charcoal-light">
              {significance}
            </p>
          </div>
        )}
      </div>
    </RevealOnScroll>
  );
}
