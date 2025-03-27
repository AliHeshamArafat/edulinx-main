"use client";

import React from "react";
import SearchPage from "@/components/page/searchPage";
import UniversityCard from "@/components/ui/universityCard";
import { University } from "@/types/university";
import useSearch from "@/hooks/useSearch";
import { useGetUniversities } from "@/hooks/apis";
import { GET_COUNTRIES } from "@/apis";
import { Country } from "@/types/country";
import { useTranslations } from "next-intl";

export default function Universities() {
  const t = useTranslations("general");
  const filterConfig = [
    {
      key: "countryUuid",
      label: t("country"),
      placeholder: t("select_country"),
      queryKey: ["countries"],
      queryFn: () => GET_COUNTRIES(),
      transformData: (response: any) =>
        response.data.result.map((country: Country) => ({
          value: country.uuid,
          label: country.name_Localized,
        })),
    },
    {
      key: "nameEnDescending",
      label: t("sort_by"),
      placeholder: t("select_sort_by"),
      options: [
        { value: "true", label: t("name_ascending") },
        { value: "false", label: t("name_descending") },
      ],
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
  } = useSearch<University>({
    apiHook: useGetUniversities,
    filterConfig,
    pageSize: 6,
  });

  return (
    <div className="">
      <SearchPage<University>
        title={t("find_universities")}
        description={t("discover_and_compare_universities_worldwide")}
        data={data}
        isLoading={isLoading}
        renderItem={(university: University) => <UniversityCard university={university} />}
        onSearch={handleSearch}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        pageSize={pageSize}
        filters={filters}
        filterValues={filterValues}
        onFilterChange={onFilterChange}
        isFiltersLoading={isFiltersLoading}
        searchBarPlaceholder={t("search_universities")}
      />
    </div>
  );
}
