"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { ANIMATION_DEFAULTS } from "@/lib/constants";

interface AnimatedNumberProps {
  value: string;
  className?: string;
  delay?: number;
}

function AnimatedNumber({ value, className, delay = 0 }: AnimatedNumberProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={ANIMATION_DEFAULTS.viewport}
      transition={{
        duration: 0.8,
        delay,
        ease: ANIMATION_DEFAULTS.ease,
      }}
      className={cn("block", className)}
    >
      {value}
    </motion.span>
  );
}

export default function AyodhyaParadox() {
  return (
    <RevealOnScroll direction="up">
      <section className="overflow-hidden rounded-xl bg-charcoal p-8 md:p-12 lg:p-16">
        {/* Split numbers */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Left: $10B */}
          <div className="text-center md:text-right">
            <AnimatedNumber
              value="$10B"
              className="font-data text-6xl font-bold tracking-tight text-saffron md:text-7xl lg:text-8xl"
              delay={0}
            />
            <p className="mt-4 text-lg text-parchment/70 md:text-xl">
              Invested in the city that gave the language its name
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2">
            {/* Visual only on md+ -- handled by grid gap on mobile */}
          </div>

          {/* Right: 0 */}
          <div className="text-center md:text-left">
            <AnimatedNumber
              value={"\u20B90"}
              className="font-data text-6xl font-bold tracking-tight text-terracotta md:text-7xl lg:text-8xl"
              delay={0.3}
            />
            <p className="mt-4 text-lg text-parchment/70 md:text-xl">
              Government funding for the language itself
            </p>
          </div>
        </div>

        {/* Horizontal rule */}
        <div className="mx-auto my-10 h-px max-w-md bg-parchment/20" />

        {/* Explanation */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-parchment/80 md:text-lg">
            Ayodhya -- the ancient capital of Awadh, the city from which the
            language draws its very name -- is undergoing a{" "}
            <span className="font-semibold text-saffron">
              $10 billion transformation
            </span>{" "}
            centered around the Ram Mandir. Infrastructure, tourism, real
            estate -- billions of dollars flow into the city. Yet there is no
            language academy, no Awadhi university, no institutional anchor
            for the language that is literally named after the place.
          </p>
          <p className="mt-6 text-base leading-relaxed text-parchment/60 md:text-lg">
            The Ram Mandir&apos;s daily prayers are chanted in Sanskrit. The
            official communications are in Hindi. The language of the people
            who have lived there for centuries -- Awadhi -- is absent from its
            own homeland&apos;s renaissance.
          </p>
        </div>
      </section>
    </RevealOnScroll>
  );
}
