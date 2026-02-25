"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Section } from "@/types";
import { cn } from "@/lib/utils";
import { ANIMATION_DEFAULTS } from "@/lib/constants";

interface SectionPreviewProps {
  section: Section;
  index: number;
}

export default function SectionPreview({ section, index }: SectionPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={ANIMATION_DEFAULTS.viewport}
      transition={{
        duration: ANIMATION_DEFAULTS.duration,
        delay: index * ANIMATION_DEFAULTS.stagger,
        ease: ANIMATION_DEFAULTS.ease,
      }}
    >
      <Link href={section.path} className="group block h-full">
        <motion.div
          className={cn(
            "flex h-full flex-col rounded-lg border border-transparent bg-cream-dark p-6 transition-colors md:p-8",
            "group-hover:border-saffron/40 group-hover:shadow-md",
          )}
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* Stat */}
          <span className="font-data text-3xl font-bold leading-none text-saffron md:text-4xl">
            {section.stat}
          </span>

          {/* Stat label */}
          <span className="mt-2 text-sm text-slate">
            {section.statLabel}
          </span>

          {/* Title */}
          <h3 className="mt-4 font-playfair text-xl font-bold text-charcoal md:text-2xl">
            {section.title}
          </h3>

          {/* Subtitle */}
          <p className="mt-1 font-quote text-base text-charcoal-light">
            {section.subtitle}
          </p>

          {/* Description */}
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
            {section.description}
          </p>

          {/* Explore link */}
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-saffron transition-colors group-hover:text-saffron-dark">
            Explore
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5" />
            </svg>
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
