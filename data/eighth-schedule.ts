import type { EighthScheduleLanguage } from "@/types";

/**
 * Eighth Schedule languages with fewer speakers than Awadhi,
 * demonstrating the absurdity of Awadhi's exclusion.
 * Speaker counts from 2011 Census of India.
 */
export const eighthScheduleLanguages: EighthScheduleLanguage[] = [
  {
    name: "Sanskrit",
    speakers: 24_821,
    yearAdded: 1950,
    isScheduled: true,
  },
  {
    name: "Bodo",
    speakers: 1_482_929,
    yearAdded: 2003,
    isScheduled: true,
  },
  {
    name: "Manipuri (Meitei)",
    speakers: 1_761_079,
    yearAdded: 1992,
    isScheduled: true,
  },
  {
    name: "Konkani",
    speakers: 2_256_502,
    yearAdded: 1992,
    isScheduled: true,
  },
  {
    name: "Dogri",
    speakers: 2_596_767,
    yearAdded: 2003,
    isScheduled: true,
  },
  {
    name: "Sindhi",
    speakers: 2_772_264,
    yearAdded: 1967,
    isScheduled: true,
  },
  {
    name: "Nepali",
    speakers: 2_926_168,
    yearAdded: 1992,
    isScheduled: true,
  },
  {
    name: "Awadhi",
    speakers: 38_000_000,
    yearAdded: 0, // not added
    isScheduled: false,
  },
];

/** How many times larger Awadhi is than each recognized language. */
export const awadhiMultipliers = eighthScheduleLanguages
  .filter((l) => l.isScheduled)
  .map((l) => ({
    language: l.name,
    speakers: l.speakers,
    multiplier: Math.round(38_000_000 / l.speakers),
  }));
