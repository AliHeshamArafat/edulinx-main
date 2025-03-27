"use client";

import { useAppSelector } from "@/app/store/store";
import Image from "next/image";
import tickIcon from "@/assets/images/tick.png";
import idIcon from "@/assets/images/id card.png";
import mailIcon from "@/assets/images/mail.png";
import ButtonComp from "@/components/functional/buttonComp";
import { useTranslations } from "next-intl";
interface SuccessModalProps {
  onDone: () => void;
}

export default function SuccessModal({ onDone }: SuccessModalProps) {
  const { user } = useAppSelector((state) => state.auth);
  const t = useTranslations("general");

  const personalInfo = [
    {
      label: t("name"),
      value: user.fullName,
      icon: user.fullName.charAt(0),
      isLetter: true,
    },
    {
      label: t("student_id"),
      value: user.uuid,
      icon: idIcon,
      isLetter: false,
    },
    {
      label: t("mail"),
      value: user.email,
      icon: mailIcon,
      isLetter: false,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-auto">
      {/* Success Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
          <Image src={tickIcon} alt="Success" width={40} height={40} />
        </div>
      </div>

      {/* Success Message */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{t("success")}</h2>
        <p className="text-gray-600">{t("congratulations_timeslot_is_booked")}</p>
      </div>

      {/* Done Button */}
      <ButtonComp className="w-full rounded-lg mb-10" onClick={onDone}>
        {t("done")}
      </ButtonComp>

      {/* Personal Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold mb-4">{t("personal_information")}</h3>

        <div className="space-y-4">
          {personalInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                {item.isLetter ? (
                  <span className="text-primary font-medium">{item.icon}</span>
                ) : (
                  <Image src={item.icon} alt={item.label} width={20} height={20} className="text-primary" />
                )}
              </div>
              <div>
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="text-gray-700">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
