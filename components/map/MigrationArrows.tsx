"use client";

import { motion } from "framer-motion";
import { migrationRoutes } from "@/data/migration-routes";
import { diasporaDestinations } from "@/data/diaspora";
import type { VitalityStatus } from "@/types";
import { formatNumber } from "@/lib/utils";
import { ANIMATION_DEFAULTS } from "@/lib/constants";

/**
 * SVG animated migration arrows.
 *
 * Each route is rendered as a curved SVG path with an arrowhead,
 * animated via framer-motion pathLength. The paths are drawn sequentially
 * with staggered delays.
 */

const statusColors: Record<VitalityStatus, string> = {
  thriving: "#4A9B6E",
  stable: "#D4A843",
  declining: "#D4A843",
  endangered: "#C75B4A",
  extinct: "#8A8580",
};

// Map destination name to a vitality status by matching against diaspora data
function getStatusForDestination(dest: string): VitalityStatus {
  const match = diasporaDestinations.find(
    (d) =>
      dest.toLowerCase().includes(d.country.toLowerCase()) ||
      d.region.toLowerCase().includes(dest.toLowerCase()),
  );
  return match?.status ?? "stable";
}

// Layout: a vertical list of destination rows, each with an arrow from a
// left "origin" column to the right "destination" column.
const ROW_HEIGHT = 72;
const ORIGIN_X = 40;
const DEST_X = 520;
const LABEL_X = DEST_X + 14;
const START_Y = 40;

const SVG_WIDTH = 780;
const SVG_HEIGHT = START_Y + migrationRoutes.length * ROW_HEIGHT + 20;

export default function MigrationArrows() {
  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        className="mx-auto w-full max-w-4xl"
        role="img"
        aria-label="Animated migration routes from the Awadh region"
      >
        <defs>
          {/* Arrowhead markers, one per status color */}
          {Object.entries(statusColors).map(([status, color]) => (
            <marker
              key={status}
              id={`arrow-${status}`}
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill={color} />
            </marker>
          ))}
        </defs>

        {/* Origin label */}
        <text
          x={ORIGIN_X}
          y={START_Y - 16}
          className="fill-charcoal text-[13px] font-bold"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Awadh, UP
        </text>

        {/* Destination column label */}
        <text
          x={DEST_X + 14}
          y={START_Y - 16}
          className="fill-charcoal text-[13px] font-bold"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Destination
        </text>

        {migrationRoutes.map((route, i) => {
          const y = START_Y + i * ROW_HEIGHT + ROW_HEIGHT / 2;
          const status = getStatusForDestination(route.destination);
          const color = statusColors[status];

          // Bezier curve: gentle arc from origin dot to destination dot
          const midX = (ORIGIN_X + DEST_X) / 2;
          const curveOffset = (i % 2 === 0 ? -1 : 1) * (14 + i * 3);
          const pathD = `M ${ORIGIN_X} ${y} C ${midX} ${y + curveOffset}, ${midX} ${y + curveOffset}, ${DEST_X} ${y}`;

          return (
            <g key={route.destination}>
              {/* Origin dot */}
              <motion.circle
                cx={ORIGIN_X}
                cy={y}
                r={5}
                fill="#E07A2F"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={ANIMATION_DEFAULTS.viewport}
                transition={{
                  delay: i * 0.15,
                  duration: 0.3,
                  ease: ANIMATION_DEFAULTS.ease,
                }}
              />

              {/* Animated path */}
              <motion.path
                d={pathD}
                fill="none"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                markerEnd={`url(#arrow-${status})`}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={ANIMATION_DEFAULTS.viewport}
                transition={{
                  pathLength: {
                    delay: i * 0.15 + 0.1,
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                  opacity: {
                    delay: i * 0.15,
                    duration: 0.2,
                  },
                }}
              />

              {/* Population label along the path */}
              {route.population && (
                <motion.text
                  x={midX}
                  y={y + curveOffset - 8}
                  textAnchor="middle"
                  className="fill-slate text-[10px]"
                  style={{
                    fontFamily:
                      "var(--font-mono), 'JetBrains Mono', monospace",
                    fontVariantNumeric: "tabular-nums",
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={ANIMATION_DEFAULTS.viewport}
                  transition={{ delay: i * 0.15 + 0.5, duration: 0.4 }}
                >
                  {formatNumber(route.population)}
                </motion.text>
              )}

              {/* Destination dot */}
              <motion.circle
                cx={DEST_X}
                cy={y}
                r={6}
                fill={color}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={ANIMATION_DEFAULTS.viewport}
                transition={{
                  delay: i * 0.15 + 0.6,
                  duration: 0.3,
                  ease: ANIMATION_DEFAULTS.ease,
                }}
              />

              {/* Destination name + period */}
              <motion.g
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={ANIMATION_DEFAULTS.viewport}
                transition={{
                  delay: i * 0.15 + 0.6,
                  duration: 0.4,
                  ease: ANIMATION_DEFAULTS.ease,
                }}
              >
                <text
                  x={LABEL_X}
                  y={y - 4}
                  className="fill-charcoal text-[12px] font-semibold"
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                >
                  {route.destination}
                </text>
                <text
                  x={LABEL_X}
                  y={y + 12}
                  className="fill-slate text-[10px]"
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                >
                  {route.period}
                </text>
              </motion.g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
