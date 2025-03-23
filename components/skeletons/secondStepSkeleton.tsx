export default function SecondStepSkeleton() {
  return (
    <div className="w-full max-w-[1000px] mx-auto bg-white rounded-xl p-8 shadow-md animate-pulse">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
          <div className="h-6 w-48 bg-gray-200 rounded"></div>
        </div>
        <div className="w-16 h-8 bg-gray-200 rounded-lg"></div>
      </div>

      {/* Search Section Skeleton */}
      <div className="mb-8">
        <div className="h-6 w-48 bg-gray-200 rounded mb-6"></div>
        <div className="h-11 w-full bg-gray-200 rounded-full"></div>
      </div>

      {/* Countries Grid Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="flex flex-col items-center p-4 border rounded-lg">
            <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>

      {/* Degree Preference Skeleton */}
      <div className="mb-6">
        <div className="h-4 w-40 bg-gray-200 rounded mb-3"></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="h-8 bg-gray-200 rounded-xl"></div>
          ))}
        </div>
      </div>

      {/* Graduation Year Skeleton */}
      <div className="mb-6">
        <div className="h-4 w-32 bg-gray-200 rounded mb-3"></div>
        <div className="h-10 w-full bg-gray-200 rounded"></div>
      </div>

      {/* Button Skeleton */}
      <div className="flex justify-center mt-8">
        <div className="h-11 w-[350px] bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
} 