import { ArrowLeftOutlined } from "@ant-design/icons";
import ButtonComp from "@/components/functional/buttonComp";

interface HeaderProps {
  onSkip?: () => void;
  onBack: () => void;
  hideSkip?: boolean;
  hideTitle?: boolean;
  title?: string;
}

export default function Header({ onSkip, onBack, hideSkip = false, hideTitle = false, title = "Start Your Study Journey" }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-2">
        <ButtonComp onClick={onBack} className="bg-transparent border border-gray-300 rounded-lg max-w-7">
          <ArrowLeftOutlined className="text-sm" style={{ color: "black" }} />
        </ButtonComp>
        {!hideTitle && <h1 className="text-xl font-medium text-primary ml-2">{title}</h1>}
      </div>

      {!hideSkip && (
        <ButtonComp onClick={onSkip} types="ghost">
          Skip
        </ButtonComp>
      )}
    </div>
  );
}
