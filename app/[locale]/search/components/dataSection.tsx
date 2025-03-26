import ProgramCardSkeleton from "@/components/skeletons/programCardSkeleton";
import ProgramCard from "@/components/ui/programCard";
import SliderContainer from "@/components/ui/sliderContainer";
import UniversityCard from "@/components/ui/universityCard";
import { Program } from "@/types/program";
import { University } from "@/types/university";
import React from "react";

interface SearchItem {
  type: "university" | "program";
  item: University | Program;
}

export default function DataSection({ isLoading, data }: { isLoading: boolean; data: any }) {
  const combineResults = (data: any): SearchItem[] => {
    const combined: SearchItem[] = [];

    if (data?.universities?.result) {
      combined.push(
        ...data.universities.result.map((uni: University) => ({
          type: "university",
          item: uni,
        }))
      );
    }

    if (data?.programs?.result) {
      combined.push(
        ...data.programs.result.map((prog: Program) => ({
          type: "program",
          item: prog,
        }))
      );
    }

    return combined;
  };

  if (isLoading)
    return <SliderContainer title="Search Results" items={Array(6).fill(null)} renderItem={() => <ProgramCardSkeleton />} />;

  const combinedResults = combineResults(data);

  return combinedResults.length > 0 ? (
    <SliderContainer<SearchItem>
      title="Search Results"
      items={combinedResults}
      renderItem={(item) =>
        item.type === "university" ? (
          <UniversityCard university={item.item as University} className="!h-[var(--card-height)]" />
        ) : (
          <ProgramCard program={item.item as Program} />
        )
      }
    />
  ) : (
    <div className="text-center text-gray-500 py-12">No results found</div>
  );
}
