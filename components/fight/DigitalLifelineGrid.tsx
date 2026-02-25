"use client";

import { digitalLifelines } from "@/data/digital-lifelines";
import DigitalLifelineCard from "@/components/fight/DigitalLifelineCard";

export default function DigitalLifelineGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {digitalLifelines.map((lifeline, i) => (
        <DigitalLifelineCard
          key={lifeline.name}
          lifeline={lifeline}
          index={i}
        />
      ))}
    </div>
  );
}
