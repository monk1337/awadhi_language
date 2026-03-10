import type { CuisineTerm } from "@/types";

/**
 * Awadhi cuisine vocabulary from Part 6 of the master report.
 * Awadhi cuisine -- known globally as "Lucknowi food" -- carries a vocabulary
 * that reveals an entire philosophy of eating: patience over heat.
 */
export const cuisineTerms: CuisineTerm[] = [
  {
    name: "Dum Pukht",
    nameDevanagari: "\u0926\u092E \u092A\u0941\u0916\u094D\u0924",
    description:
      "\"Breathe in + cook\": slow-cooking in a sealed pot over low fire. Attributed to Nawab Asaf-ud-Daula around 1784. Ingredients sealed with dough, cooked gently in their own trapped vapors. The foundational technique of Awadhi cuisine.",
    category: "technique",
    region: "Lucknow",
  },
  {
    name: "Galawat",
    nameDevanagari: "\u0917\u0932\u093E\u0935\u091F",
    description:
      "The art of extreme tenderization: meat that melts on the tongue. Born from the legend of a toothless Nawab who demanded kebabs he could eat without teeth. Led to the Galouti kebab with its 150+ spice blend. No English equivalent exists for this concept.",
    category: "technique",
    region: "Lucknow",
  },
  {
    name: "Dhungar",
    nameDevanagari: "\u0927\u0941\u0902\u0917\u0930",
    description:
      "Quick smoking technique using live charcoal and clarified butter (ghee). A finishing technique for imparting smoky flavor to dishes.",
    category: "technique",
    region: "Awadh",
  },
  {
    name: "Zamin-Doz",
    nameDevanagari: "\u091C\u093C\u092E\u0940\u0928-\u0926\u094B\u091C\u093C",
    description:
      "Cooking fish or meat in a sealed pit dug into the earth. An ancient technique that predates modern ovens, using the earth itself as a slow cooker.",
    category: "technique",
    region: "Awadh",
  },
  {
    name: "Mahi Tawa",
    nameDevanagari: "\u092E\u093E\u0939\u0940 \u0924\u0935\u093E",
    description:
      "Massive, round, flat-bottomed copper griddle used for searing fish and meats. A specialized piece of Awadhi culinary equipment.",
    category: "utensil",
    region: "Lucknow",
  },
  {
    name: "Sheermal",
    nameDevanagari: "\u0936\u0940\u0930\u092E\u093E\u0932",
    description:
      "Saffron-infused baked yeast bread. A signature Awadhi bread that combines the richness of saffron with the technique of tandoor baking.",
    category: "dish",
    region: "Lucknow",
  },
  {
    name: "Rumali Roti",
    nameDevanagari: "\u0930\u0942\u092E\u093E\u0932\u0940 \u0930\u094B\u091F\u0940",
    description:
      "Bread thrown and stretched until thin as a handkerchief (rumal). The name literally means 'handkerchief bread,' a testament to the skill of Awadhi bakers.",
    category: "dish",
    region: "Lucknow",
  },
  {
    name: "Bawarchi",
    nameDevanagari: "\u092C\u093E\u0935\u0930\u094D\u091A\u0940",
    description:
      "Chef, a general cook. Distinct from a Rakabdar in the Awadhi culinary hierarchy. The Awadhi kitchen distinguished between cooking and the art of cooking.",
    category: "utensil", // role, but using closest available category
    region: "Lucknow",
  },
  {
    name: "Rakabdar",
    nameDevanagari: "\u0930\u0915\u093E\u092C\u0926\u093E\u0930",
    description:
      "Gourmet specialist, distinct from a Bawarchi. Awadhi dining culture distinguished between a cook and the artist of cooking. The Rakabdar was responsible for presentation, flavor refinement, and the art of the dastarkhwan.",
    category: "utensil", // role, but using closest available category
    region: "Lucknow",
  },
];
