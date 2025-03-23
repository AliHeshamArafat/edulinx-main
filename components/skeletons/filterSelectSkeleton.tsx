export default function FilterSelectSkeleton() {
  return (
    <div className="flex flex-col animate-pulse">
      {/* Label skeleton */}
      <div className="h-4 w-16 bg-gray-200 rounded mb-1"></div>
      
      {/* Select box skeleton */}
      <div className="h-10 w-[150px] bg-gray-200 rounded-full border border-gray-200"></div>
    </div>
  );
} 