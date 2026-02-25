"use client";

import { cn } from "@/lib/utils";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

interface SpeakerQuoteProps {
  quote: string;
  speaker: string;
  context?: string;
  className?: string;
}

export default function SpeakerQuote({
  quote,
  speaker,
  context,
  className,
}: SpeakerQuoteProps) {
  return (
    <RevealOnScroll direction="left">
      <blockquote
        className={cn(
          "mx-auto max-w-3xl py-12 text-center md:py-16",
          className,
        )}
      >
        {/* Opening quotation mark */}
        <span
          className="block font-quote text-6xl leading-none text-saffron md:text-8xl"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        {/* Quote text */}
        <p className="mt-2 font-quote text-2xl leading-relaxed text-parchment md:text-3xl lg:text-4xl">
          {quote}
        </p>

        {/* Closing quotation mark */}
        <span
          className="mt-2 block font-quote text-6xl leading-none text-saffron md:text-8xl"
          aria-hidden="true"
        >
          &rdquo;
        </span>

        {/* Speaker attribution */}
        <footer className="mt-6">
          <cite className="not-italic">
            <span className="block text-base font-semibold text-parchment/90 md:text-lg">
              {speaker}
            </span>
            {context && (
              <span className="mt-1 block text-sm text-parchment/50 md:text-base">
                {context}
              </span>
            )}
          </cite>
        </footer>
      </blockquote>
    </RevealOnScroll>
  );
}
