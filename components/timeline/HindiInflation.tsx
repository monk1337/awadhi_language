"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { ANIMATION_DEFAULTS } from "@/lib/constants";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const absorbedLanguages = [
  "Awadhi",
  "Bhojpuri",
  "Rajasthani",
  "Chhattisgarhi",
  "Braj Bhasha",
  "Marwari",
  "Magahi",
  "Maithili",
  "Bundeli",
  "Bagheli",
  "Kangri",
  "Kumaoni",
  "Garhwali",
  "Harayanvi",
  "Mewari",
  "Malvi",
  "Nimadi",
  "Surgujia",
  "Sadri",
  "Lamani",
];

function AnimatedNumber({
  from,
  to,
  className,
}: {
  from: number;
  to: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.span
      ref={ref}
      className={cn("font-data font-bold tabular-nums", className)}
      initial={{ scale: 1 }}
      animate={
        isInView
          ? {
              scale: [1, 1.2, 1],
            }
          : {}
      }
      transition={{
        duration: 0.8,
        ease: ANIMATION_DEFAULTS.ease,
        delay: 0.3,
      }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        {isInView ? to : from}
      </motion.span>
    </motion.span>
  );
}

export default function HindiInflation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative -mx-4 overflow-hidden bg-dark-bg px-4 py-20 sm:-mx-6 sm:px-6 md:py-28 lg:-mx-8 lg:px-8"
    >
      {/* Subtle grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <RevealOnScroll direction="up">
          <h3 className="text-center font-playfair text-3xl font-bold text-dark-text md:text-4xl">
            The 1971 Census Manipulation
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-dark-text/70 md:text-lg">
            In one bureaucratic decision, the government reclassified dozens of
            distinct languages as &ldquo;dialects of Hindi&rdquo; to inflate
            Hindi&rsquo;s speaker count.
          </p>
        </RevealOnScroll>

        {/* Number morph visualization */}
        <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-16">
          {/* Before */}
          <div className="flex flex-col items-center">
            <span className="mb-2 text-sm font-semibold uppercase tracking-wider text-dark-text/50">
              Languages counted
            </span>
            <span className="font-data text-7xl font-bold text-dark-text/60 md:text-8xl">
              10
            </span>
          </div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-2"
          >
            <div className="h-0.5 w-12 bg-saffron/60 md:w-20" />
            <div className="size-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-saffron/60" />
          </motion.div>

          {/* After */}
          <div className="flex flex-col items-center">
            <span className="mb-2 text-sm font-semibold uppercase tracking-wider text-dark-text/50">
              Absorbed under Hindi
            </span>
            <AnimatedNumber
              from={10}
              to={48}
              className="text-7xl text-saffron md:text-8xl"
            />
          </div>
        </div>

        {/* Stat callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-12 max-w-xl rounded-lg border border-saffron/20 bg-dark-surface px-6 py-5 text-center"
        >
          <p className="font-inter text-lg leading-relaxed text-dark-text md:text-xl">
            Hindi&rsquo;s share jumped from{" "}
            <span className="font-data font-bold text-dark-text/60">
              30.39%
            </span>{" "}
            to{" "}
            <span className="font-data font-bold text-saffron">43.63%</span>{" "}
            overnight
          </p>
        </motion.div>

        {/* Absorbed languages list */}
        <div className="mt-14">
          <RevealOnScroll direction="up">
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-dark-text/50">
              Some of the languages absorbed
            </p>
          </RevealOnScroll>

          <div className="flex flex-wrap justify-center gap-2">
            {absorbedLanguages.map((lang, index) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: 1 + index * 0.05,
                  ease: ANIMATION_DEFAULTS.ease,
                }}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm font-medium",
                  lang === "Awadhi"
                    ? "border-saffron/40 bg-saffron/15 text-saffron"
                    : "border-dark-text/10 bg-dark-surface text-dark-text/60",
                )}
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
