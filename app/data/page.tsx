import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import DataGrid from "@/components/data-wall/DataGrid";

export const metadata: Metadata = {
  title: "The Data Wall",
  description:
    "Census data, available metrics, and research gaps for a language spoken by 38 million people.",
};

export default function DataPage() {
  return (
    <PageWrapper>
      {/* Page heading */}
      <SectionHeading
        title="The Data Wall"
        subtitle="What we know. What remains to be studied."
        align="center"
      />

      {/* Main data grid */}
      <DataGrid />
    </PageWrapper>
  );
}
