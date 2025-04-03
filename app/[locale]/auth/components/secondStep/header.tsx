import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import ButtonComp from "@/components/functional/buttonComp";
import { useRTL } from "@/hooks/useRTL";
import { useTranslations } from "next-intl";

interface HeaderProps {
  onSkip?: () => void;
  onBack: () => void;
  hideSkip?: boolean;
  hideTitle?: boolean;
  title?: string;
}

export default function Header({
  onSkip,
  onBack,
  hideSkip = false,
  hideTitle = false,
  title,
}: HeaderProps) {
  const { isRTL } = useRTL();
  const t = useTranslations("general");

  const backButton = (
    <ButtonComp onClick={onBack} className="bg-transparent border border-gray-300 rounded-lg max-w-7">
      <ArrowLeftOutlined className="text-sm" style={{ color: "black" }} />
    </ButtonComp>
  );

  const titleElement = !hideTitle && <h1 className="text-xl font-medium text-primary ml-2">{title}</h1>;

  const skipButton = !hideSkip && (
    <ButtonComp onClick={onSkip} types="ghost">
      {t("skip")}
    </ButtonComp>
  );

  return (
    <div className="flex justify-between items-center mb-8">
      {/* Left side content */}
      <div className="flex items-center gap-2">
        {!isRTL ? (
          <>
            {backButton}
            {titleElement}
          </>
        ) : (
          <>{skipButton || <div></div>}</>
        )}
      </div>

      {/* Right side content */}
      <div className="flex items-center gap-2">
        {isRTL ? (
          <>
            {titleElement}
            {backButton}
          </>
        ) : (
          <>{skipButton}</>
        )}
      </div>
    </div>
  );
}
