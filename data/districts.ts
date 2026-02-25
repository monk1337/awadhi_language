/**
 * Awadhi-speaking districts in Uttar Pradesh (India) and Nepal.
 * Awadhi's core territory is the historic Awadh region of central-eastern UP,
 * spanning approximately 23 core districts.
 */

export interface DistrictGroup {
  region: string;
  description: string;
  districts: string[];
}

export const upDistricts: DistrictGroup[] = [
  {
    region: "Northern and Central",
    description:
      "The heartland of Awadhi, centered around Lucknow and the historic Awadh region.",
    districts: [
      "Lucknow",
      "Barabanki",
      "Rae Bareli",
      "Amethi",
      "Unnao",
      "Fatehpur",
      "Sitapur",
      "Lakhimpur Kheri",
      "Bahraich",
      "Shrawasti",
    ],
  },
  {
    region: "Eastern (transitioning toward Bhojpuri)",
    description:
      "Eastern districts where Awadhi transitions into Bhojpuri-influenced speech.",
    districts: [
      "Ayodhya (formerly Faizabad)",
      "Sultanpur",
      "Pratapgarh",
      "Ambedkar Nagar",
      "Gonda",
      "Balrampur",
      "Prayagraj (Allahabad)",
      "Kaushambi",
      "Bhadohi",
      "Mirzapur",
      "Varanasi",
    ],
  },
  {
    region: "Partial coverage",
    description:
      "Western portions of these districts have significant Awadhi-speaking populations.",
    districts: [
      "Basti",
      "Siddharthnagar",
      "Jaunpur",
    ],
  },
  {
    region: "Fringe areas",
    description:
      "Parts of northern Madhya Pradesh (where closely related Bagheli dominates) and migration-destination cities.",
    districts: [
      "Parts of northern Madhya Pradesh",
      "Delhi (migration destination)",
      "Mumbai (migration destination)",
    ],
  },
];

export interface NepalDistrictGroup {
  zone: string;
  districts: string[];
}

export const nepalDistricts: NepalDistrictGroup[] = [
  {
    zone: "Lumbini Zone",
    districts: ["Kapilvastu", "Rupandehi", "Nawalparasi"],
  },
  {
    zone: "Bheri Zone",
    districts: ["Banke", "Bardiya"],
  },
  {
    zone: "Rapti Zone",
    districts: ["Dang"],
  },
  {
    zone: "Far West",
    districts: ["Kailali", "Kanchanpur"],
  },
];

/** The urban center of Awadhi life in Nepal. */
export const nepalUrbanCenter = "Nepalgunj";

export const totalUpDistricts = 23;
export const totalNepalDistricts = 8;
