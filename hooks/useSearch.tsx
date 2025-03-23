import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { removeNullUndefined } from "@/helpers/general";

interface FilterConfig {
  key: string;
  label: string;
  placeholder: string;
  queryKey: string[];
  queryFn: () => Promise<any>;
  transformData: (data: any) => { value: string; label: string }[];
}

interface UseSearchProps<T> {
  pageSize?: number;
  apiHook?: any;
  params?: Record<string, any>;
  filterConfig?: FilterConfig[];
}

export default function useSearch<T>({ pageSize = 3, apiHook, params = {}, filterConfig = [] }: UseSearchProps<T>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});

  // Fetch filter options using React Query
  const filterQueries = filterConfig.map((filter) =>
    useQuery({
      queryKey: filter.queryKey,
      queryFn: filter.queryFn,
      select: filter.transformData,
    })
  );

  // Add this to track filter loading state
  const isFiltersLoading = filterQueries.some((query) => query.isLoading);

  const filters = filterConfig.reduce(
    (acc, filter, index) => ({
      ...acc,
      [filter.key]: {
        label: filter.label,
        placeholder: filter.placeholder,
        options: filterQueries[index].data || [],
        isLoading: filterQueries[index].isLoading,
      },
    }),
    {}
  );

  const handleFilterChange = (filterKey: string) => (value: string) => {
    setFilterValues((prev) => ({ ...prev, [filterKey]: value }));
    setCurrentPage(1);
  };

  // Main data query
  const { data, isLoading } = apiHook({
    params: removeNullUndefined({
      pageNo: currentPage,
      rowCount: pageSize,
      keyword: searchQuery,
      ...filterValues,
      ...params,
    }),
  });

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    data: data?.data,
    isLoading,
    isFiltersLoading,
    searchQuery,
    currentPage,
    pageSize,
    filters,
    filterValues,
    handleSearch,
    handlePageChange,
    onFilterChange: handleFilterChange,
  };
}
