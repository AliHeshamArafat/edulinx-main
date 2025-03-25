"use client";
import { useGetStudentApplications } from "@/hooks/apis";
import SearchPage from "@/components/page/searchPage";
import StudentAppCard from "@/components/ui/studentAppCard";
import { StudentApplication } from "@/types/student";
import React, { useEffect, useRef } from "react";
import useSearch from "@/hooks/useSearch";
import { GET_CATEGORIES } from "@/apis";
import { Category } from "@/types/category";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/store/store";
import { toast } from "react-toastify";

export default function Tracker() {
  const router = useRouter();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const hasShownToast = useRef(false);

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
    pageSize: 6,
    disableHook: !isAuthenticated,
  });

  // redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated && !hasShownToast.current) {
      hasShownToast.current = true;
      toast.error("You must be logged in to access this page");
      router.push("/");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

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
