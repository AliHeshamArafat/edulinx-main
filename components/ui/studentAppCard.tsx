import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";
import { StudentApplication } from "@/types/student";
import { getImageUrl } from "@/services/general";
import location from "@/assets/images/location.png";

interface StudentAppCardProps {
  application: StudentApplication;
}

export default function StudentAppCard({ application }: StudentAppCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Submitted":
        return "bg-yellow-400 text-white";
      case "Approved":
        return "bg-green-400 text-white";
      case "Rejected":
        return "bg-red-400 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  const fallbackImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop";

  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow p-4">
      {/* Image section with status badge */}
      <div className="relative h-48 w-full">
        <Image
          src={getImageUrl(application.program?.photo) || fallbackImage}
          alt={application.program?.title_Localized}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Application details section */}
      <div className="pt-3">
        {/* Status badge */}
        <div className="mb-4 mt-2">
          <span className={`px-3 py-1 rounded-lg text-sm font-medium ${getStatusColor(application.status)}`}>
            {application.status_Localized}
          </span>
        </div>
        {/* University information */}
        <div className="flex items-center gap-4 mb-2">
          <div className="flex items-center gap-2">
            {/* university logo */}
            <Image
              src={getImageUrl(application.program?.university?.logo) || fallbackImage}
              alt={application.program?.universityName}
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="text-gray-600 text-sm">{application.program?.universityName}</span>
          </div>
          {/* location */}
          <div className="flex items-center text-sm text-gray-500">
            <Image src={location} alt="Location" width={18} height={18} className="text-primary mr-1" />
            <span>{application.program?.university?.countryName}</span>
          </div>
        </div>

        {/* Program title */}
        <h3 className="text-lg font-semibold mb-3 line-clamp-2">{application.programName}</h3>

        {/* separator */}
        <div className="h-px bg-gray-200 my-3"></div>

        {/* Footer: Fees and CTA */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-primary font-semibold">
              {application.program?.fees.toLocaleString()} {application.program?.feesCurrency}
              <span className="text-gray-500 text-sm font-normal">/year</span>
            </p>
          </div>

          <Link
            href={`/programs/${application.programUuid}`}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
