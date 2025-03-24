"use client";
import { useGetStudentApplications } from "@/hooks/apis";
import SearchPage from "@/components/page/searchPage";
import StudentAppCard from "@/components/ui/studentAppCard";
import { StudentApplication } from "@/types/student";
import React from "react";
import useSearch from "@/hooks/useSearch";
import { GET_CATEGORIES } from "@/apis";
import { Category } from "@/types/category";

export default function Tracker() {
  const filterConfig = [
    {
      key: "fieldUuid",
      label: "Program Type",
      placeholder: "All Programs",
      queryKey: ["program-types"],
      queryFn: () => GET_CATEGORIES(),
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
    filters,
    filterValues,
    onFilterChange,
    isFiltersLoading,
    handleSearch,
    handlePageChange,
  } = useSearch<StudentApplication>({
    apiHook: useGetStudentApplications,
    filterConfig,
  });

  return (
    <div className="">
      <SearchPage<StudentApplication>
        title="Student Applications"
        description="Track your student applications"
        data={data}
        isLoading={isLoading}
        renderItem={(studentApplication: StudentApplication) => <StudentAppCard application={studentApplication} />}
        onSearch={handleSearch}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        pageSize={pageSize}
        filters={filters}
        filterValues={filterValues}
        onFilterChange={onFilterChange}
        isFiltersLoading={isFiltersLoading}
        searchBarPlaceholder="Search applications..."
      />
    </div>
  );
}
