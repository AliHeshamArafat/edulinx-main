import React from "react";
import Image from "next/image";
import Link from "next/link";
import { University } from "@/types/university";
import globe from "@/assets/images/globe.png";
import location from "@/assets/images/location.png";
import FavoriteButton from "./FavoriteButton";
import { getImageUrl } from "@/services/general";

interface UniversityCardProps {
  university: University;
}

export default function UniversityCard({ university }: UniversityCardProps) {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow p-4 relative">
      {/* Header with Logo and Favorite */}
      <div className="flex items-start justify-between mb-4">
        {/* Logo and Name Section */}
        <div className="flex items-start gap-3">
          <div className="relative">
            <Image
              src={getImageUrl(university.logo)}
              alt={university.name_Localized}
              height={97}
              width={97}
              className="object-contain rounded-[5px]"
            />
          </div>
          <div>
            <h3 className="font-[600] text-base mb-1">{university.name_Localized}</h3>
            {/* location */}
            <div className="flex items-center text-sm text-gray-500">
              <Image src={location} alt="Location" width={18} height={18} className="text-primary mr-1" />
              <span>{university.countryName}</span>
            </div>

            <div className="flex items-center gap-1 mb-4 mt-2">
              <div className="">
                <Image src={globe} alt="Worldwide Ranking" width={18} height={18} className="text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-[600]">Top {university.ranking}%</span>
                <span className="text-gray-500 text-[11px]">worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Favorite Button */}
        <FavoriteButton Id={university.uuid} />
      </div>

      {/* Rankings Section */}
      {/* border */}
      <div className="border border-gray-200 h-[1px] mb-4"></div>

      <div className="flex items-center gap-1 mb-4">
        <div className="flex justify-between items-center w-full">
          <div />

          {/* Learn More Button */}
          <Link
            href={`/universities/${university.uuid}`}
            className="block bg-primary text-white text-center px-4 py-2 rounded-lg hover:bg-primary/90 text-sm"
          >
            Learn now
          </Link>
        </div>
      </div>

      {/* Price Range */}
      {/* <div className="text-sm text-gray-600 mb-4">$12,000–$20,000/year</div> */}
    </div>
  );
}
