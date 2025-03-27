import Image from "next/image";
import { CloseOutlined } from "@ant-design/icons";
import { getImageUrl } from "@/services/general";

interface PreferenceCardProps {
  title: string;
  logo?: string;
  onDelete: () => void;
  isDeleting?: boolean;
}

export default function PreferenceCard({ title, logo, onDelete, isDeleting = false }: PreferenceCardProps) {
  return (
    <div>
      <div className="relative rounded-lg overflow-hidden bg-primary/5 border border-primary transition-all p-4 h-[110px] flex items-center justify-center">
        {/* Delete Button */}
        <button
          className="absolute cursor-pointer top-2 right-2 flex items-center justify-center w-6 h-6 rounded-full bg-red-100 hover:bg-red-200 transition-colors disabled:opacity-50"
          onClick={onDelete}
          disabled={isDeleting}
        >
          <CloseOutlined className="text-red-600 text-xs" />
        </button>

        <div className="flex flex-col items-center h-full justify-center">
          {/* Logo */}
          <div className="w-12 h-12 flex items-center justify-center mb-3">
            <Image src={getImageUrl(logo || "") || ""} alt={title} width={40} height={40} className="object-contain" />
          </div>
        </div>
      </div>
      {/* Title */}
      <h3 className="text-sm font-medium text-center text-primary line-clamp-2 mt-4">{title}</h3>
    </div>
  );
}
