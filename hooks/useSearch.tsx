import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { removeNullUndefined } from "@/helpers/general";

interface FilterConfig {
  key: string;
  label: string;
  placeholder: string;
  queryKey?: string[];
  queryFn?: () => Promise<any>;
  transformData?: (data: any) => { value: string; label: string }[];
  options?: { value: string; label: string }[];
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

  // Only create queries for filters that need API calls
  const filterQueries = filterConfig
    .filter(filter => filter.queryFn)
    .map((filter) =>
      useQuery({
        queryKey: filter.queryKey!,
        queryFn: filter.queryFn!,
        select: filter.transformData,
      })
    );

  const isFiltersLoading = filterQueries.some((query) => query.isLoading);

  const filters = filterConfig.reduce((acc, filter, index) => {
    // If filter has manual options, use those
    if (filter.options) {
      return {
        ...acc,
        [filter.key]: {
          label: filter.label,
          placeholder: filter.placeholder,
          options: filter.options,
          isLoading: false,
        },
      };
    }

    // Otherwise, use API data
    const queryIndex = filterConfig.slice(0, index).filter(f => f.queryFn).length;
    return {
      ...acc,
      [filter.key]: {
        label: filter.label,
        placeholder: filter.placeholder,
        options: filterQueries[queryIndex]?.data || [],
        isLoading: filterQueries[queryIndex]?.isLoading || false,
      },
    };
  }, {});

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
