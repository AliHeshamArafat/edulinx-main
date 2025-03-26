import React from "react";
import { getTranslations } from "next-intl/server";
interface TitleCompProps {
  title: string;
}

export default async function TitleComp({ title }: TitleCompProps) {
  const t = await getTranslations("general");

  return <h2 className="text-[#353535] text-4xl font-medium leading-normal">{t(title)}</h2>;
}
