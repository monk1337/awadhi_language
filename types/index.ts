// ---------------------------------------------------------------------------
// Core navigation & section types
// ---------------------------------------------------------------------------

export interface Section {
  id: string;
  title: string;
  path: string;
  subtitle: string;
  stat: string;
  statLabel: string;
  description: string;
}

// ---------------------------------------------------------------------------
// History & timeline
// ---------------------------------------------------------------------------

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  significance?: "major" | "minor" | "turning-point";
  category?: "literary" | "political" | "cultural" | "linguistic";
}

// ---------------------------------------------------------------------------
// Geography & diaspora
// ---------------------------------------------------------------------------

export interface DiasporaDestination {
  name: string;
  country: string;
  coordinates: [latitude: number, longitude: number];
  population?: number;
  migrationPeriod?: string;
  description?: string;
}

export type VitalityStatus =
  | "thriving"
  | "stable"
  | "declining"
  | "endangered"
  | "extinct";

export interface DistrictData {
  name: string;
  state: string;
  coordinates: [latitude: number, longitude: number];
  awadhiSpeakerPercentage?: number;
  population?: number;
  vitalityStatus?: VitalityStatus;
  notes?: string;
}

export interface MigrationRoute {
  origin: string;
  destination: string;
  originCoordinates: [latitude: number, longitude: number];
  destinationCoordinates: [latitude: number, longitude: number];
  period: string;
  reason?: string;
  population?: number;
  description?: string;
}

// ---------------------------------------------------------------------------
// Language & linguistics
// ---------------------------------------------------------------------------

export interface WordEntry {
  awadhi: string;
  devanagari?: string;
  meaning: string;
  partOfSpeech?: "noun" | "verb" | "adjective" | "adverb" | "pronoun" | "other";
  hindi?: string;
  etymology?: string;
  usage?: string;
}

export interface Proverb {
  awadhi: string;
  devanagari?: string;
  literal: string;
  meaning: string;
  context?: string;
}

// ---------------------------------------------------------------------------
// Literature
// ---------------------------------------------------------------------------

export interface LiteraryWork {
  title: string;
  author: string;
  year?: string;
  period?: string;
  genre?: string;
  significance: string;
  excerpt?: string;
  excerptDevanagari?: string;
  translation?: string;
  copiesSold?: string;
}

// ---------------------------------------------------------------------------
// Culture & folk traditions
// ---------------------------------------------------------------------------

export interface FolkSong {
  title: string;
  genre: string;
  occasion?: string;
  season?: string;
  lyrics?: string;
  lyricsDevanagari?: string;
  translation?: string;
  description?: string;
  region?: string;
}

export interface WorkSong {
  title: string;
  occupation: string;
  lyrics?: string;
  lyricsDevanagari?: string;
  translation?: string;
  description?: string;
}

export interface CuisineTerm {
  name: string;
  nameDevanagari?: string;
  description: string;
  category?: "dish" | "ingredient" | "technique" | "utensil";
  region?: string;
  season?: string;
}

// ---------------------------------------------------------------------------
// Crisis & politics
// ---------------------------------------------------------------------------

export interface PoliticalEvent {
  year: string;
  title: string;
  description: string;
  impact: "positive" | "negative" | "neutral";
  category?: "policy" | "movement" | "legislation" | "census" | "media";
}

export interface ForceOfErasure {
  id: string;
  title: string;
  description: string;
  icon?: string;
  stats?: Array<{ label: string; value: string }>;
  examples?: string[];
}

// ---------------------------------------------------------------------------
// Digital & revival
// ---------------------------------------------------------------------------

export interface DigitalLifeline {
  name: string;
  type: "app" | "website" | "social-media" | "publication" | "broadcast" | "organization";
  url?: string;
  description: string;
  reach?: string;
  founded?: string;
}

// ---------------------------------------------------------------------------
// Data & statistics
// ---------------------------------------------------------------------------

export interface DataMetric {
  name: string;
  value: string | number;
  hasData: boolean;
  category:
    | "speakers"
    | "education"
    | "media"
    | "digital"
    | "literary"
    | "government"
    | "demographics";
}

export interface EighthScheduleLanguage {
  name: string;
  speakers: number;
  yearAdded: number;
  isScheduled: boolean;
}

export interface EuropeanLanguage {
  name: string;
  speakers: number;
  country: string;
  hasOfficialStatus: boolean;
  /** For visual comparison with Awadhi speaker population */
  comparisonRatio?: number;
}

// ---------------------------------------------------------------------------
// Pop culture & surprises
// ---------------------------------------------------------------------------

export interface BollywoodSong {
  title: string;
  film: string;
  year: number;
  singer?: string;
  lyricist?: string;
  awadhiElements: string;
  description?: string;
}
