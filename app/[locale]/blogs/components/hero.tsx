import Image from "next/image";
import blogHero from "@/assets/images/blog-hero.png";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("general");

  return (
    <div className="relative h-[400px] w-full mb-10 rounded-xl overflow-hidden">
      <Image src={blogHero} alt="Blog Hero" fill className="object-cover rounded-xl" priority />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="absolute bottom-5 inset-0 flex flex-col justify-end p-8 main-container rounded-xl">
        <h1 className="text-white text-3xl font-bold mb-2">
          {t("how_to_choose_the_right_university")} <br /> {t("for_your_career_goals")}
        </h1>
      </div>
    </div>
  );
}
