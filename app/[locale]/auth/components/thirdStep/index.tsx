import React from "react";
import { LoginType } from "../../page";
import Header from "../secondStep/header";
import SearchBar from "../secondStep/searchBar";
import { useGetCategories } from "@/hooks/apis";
import CustomGrid from "../secondStep/customGrid";
import { Category } from "@/types/category";
import ButtonComp from "@/components/functional/buttonComp";
import { ADD_PREFERRED_FIELD } from "@/apis";
import { useRouter } from "next/navigation";

interface ThirdStepProps {
  setType: (type: LoginType) => void;
}

export default function ThirdStep({ setType }: ThirdStepProps) {
  const router = useRouter();
  const { data: categories } = useGetCategories();

  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const filteredCategories = React.useMemo(() => {
    return (
      categories?.data?.result.filter((category: Category) =>
        category.name_Localized.toLowerCase().includes(searchQuery.toLowerCase())
      ) || []
    );
  }, [categories, searchQuery]);

  const handleCategorySelect = (uuid: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(uuid)) {
        return prev.filter(id => id !== uuid);
      }
      return [...prev, uuid];
    });
  };

  const handleContinue = async () => {
    if (!selectedCategories.length) return;

    setIsSubmitting(true);
    try {
      await Promise.all(
        selectedCategories.map(fieldUuid =>
          ADD_PREFERRED_FIELD({ params: { fieldUuid } })
        )
      );
      router.push("/");
    } catch (error) {
      console.error("Error adding preferred fields:", error);
      // You might want to add error handling/notification here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto bg-white rounded-xl p-8 shadow-md">
      <Header onSkip={() => router.push("/")} onBack={() => setType("SecondStep")} />

      <div className="mb-8">
        <h2 className="text-lg mb-6">What Do You Want To Study?</h2>
        <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search programs..." />
      </div>

      <CustomGrid<Category> 
        data={filteredCategories} 
        selectedItems={selectedCategories} 
        onSelect={handleCategorySelect} 
      />

      <div className="flex justify-center mt-8">
        <ButtonComp 
          className="rounded-lg w-auto md:w-[350px]" 
          disabled={!selectedCategories.length || isSubmitting}
          onClick={handleContinue}
          loading={isSubmitting}
        >
          Continue
        </ButtonComp>
      </div>
    </div>
  );
}
