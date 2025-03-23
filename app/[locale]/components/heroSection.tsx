"use client";

import { useAppSelector } from "@/app/store/store";
import SearchBarComp from "./searchBarComp";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("general");

  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="bg-primary-lighter-alt py-16 h-[500px] flex flex-col gap-8 items-center justify-center px-4 hero-section-gap">
      {/* title */}
      <h1 className="text-4xl font-bold text-center">{t("heroSection_title", { name: user?.fullName || "" })}</h1>

      {/* search bar */}
      <SearchBarComp />
    </div>
  );
}
