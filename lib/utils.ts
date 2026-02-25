import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using clsx and tailwind-merge.
 * Handles conditional classes and resolves Tailwind CSS conflicts.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number with comma separators.
 * @example formatNumber(38000000) → "38,000,000"
 * @example formatNumber(1530) → "1,530"
 */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-IN", {
    useGrouping: true,
    maximumFractionDigits: 0,
  }).format(n);
}

/**
 * Formats a number in compact notation (e.g., 38M, 1.5K).
 * @example formatCompact(38000000) → "38M"
 * @example formatCompact(1500) → "1.5K"
 * @example formatCompact(500) → "500"
 */
export function formatCompact(n: number): string {
  if (n < 1000) return n.toString();

  const tiers: Array<{ threshold: number; suffix: string }> = [
    { threshold: 1_000_000_000, suffix: "B" },
    { threshold: 1_000_000, suffix: "M" },
    { threshold: 1_000, suffix: "K" },
  ];

  for (const { threshold, suffix } of tiers) {
    if (n >= threshold) {
      const value = n / threshold;
      // Remove trailing zeros: 38.0 → "38", 1.5 → "1.5"
      const formatted = value % 1 === 0 ? value.toFixed(0) : value.toFixed(1);
      return `${formatted}${suffix}`;
    }
  }

  return n.toString();
}
