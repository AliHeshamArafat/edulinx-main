"use client";
import SearchBarComp from "@/app/[locale]/components/searchBarComp";
import TitleComp from "@/app/[locale]/components/titleComp";
import ProgramCard from "@/components/ui/programCard";
import SliderContainer from "@/components/ui/sliderContainer";
import { useGetPrograms } from "@/hooks/apis";
import { Program } from "@/types/program";
import { University } from "@/types/university";
import { useState } from "react";
import ProgramCardSkeleton from "@/components/skeletons/programCardSkeleton";
import { useTranslations } from "next-intl";
interface ProgramsSectionProps {
  university: University;
}

export default function ProgramsSection({ university }: ProgramsSectionProps) {
  const t = useTranslations("general");
  const [search, setSearch] = useState("");

  const { data: programsResponse, isLoading } = useGetPrograms({
    params: {
      universityUuid: university.uuid,
      keyword: search,
    },
  });

  const programs = programsResponse?.data?.result;

  return (
    <div className="py-6">
      <TitleComp title={t("programs")} />

      <SearchBarComp
        className="md:max-w-full mt-10"
        placeholder={t("search_for_program")}
        onSearch={setSearch}
        onChange={(e) => e.target.value === "" && setSearch("")}
      />

      {isLoading ? (
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <ProgramCardSkeleton key={i} />
            ))}
          </div>
        </div>
      ) : programs?.length === 0 ? (
        <div className="text-center mt-16 text-gray-500">{t("no_programs_found")}</div>
      ) : (
        <SliderContainer<Program> items={programs || []} renderItem={(program) => <ProgramCard program={program} />} />
      )}
    </div>
  );
}
