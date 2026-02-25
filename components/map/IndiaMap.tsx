"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { upDistricts, nepalDistricts } from "@/data/districts";
import { ANIMATION_DEFAULTS } from "@/lib/constants";

/**
 * Cartogram-style SVG map of the Awadhi heartland.
 *
 * Each district is represented as a rounded rectangle arranged in a grid that
 * approximates the geographic layout of the Awadh region in eastern UP.
 * Nepal Terai districts are shown as a separate cluster to the right.
 */

// Region colors (shades of saffron/amber)
const regionColors: Record<string, { fill: string; hover: string }> = {
  "Northern and Central": {
    fill: "#E07A2F",
    hover: "#C06820",
  },
  "Eastern (transitioning toward Bhojpuri)": {
    fill: "#D4A843",
    hover: "#B08A30",
  },
  "Partial coverage": {
    fill: "#F0A060",
    hover: "#E07A2F",
  },
  "Fringe areas": {
    fill: "#E8DCC8",
    hover: "#D4A843",
  },
};

// Cartogram positions: [col, row] on a grid. Arranged to roughly mirror
// the geographic layout -- north-west at top-left, east and south below.
interface DistrictPosition {
  name: string;
  col: number;
  row: number;
  region: string;
}

const districtPositions: DistrictPosition[] = [
  // Northern and Central -- top rows
  { name: "Bahraich", col: 0, row: 0, region: "Northern and Central" },
  { name: "Shrawasti", col: 1, row: 0, region: "Northern and Central" },
  { name: "Lakhimpur Kheri", col: 2, row: 0, region: "Northern and Central" },
  { name: "Sitapur", col: 0, row: 1, region: "Northern and Central" },
  { name: "Lucknow", col: 1, row: 1, region: "Northern and Central" },
  { name: "Barabanki", col: 2, row: 1, region: "Northern and Central" },
  { name: "Unnao", col: 0, row: 2, region: "Northern and Central" },
  { name: "Rae Bareli", col: 1, row: 2, region: "Northern and Central" },
  { name: "Amethi", col: 2, row: 2, region: "Northern and Central" },
  { name: "Fatehpur", col: 0, row: 3, region: "Northern and Central" },

  // Eastern -- right/lower rows
  { name: "Gonda", col: 3, row: 0, region: "Eastern (transitioning toward Bhojpuri)" },
  { name: "Balrampur", col: 4, row: 0, region: "Eastern (transitioning toward Bhojpuri)" },
  { name: "Ayodhya (formerly Faizabad)", col: 3, row: 1, region: "Eastern (transitioning toward Bhojpuri)" },
  { name: "Ambedkar Nagar", col: 4, row: 1, region: "Eastern (transitioning toward Bhojpuri)" },
  { name: "Sultanpur", col: 3, row: 2, region: "Eastern (transitioning toward Bhojpuri)" },
  { name: "Pratapgarh", col: 4, row: 2, region: "Eastern (transitioning toward Bhojpuri)" },
  { name: "Prayagraj (Allahabad)", col: 1, row: 3, region: "Eastern (transitioning toward Bhojpuri)" },
  { name: "Kaushambi", col: 2, row: 3, region: "Eastern (transitioning toward Bhojpuri)" },
  { name: "Bhadohi", col: 3, row: 3, region: "Eastern (transitioning toward Bhojpuri)" },
  { name: "Mirzapur", col: 2, row: 4, region: "Eastern (transitioning toward Bhojpuri)" },
  { name: "Varanasi", col: 3, row: 4, region: "Eastern (transitioning toward Bhojpuri)" },

  // Partial coverage
  { name: "Basti", col: 5, row: 0, region: "Partial coverage" },
  { name: "Siddharthnagar", col: 5, row: 1, region: "Partial coverage" },
  { name: "Jaunpur", col: 4, row: 3, region: "Partial coverage" },
];

// Nepal Terai districts -- separate cluster to the far right
interface NepalDistrictPosition {
  name: string;
  col: number;
  row: number;
  zone: string;
}

const nepalDistrictPositions: NepalDistrictPosition[] = [
  { name: "Kailali", col: 0, row: 0, zone: "Far West" },
  { name: "Kanchanpur", col: 1, row: 0, zone: "Far West" },
  { name: "Bardiya", col: 0, row: 1, zone: "Bheri Zone" },
  { name: "Banke", col: 1, row: 1, zone: "Bheri Zone" },
  { name: "Dang", col: 0, row: 2, zone: "Rapti Zone" },
  { name: "Nawalparasi", col: 1, row: 2, zone: "Lumbini Zone" },
  { name: "Rupandehi", col: 0, row: 3, zone: "Lumbini Zone" },
  { name: "Kapilvastu", col: 1, row: 3, zone: "Lumbini Zone" },
];

// Grid dimensions
const CELL_SIZE = 56;
const CELL_GAP = 6;
const CELL_RADIUS = 6;
const CELL_STEP = CELL_SIZE + CELL_GAP;

// Offsets for Nepal cluster (placed to the right with a gap)
const NEPAL_OFFSET_X = 7.5 * CELL_STEP;
const NEPAL_OFFSET_Y = 0;

// SVG viewBox
const SVG_WIDTH = NEPAL_OFFSET_X + 2 * CELL_STEP + 20;
const SVG_HEIGHT = 5 * CELL_STEP + 60;

