"use client";

import { allMetrics } from "@/data/data-wall-metrics";
import DataCell from "@/components/data-wall/DataCell";

export default function DataGrid() {
  return (
    <section className="mt-12 md:mt-16">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
        {allMetrics.map((metric, index) => (
          <DataCell key={metric.name} metric={metric} index={index} />
        ))}
      </div>

    </section>
  );
}
