import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Program } from "@/types/program";
import FavoriteButton from "./FavoriteButton";
import { getImageUrl } from "@/services/general";

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  // Fallback image for programs without photos
  const fallbackImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop";

  return (
    // Card container with hover effects
    <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Image section with program type badge and favorite button */}
      <div className="relative h-48 w-full">
        <Image src={getImageUrl(program?.photo) || fallbackImage} alt={program?.title_Localized} fill className="object-cover" />
        {/* Program type badge  */}
        <div className="absolute top-3 left-3">
          <span className="bg-purple-100 text-primary px-3 py-1 rounded-full text-sm">{program?.type}</span>
        </div>

        {/* Favorite button - client component for handling interactions */}
        <FavoriteButton Id={program.uuid} />
      </div>

      {/* Program details section */}
      <div className="p-4">
        {/* University information */}
        <div className="flex items-center gap-2 mb-2">
          {/* TODO: Add university icon */}
          <span className="text-gray-600 text-sm">{program?.universityName}</span>
        </div>

        {/* Program title with 2-line clamp */}
        <h3 className="text-lg font-semibold mb-3 line-clamp-2">{program?.title_Localized}</h3>

        {/* Footer: Program cost, duration, and CTA */}
        <div className="flex justify-between items-center">
          {/* Cost information */}
          <div>
            <p className="text-primary font-semibold">
              {program?.fees.toLocaleString()} {program?.feesCurrency}
              <span className="text-gray-500 text-sm font-normal">/year</span>
            </p>
          </div>

          {/* Call-to-action button */}
          <Link href={`/programs/${program?.uuid}`} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
            Learn now
          </Link>
        </div>
      </div>
    </div>
  );
}
