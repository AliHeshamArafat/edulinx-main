import ProgramCard from "@/components/ui/programCard";
import React from "react";
import TitleComp from "./titleComp";
import { GET_PROGRAMS, GET_SUGGESTED_PROGRAMS } from "@/apis";
import { Program } from "@/types/program";
import Link from "next/link";
import ButtonComp from "@/components/functional/buttonComp";
import { getServerHeaders } from "@/utils/serverHeaders";
import { getTranslations } from "next-intl/server";

export default async function ProgramsSuggestions() {
  const t = await getTranslations("general");

  // First try to get suggested universities if user is authenticated
  let response = (await GET_SUGGESTED_PROGRAMS({
    config: await getServerHeaders(),
  })) || { data: { result: [] } };

  // If no suggested universities or not authenticated, get regular universities
  if (!response?.data?.result?.length) {
    response = (await GET_PROGRAMS({
      config: await getServerHeaders(),
    })) || { data: { result: [] } };
  }

  const programs = response?.data?.result;

  return (
    <div className="bg-primary-lighter py-16 hero-section-gap">
      <div className="main-container">
        {/* title */}
        <TitleComp title={t("programs_suggestions")} />

        {/* programs suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-11">
          {programs?.slice(0, 3).map((program: Program) => (
            <ProgramCard key={program.uuid} program={program} />
          ))}
        </div>

        {/* View All button */}
        <div className="flex justify-center mt-8">
          <Link href="/programs">
            <ButtonComp className="rounded-lg w-fit md:w-[300px]">{t("view_all")}</ButtonComp>
          </Link>
        </div>
      </div>
    </div>
  );
}
