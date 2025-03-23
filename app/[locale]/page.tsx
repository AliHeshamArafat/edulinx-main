import { getTranslations } from "next-intl/server";
import CategoriesSection from "./components/categoriesSection";
import HeroSection from "./components/heroSection";
import ProgramsSuggestions from "./components/programsSuggestions";
import UniverstiesSection from "./components/universtiesSection";

export default async function Home() {
  // const t = await getTranslations("general");

  return (
    <>
      <HeroSection />

      <ProgramsSuggestions />

      <CategoriesSection />

      <UniverstiesSection />
    </>
  );
}
