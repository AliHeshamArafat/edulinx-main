"use client";

import { useGetPreferredCountries, useGetPreferredFields } from "@/hooks/apis";
import { REMOVE_PREFERRED_COUNTRY, REMOVE_PREFERRED_FIELD } from "@/apis";
import { useState } from "react";
import PreferenceCard from "@/components/ui/preferenceCard";
import { useTranslations } from "next-intl";

export default function Preferences() {
  const t = useTranslations("general");
  const { data: preferredCountries, refetch: refetchCountries } = useGetPreferredCountries();
  const { data: preferredFields, refetch: refetchFields } = useGetPreferredFields();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteCountry = async (id: string) => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await REMOVE_PREFERRED_COUNTRY({ id });
      await refetchCountries();
    } catch (error) {
      console.error("Error removing country:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteField = async (id: string) => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await REMOVE_PREFERRED_FIELD({ id });
      await refetchFields();
    } catch (error) {
      console.error("Error removing field:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">{t("preferences")}</h2>

      {/* Preferred Fields Section */}
      <div className="mb-8">
        <h3 className="text-sm font-medium mb-4">{t("preferred_fields_of_study")}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {preferredFields?.data?.result?.map((field: any) => (
            <PreferenceCard
              key={field.uuid}
              title={field?.fieldName}
              logo={field.logo}
              onDelete={() => handleDeleteField(field.uuid)}
              isDeleting={isDeleting}
            />
          ))}
        </div>
      </div>

      {/* Destination Section */}
      <div>
        <h3 className="text-sm font-medium mb-4">{t("destination")}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {preferredCountries?.data?.result?.map((country: any) => (
            <PreferenceCard
              key={country.uuid}
              title={country?.country?.name_Localized}
              logo={country?.country?.logo}
              onDelete={() => handleDeleteCountry(country.uuid)}
              isDeleting={isDeleting}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
