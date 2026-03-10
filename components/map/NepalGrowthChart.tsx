"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { nepalCensus, decadalGrowthPercent } from "@/data/nepal-census";
import { formatNumber } from "@/lib/utils";
import { ANIMATION_DEFAULTS } from "@/lib/constants";

/**
 * Nepal census growth chart for Awadhi speakers.
 *
 * An area chart rendered with Recharts, showing the remarkable
 * 72% growth in the last decade (2011-2021). The chart animates
 * into view on scroll.
 */

const chartData = nepalCensus.map((entry) => ({
  year: entry.year.toString(),
  speakers: entry.speakers,
  percentage: entry.percentage,
}));

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: { year: string; speakers: number; percentage: number };
  }>;
  label?: string;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  const data = payload[0].payload;
  return (
    <div className="rounded-lg border border-parchment bg-cream-dark px-4 py-3 shadow-md">
      <p className="font-data text-sm font-bold text-charcoal">
        {data.year} Census
      </p>
      <p className="mt-1 font-data text-lg font-semibold text-saffron">
        {formatNumber(data.speakers)}
      </p>
      <p className="text-xs text-slate">
        {data.percentage}% of Nepal population
      </p>
    </div>
  );
}

export default function NepalGrowthChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: ANIMATION_DEFAULTS.duration,
        ease: ANIMATION_DEFAULTS.ease,
      }}
      className="w-full"
    >
      {/* Title */}
      <h3 className="mb-2 font-playfair text-2xl font-bold text-charcoal md:text-3xl">
        While Awadhi shrinks in India, it grows {decadalGrowthPercent}% in Nepal
      </h3>
      <p className="mb-8 text-sm text-slate">
        Nepal Census data for Awadhi mother-tongue speakers (1991–2021)
      </p>

      {/* Chart */}
      <div className="h-[360px] w-full">
        {!mounted ? (
          <div style={{ width: "100%", height: "100%" }} />
        ) : (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <defs>
              <linearGradient id="saffronGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E07A2F" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#E07A2F" stopOpacity={0.03} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E8DCC8"
              vertical={false}
            />

            <XAxis
              dataKey="year"
              tick={{
                fill: "#6B6560",
                fontSize: 13,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
              axisLine={{ stroke: "#E8DCC8" }}
              tickLine={false}
            />

            <YAxis
              tickFormatter={(val: number) => {
                if (val >= 1_000_000) return `${(val / 1_000_000).toFixed(1)}M`;
                return `${(val / 1_000).toFixed(0)}K`;
              }}
              tick={{
                fill: "#6B6560",
                fontSize: 12,
                fontFamily:
                  "var(--font-mono), 'JetBrains Mono', monospace",
              }}
              axisLine={false}
              tickLine={false}
              width={60}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="speakers"
              stroke="#E07A2F"
              strokeWidth={3}
              fill="url(#saffronGradient)"
              dot={{
                r: 6,
                fill: "#E07A2F",
                stroke: "#FAF6F0",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 8,
                fill: "#C06820",
                stroke: "#FAF6F0",
                strokeWidth: 2,
              }}
              isAnimationActive={isInView}
              animationDuration={1200}
              animationEasing="ease-in-out"
            />
          </AreaChart>
        </ResponsiveContainer>
        )}
      </div>

      {/* Annotation: 72% growth callout */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-saffron/40" />
        <span className="rounded-full border border-saffron/30 bg-saffron/10 px-4 py-1.5 font-data text-sm font-semibold text-saffron">
          +{decadalGrowthPercent}% in one decade (2011–2021)
        </span>
        <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-saffron/40" />
      </div>
    </motion.div>
  );
}
