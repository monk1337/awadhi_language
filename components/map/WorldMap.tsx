"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { diasporaDestinations, type DiasporaDestination } from "@/data/diaspora";
import type { VitalityStatus } from "@/types";
import { ANIMATION_DEFAULTS } from "@/lib/constants";
import DestinationCard from "./DestinationCard";

/**
 * Stylized radial world map showing the Awadhi diaspora.
 *
 * A central "Awadh" node is surrounded by destination nodes arranged
 * radially. Connecting arcs animate in sequentially. Each node is colored
 * by vitality status.
 *
 * This replaces a geographic projection with an abstract but readable layout
 * -- a "network" or "sunburst" pattern.
 */

const statusColors: Record<VitalityStatus, string> = {
  thriving: "#4A9B6E",
  stable: "#D4A843",
  declining: "#D4A843",
  endangered: "#C75B4A",
  extinct: "#8A8580",
};

// Filter out India (core) since it's the origin
const destinations = diasporaDestinations.filter(
  (d) => d.country !== "India",
);

// Place destinations in a radial layout around a central origin
const CENTER_X = 400;
const CENTER_Y = 320;
const RADIUS = 240;

// Compute positions for each destination along the circle
function getDestinationPositions() {
  const count = destinations.length;
  // Spread from -120 to +120 degrees (top-biased arc)
  const startAngle = -130;
  const endAngle = 130;
  const step = (endAngle - startAngle) / (count - 1);

  return destinations.map((dest, i) => {
    const angleDeg = startAngle + i * step;
    const angleRad = (angleDeg * Math.PI) / 180;
    return {
      destination: dest,
      x: CENTER_X + RADIUS * Math.sin(angleRad),
      y: CENTER_Y - RADIUS * Math.cos(angleRad),
      angle: angleDeg,
    };
  });
}

const positions = getDestinationPositions();

// Generate a curved path from center to a point
function arcPath(x: number, y: number): string {
  const dx = x - CENTER_X;
  const dy = y - CENTER_Y;
  // Control point perpendicular to midpoint for a nice curve
  const midX = CENTER_X + dx * 0.5;
  const midY = CENTER_Y + dy * 0.5;
  const perpX = -dy * 0.2;
  const perpY = dx * 0.2;
  return `M ${CENTER_X} ${CENTER_Y} Q ${midX + perpX} ${midY + perpY}, ${x} ${y}`;
}

const SVG_WIDTH = 800;
const SVG_HEIGHT = 640;

