"use client";

import { useGetSearchData } from "@/hooks/apis";
import useSearch from "@/hooks/useSearch";
import { SearchData } from "@/types/search";
import SearchPage from "@/components/page/searchPage";
import DataSection from "./components/dataSection";
import { useAppSelector } from "@/app/store/store";
import { useTranslations } from "next-intl";
export default function Search() {
  const t = useTranslations("general");
  const { searchQuery } = useAppSelector((state) => state.general);

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
  } = useSearch<SearchData>({
    apiHook: useGetSearchData,
    disablePagination: true,
    defaultSearchQuery: searchQuery,
  });

  return (
    <SearchPage<SearchData>
      title={t("find_your_program")}
      description={t("discover_your_programs_worldwide")}
      data={data}
      isLoading={isLoading}
      renderItem={(item: any) => <></>}
      onSearch={handleSearch}
      onPageChange={handlePageChange}
      currentPage={currentPage}
      pageSize={pageSize}
      filters={filters}
      filterValues={filterValues}
      onFilterChange={onFilterChange}
      isFiltersLoading={isFiltersLoading}
      searchBarPlaceholder={t("search_programs_universities")}
      customList={(data) => <DataSection isLoading={isLoading} data={data} />}
      defaultSearchQuery={searchQuery}
    />
  );
}
