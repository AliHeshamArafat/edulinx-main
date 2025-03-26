"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonComp from "@/components/functional/buttonComp";
import searchIcon from "@/assets/images/Search2.png";
import { useTranslations } from "next-intl";

interface SearchBarCompProps {
  placeholder?: string;
  buttonText?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (value: string) => void;
  defaultSearchQuery?: string;
}

export default function SearchBarComp({
  placeholder,
  buttonText = "search",
  className,
  onChange,
  onSearch,
  defaultSearchQuery,
}: SearchBarCompProps) {
  const [value, setValue] = useState(defaultSearchQuery || "");
  const t = useTranslations("general");

  return (
    <div className={`relative w-full md:max-w-[700px] mx-auto bg-white rounded-full shadow-sm overflow-hidden ${className}`}>
      <div className="flex items-center px-4 py-2">
        {/* search icon */}
        <div className="flex items-center justify-center w-6 h-6 mr-2">
          <Image src={searchIcon} alt="Search" width={20} height={20} />
        </div>

        {/* search input */}
        <input
          value={value}
          type="text"
          placeholder={placeholder || t("search_placeholder")}
          className="w-full py-1 px-2 outline-none text-text-secondary placeholder-text-secondary text-sm"
          onChange={(e) => {
            setValue(e.target.value);
            onChange?.(e);
          }}
        />
        {/* search button */}
        <ButtonComp className="bg-amber-300" onClick={() => onSearch?.(value)}>
          {t(buttonText)}
        </ButtonComp>
      </div>
    </div>
  );
}
