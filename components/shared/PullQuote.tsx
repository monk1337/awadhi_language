"use client";

import { cn } from "@/lib/utils";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  className?: string;
}

export default function PullQuote({
  quote,
  attribution,
  className,
}: PullQuoteProps) {
  return (
    <RevealOnScroll direction="left">
      <blockquote
        className={cn(
          "border-l-4 border-saffron bg-parchment/50 py-6 pl-6 pr-4 rounded-r-lg",
          className,
        )}
      >
        <p className="font-quote text-2xl leading-relaxed text-charcoal md:text-3xl">
          &ldquo;{quote}&rdquo;
        </p>
        {attribution && (
          <footer className="mt-4 text-base text-slate">
            &mdash; {attribution}
          </footer>
        )}
      </blockquote>
    </RevealOnScroll>
  );
}
