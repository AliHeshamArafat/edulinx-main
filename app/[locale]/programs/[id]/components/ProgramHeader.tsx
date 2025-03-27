"use client";

import ButtonComp from "@/components/functional/buttonComp";
import useModal from "@/hooks/useModal";
import { Program } from "@/types/program";
import Image from "next/image";
import TimeSlotsModal from "./timeSlotsModal";
import { getImageUrl } from "@/services/general";
import { useTranslations } from "next-intl";

export default function ProgramHeader({ program }: { program: Program }) {
  const t = useTranslations("general");
  const { renderModal, showModal, hideModal } = useModal({ modalProps: { footer: null } });

  const handleApplyNow = () => {
    showModal({
      content: <TimeSlotsModal hideModal={hideModal} programUuid={program.uuid} />,
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 bg-[#f8f8fa] rounded-lg p-6">
      <div className="w-full md:w-auto">
        <h1 className="text-xl md:text-2xl font-semibold mb-2">{program.title_Localized}</h1>
        {/* <p className="text-sm text-gray-500 mb-4">Transform your career with our comprehensive MBA program.</p> */}

        {/* University and Field */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-gray-600">{program.universityName}</span>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-600">{program.fieldName}</span>
        </div>

        {/* Fees */}
        <div className="mb-4">
          <div className="text-lg md:text-xl font-semibold">
            {program.fees.toLocaleString()}/{t("year")}
          </div>
        </div>

        {/* Apply Now Button */}
        <ButtonComp className="w-full md:w-auto rounded-lg" onClick={handleApplyNow}>
          {t("apply_now")}
        </ButtonComp>
      </div>

      {/* image */}
      <div className="relative w-full md:w-[400px] h-[200px] md:h-[250px] rounded-lg overflow-hidden">
        <Image src={getImageUrl(program.photo) || ""} alt={program.title_Localized} fill className="object-cover" />
      </div>

      {renderModal()}
    </div>
  );
}
