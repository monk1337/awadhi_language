"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import { eighthScheduleLanguages } from "@/data/eighth-schedule";
import { formatCompact } from "@/lib/utils";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

/** Sort by speaker count ascending so smallest is at top, Awadhi at bottom. */
const sortedData = [...eighthScheduleLanguages].sort(
  (a, b) => a.speakers - b.speakers,
);

function CustomLabel(props: Record<string, unknown>) {
  const { x, y, width, value, index } = props as {
    x: number;
    y: number;
    width: number;
    value: number;
    index: number;
  };
  const lang = sortedData[index];
  const label = `${formatCompact(value)} speakers`;

  return (
    <text
      x={x + width + 8}
      y={y + 14}
      fill={lang.isScheduled ? "#6B6560" : "#E07A2F"}
      fontSize={12}
      fontFamily="var(--font-mono), monospace"
    >
      {label}
    </text>
  );
}

export default function EighthScheduleChart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <RevealOnScroll direction="up">
      <section className="mt-12 md:mt-16">
        {/* Title block */}
        <div className="mb-8">
          <h3 className="font-playfair text-2xl font-bold text-charcoal md:text-3xl">
            The Eighth Schedule Absurdity
          </h3>
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate md:text-lg">
            Sanskrit has 24,821 speakers and is recognized. Awadhi has 38
            million and is not.
          </p>
        </div>

        {/* Chart */}
        <div className="w-full overflow-x-auto">
          {!mounted ? (
            <div style={{ width: "100%", height: 400 }} />
          ) : (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={sortedData}
              layout="vertical"
              margin={{ top: 0, right: 140, left: 0, bottom: 0 }}
            >
              <XAxis
                type="number"
                hide
                domain={[0, "dataMax"]}
              />
              <YAxis
                dataKey="name"
                type="category"
                width={130}
                tick={{
                  fill: "#2D2A26",
                  fontSize: 13,
                  fontFamily: "var(--font-inter), sans-serif",
                }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                formatter={(value: number | string | undefined) => [
                  `${formatCompact(Number(value ?? 0))} speakers`,
                  "Speakers",
                ]}
                contentStyle={{
                  backgroundColor: "#FAF6F0",
                  border: "1px solid #E8DCC8",
                  borderRadius: "8px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                }}
              />
              <Bar
                dataKey="speakers"
                radius={[0, 4, 4, 0]}
                barSize={28}
              >
                {sortedData.map((entry) => (
                  <Cell
                    key={entry.name}
                    fill={entry.isScheduled ? "#8A8580" : "#E07A2F"}
                  />
                ))}
                <LabelList
                  dataKey="speakers"
                  content={<CustomLabel />}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          )}
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-slate">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-slate-light" />
            <span>Recognized (Eighth Schedule)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-saffron" />
            <span>Not recognized (Awadhi)</span>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
