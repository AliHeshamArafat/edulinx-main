import React from "react";
import SearchBarComp from "@/app/[locale]/components/searchBarComp";
import ListPaginationComp from "@/components/functional/listPaginationComp";
import FiltersContainer from "@/components/ui/filtersContainer";

interface SearchPageProps<T> {
  title?: string;
  description?: string;
  data?: {
    result: T[];
    totalCount: number;
  };
  isLoading?: boolean;
  renderItem: (item: T) => React.ReactNode;
  onSearch: (value: string) => void;
  onPageChange: (page: number) => void;
  currentPage: number;
  pageSize?: number;
  filters: Record<
    string,
    {
      label: string;
      placeholder: string;
      options: { value: string; label: string }[];
      isLoading: boolean;
    }
  >;
  filterValues: Record<string, string>;
  onFilterChange: (key: string) => (value: string) => void;
  isFiltersLoading: boolean;
  searchBarPlaceholder?: string;
}

export default function SearchPage<T>({
  title,
  description,
  data,
  isLoading,
  renderItem,
  onSearch,
  onPageChange,
  currentPage,
  pageSize,
  filters,
  filterValues,
  onFilterChange,
  isFiltersLoading,
  searchBarPlaceholder = "Search programs...",
}: SearchPageProps<T>) {
  return (
    <div>
      <div className="bg-primary-lighter py-10">
        <div className="main-container">
          <div className="text-2xl font-bold">{title}</div>
          <div className="text-sm text-text-small mt-2">{description}</div>

          <SearchBarComp
            placeholder={searchBarPlaceholder}
            className="md:max-w-full mt-10"
            onSearch={(value) => onSearch(value)}
            onChange={(e) => e.target.value === "" && onSearch("")}
          />

          <div className="mt-6">
            <FiltersContainer
              filters={filters}
              values={filterValues}
              onChange={onFilterChange}
              isFiltersLoading={isFiltersLoading}
            />
          </div>
        </div>
      </div>

      <div className="main-container !my-10">
        <ListPaginationComp
          data={data}
          isLoading={isLoading}
          renderItem={renderItem}
          onPageChange={onPageChange}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}
