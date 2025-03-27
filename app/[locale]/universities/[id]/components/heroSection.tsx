import { University } from "@/types/university";
import React from "react";
import Image from "next/image";
import { getImageUrl } from "@/services/general";
import globe from "@/assets/images/globe-white.png";
import location from "@/assets/images/location-white.png";
import { useTranslations } from "next-intl";
interface HeroSectionProps {
  university: University;
}

export default function HeroSection({ university }: HeroSectionProps) {
  const t = useTranslations("general");
  return (
    <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={getImageUrl(university.photo) || ""}
          alt={university.name_Localized}
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full main-container flex flex-col justify-end pb-8">
        {/* University Logo and Name */}
        <div className="flex flex-col gap-4 mb-6 w-fit">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20">
              <Image
                src={getImageUrl(university.logo) || ""}
                alt={`${university.name_Localized} logo`}
                fill
                className="object-contain p-2"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{university.name_Localized}</h1>

              {/* location */}
              <div className="flex items-center text-sm text-white mt-3 gap-2">
                <Image src={location} alt="Location" width={18} height={18} className="text-primary" />
                <span>{university.countryName}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8 mb-5">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 h-[60px]">
            <Image src={globe} alt="Worldwide Ranking" width={24} height={24} className="text-primary" />
            <div className="text-white">
              <div className="text-lg font-semibold">
                {t("top")} {university.ranking}%
              </div>
              <div className="text-sm text-white/80">{t("worldwide")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
