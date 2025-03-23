export default function LoginSkeleton() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl p-8 shadow-md animate-pulse">
      {/* Title Skeleton */}
      <div className="h-8 w-48 bg-gray-200 rounded mb-8 mx-auto"></div>

      {/* Form Fields Skeleton */}
      <div className="space-y-6">
        {/* Email Field */}
        <div>
          <div className="h-4 w-16 bg-gray-200 rounded mb-2"></div>
          <div className="h-11 w-full bg-gray-200 rounded-2xl"></div>
        </div>

        {/* Password Field */}
        <div>
          <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
          <div className="h-11 w-full bg-gray-200 rounded-2xl"></div>
        </div>

        {/* Submit Button */}
        <div className="h-12 w-full bg-gray-200 rounded-lg mt-4"></div>
      </div>

      {/* Social Login Divider */}
      <div className="mt-6 relative flex items-center justify-center">
        <div className="border-t border-gray-200 flex-grow"></div>
        <div className="mx-4 h-4 w-32 bg-gray-200 rounded"></div>
        <div className="border-t border-gray-200 flex-grow"></div>
      </div>

      {/* Social Login Buttons */}
      <div className="flex justify-center space-x-4 mt-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="h-12 w-24 bg-gray-200 rounded-lg"></div>
        ))}
      </div>

      {/* Sign up text */}
      <div className="mt-8 flex items-center justify-center gap-2">
        <div className="h-4 w-32 bg-gray-200 rounded"></div>
        <div className="h-4 w-16 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
} 