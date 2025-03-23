import React from "react";
import TitleComp from "./titleComp";
import { GET_CATEGORIES } from "@/apis";
import CategoryCard from "@/components/ui/categoryCard";
import { Category } from "@/types/category";

export default async function CategoriesSection() {
  const categories = await GET_CATEGORIES();

  return (
    <div className="bg-white py-16 hero-section-gap">
      <div className="main-container">
        <TitleComp title="Categories" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-11">
          {categories?.data?.result.map((category: Category) => (
            <div className="w-full" key={category.uuid}>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
