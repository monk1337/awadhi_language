"use client";

import { cn } from "@/lib/utils";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

type Align = "left" | "center";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: Align;
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <RevealOnScroll direction="up">
      <div
        className={cn(
          "flex flex-col gap-4",
          align === "center" && "items-center text-center",
          className,
        )}
      >
        {/* Decorative saffron line */}
        <div
          className={cn(
            "h-1 w-12 rounded-full bg-saffron",
            align === "center" && "mx-auto",
          )}
        />

        <h2 className="font-playfair text-4xl font-bold leading-tight text-charcoal md:text-5xl">
          {title}
        </h2>

        {subtitle && (
          <p
            className={cn(
              "max-w-2xl text-lg leading-relaxed text-slate md:text-xl",
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </RevealOnScroll>
  );
}
