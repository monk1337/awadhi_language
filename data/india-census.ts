/**
 * India Census data for self-declared Awadhi mother-tongue speakers,
 * alongside independent linguistic estimates.
 */

export interface CensusEntry {
  year: number;
  speakers: number;
  notes: string;
}

export interface IndependentEstimate {
  source: string;
  speakers: number;
  year: string;
}

/**
 * Self-declared "Awadhi" in Indian Census.
 * Before 1991, Awadhi was grouped under Hindi with no separate count.
 * The sevenfold increase from 1991 to 2011 reflects growing linguistic pride
 * rather than actual population growth.
 */
export const indiaCensus: CensusEntry[] = [
  { year: 1961, speakers: 0, notes: "Grouped under Hindi; unclassified" },
  { year: 1971, speakers: 0, notes: "Grouped under Hindi" },
  { year: 1981, speakers: 0, notes: "Grouped under Hindi" },
  { year: 1991, speakers: 528_281, notes: "First trackable self-identification" },
  { year: 2001, speakers: 2_530_000, notes: "Growing linguistic pride" },
  { year: 2011, speakers: 3_850_906, notes: "Confirmed by Linguistic Survey of India-UP (2023)" },
];

/**
 * Independent estimates from linguistic surveys and other sources.
 * Independent estimates from various linguistic surveys and sources.
 * These figures differ significantly from census self-declaration counts.
 */
export const independentEstimates: IndependentEstimate[] = [
  { source: "Hindi Belt Wikipedia / linguistic surveys", speakers: 37_000_000, year: "2001" },
  { source: "Omniglot", speakers: 38_000_000, year: "Current" },
  { source: "Accent Network", speakers: 40_000_000, year: "2025" },
  { source: "Wikipedia (Awadhi people)", speakers: 55_000_000, year: "Current (methodology unclear)" },
  { source: "Various claims", speakers: 80_000_000, year: "Current" },
];

/** The most defensible combined global estimate. */
export const defensibleEstimate = {
  india: 38_000_000,
  nepal: 864_000,
  diaspora: 650_000,
  total: "~39-40 million globally",
} as const;
