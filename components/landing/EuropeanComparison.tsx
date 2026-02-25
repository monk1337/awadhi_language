"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import type { Props as LabelProps } from "recharts/types/component/Label";
import { europeanComparison } from "@/data/european-comparison";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

/**
 * Sort data so Awadhi appears at the top (largest bar).
 * European languages sorted descending by speakers below it.
 */
const chartData = [...europeanComparison]
  .sort((a, b) => b.speakers - a.speakers)
  .map((lang) => ({
    name: lang.name,
    speakers: lang.speakers / 1_000_000, // Display in millions
    isAwadhi: lang.name === "Awadhi",
    hasOfficialStatus: lang.hasOfficialStatus,
  }));

const SAFFRON = "#E07A2F";
const PARCHMENT = "#E8DCC8";

/**
 * Custom label renderer for the bar ends showing "XM" format.
 */
function renderCustomLabel(props: LabelProps) {
  const x = Number(props.x ?? 0);
  const y = Number(props.y ?? 0);
  const width = Number(props.width ?? 0);
  const height = Number(props.height ?? 0);
  const value = Number(props.value ?? 0);

  return (
    <text
      x={x + width + 8}
      y={y + height / 2}
      fill="#6B6560"
      textAnchor="start"
      dominantBaseline="central"
      fontSize={12}
      fontFamily="var(--font-mono), monospace"
    >
      {value % 1 === 0 ? `${value}M` : `${value.toFixed(1)}M`}
    </text>
  );
}

export default function EuropeanComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <RevealOnScroll>
      <div ref={ref} className="mx-auto max-w-3xl">
        {/* Title */}
        <p className="mb-8 text-center font-playfair text-2xl font-bold leading-tight text-charcoal md:text-3xl">
          Awadhi has more speakers than seven European languages combined
        </p>

        {/* Chart */}
        <div className="w-full">
          {!mounted ? (
            <div style={{ width: "100%", height: 380 }} />
          ) : (
          <ResponsiveContainer width="100%" height={380}>
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 0, right: 60, left: 10, bottom: 0 }}
            >
              <XAxis
                type="number"
                hide
                domain={[0, "dataMax"]}
              />
              <YAxis
                type="category"
                dataKey="name"
                width={90}
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#2D2A26",
                  fontSize: 13,
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              />
              <Bar
                dataKey="speakers"
                radius={[0, 4, 4, 0]}
                animationDuration={isInView ? 1500 : 0}
                animationBegin={0}
                animationEasing="ease-out"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.isAwadhi ? SAFFRON : PARCHMENT}
                  />
                ))}
                <LabelList
                  dataKey="speakers"
                  content={renderCustomLabel}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          )}
        </div>

        {/* Footer text */}
        <p className="font-quote mt-6 text-center text-lg text-charcoal-light md:text-xl">
          All seven have full government recognition. Awadhi has none.
        </p>
      </div>
    </RevealOnScroll>
  );
}
