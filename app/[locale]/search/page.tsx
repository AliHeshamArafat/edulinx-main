"use client";

import { useGetSearchData } from "@/hooks/apis";
import useSearch from "@/hooks/useSearch";
import { SearchData } from "@/types/search";
import SearchPage from "@/components/page/searchPage";
import DataSection from "./components/dataSection";
import { useAppSelector } from "@/app/store/store";
export default function Search() {
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
      title="Find Your Program"
      description="Discover Your Programs Worldwide"
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
      searchBarPlaceholder="Search programs, universities..."
      customList={(data) => <DataSection isLoading={isLoading} data={data} />}
      defaultSearchQuery={searchQuery}
    />
  );
}
