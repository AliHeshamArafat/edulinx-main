import ProgramCard from "@/components/ui/programCard";
import React from "react";
import { useGetPrograms } from "@/hooks/apis";
import TitleComp from "./titleComp";

import { GET_PROGRAMS } from "@/apis";
import { Program } from "@/types/program";
export default async function ProgramsSuggestions() {
  // const { data: programs } = useGetPrograms();

  const programs = await GET_PROGRAMS({});

  console.log(programs, "programs");

  return (
    <div className="bg-white py-16 hero-section-gap">
      <div className="main-container">
        {/* title */}
        <TitleComp title="Programs Suggestions" />

        {/* programs suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-11">
          {programs?.data?.result.map((program: Program) => (
            <ProgramCard key={program.uuid} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
}
