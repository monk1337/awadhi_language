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

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-gradient-to-br from-parchment to-cream-dark shadow-[0_0_6px_rgba(224,122,47,0.2)]" />
          <span>Data exists</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-[#1A1816]" />
          <span>No data available</span>
        </div>
      </div>
    </section>
  );
}
