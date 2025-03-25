import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types/category";
import { getImageUrl } from "@/services/general";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const fallbackImage = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop";

  return (
    // <Link href={`/programs?category=${category.uuid}`} className="block group">
      <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all p-6 text-center">
        {/* Icon/Image */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
            {category.logo ? (
              <Image
                src={getImageUrl(category.logo) || fallbackImage}
                alt={category.name_Localized}
                width={32}
                height={32}
                className="object-contain"
              />
            ) : (
              <div className="w-8 h-8 bg-primary/20 rounded-full" />
            )}
          </div>
        </div>

        {/* Category Name */}
        <h3 className="text-gray-800 font-medium group-hover:text-primary transition-colors">{category.name_Localized}</h3>
      </div>
    // </Link>
  );
}
