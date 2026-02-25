"use client";

import { motion } from "framer-motion";
import { cuisineTerms } from "@/data/cuisine-terms";
import { cn } from "@/lib/utils";
import { ANIMATION_DEFAULTS } from "@/lib/constants";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

/** These terms get a larger, featured card. */
const featuredTerms = new Set(["Dum Pukht", "Galawat"]);

export default function CuisineTerms() {
  return (
    <RevealOnScroll>
      <div className="space-y-8">
        {/* Intro text */}
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-charcoal-light md:text-xl">
          Awadhi cuisine carries a vocabulary that reveals an entire philosophy
          of eating.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cuisineTerms.map((term, i) => {
            const isFeatured = featuredTerms.has(term.name);

            return (
              <motion.div
                key={term.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={ANIMATION_DEFAULTS.viewport}
                transition={{
                  duration: ANIMATION_DEFAULTS.duration,
                  delay: i * 0.07,
                  ease: ANIMATION_DEFAULTS.ease,
                }}
                className={cn(
                  "group rounded-xl border border-parchment bg-cream-dark p-6 transition-colors hover:border-amber/60 hover:shadow-md",
                  isFeatured &&
                    "sm:col-span-2 lg:col-span-1 border-amber/40 bg-amber/5",
                )}
              >
                {/* Category badge */}
                {term.category && (
                  <span className="inline-block rounded-full bg-saffron/10 px-3 py-1 text-xs font-medium capitalize text-saffron-dark">
                    {term.category}
                  </span>
                )}

                {/* Term name */}
                <h3
                  className={cn(
                    "mt-3 font-playfair font-bold text-charcoal",
                    isFeatured ? "text-2xl md:text-3xl" : "text-xl",
                  )}
                >
                  {term.name}
                </h3>

                {/* Devanagari */}
                {term.nameDevanagari && (
                  <p
                    className={cn(
                      "mt-1 font-devanagari text-slate",
                      isFeatured ? "text-xl" : "text-lg",
                    )}
                  >
                    {term.nameDevanagari}
                  </p>
                )}

                {/* Description / story */}
                <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                  {term.description}
                </p>

                {/* Region */}
                {term.region && (
                  <p className="mt-3 text-xs text-slate">
                    <span className="font-medium">Region:</span> {term.region}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </RevealOnScroll>
  );
}
