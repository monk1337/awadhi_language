import type { DigitalLifeline } from "@/types";

/**
 * Digital lifelines for Awadhi language preservation,
 * from Part 8 of the master report.
 */
export const digitalLifelines: DigitalLifeline[] = [
  {
    name: "Awadhi Wikipedia",
    type: "website",
    url: "https://awa.wikipedia.org",
    description:
      "Launched May 20, 2020 after years of Wikimedia Incubator advocacy. By March 2021: 2,432 articles, 988 registered users, 2 active editors/month. Infrastructure exists but is severely undermanned for a 38-million-speaker language.",
    reach: "2,432 articles; 988 registered users",
    founded: "2020",
  },
  {
    name: "Google Translate",
    type: "app",
    url: "https://translate.google.com",
    description:
      "Added Awadhi in 2024 as part of a 110-language expansion using the PaLM 2 AI model. First time Awadhi was accessible through a major digital translation platform. A language with 38 million speakers waited for AI to notice it.",
    reach: "Global",
    founded: "2024",
  },
  {
    name: "STAGE OTT Platform",
    type: "app",
    description:
      "Appeared on Shark Tank India, raised $12.5M Series B. 20M users with Haryanvi/Rajasthani content. Plans to expand into Awadhi, Maithili, and Magahi. Represents growing commercial interest in regional language content.",
    reach: "20M users (not yet Awadhi-specific)",
  },
  {
    name: "UP Film Policy 2023",
    type: "organization",
    description:
      "50% production subsidy for Awadhi films (up to Rs 2 crore) compared to 25% for Hindi/English films. A meaningful incentive, but the Awadhi film industry barely exists to take advantage of it.",
    reach: "State-level policy",
    founded: "2023",
  },
  {
    name: "YouTube",
    type: "social-media",
    url: "https://youtube.com",
    description:
      "The most organic vector for Awadhi revival. Folk music, cultural content, and comedy are growing. 'YouTubers have now started speaking in Awadhi' -- creating a parallel industry of dialect media.",
    reach: "Growing organically",
  },
];
