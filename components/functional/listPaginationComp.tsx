import React from "react";
import { Pagination, ConfigProvider } from "antd";
import { useTranslations, useLocale } from "next-intl";
import { useRTL } from "@/hooks/useRTL";

interface ListPaginationCompProps<T> {
  data?: {
    result: T[];
    totalCount?: number;
    genericTotalCount: number;
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
  const t = useTranslations("general");
  const { isRTL } = useRTL();

  return (
    <div>
      {/* number of results */}
      {!hideNumberOfResults && (
        <div className="text-sm text-text-small mb-10 -mt-5">
          {t("showing")}{" "}
          <span className="font-medium text-black">
            {data?.totalCount} {t("results")}
          </span>
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
      {data && data.genericTotalCount > 0 && (
        <div className="flex justify-center mt-8">
          <ConfigProvider direction={isRTL ? "rtl" : "ltr"}>
            <Pagination
              current={currentPage || 1}
              total={data.genericTotalCount}
              pageSize={pageSize}
              onChange={onPageChange}
              showSizeChanger={false}
            />
          </ConfigProvider>
        </div>
      )}
    </div>
  );
}
