import React from "react";
import { LoginType } from "../../page";
import Header from "../secondStep/header";
import SearchBar from "../secondStep/searchBar";
import { useGetCategories } from "@/hooks/apis";
import CustomGrid from "../secondStep/customGrid";
import { Category } from "@/types/category";
import ButtonComp from "@/components/functional/buttonComp";
import { useAppSelector } from "@/app/store/store";

interface ThirdStepProps {
  setType: (type: LoginType) => void;
}

export default function ThirdStep({ setType }: ThirdStepProps) {
  const { data: categories } = useGetCategories();

  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const { registerData } = useAppSelector((state) => state.register);

  const filteredCategories = React.useMemo(() => {
    return (
      categories?.data?.result.filter((category: Category) =>
        category.name_Localized.toLowerCase().includes(searchQuery.toLowerCase())
      ) || []
    );
  }, [categories, searchQuery]);

  const handleContinue = () => {
    // console.log(registerData, "registerData");

    // if (!registerData) return;

    setType("Login");
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto bg-white rounded-xl p-8 shadow-md">
      <Header onSkip={() => setType("Login")} onBack={() => setType("SecondStep")} />

      <div className="mb-8">
        <h2 className="text-lg mb-6">What Do You Want To Study?</h2>
        <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search programs..." />
      </div>

      <CustomGrid<Category> data={filteredCategories} selectedItem={selectedCategory} onSelect={setSelectedCategory} />

      <div className="flex justify-center mt-8">
        <ButtonComp className="rounded-lg w-auto md:w-[350px]" disabled={!selectedCategory} onClick={handleContinue}>
          Continue
        </ButtonComp>
      </div>
    </div>
  );
}
