export default function FavouritesSkeleton() {
  return (
    <div className="bg-white rounded-lg p-6 animate-pulse">
      {/* Header */}
      <div className="h-7 w-32 bg-gray-200 rounded mb-6" />

      {/* Programs Section */}
      <div className="custom-shadow rounded-lg p-4">
        <div className="h-6 w-24 bg-gray-200 rounded mb-6" />
        <div className="grid grid-cols-1 min-[880px]:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-[var(--card-height)] rounded-lg bg-gray-200" />
          ))}
        </div>
      </div>

      {/* Universities Section */}
      <div className="custom-shadow rounded-lg p-4 mt-8">
        <div className="h-6 w-28 bg-gray-200 rounded mb-6" />
        <div className="grid grid-cols-1 min-[880px]:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-[var(--card-height)] rounded-lg bg-gray-200" />
          ))}
        </div>
      </div>
    </div>
  );
} 