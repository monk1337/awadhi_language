"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { formatNumber } from "@/lib/utils";
import type { DataMetric } from "@/types";

interface DataCellProps {
  metric: DataMetric;
  index: number;
}

const categoryLabels: Record<DataMetric["category"], string> = {
  speakers: "Speakers",
  education: "Education",
  media: "Media",
  digital: "Digital",
  literary: "Literary",
  government: "Classification",
  demographics: "Demographics",
};

export default function DataCell({ metric, index }: DataCellProps) {
  const displayValue =
    typeof metric.value === "number"
      ? formatNumber(metric.value)
      : metric.value;

  if (metric.hasData) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.4,
          delay: index * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ scale: 1.03 }}
        className={cn(
          "group relative flex h-48 flex-col justify-between overflow-hidden rounded-lg p-4",
          "bg-gradient-to-br from-parchment to-cream-dark",
          "shadow-[0_0_12px_rgba(224,122,47,0.15)]",
          "border border-amber-light/30",
          "transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(224,122,47,0.3)]",
        )}
      >
        {/* Metric name */}
        <p className="text-xs font-medium leading-tight text-slate">
          {metric.name}
        </p>

        {/* Value */}
        <p className="font-data text-lg font-bold leading-tight text-charcoal md:text-xl">
          {displayValue}
        </p>

        {/* Category label */}
        <span className="inline-block self-start rounded-full bg-saffron/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-saffron-dark">
          {categoryLabels[metric.category]}
        </span>
      </motion.div>
    );
  }

  // NO DATA cell
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "relative flex h-48 flex-col items-center justify-center gap-3 overflow-hidden rounded-lg p-4",
        "bg-[#1A1816]",
        "border border-charcoal-light/20",
      )}
    >
      {/* NO DATA label */}
      <span className="font-data text-lg font-bold tracking-widest text-slate-light/40">
        NO DATA
      </span>

      {/* What's missing */}
      <p className="text-center text-xs leading-tight text-slate-light/50">
        {metric.name}
      </p>
    </motion.div>
  );
}
