"use client";

import { phrases } from "@/data/phrases";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { ANIMATION_DEFAULTS } from "@/lib/constants";

export default function PhrasesDisplay() {
  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {phrases.map((phrase, i) => (
          <RevealOnScroll
            key={phrase.awadhi}
            direction="up"
            delay={i * ANIMATION_DEFAULTS.stagger}
          >
            <div className="h-full rounded-xl border border-parchment bg-cream-dark p-6">
              {/* Devanagari */}
              <p className="font-devanagari text-xl leading-relaxed text-charcoal md:text-2xl">
                {phrase.devanagari}
              </p>

              {/* Transliteration */}
              <p className="mt-2 text-sm tracking-wide text-saffron-dark">
                {phrase.awadhi}
              </p>

              {/* English */}
              <p className="mt-3 text-base leading-relaxed text-charcoal-light">
                {phrase.english}
              </p>

              {/* Vibe */}
              <p className="mt-3 text-sm italic text-slate">
                {phrase.vibe}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
