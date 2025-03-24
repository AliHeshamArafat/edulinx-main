import React from "react";
import { Pagination } from "antd";

interface ListPaginationCompProps<T> {
  data?: {
    result: T[];
    totalCount: number;
  };
  isLoading?: boolean;
  renderItem: (item: T) => React.ReactNode;
  onPageChange?: (page: number) => void;
  currentPage?: number;
  pageSize?: number;
  hideNumberOfResults?: boolean;
}

export default function ListPaginationComp<T>({
  data,
  isLoading,
  renderItem,
  onPageChange,
  currentPage,
  pageSize = 12,
  hideNumberOfResults = false,
}: ListPaginationCompProps<T>) {

  console.log(data, 'data');
  return (
    <div>
      {/* number of results */}
      {!hideNumberOfResults && (
        <div className="text-sm text-text-small mb-10 -mt-5">
          Showing <span className="font-medium text-black">{data?.totalCount} results</span>
        </div>
      )}

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array(6)
              .fill(null)
              ?.map((_, index) => <div key={index} className="h-[400px] bg-gray-100 animate-pulse rounded-lg" />)
          : data?.result?.map((item, index) => <div key={index}>{renderItem(item)}</div>)}
      </div>

      {/* Pagination */}
      {data && data.totalCount > 0 && (
        <div className="flex justify-center mt-8">
          <Pagination
            current={currentPage || 1}
            total={data.totalCount}
            pageSize={pageSize}
            onChange={onPageChange}
            showSizeChanger={false}
          />
        </div>
      )}
    </div>
  );
}