export default function WorldMap() {
  const [selected, setSelected] = useState<DiasporaDestination | null>(null);

  const handleClick = useCallback((dest: DiasporaDestination) => {
    setSelected((prev) => (prev?.region === dest.region ? null : dest));
  }, []);

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        className="mx-auto w-full max-w-3xl"
        role="img"
        aria-label="Radial diagram of the Awadhi diaspora destinations worldwide"
      >
        <defs>
          {/* Glow filter for center node */}
          <filter id="saffron-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Subtle radial gradient background */}
          <radialGradient id="bg-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FAF6F0" stopOpacity="0" />
            <stop offset="100%" stopColor="#E8DCC8" stopOpacity="0.3" />
          </radialGradient>
        </defs>

        {/* Background circle */}
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={RADIUS + 60}
          fill="url(#bg-gradient)"
        />

        {/* Dashed orbit ring */}
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={RADIUS}
          fill="none"
          stroke="#E8DCC8"
          strokeWidth={1}
          strokeDasharray="6 4"
          opacity={0.6}
        />

        {/* Connecting arcs */}
        {positions.map(({ destination, x, y }, i) => {
          const color = statusColors[destination.status];
          const d = arcPath(x, y);

          return (
            <motion.path
              key={destination.region}
              d={d}
              fill="none"
              stroke={color}
              strokeWidth={1.5}
              strokeLinecap="round"
              opacity={0.6}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={ANIMATION_DEFAULTS.viewport}
              transition={{
                pathLength: {
                  delay: i * 0.12 + 0.3,
                  duration: 0.7,
                  ease: "easeInOut",
                },
                opacity: { delay: i * 0.12 + 0.2, duration: 0.3 },
              }}
            />
          );
        })}

        {/* Central origin node */}
        <motion.g
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={ANIMATION_DEFAULTS.viewport}
          transition={{ duration: 0.5, ease: ANIMATION_DEFAULTS.ease }}
        >
          <circle
            cx={CENTER_X}
            cy={CENTER_Y}
            r={36}
            fill="#E07A2F"
            filter="url(#saffron-glow)"
          />
          <text
            x={CENTER_X}
            y={CENTER_Y - 4}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#FAF6F0"
            className="text-[14px] font-bold"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Awadh
          </text>
          <text
            x={CENTER_X}
            y={CENTER_Y + 12}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#FAF6F0"
            className="text-[9px]"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            opacity={0.8}
          >
            Origin
          </text>
        </motion.g>

        {/* Destination nodes */}
        {positions.map(({ destination, x, y, angle }, i) => {
          const color = statusColors[destination.status];
          const isSelected = selected?.region === destination.region;
          const nodeRadius = isSelected ? 24 : 20;

          // Place labels outside the circle
          const labelAngleRad = ((angle) * Math.PI) / 180;
          const labelRadius = RADIUS + 44;
          const labelX = CENTER_X + labelRadius * Math.sin(labelAngleRad);
          const labelY = CENTER_Y - labelRadius * Math.cos(labelAngleRad);
          const anchorRight = angle < 0;

          return (
            <motion.g
              key={destination.region}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={ANIMATION_DEFAULTS.viewport}
              transition={{
                delay: i * 0.12 + 0.5,
                duration: 0.4,
                ease: ANIMATION_DEFAULTS.ease,
              }}
              className="cursor-pointer"
              onClick={() => handleClick(destination)}
            >
              {/* Pulse ring on selected */}
              {isSelected && (
                <motion.circle
                  cx={x}
                  cy={y}
                  r={nodeRadius + 6}
                  fill="none"
                  stroke={color}
                  strokeWidth={1.5}
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{ scale: 1.3, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}

              {/* Node circle */}
              <circle
                cx={x}
                cy={y}
                r={nodeRadius}
                fill={color}
                stroke={isSelected ? "#2D2A26" : "transparent"}
                strokeWidth={isSelected ? 2 : 0}
                className="transition-all duration-200"
              />

              {/* Country initial */}
              <text
                x={x}
                y={y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#FAF6F0"
                className="pointer-events-none text-[10px] font-semibold"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                {destination.country.slice(0, 3).toUpperCase()}
              </text>

              {/* Label outside */}
              <text
                x={labelX}
                y={labelY - 5}
                textAnchor={anchorRight ? "end" : "start"}
                dominantBaseline="middle"
                className="pointer-events-none fill-charcoal text-[10px] font-semibold"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                {destination.region.length > 20
                  ? destination.country
                  : destination.region}
              </text>
              <text
                x={labelX}
                y={labelY + 8}
                textAnchor={anchorRight ? "end" : "start"}
                dominantBaseline="middle"
                className="pointer-events-none fill-slate text-[9px]"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                {destination.speakers}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate">
        {(
          [
            ["thriving", "Thriving"],
            ["declining", "Declining"],
            ["endangered", "Endangered"],
            ["extinct", "Extinct"],
          ] as const
        ).map(([status, label]) => (
          <div key={status} className="flex items-center gap-1.5">
            <span
              className="inline-block size-2.5 rounded-full"
              style={{ backgroundColor: statusColors[status] }}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Selected destination popup */}
      <div className="mt-6 flex justify-center">
        <DestinationCard
          destination={selected}
          onClose={() => setSelected(null)}
        />
      </div>
    </div>
  );
}
