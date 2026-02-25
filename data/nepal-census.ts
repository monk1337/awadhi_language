/**
 * Nepal Census data for Awadhi speakers.
 * Nepal is the only place in the world where Awadhi is measurably growing.
 */

export interface NepalCensusEntry {
  year: number;
  speakers: number;
  percentage: number;
}

export const nepalCensus: NepalCensusEntry[] = [
  { year: 1991, speakers: 374_638, percentage: 2.03 },
  { year: 2011, speakers: 501_752, percentage: 1.89 },
  { year: 2021, speakers: 864_276, percentage: 2.96 },
];

/** 72% increase in one decade (2011-2021). */
export const decadalGrowthPercent = Math.round(
  ((864_276 - 501_752) / 501_752) * 100
); // ~72%

/**
 * Nepal's Language Commission has recommended Awadhi as an official
 * language of Lumbini Province -- the province containing the
 * birthplace of the Buddha.
 */
export const nepalRecognitionStatus = {
  languageCommissionRecommendation: "Official language of Lumbini Province",
  recommendedProvince: "Lumbini",
  urbanCenter: "Nepalgunj",
  totalDistricts: 8,
} as const;