export default function IndiaMap() {
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (
    e: React.MouseEvent<SVGRectElement>,
    name: string,
  ) => {
    const svg = e.currentTarget.closest("svg");
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 12,
    });
    setHoveredDistrict(name);
  };

  return (
    <div className="relative w-full overflow-x-auto">
      <svg
        viewBox={`-10 -10 ${SVG_WIDTH + 20} ${SVG_HEIGHT + 20}`}
        className="mx-auto w-full max-w-4xl"
        role="img"
        aria-label="Cartogram of Awadhi-speaking districts in Uttar Pradesh and Nepal"
      >
        {/* -- UP Label -- */}
        <text
          x={3 * CELL_STEP}
          y={-2}
          textAnchor="middle"
          className="fill-charcoal font-playfair text-[13px] font-bold"
        >
          Uttar Pradesh
        </text>

        {/* -- UP Districts -- */}
        {districtPositions.map((d, i) => {
          const x = d.col * CELL_STEP;
          const y = d.row * CELL_STEP + 12;
          const colors = regionColors[d.region] || regionColors["Northern and Central"];
          const isHovered = hoveredDistrict === d.name;

          return (
            <motion.g
              key={d.name}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={ANIMATION_DEFAULTS.viewport}
              transition={{
                duration: 0.4,
                delay: i * 0.04,
                ease: ANIMATION_DEFAULTS.ease,
              }}
            >
              <rect
                x={x}
                y={y}
                width={CELL_SIZE}
                height={CELL_SIZE}
                rx={CELL_RADIUS}
                ry={CELL_RADIUS}
                fill={isHovered ? colors.hover : colors.fill}
                stroke={isHovered ? "#2D2A26" : "transparent"}
                strokeWidth={isHovered ? 2 : 0}
                className="cursor-pointer transition-colors duration-150"
                onMouseMove={(e) => handleMouseMove(e, d.name)}
                onMouseLeave={() => setHoveredDistrict(null)}
              />
              {/* District abbreviation */}
              <text
                x={x + CELL_SIZE / 2}
                y={y + CELL_SIZE / 2 + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                className="pointer-events-none select-none fill-white text-[9px] font-medium"
                style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              >
                {d.name.length > 8
                  ? d.name.slice(0, 7) + "..."
                  : d.name}
              </text>
            </motion.g>
          );
        })}

        {/* -- Separator dashes between UP and Nepal -- */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`sep-${i}`}
            x1={6.8 * CELL_STEP}
            y1={i * CELL_STEP + 30}
            x2={6.8 * CELL_STEP}
            y2={i * CELL_STEP + 50}
            stroke="#E8DCC8"
            strokeWidth={2}
            strokeLinecap="round"
          />
        ))}

        {/* -- Nepal Label -- */}
        <text
          x={NEPAL_OFFSET_X + CELL_STEP}
          y={-2}
          textAnchor="middle"
          className="fill-charcoal font-playfair text-[13px] font-bold"
        >
          Nepal Terai
        </text>

        {/* -- Nepal Districts -- */}
        {nepalDistrictPositions.map((d, i) => {
          const x = NEPAL_OFFSET_X + d.col * CELL_STEP;
          const y = NEPAL_OFFSET_Y + d.row * CELL_STEP + 12;
          const isHovered = hoveredDistrict === d.name;

          return (
            <motion.g
              key={d.name}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={ANIMATION_DEFAULTS.viewport}
              transition={{
                duration: 0.4,
                delay: (districtPositions.length + i) * 0.04,
                ease: ANIMATION_DEFAULTS.ease,
              }}
            >
              <rect
                x={x}
                y={y}
                width={CELL_SIZE}
                height={CELL_SIZE}
                rx={CELL_RADIUS}
                ry={CELL_RADIUS}
                fill={isHovered ? "#3B8A5E" : "#4A9B6E"}
                stroke={isHovered ? "#2D2A26" : "transparent"}
                strokeWidth={isHovered ? 2 : 0}
                className="cursor-pointer transition-colors duration-150"
                onMouseMove={(e) => handleMouseMove(e, d.name)}
                onMouseLeave={() => setHoveredDistrict(null)}
              />
              <text
                x={x + CELL_SIZE / 2}
                y={y + CELL_SIZE / 2 + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                className="pointer-events-none select-none fill-white text-[9px] font-medium"
                style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              >
                {d.name.length > 8
                  ? d.name.slice(0, 7) + "..."
                  : d.name}
              </text>
            </motion.g>
          );
        })}

        {/* -- Tooltip -- */}
        {hoveredDistrict && (
          <g
            transform={`translate(${tooltipPos.x}, ${tooltipPos.y})`}
            className="pointer-events-none"
          >
            <rect
              x={-60}
              y={-32}
              width={120}
              height={24}
              rx={4}
              fill="#2D2A26"
              fillOpacity={0.92}
            />
            <text
              x={0}
              y={-16}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#FAF6F0"
              className="text-[11px] font-medium"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              {hoveredDistrict}
            </text>
          </g>
        )}
      </svg>

      {/* -- Legend -- */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate">
        <div className="flex items-center gap-2">
          <span className="inline-block size-3 rounded-sm" style={{ backgroundColor: "#E07A2F" }} />
          <span>Northern &amp; Central (core)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block size-3 rounded-sm" style={{ backgroundColor: "#D4A843" }} />
          <span>Eastern (transitional)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block size-3 rounded-sm" style={{ backgroundColor: "#F0A060" }} />
          <span>Partial coverage</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block size-3 rounded-sm" style={{ backgroundColor: "#4A9B6E" }} />
          <span>Nepal Terai</span>
        </div>
      </div>
    </div>
  );
}
