import React from "react";

export default function PersonalDataSkeleton() {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="h-7 w-40 bg-gray-200 rounded animate-pulse mb-6"></div>

      <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>

      <div className="space-y-6">
        {/* Form Fields Skeleton */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}

        {/* Submit Button Skeleton */}
        <div className="mt-6">
          <div className="h-12 w-[200px] bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
