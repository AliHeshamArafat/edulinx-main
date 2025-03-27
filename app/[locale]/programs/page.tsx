"use client";

import React from "react";
import SearchPage from "@/components/page/searchPage";
import ProgramCard from "@/components/ui/programCard";
import { Program } from "@/types/program";
import useSearch from "@/hooks/useSearch";
import { useGetPrograms } from "@/hooks/apis";
import { GET_CATEGORIES, GET_UNIVERSITIES } from "@/apis";
import { Category } from "@/types/category";
import { University } from "@/types/university";
import { useTranslations } from "next-intl";

export default function Programs() {
  const t = useTranslations("general");

  const filterConfig = [
    {
      key: "universityUuid",
      label: t("university"),
      placeholder: t("all_universities"),
      queryKey: ["universities"],
      queryFn: () => GET_UNIVERSITIES({}),
      transformData: (response: any) =>
        response.data.result.map((uni: University) => ({
          value: uni.uuid,
          label: uni.name_Localized,
        })),
    },
    {
      key: "fieldUuid",
      label: t("program_type"),
      placeholder: t("all_programs"),
      queryKey: ["program-types"],
      queryFn: () => GET_CATEGORIES({}),
      transformData: (response: any) =>
        response.data.result.map((type: Category) => ({
          value: type.uuid,
          label: type.name_Localized,
        })),
    },
  ];

  const {
    data,
    isLoading,
    currentPage,
    pageSize,
    handleSearch,
    handlePageChange,
    filters,
    filterValues,
    onFilterChange,
    isFiltersLoading,
  } = useSearch<Program>({
    apiHook: useGetPrograms,
    filterConfig,
  });

  return (
    <div className="">
      <SearchPage<Program>
        title={t("find_your_program")}
        description={t("discover_your_programs_worldwide")}
        data={data}
        isLoading={isLoading}
        renderItem={(program: Program) => <ProgramCard program={program} />}
        onSearch={handleSearch}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        pageSize={pageSize ?? undefined}
        filters={filters}
        filterValues={filterValues}
        onFilterChange={onFilterChange}
        isFiltersLoading={isFiltersLoading}
        searchBarPlaceholder={t("search_for_program")}
      />
    </div>
  );
}
