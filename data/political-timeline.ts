import type { PoliticalEvent } from "@/types";

/**
 * Key political events in the fight for Awadhi recognition,
 * from Part 8 of the master report.
 *
 * The custom `status` field tracks outcome beyond the base type.
 */

export type RecognitionStatus = "pending" | "failed" | "partial" | "symbolic";

export interface PoliticalTimelineEvent extends PoliticalEvent {
  status: RecognitionStatus;
}

export const politicalTimeline: PoliticalTimelineEvent[] = [
  {
    year: "2003",
    title: "Sitakant Mohapatra Committee",
    description:
      "Committee formed to develop criteria for new Eighth Schedule language inclusions. No actionable results were produced.",
    impact: "neutral",
    category: "policy",
    status: "failed",
  },
  {
    year: "2012",
    title: "Inter-Ministerial Committee",
    description:
      "Inter-Ministerial Committee constituted to evaluate language inclusion demands. No actionable results.",
    impact: "neutral",
    category: "policy",
    status: "failed",
  },
  {
    year: "2017",
    title: "Writ petition for Eighth Schedule inclusion",
    description:
      "Writ petition filed seeking Awadhi and Bhojpuri inclusion in the Eighth Schedule. Referred to committees.",
    impact: "neutral",
    category: "legislation",
    status: "pending",
  },
  {
    year: "2021",
    title: "Minister Rai's Rajya Sabha statement",
    description:
      "Minister of State for Home Nityanand Rai told the Rajya Sabha: 'No fixed criteria' and 'no time-frame can be fixed' for considering Awadhi's inclusion. Effectively closed the door indefinitely.",
    impact: "negative",
    category: "policy",
    status: "failed",
  },
  {
    year: "2025",
    title: "Yogi Adityanath UP Assembly announcement",
    description:
      "UP Chief Minister announced Awadhi, Bhojpuri, Braj, and Bundeli would be incorporated into UP Assembly proceedings with live translation -- making UP the first state assembly with multilingual translation. Also promised separate language academies.",
    impact: "positive",
    category: "policy",
    status: "symbolic",
  },
  {
    year: "2025",
    title: "Language academy status check",
    description:
      "Only the Surdas Braj Bhasha Academy has been built (Govardhan, Mathura) -- not yet operational. The promised Awadhi academy has not materialized.",
    impact: "negative",
    category: "policy",
    status: "partial",
  },
];

/** Awadhi is among 38-39 languages demanding Eighth Schedule inclusion. */
export const totalLanguagesSeekingInclusion = 38;
