import React from "react";
import TitleComp from "./titleComp";
import { GET_CATEGORIES } from "@/apis";
import CategoryCard from "@/components/ui/categoryCard";
import { Category } from "@/types/category";
import { getServerHeaders } from "@/utils/serverHeaders";
import { getTranslations } from "next-intl/server";

export default async function CategoriesSection() {
  const t = await getTranslations("general");
  const response = await GET_CATEGORIES({ config: await getServerHeaders() });

  const categories = response?.data?.result;

  return (
    <div className="bg-white py-16 hero-section-gap">
      <div className="main-container">
        <TitleComp title={t("categories")} />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-11">
          {categories?.slice(0, 8).map((category: Category) => (
            <div className="w-full" key={category.uuid}>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
