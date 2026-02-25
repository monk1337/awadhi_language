import type { ForceOfErasure } from "@/types";

/**
 * The five forces killing Awadhi, from Part 7 of the master report.
 * These are the structural mechanisms through which a language with
 * 38 million speakers is being systematically erased.
 */
export const fiveForces: ForceOfErasure[] = [
  {
    id: "census-classification",
    title: "The Census Classification Weapon",
    description:
      "By classifying 48 distinct languages as 'mother tongues under Hindi' since 1971, the Census inflated Hindi's share from 30.39% to 43.63%. This creates a self-reinforcing cycle: no official speaker count leads to no basis for demanding educational/media rights, which means no recognition, no funding, and no institutional infrastructure. Because of prestige bias, younger Awadhi speakers increasingly claim 'Standard Hindi' as their mother tongue, falsely inflating Hindi's numbers while artificially deflating Awadhi's survival metrics.",
    stats: [
      { label: "Languages absorbed under Hindi", value: "48" },
      { label: "Hindi share before 1971", value: "30.39%" },
      { label: "Hindi share after 1971", value: "43.63%" },
      { label: "Census vs. independent estimate", value: "3.85M vs. 38M" },
    ],
  },
  {
    id: "zero-education",
    title: "Zero Educational Infrastructure",
    description:
      "Standard Hindi is the medium of instruction in every school across the Awadh region. No Awadhi-medium school exists in India. Children arrive speaking Awadhi and are taught in a language that is related but grammatically distinct -- no ergative marker, different pronouns, different verb conjugations, different auxiliary verbs. The educational system treats their mother tongue as invisible.",
    stats: [
      { label: "Awadhi-medium schools in India", value: "Zero" },
    ],
    examples: [
      "The American India Foundation asked: 'Why would it be easy for speakers of Awadhi to adopt a new language to attend school?'",
      "Nepal has an official Awadhi curriculum for classes 1-10, but it has yet to be properly implemented.",
    ],
  },
  {
    id: "stigma",
    title: "Stigma: The Deepest Wound",
    description:
      "Awadhi is perceived as rural, crude, and backward. Bollywood reinforces this by using Awadhi accents exclusively for rustic or comedic figures. Parents in cities deliberately correct children away from Awadhi, even at home, to ease school and job prospects. Speaking Standard Hindi gives as much status in the Awadh region as speaking English gives in the south of India.",
    stats: [
      { label: "Western UP youth using only Hindi", value: "86%" },
    ],
    examples: [
      "\"Growing up, I was shy -- almost embarrassed -- about speaking Awadhi. It didn't feel 'cool.' It felt rural. Crude. Backward.\" -- Priyanka Shukla, Awadhi writer (2025)",
      "\"I spoke Awadhi until I entered the school gates, at which point I'd switch to Khari Boli.\"",
      "\"The real issue is people no longer take pride in Awadhi. Parents decide school language, children lose it.\"",
    ],
  },
  {
    id: "media-vacuum",
    title: "Media Vacuum",
    description:
      "There is no Awadhi television channel. No Awadhi newspaper of note. No dedicated Awadhi radio station in India. The Hindi media landscape is so saturated in the Awadh region that Awadhi has no commercial media presence whatsoever. YouTube is the only organic vector for Awadhi content.",
    stats: [
      { label: "Awadhi TV channels", value: "Zero" },
      { label: "Awadhi newspapers of note", value: "Zero" },
      { label: "Dedicated Awadhi radio stations", value: "Zero" },
    ],
  },
  {
    id: "urbanization",
    title: "Urbanization and Generational Shift",
    description:
      "Even in Lucknow and Ayodhya -- the historic capitals of Awadh -- Standard Hindi and Urdu dominate public life. Awadhi retreats to private, familial, and rural domains. While grandparents converse exclusively in Awadhi, and parents maintain functional bilingualism, the youth primarily possess only passive understanding. They comprehend the language when spoken by elders but are unable, or entirely unwilling, to speak it themselves.",
    examples: [
      "Grandparents: exclusive Awadhi speakers",
      "Parents: functional bilingualism (Awadhi + Hindi)",
      "Youth: passive understanding only -- comprehend but won't speak",
    ],
  },
];
