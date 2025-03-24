import React from "react";
import dayjs from "dayjs";
import { StudentApplication } from "@/types/student";
import Link from "next/link";

interface StudentAppCardProps {
  application: StudentApplication;
}

export default function StudentAppCard({ application }: StudentAppCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Submitted":
        return "bg-blue-100 text-blue-800";
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow p-4">
      {/* Header with Program Name and Status */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{application.programName}</h3>
          <p className="text-sm text-gray-500">Applied on: {dayjs(application.dateCreated).format("MMMM D, YYYY")}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
          {application.status_Localized}
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Application Details */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Application ID:</span>
          <span className="font-medium text-gray-700">{application.uuid.slice(0, 8)}</span>
        </div>
        {/* <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Time Slot ID:</span>
          <span className="font-medium text-gray-700">{application.timeSlotUuid.slice(0, 8)}</span>
        </div> */}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center w-full mt-4">
        <div />

        {/* Learn More Button */}
        <Link
          href={`/programs/${application.programUuid}`}
          className="block bg-primary text-white text-center px-4 py-2 rounded-lg hover:bg-primary/90 text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
