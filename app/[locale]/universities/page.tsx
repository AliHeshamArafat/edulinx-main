"use client";

import React from "react";
import SearchPage from "@/components/page/searchPage";
import UniversityCard from "@/components/ui/universityCard";
import { University } from "@/types/university";
import useSearch from "@/hooks/useSearch";
import { useGetUniversities } from "@/hooks/apis";
import { GET_CATEGORIES, GET_COUNTRIES, GET_UNIVERSITIES } from "@/apis";
import { Category } from "@/types/category";
import { Country } from "@/types/country";
export default function Universities() {
  const filterConfig = [
    {
      key: "countryUuid",
      label: "Country",
      placeholder: "Select Country",
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
      label: "Sort By",
      placeholder: "Select Sort By",
      options: [
        { value: "true", label: "Name Ascending" },
        { value: "false", label: "Name Descending" },
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
        title="Find Universities"
        description="Discover and compare universities worldwide"
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
        searchBarPlaceholder="Search universities..."
      />
    </div>
  );
}
