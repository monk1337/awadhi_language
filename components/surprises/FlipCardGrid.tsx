"use client";

import FlipCard from "@/components/surprises/FlipCard";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const flipCards = [
  {
    front: "Hundreds of millions chant Awadhi daily, and don't know it",
    back: "The Hanuman Chalisa, recited daily by an estimated 100 million+ Hindus worldwide, is written entirely in Awadhi by Tulsidas. Most devotees assume it is Sanskrit or Hindi.",
    category: "Religion",
  },
  {
    front: "Official in Fiji, a dialect in India",
    back: "Fiji Hindi, a creole descended largely from Awadhi and Bhojpuri brought by indentured laborers, is an official language of Fiji (pop. 900,000). In India, Awadhi is classified as a mother tongue under Hindi.",
    category: "Global",
  },
  {
    front: "Hindi-Urdu has Awadhi DNA",
    back: "Amir Khusrau (1253-1325), the 'father of Urdu/Hindi', composed in Awadhi. His Awadhi verses are among the earliest examples of Hindustani literature. The language that replaced Awadhi was partly built on its foundations.",
    category: "Linguistics",
  },
  {
    front: "Awadhi almost became 'Hindi'",
    back: "At Fort William College (est. 1800), British administrators chose Khari Boli as the basis for standardized 'Hindi' over Awadhi and Braj Bhasha. Had they chosen differently, 500+ million people's linguistic identity would be fundamentally different today.",
    category: "History",
  },
  {
    front: "A Padma Shri for Awadhi literature",
    back: "Dr. Vidya Vindu Singh received India's Padma Shri in 2022 for her contributions to Awadhi literature, a recognition of the language's rich literary tradition.",
    category: "Literature",
  },
  {
    front: "The script that dominated North India, and vanished",
    back: "Kaithi script once had three times more textbooks than Devanagari in Bihar and eastern UP. The British chose Devanagari for administrative convenience, and within decades Kaithi disappeared, taking with it the evidence that millions had been literate in something other than Hindi.",
    category: "Scripts",
  },
  {
    front: "Google Translate waited until 2024",
    back: "A language with 38 million speakers was only added to Google Translate in 2024, via PaLM 2 AI. By contrast, Esperanto (a constructed language with ~100,000 speakers) was added in 2012.",
    category: "Digital",
  },
  {
    front: "An Awadhi epic was written in a British prison",
    back: "Krishnayan (1942), an Awadhi mahakavya (epic poem), was composed by Dwarika Prasad Mishra while imprisoned by the British during the Quit India Movement.",
    category: "Literature",
  },
] as const;

export default function FlipCardGrid() {
  return (
    <section className="mt-12 md:mt-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {flipCards.map((card, index) => (
          <RevealOnScroll key={index} direction="up" delay={index * 0.07}>
            <FlipCard
              front={card.front}
              back={card.back}
              category={card.category}
            />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
