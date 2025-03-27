import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Program } from "@/types/program";
import FavoriteButton from "./FavoriteButton";
import { getImageUrl } from "@/services/general";
import location from "@/assets/images/location.png";
import { useTranslations } from "next-intl";
import { useRTL } from "@/hooks/useRTL";

interface ProgramCardProps {
  program: Program;
  isFavorite?: boolean;
  type?: "program" | "university";
  onButtonSuccess?: () => void;
  onButtonClick?: () => void;
}

export default function ProgramCard({
  program,
  isFavorite = false,
  type = "program",
  onButtonSuccess,
  onButtonClick,
}: ProgramCardProps) {
  const t = useTranslations("general");
  const { isRTL } = useRTL();


  // Fallback image for programs without photos
  const fallbackImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop";

  return (
    // Card container with hover effects
    <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-[var(--card-height)]">
      {/* Image section with program type badge and favorite button */}
      <div className="relative h-48 w-full">
        <Image src={getImageUrl(program?.photo) || fallbackImage} alt={program?.title_Localized} fill className="object-cover" />
        {/* Program type badge  */}
        <div className={`absolute top-3 ${!isRTL ? "left-3" : "right-3"}`}>
          <span className="bg-purple-100 text-primary px-3 py-1 rounded-full text-sm">{program?.type}</span>
        </div>

        {/* Favorite button - client component for handling interactions */}
        <FavoriteButton
          Id={program.uuid}
          type={type}
          initialFavorite={isFavorite}
          onButtonSuccess={onButtonSuccess}
          onButtonClick={onButtonClick}
        />
      </div>

      {/* Program details section */}
      <div className="p-4">
        {/* University information */}
        <div className="flex items-center gap-2 mb-2">
          <Image
            src={getImageUrl(program?.university?.logo) || fallbackImage}
            alt={program?.universityName}
            width={20}
            height={20}
            className="rounded-full"
          />
          <span className="text-gray-600 text-sm">{program?.university?.name_Localized}</span>

          {/* location */}
          <div className="flex items-center text-sm text-gray-500">
            <Image src={location} alt="Location" width={18} height={18} className="text-primary mr-1" />
            <span>{program?.university?.country?.name_Localized}</span>
          </div>
        </div>

        {/* Program title with 2-line clamp */}
        <h3 className="text-lg font-semibold mb-3 line-clamp-2">{program?.title_Localized}</h3>

        {/* separator */}
        <div className="h-px bg-gray-200 my-3"></div>

        {/* Footer: Program cost, duration, and CTA */}
        <div className="flex justify-between items-center">
          {/* Cost information */}
          <div>
            <p className="text-primary font-semibold">
              {program?.fees.toLocaleString()} {program?.feesCurrency}
              <span className="text-gray-500 text-sm font-normal">/{t("year")}</span>
            </p>
          </div>

          {/* Call-to-action button */}
          <Link href={`/programs/${program?.uuid}`} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
            {t("learn_now")}
          </Link>
        </div>
      </div>
    </div>
  );
}
