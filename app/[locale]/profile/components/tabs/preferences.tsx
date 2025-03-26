"use client";

import { useGetPreferredCountries, useGetPreferredFields } from "@/hooks/apis";
import CategoryCard from "@/components/ui/categoryCard";
import { Category } from "@/types/category";

export default function Preferences() {
  const { data: preferredCountries } = useGetPreferredCountries();
  const { data: preferredFields } = useGetPreferredFields();

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Preferences</h2>

      {/* Preferred Fields Section */}
      <div className="mb-8">
        <h3 className="text-sm font-medium mb-4">Preferred Fields of Study</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {preferredFields?.data?.result?.map((field: Category) => (
            <div key={field.uuid}>
              <CategoryCard
                category={field}
                selected={true}
                onClick={() => {
                  /* Add remove logic */
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Destination Section */}
      <div>
        <h3 className="text-sm font-medium mb-4">Destination</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {preferredCountries?.data?.result?.map((country: any) => (
            <div key={country.uuid}>
              <CategoryCard
                category={{
                  uuid: country.uuid,
                  name_Localized: country.name_Localized,
                  logo: country?.country?.logo,
                }}
                selected={true}
                onClick={() => {
                  /* Add remove logic */
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
