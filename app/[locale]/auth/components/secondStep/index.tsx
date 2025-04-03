"use client";
import React from "react";
import { useGetCountries } from "@/hooks/apis";
import SearchBar from "./searchBar";
import DegreePreference from "./degreePreference";
import GraduationYear from "./graduationYear";
import Header from "./header";
import { Country } from "@/types/country";
import { LoginType } from "../../page";
import CustomGrid from "./customGrid";
import ButtonComp from "@/components/functional/buttonComp";
import useIsMounted from "@/hooks/isMounted";
import SecondStepSkeleton from "@/components/skeletons/secondStepSkeleton";
import { DegreeType } from "@/types/program";
import { ADD_PREFERRED_COUNTRY, UPDATE_PROFILE } from "@/apis";
import { useAppSelector } from "@/app/store/store";
import { removeNullUndefined } from "@/helpers/general";
import { useTranslations } from "next-intl";
interface SecondStepProps {
  setType: (type: LoginType) => void;
}

export default function SecondStep({ setType }: SecondStepProps) {
  const { data: countries, isLoading } = useGetCountries();
  const isMounted = useIsMounted();
  const t = useTranslations("general");

  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCountries, setSelectedCountries] = React.useState<string[]>([]);
  const [selectedDegree, setSelectedDegree] = React.useState<string | null>(null);
  const [selectedYear, setSelectedYear] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const { user } = useAppSelector((state) => state.auth);

  const filteredCountries = React.useMemo(() => {
    return (
      countries?.data?.result.filter((country: Country) =>
        country.name_Localized.toLowerCase().includes(searchQuery.toLowerCase())
      ) || []
    );
  }, [countries, searchQuery]);

  const handleCountrySelect = (uuid: string) => {
    setSelectedCountries(prev => {
      if (prev.includes(uuid)) {
        return prev.filter(id => id !== uuid);
      }
      return [...prev, uuid];
    });
  };

  const handleContinue = async () => {
    setIsSubmitting(true);
    try {
      // Handle country preferences
      if (selectedCountries.length > 0) {
        await Promise.all(
          selectedCountries.map(countryUuid =>
            ADD_PREFERRED_COUNTRY({ params: { countryUuid } })
          )
        );
      }

      // Handle profile update
      if (selectedDegree || selectedYear) {
        await UPDATE_PROFILE({
          data: removeNullUndefined({
            degreeType: selectedDegree as DegreeType,
            graduationYear: selectedYear,
            email: user?.email,
            phone: "01234567891", //TODO: needs to be optional from backend
            fullName: user?.fullName,
          }),
        });
      }

      setType("ThirdStep");
    } catch (error) {
      console.error("Error updating preferences:", error);
      // You might want to add error handling/notification here
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading || !isMounted) return <SecondStepSkeleton />;

  return (
    <div className="w-full max-w-[1000px] mx-auto bg-white rounded-xl p-8 shadow-md">
      <Header onSkip={() => setType("ThirdStep")} onBack={() => setType("Register")} title={t("where_do_you_want_to_study")} />

      <div className="mb-8">
        <h2 className="text-lg mb-6">{t("where_do_you_want_to_study")}</h2>
        <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder={t("search_countries")} />
      </div>

      <CustomGrid<Country> 
        data={filteredCountries} 
        selectedItems={selectedCountries} 
        onSelect={handleCountrySelect} 
      />

      <DegreePreference selectedDegree={selectedDegree} onSelect={setSelectedDegree} />
      <GraduationYear selectedYear={selectedYear} onSelect={setSelectedYear} />

      <div className="flex justify-center mt-8">
        <ButtonComp
          className="rounded-lg w-auto md:w-[350px]"
          disabled={(!selectedCountries.length && !selectedDegree && !selectedYear) || isSubmitting}
          onClick={handleContinue}
          loading={isSubmitting}
        >
          {t("continue")}
        </ButtonComp>
      </div>
    </div>
  );
}
