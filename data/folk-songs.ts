import type { FolkSong } from "@/types";

/**
 * Major Awadhi folk song genres from Part 6 of the master report.
 * Awadhi folk music maps onto the emotional calendar of rural life
 * with remarkable precision.
 */
export const folkSongs: FolkSong[] = [
  {
    title: "Sohar",
    genre: "Birth song",
    occasion: "Childbirth celebration",
    description:
      "Sung by women to celebrate childbirth. Gentle melodies comparing the newborn to Lord Rama or Krishna, weaving blessings for the child's prosperity into devotional imagery. Full of teasing the new parents, playful references to gods and ancestors.",
    region: "Awadh",
  },
  {
    title: "Chaiti",
    genre: "Spring song",
    season: "Chaitra (March-April)",
    occasion: "Spring / Ramnavami",
    lyrics: "Chait mase janme Ram, ho Rama",
    translation: "O Rama, you were born in the month of Chait",
    description:
      "Spring songs celebrating new beginnings with lively rhythms. Often performed during Ramnavami.",
    region: "Awadh",
  },
  {
    title: "Kajri",
    genre: "Monsoon song",
    season: "Monsoon (July-September)",
    occasion: "Rainy season",
    lyrics: "Ras barse badariya sawan ki",
    translation: "Clouds of the rain are pouring nectar",
    description:
      "Expressing both the joy of rain and the ache of romantic separation: the woman longing for her beloved during the season when the world is wet and green and impossibly alive. Uses looming clouds and rain as metaphors for separation, fertility, and desire. The classical singer Girija Devi was among Kajri's greatest interpreters.",
    region: "Awadh",
  },
  {
    title: "Birha",
    genre: "Separation song",
    occasion: "Migration / absence of loved ones",
    description:
      "Literally 'virah' (separation). Perhaps the most emotionally raw genre. Associated with the Ahir (pastoral) community. Expresses the pain of lovers and families divided by migration for work. In a region where millions have left for Delhi, Mumbai, and the Gulf states, Birha carries devastating contemporary resonance. Emotionally intense and improvisational.",
    region: "Awadh / Eastern UP",
  },
  {
    title: "Aalha",
    genre: "Heroic ballad",
    occasion: "Fairs and religious gatherings",
    description:
      "Heroic ballads recounting the 12th-century warriors Alha and Udal who fought 52 wars. Performed by duos in antiphonal singing style with dholak and nagada accompaniment. High, dramatic register.",
    region: "Awadh / Bundelkhand",
  },
  {
    title: "Nirgun",
    genre: "Philosophical song",
    occasion: "Spiritual reflection",
    description:
      "Philosophical songs about the formless divine and the transience of life, deeply influenced by Kabir. Explores the nature of the soul, impermanence, and devotion beyond form.",
    region: "Awadh",
  },
  {
    title: "Gaari",
    genre: "Wedding insult song",
    occasion: "Weddings",
    description:
      "Playful, poetic wedding insults, a specific oral tradition being lost as linguistic context disappears. Women sing teasing, humorous verses about the groom's family.",
    region: "Awadh",
  },
];
