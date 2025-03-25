export default function ProgramCardSkeleton() {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100">
      {/* Image section skeleton */}
      <div className="relative h-48 w-full bg-gray-200 animate-pulse">
        {/* Program type badge skeleton */}
        <div className="absolute top-3 left-3">
          <div className="w-20 h-6 bg-purple-100/50 rounded-full"></div>
        </div>

        {/* Favorite button skeleton */}
        <div className="absolute top-3 right-3">
          <div className="w-8 h-8 bg-white/50 rounded-full"></div>
        </div>
      </div>

      {/* Program details section */}
      <div className="p-4">
        {/* University information skeleton */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Program title skeleton */}
        <div className="space-y-2 mb-3">
          <div className="w-full h-5 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-2/3 h-5 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Footer skeleton */}
        <div className="flex justify-between items-center">
          {/* Cost information skeleton */}
          <div className="space-y-1">
            <div className="w-24 h-5 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* CTA button skeleton */}
          <div className="w-24 h-9 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
} 