import type { Section } from "@/types";

export const sections: Section[] = [
  {
    id: "history",
    title: "Origin Story",
    path: "/history",
    subtitle: "A language that almost became Hindi",
    stat: "1379 CE",
    statLabel: "First major literary work",
    description:
      "Trace Awadhi from its Prakrit roots through its golden age of literature and beyond.",
  },
  {
    id: "map",
    title: "The Map",
    path: "/map",
    subtitle: "From Ayodhya to Fiji",
    stat: "23+",
    statLabel: "Districts across UP",
    description:
      "The geographic heartland of Awadhi stretches from Lucknow to the Nepal border, and its diaspora reaches three continents.",
  },
  {
    id: "language",
    title: "Sound & Language",
    path: "/language",
    subtitle: "This is not Hindi",
    stat: "ahai",
    statLabel: "The signature sound",
    description:
      "Awadhi has its own grammar, its own verb conjugations, and a sound system that distinguishes it from every other Indo-Aryan language.",
  },
  {
    id: "literary-giants",
    title: "Literary Giants",
    path: "/literary-giants",
    subtitle: "They nearly killed him for writing in it",
    stat: "108.7M",
    statLabel: "Copies of Ramcharitmanas",
    description:
      "From Tulsidas to Jayasi, Awadhi produced some of the most important literary works in Indian history.",
  },
  {
    id: "culture",
    title: "Living Culture",
    path: "/culture",
    subtitle: "A song for every season",
    stat: "7+",
    statLabel: "Folk music genres",
    description:
      "Festivals, folk songs, cuisine, and proverbs that form the living texture of Awadhi identity.",
  },
  {
    id: "data",
    title: "The Data Wall",
    path: "/data",
    subtitle: "What we know. What remains to be studied.",
    stat: "38M",
    statLabel: "Speakers worldwide",
    description:
      "Census data, available metrics, and research gaps for a language spoken by 38 million people.",
  },
  {
    id: "surprises",
    title: "Curiosities",
    path: "/surprises",
    subtitle: "Gabbar Singh speaks Awadhi",
    stat: "100M+",
    statLabel: "Daily Awadhi chanters",
    description:
      "Unexpected connections between Awadhi and Bollywood, global religion, culinary history, and pop culture.",
  },
];

export const ANIMATION_DEFAULTS = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
  stagger: 0.1,
  viewport: { once: true, margin: "-100px" },
} as const;
