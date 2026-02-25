import type { EuropeanLanguage } from "@/types";

export const europeanComparison: EuropeanLanguage[] = [
  {
    name: "Danish",
    speakers: 6_000_000,
    country: "Denmark",
    hasOfficialStatus: true,
    comparisonRatio: +(38_000_000 / 6_000_000).toFixed(1),
  },
  {
    name: "Norwegian",
    speakers: 5_000_000,
    country: "Norway",
    hasOfficialStatus: true,
    comparisonRatio: +(38_000_000 / 5_000_000).toFixed(1),
  },
  {
    name: "Finnish",
    speakers: 5_400_000,
    country: "Finland",
    hasOfficialStatus: true,
    comparisonRatio: +(38_000_000 / 5_400_000).toFixed(1),
  },
  {
    name: "Estonian",
    speakers: 1_100_000,
    country: "Estonia",
    hasOfficialStatus: true,
    comparisonRatio: +(38_000_000 / 1_100_000).toFixed(1),
  },
  {
    name: "Icelandic",
    speakers: 350_000,
    country: "Iceland",
    hasOfficialStatus: true,
    comparisonRatio: +(38_000_000 / 350_000).toFixed(1),
  },
  {
    name: "Welsh",
    speakers: 880_000,
    country: "United Kingdom",
    hasOfficialStatus: true,
    comparisonRatio: +(38_000_000 / 880_000).toFixed(1),
  },
  {
    name: "Basque",
    speakers: 750_000,
    country: "Spain",
    hasOfficialStatus: true,
    comparisonRatio: +(38_000_000 / 750_000).toFixed(1),
  },
  {
    name: "Awadhi",
    speakers: 38_000_000,
    country: "India",
    hasOfficialStatus: false,
    comparisonRatio: 1,
  },
] as const satisfies EuropeanLanguage[];

/** All seven European languages combined still fall short of Awadhi. */
export const combinedEuropeanSpeakers = 6_000_000 + 5_000_000 + 5_400_000 + 1_100_000 + 350_000 + 880_000 + 750_000; // ~19.48M
export const awadhiSpeakers = 38_000_000;
