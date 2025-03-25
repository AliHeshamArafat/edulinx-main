export default function ProfileHeaderSkeleton() {
  return (
    <div className="flex flex-col items-center mb-6">
      {/* Avatar Skeleton */}
      <div className="relative w-24 h-24 mb-3">
        <div className="w-full h-full rounded-full bg-gray-200 animate-pulse" />
      </div>

      {/* Name Skeleton */}
      <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />
    </div>
  );
} 