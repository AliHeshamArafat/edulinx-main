import { Program } from "@/types/program";
import Image from "next/image";

import duration from "@/assets/images/clock-circle.png";
import calendar from "@/assets/images/calendar 01.png";
import fees from "@/assets/images/money bag-dollar.png";
import deadline from "@/assets/images/send.png";
import ranking from "@/assets/images/globe.png";
import { useTranslations } from "next-intl";

interface ProgramInfoItem {
  icon: any;
  title: string | ((value: any) => string);
  subtitle: string;
}

export default function ProgramInfo({ program }: { program: Program }) {
  const t = useTranslations("general");

  
const programInfoItems: ProgramInfoItem[] = [
  {
    icon: duration,
    title: (duration: number) => `${duration} ${t("month")}`,
    subtitle: t("duration"),
  },
  {
    icon: calendar,
    title: (startDate: string) => {
      const date = new Date(startDate);
      return `${date.toLocaleString("default", { month: "long" })} ${date.getFullYear()}`;
    },
    subtitle: t("start_date"),
  },
  {
    icon: fees,
    title: (fees: number) => `$${fees.toLocaleString()}/year`,
    subtitle: t("fees"),
  },
  {
    icon: deadline,
    title: (expiryDate: string) => {
      const date = new Date(expiryDate);
      return `${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`;
    },
    subtitle: t("deadline"),
  },
  {
    icon: ranking,
    title: (ranking: number) => `${t("top")} ${ranking}%`,
    subtitle: t("worldwide"),
  },
];


  return (
    <div className="flex items-center justify-center md:justify-between p-4 bg-gray-50 rounded-lg mb-8 flex-wrap gap-4">
      {programInfoItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2 bg-[#fff] rounded-lg p-2 w-[200px]">
          <Image src={item.icon} alt={item.subtitle} width={20} height={20} />
          <div className="flex flex-col">
            <span className="text-sm font-medium">
              {typeof item.title === "function"
                ? item.title(
                    index === 1
                      ? program.startDate
                      : index === 2
                      ? program.fees
                      : index === 3
                      ? program.expiryDate
                      : program.ranking
                  )
                : item.title}
            </span>
            <span className="text-xs text-gray-500">{item.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
