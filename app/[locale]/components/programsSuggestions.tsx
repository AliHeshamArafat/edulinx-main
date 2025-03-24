import ProgramCard from "@/components/ui/programCard";
import React from "react";
import TitleComp from "./titleComp";
import { GET_PROGRAMS, GET_SUGGESTED_PROGRAMS } from "@/apis";
import { Program } from "@/types/program";
import { cookies } from "next/headers";
import Link from "next/link";
import ButtonComp from "@/components/functional/buttonComp";

export default async function ProgramsSuggestions() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const response = token
    ? await GET_SUGGESTED_PROGRAMS({ config: { headers: { Authorization: `Bearer ${token}` } } })
    : await GET_PROGRAMS({});

  const programs = response?.data?.result;

  return (
    <div className="bg-primary-lighter py-16 hero-section-gap">
      <div className="main-container">
        {/* title */}
        <TitleComp title={"Programs Suggestions"} />

        {/* programs suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-11">
          {programs?.slice(0, 3).map((program: Program) => (
            <ProgramCard key={program.uuid} program={program} />
          ))}
        </div>

        {/* View All button */}
        <div className="flex justify-center mt-8">
          <Link href="/programs">
            <ButtonComp className="rounded-lg w-fit md:w-[300px]">View All</ButtonComp>
          </Link>
        </div>
      </div>
    </div>
  );
}
