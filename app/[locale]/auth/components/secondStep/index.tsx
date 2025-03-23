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
import { setSelectedCountryIdAction, updateRegisterDataAction } from "@/app/store/actions/registerActions";
import { DegreeType } from "@/types/program";

interface SecondStepProps {
  setType: (type: LoginType) => void;
}

export default function SecondStep({ setType }: SecondStepProps) {
  const { data: countries, isLoading } = useGetCountries();
  const isMounted = useIsMounted();

  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState<string | null>(null);
  const [selectedDegree, setSelectedDegree] = React.useState<string | null>(null);
  const [selectedYear, setSelectedYear] = React.useState<string | null>(null);

  const filteredCountries = React.useMemo(() => {
    return (
      countries?.data?.result.filter((country: Country) =>
        country.name_Localized.toLowerCase().includes(searchQuery.toLowerCase())
      ) || []
    );
  }, [countries, searchQuery]);

  const handleContinue = () => {
    // if (selectedCountry) setSelectedCountryIdAction(selectedCountry);
    // if (selectedDegree) updateRegisterDataAction({ degreeType: selectedDegree as DegreeType });
    // if (selectedYear) updateRegisterDataAction({ graduationYear: String(selectedYear) });

    setType("ThirdStep");
  };

  if (isLoading || !isMounted) return <SecondStepSkeleton />;

  return (
    <div className="w-full max-w-[1000px] mx-auto bg-white rounded-xl p-8 shadow-md">
      <Header onSkip={() => setType("ThirdStep")} onBack={() => setType("Register")} />

      <div className="mb-8">
        <h2 className="text-lg mb-6">Where Do You Want To Study?</h2>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      <CustomGrid<Country> data={filteredCountries} selectedItem={selectedCountry} onSelect={setSelectedCountry} />

      <DegreePreference selectedDegree={selectedDegree} onSelect={setSelectedDegree} />
      <GraduationYear selectedYear={selectedYear} onSelect={setSelectedYear} />

      <div className="flex justify-center mt-8">
        <ButtonComp
          className="rounded-lg w-auto md:w-[350px]"
          disabled={!selectedCountry && !selectedDegree && !selectedYear}
          onClick={handleContinue}
        >
          Continue
        </ButtonComp>
      </div>
    </div>
  );
}
