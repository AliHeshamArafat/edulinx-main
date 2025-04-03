"use client";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ButtonComp from "@/components/functional/buttonComp";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useRTL } from "@/hooks/useRTL";
import Image from "next/image";
import usFlag from "@/assets/svgs/us-flag.svg";
import egFlag from "@/assets/svgs/eg-flag.svg";
import { setCookie } from "@/services/cookies";

export default function LangSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const { isRTL } = useRTL();

  const items = [
    { key: "en", label: "English", flag: usFlag },
    { key: "ar", label: "العربية", flag: egFlag },
  ];

  const currentLanguage = items.find((item) => item.key === locale) || items[0];

  const handleLanguageChange = ({ key }: { key: string }) => {
    const newPathname = pathname.replace(`/${locale}`, `/${key}`);
    router.push(newPathname);
    setCookie("lang", key);
  };

  return (
    <Dropdown menu={{ items, onClick: handleLanguageChange }}>
      <ButtonComp types="ghost" className="border-[1px] border-gray-300 p-2 rounded-lg">
        <span className="flex items-center">
          <span className="rounded-full w-5 h-5 flex items-center justify-center overflow-hidden">
            <Image src={currentLanguage.flag} alt={currentLanguage.label} width={20} height={20} className="object-cover" />
          </span>
          <span className={`${isRTL ? "mr-2" : "ml-2"} text-sm`}>{currentLanguage.key.toUpperCase()}</span>
        </span>
        <DownOutlined className={isRTL ? "mr-2" : "ml-2"} />
      </ButtonComp>
    </Dropdown>
  );
}
