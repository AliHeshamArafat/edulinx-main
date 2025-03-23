"use client";

import React from "react";
import SearchPage from "@/components/page/searchPage";
import UniversityCard from "@/components/ui/universityCard";
import { University } from "@/types/university";
import useSearch from "@/hooks/useSearch";
import { useGetUniversities } from "@/hooks/apis";
import { GET_CATEGORIES, GET_UNIVERSITIES } from "@/apis";
import { Category } from "@/types/category";

export default function Universities() {
//   const filterConfig = [
//     {
//       key: "universityUuid",
//       label: "University",
//       placeholder: "All Universities",
//       queryKey: ["universities"],
//       queryFn: () => GET_UNIVERSITIES({}),
//       transformData: (response: any) =>
//         response.data.result.map((uni: University) => ({
//           value: uni.uuid,
//           label: uni.name_Localized,
//         })),
//     },
//     {
//       key: "fieldUuid",
//       label: "Program Type",
//       placeholder: "All Programs",
//       queryKey: ["program-types"],
//       queryFn: () => GET_CATEGORIES(),
//       transformData: (response: any) =>
//         response.data.result.map((type: Category) => ({
//           value: type.uuid,
//           label: type.name_Localized,
//         })),
//     },
//   ];

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
    // filterConfig,
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
