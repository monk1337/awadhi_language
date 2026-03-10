import type { LiteraryWork } from "@/types";

/**
 * The full literary timeline of Awadhi from Part 5 of the master report.
 * Spans from the 12th century emergence to modern recognition.
 */
export const literaryTimeline: LiteraryWork[] = [
  {
    title: "Earliest Awadhi writing",
    author: "Damodara Pandita",
    year: "12th c.",
    period: "Emergence",
    genre: "Poetry/prose",
    significance: "First confirmed texts in recognizable Awadhi.",
  },
  {
    title: "Chandayan",
    author: "Maulana Da'ud",
    year: "1379",
    period: "Golden Age",
    genre: "Sufi premakhyan (romance)",
    significance:
      "First major Awadhi literary work. Inaugurates the premakhyan tradition: Eastern Sufis choosing Awadhi to reach common people.",
  },
  {
    title: "Mirigavati",
    author: "Qutban",
    year: "c. 1503",
    period: "Golden Age",
    genre: "Sufi premakhyan",
    significance: "Continues the Sufi premakhyan tradition of writing Hindu love stories in Awadhi using Sufi philosophy.",
  },
  {
    title: "Padmavat",
    author: "Malik Muhammad Jayasi",
    year: "1540",
    period: "Golden Age",
    genre: "Sufi allegory / epic romance",
    significance:
      "A Muslim Sufi mystic writes a Hindu Rajput romance in Awadhi. Traveled from Arakan (Myanmar) to the Deccan. Inspired 12+ adaptations and Bhansali's 2018 Bollywood film.",
  },
  {
    title: "Madhumalati",
    author: "Manjhan",
    year: "1545",
    period: "Golden Age",
    genre: "Sufi premakhyan",
    significance: "Another major premakhyan continuing the cross-cultural literary synthesis of the golden age.",
  },
  {
    title: "Ramcharitmanas",
    author: "Goswami Tulsidas",
    year: "1574-75",
    period: "Golden Age",
    genre: "Devotional epic (doha-chaupai meter)",
    significance:
      "The work that changed everything. 12,800 lines, 108.7 million copies by one press. UNESCO Memory of the World (May 2024). Present in virtually every Hindu household across North India.",
    copiesSold: "108.7 million (one press alone)",
  },
  {
    title: "First organized Ramlila",
    author: "Megha Bhagat",
    year: "1625",
    period: "Golden Age",
    genre: "Theater",
    significance:
      "Tulsidas's student institutionalizes Awadhi theater. Ramlila is now UNESCO Intangible Cultural Heritage.",
  },
  {
    title: "Krishnayan",
    author: "Dwarka Prasad Mishra",
    year: "1942",
    period: "Modern",
    genre: "Epic poetry",
    significance:
      "Awadhi epic written in a British prison during the freedom movement. A notable example of Awadhi literary tradition continuing in challenging circumstances.",
  },
  {
    title: "Akashvani radio plays",
    author: "Ramai Kaka (Chandra Bhushan Trivedi, 1915-1982)",
    year: "20th c.",
    period: "Modern",
    genre: "Radio drama / humor",
    significance:
      "Brought Awadhi humor and social critique to mass media through All India Radio broadcasts.",
  },
  {
    title: "Poetry collections",
    author: "Jumai Khan Azad",
    year: "20th c.",
    period: "Modern",
    genre: "Poetry",
    significance: "Modern Awadhi literary figure keeping the poetic tradition alive.",
  },
  {
    title: "Lifetime achievement (Padma Shri)",
    author: "Dr. Vidya Vindu Singh",
    year: "2022",
    period: "Contemporary",
    genre: "Literary career / recognition",
    significance:
      "India's Padma Shri awarded for lifetime contributions to Awadhi literature, recognizing the language's rich literary heritage.",
  },
];

/** Works flagged as major milestones in Awadhi literary history. */
export const majorWorks = literaryTimeline.filter((w) =>
  ["1379", "1540", "1574-75", "2022"].includes(w.year ?? "")
);
