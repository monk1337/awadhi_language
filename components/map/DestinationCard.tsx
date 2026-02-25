"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { DiasporaDestination } from "@/data/diaspora";
import type { VitalityStatus } from "@/types";

interface DestinationCardProps {
  destination: DiasporaDestination | null;
  onClose?: () => void;
}

const statusColors: Record<VitalityStatus, string> = {
  thriving: "#4A9B6E",
  stable: "#D4A843",
  declining: "#D4A843",
  endangered: "#C75B4A",
  extinct: "#8A8580",
};

const statusLabels: Record<VitalityStatus, string> = {
  thriving: "Thriving",
  stable: "Stable",
  declining: "Declining",
  endangered: "Endangered",
  extinct: "Extinct",
};

export default function DestinationCard({
  destination,
  onClose,
}: DestinationCardProps) {
  return (
    <AnimatePresence>
      {destination && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-sm rounded-lg bg-cream-dark shadow-lg"
          style={{
            borderLeft: `4px solid ${statusColors[destination.status]}`,
          }}
        >
          <div className="p-5">
            {/* Header */}
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h4 className="font-playfair text-lg font-bold text-charcoal">
                  {destination.region}
                </h4>
                <p className="text-sm text-slate">{destination.languageForm}</p>
              </div>
              {onClose && (
                <button
                  onClick={onClose}
                  className="ml-2 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-slate transition-colors hover:bg-parchment hover:text-charcoal"
                  aria-label="Close"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M2 2l8 8M10 2l-8 8" />
                  </svg>
                </button>
              )}
            </div>

            {/* Stats row */}
            <div className="mb-3 flex items-center gap-4">
              {/* Speakers */}
              <div>
                <span className="font-data text-sm font-semibold text-charcoal">
                  {destination.speakers}
                </span>
                <span className="ml-1 text-xs text-slate">speakers</span>
              </div>

              {/* Status badge */}
              <div className="flex items-center gap-1.5">
                <span
                  className="inline-block size-2.5 rounded-full"
                  style={{
                    backgroundColor: statusColors[destination.status],
                  }}
                />
                <span className="text-xs font-medium text-slate">
                  {statusLabels[destination.status]}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate">
              {destination.description}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
