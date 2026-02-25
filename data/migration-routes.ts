import type { MigrationRoute } from "@/types";

/**
 * Girmitiya (indentured labor) migration routes from the Awadh region.
 * Between 1834 and 1920, over 1.2 million Indians were transported to
 * colonial plantations. The majority came from the Awadh and Bhojpur
 * regions of eastern UP and Bihar.
 *
 * Origin coordinates approximate the center of the Awadh region.
 */
export const migrationRoutes: MigrationRoute[] = [
  {
    origin: "Awadh Region, UP",
    destination: "Mauritius",
    originCoordinates: [26.8, 81.0],
    destinationCoordinates: [-20.35, 57.55],
    period: "1834-1920",
    reason: "Sugar plantation labor (largest single destination)",
    population: 453_063,
    description:
      "Largest single destination for indentured labor. Bhojpuri-Awadhi declined from 31.7% home speakers in 1972 to 5.1% in 2022.",
  },
  {
    origin: "Awadh Region, UP",
    destination: "Guyana",
    originCoordinates: [26.8, 81.0],
    destinationCoordinates: [6.8, -58.16],
    period: "1838-1917",
    reason: "Sugar plantation labor",
    population: 238_000,
    description:
      "Guyanese Hindustani is now critically endangered. Caribbean Hindustani Inc. works on preservation.",
  },
  {
    origin: "Awadh Region, UP",
    destination: "South Africa (Natal)",
    originCoordinates: [26.8, 81.0],
    destinationCoordinates: [-29.86, 31.02],
    period: "1860-1911",
    reason: "Sugar plantation and railway labor",
    population: 152_184,
    description:
      "The shift to English was complete by mid-20th century. Only the Ramcharitmanas keeps Awadhi alive in religious recitation.",
  },
  {
    origin: "Awadh Region, UP",
    destination: "Trinidad & Tobago",
    originCoordinates: [26.8, 81.0],
    destinationCoordinates: [10.5, -61.31],
    period: "1845-1917",
    reason: "Sugar plantation labor",
    population: 143_939,
    description:
      "Trinidadian Hindustani (locally called 'Gaon ke Bolee') is severely endangered. Sundar Popo's Chutney music popularized Hindustani-English fusion.",
  },
  {
    origin: "Awadh Region, UP",
    destination: "Fiji",
    originCoordinates: [26.8, 81.0],
    destinationCoordinates: [-17.77, 178.07],
    period: "1879-1916",
    reason: "Sugar plantation labor",
    population: 60_965,
    description:
      "34.5% of indentured laborers were Awadhi speakers -- the single largest linguistic group. Fiji Hindi is now an official language (since 1997), recognized by constitution and used in parliament.",
  },
  {
    origin: "Awadh Region, UP",
    destination: "Jamaica",
    originCoordinates: [26.8, 81.0],
    destinationCoordinates: [18.11, -77.3],
    period: "1845-1917",
    reason: "Sugar plantation labor",
    population: 36_000,
    description:
      "Indian languages have largely been replaced by English and Jamaican Patois.",
  },
  {
    origin: "Awadh Region, UP",
    destination: "Suriname",
    originCoordinates: [26.8, 81.0],
    destinationCoordinates: [5.85, -55.2],
    period: "1873-1916",
    reason: "Sugar plantation labor",
    population: 34_304,
    description:
      "Awadhi blended with Bhojpuri to form Sarnami Hindustani (~250,000 speakers in Suriname and the Netherlands). Baithak Gana and Chutney music preserve Awadhi folk melodies.",
  },
];

/** Total indentured migrants from the Indian subcontinent. */
export const totalIndentuedMigrants = 1_200_000;

/** Total descendants of Girmitiya migrants worldwide today. */
export const totalDescendantsToday = "~4.5 million";
