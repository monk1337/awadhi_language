import type { VitalityStatus } from "@/types";

export interface DiasporaDestination {
  region: string;
  country: string;
  speakers: string;
  status: VitalityStatus;
  languageForm: string;
  description: string;
}

/**
 * Global vitality map of Awadhi and its descendant languages.
 * Data from the master report's Part 3: Global Vitality Map.
 */
export const diasporaDestinations: DiasporaDestination[] = [
  {
    region: "Uttar Pradesh (core)",
    country: "India",
    speakers: "38-55 million",
    status: "stable",
    languageForm: "Awadhi",
    description:
      "Stable in rural areas; declining in urban centers like Lucknow and Ayodhya where Standard Hindi and Urdu dominate public life.",
  },
  {
    region: "Terai",
    country: "Nepal",
    speakers: "~864,000",
    status: "thriving",
    languageForm: "Awadhi",
    description:
      "Growing 72% in one decade. Nepal's Language Commission has recommended Awadhi as an official language of Lumbini Province.",
  },
  {
    region: "Fiji",
    country: "Fiji",
    speakers: "~400,000+",
    status: "thriving",
    languageForm: "Fiji Hindi (Awadhi-based)",
    description:
      "Official language since 1997. Recognized by constitution, used in parliament, taught in universities. Transmitted through six generations.",
  },
  {
    region: "Suriname / Netherlands",
    country: "Suriname",
    speakers: "~250,000",
    status: "declining",
    languageForm: "Sarnami Hindustani",
    description:
      "Stable but declining among youth. The Baithak Gana tradition and Chutney music preserve folk melodies rooted in Awadhi and Bhojpuri.",
  },
  {
    region: "Mauritius",
    country: "Mauritius",
    speakers: "~65,000 home speakers",
    status: "endangered",
    languageForm: "Bhojpuri-Awadhi",
    description:
      "Declining rapidly: from 31.7% of the population in 1972 to just 5.1% in 2022. Mauritian Creole has largely displaced it.",
  },
  {
    region: "Trinidad & Tobago",
    country: "Trinidad and Tobago",
    speakers: "Small/elderly",
    status: "endangered",
    languageForm: "Trinidadian Hindustani",
    description:
      "Severely endangered. Known locally as 'Gaon ke Bolee' (village speech). By the third generation, English had largely displaced Indian languages.",
  },
  {
    region: "Guyana",
    country: "Guyana",
    speakers: "Small/elderly",
    status: "endangered",
    languageForm: "Guyanese Hindustani",
    description:
      "Critically endangered. Caribbean Hindustani Inc. works on preservation across Trinidad, Guyana, and Suriname.",
  },
  {
    region: "South Africa",
    country: "South Africa",
    speakers: "Near zero",
    status: "extinct",
    languageForm: "South African Hindustani",
    description:
      "Functionally extinct. The shift to English was complete by mid-20th century. Only the Ramcharitmanas keeps Awadhi alive in religious recitation.",
  },
];

/** Total descendants of the Girmitiya indentured labor system worldwide. */
export const totalDiasporaDescendants = "~4.5 million worldwide";
