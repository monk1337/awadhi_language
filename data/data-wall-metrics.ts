import type { DataMetric } from "@/types";

/**
 * The Data Wall from Part 9 of the master report.
 * A grid where each cell represents a piece of data.
 * Cells with confirmed data are filled in; cells where data doesn't exist
 * are blacked out with "NO DATA." The visual impact of blank cells
 * tells the story of neglect.
 */

/** Metrics where data exists (hasData: true). */
export const knownMetrics: DataMetric[] = [
  {
    name: "India Census self-declared speakers (2011)",
    value: 3_850_906,
    hasData: true,
    category: "speakers",
  },
  {
    name: "Independent linguistic estimate",
    value: "~38 million",
    hasData: true,
    category: "speakers",
  },
  {
    name: "Nepal Census speakers (2021)",
    value: 864_276,
    hasData: true,
    category: "speakers",
  },
  {
    name: "Fiji Hindi speakers",
    value: "~400,000+",
    hasData: true,
    category: "speakers",
  },
  {
    name: "Global diaspora descendants",
    value: "~4.5 million",
    hasData: true,
    category: "demographics",
  },
  {
    name: "UP districts where Awadhi is primary",
    value: 23,
    hasData: true,
    category: "demographics",
  },
  {
    name: "Nepal districts",
    value: 8,
    hasData: true,
    category: "demographics",
  },
  {
    name: "Awadhi Wikipedia articles (March 2021)",
    value: 2_432,
    hasData: true,
    category: "digital",
  },
  {
    name: "Awadhi Wikipedia active editors/month",
    value: 2,
    hasData: true,
    category: "digital",
  },
  {
    name: "Google Translate support",
    value: "Added 2024 (PaLM 2)",
    hasData: true,
    category: "digital",
  },
  {
    name: "UP Film Policy Awadhi subsidy",
    value: "50% (up to Rs 2 crore)",
    hasData: true,
    category: "media",
  },
  {
    name: "Ramcharitmanas copies (one press)",
    value: "108.7 million",
    hasData: true,
    category: "literary",
  },
  {
    name: "Ramlila tradition (UNESCO ICH)",
    value: "31 days (Ramnagar), est. 1625",
    hasData: true,
    category: "literary",
  },
  {
    name: "Ramcharitmanas UNESCO inscription",
    value: "Memory of World Asia-Pacific, May 2024",
    hasData: true,
    category: "literary",
  },
  {
    name: "Indian government classification",
    value: "Mother tongue under Hindi (not a language)",
    hasData: true,
    category: "government",
  },
  {
    name: "ISO 639-3 code",
    value: "awa (recognized as distinct language)",
    hasData: true,
    category: "government",
  },
  {
    name: "UNESCO World Atlas classification",
    value: "Potentially Vulnerable",
    hasData: true,
    category: "government",
  },
  {
    name: "Ethnologue classification",
    value: "Level 5 (Developing) -- Stable, but 'direct evidence lacking'",
    hasData: true,
    category: "government",
  },
  {
    name: "Official language of any Indian state",
    value: "None",
    hasData: true,
    category: "government",
  },
  {
    name: "Awadhi-medium schools in India",
    value: "Zero",
    hasData: true,
    category: "education",
  },
  {
    name: "Notable Awadhi films",
    value: "Nadiya Ke Paar (1982), Bairi Kangna (2018)",
    hasData: true,
    category: "media",
  },
];

/** Metrics where NO data exists -- the blank cells that tell the story of neglect. */
export const unknownMetrics: DataMetric[] = [
  {
    name: "Systematic count of Awadhi-language books/publications",
    value: "NO DATA",
    hasData: false,
    category: "literary",
  },
  {
    name: "Social media analytics for Awadhi content",
    value: "NO DATA",
    hasData: false,
    category: "digital",
  },
  {
    name: "Intergenerational transmission studies",
    value: "NO DATA",
    hasData: false,
    category: "demographics",
  },
  {
    name: "Comprehensive language attitudes survey",
    value: "NO DATA",
    hasData: false,
    category: "demographics",
  },
  {
    name: "Systematic domain-loss documentation",
    value: "NO DATA",
    hasData: false,
    category: "demographics",
  },
  {
    name: "Comprehensive Awadhi corpus for computational linguistics",
    value: "NO DATA",
    hasData: false,
    category: "digital",
  },
  {
    name: "Awadhi-specific literacy rate",
    value: "NO DATA (Ethnologue estimates 50-75%)",
    hasData: false,
    category: "education",
  },
];

/** All metrics combined for the data wall visualization. */
export const allMetrics: DataMetric[] = [...knownMetrics, ...unknownMetrics];
