"use client";

import Image from "next/image";
import facebookLogo from "@/assets/images/Facebook.png";
import googleLogo from "@/assets/images/Google logo.png";
import appleLogo from "@/assets/images/Apple.png";
import ButtonComp from "@/components/functional/buttonComp";
import { useTranslations } from "next-intl";
// Define social login providers as an array
const socialProviders = [
  { id: "facebook", image: facebookLogo, alt: "Facebook" },
  { id: "google", image: googleLogo, alt: "Google" },
  { id: "apple", image: appleLogo, alt: "Apple" },
];

export default function SocialLoginSection() {
  const t = useTranslations("general");

  const handleSocialLogin = (provider: string) => {
    // Implement social login logic here
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="mt-6">
      <div className="relative flex items-center justify-center">
        <div className="border-t border-[#E0E0E0] flex-grow"></div>
        <span className="mx-4 text-text-small text-sm">{t("or_register_with")}</span>
        <div className="border-t border-[#E0E0E0] flex-grow"></div>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        {socialProviders.map((provider) => (
          <ButtonComp
            key={provider.id}
            onClick={() => handleSocialLogin(provider.id)}
            className="bg-transparent border border-gray-200 rounded-lg p-3 flex items-center justify-center w-24 h-12"
          >
            <Image src={provider.image} alt={provider.alt} width={18} height={18} />
          </ButtonComp>
        ))}
      </div>
    </div>
  );
}
