import Image from "next/image";
import { CloseOutlined } from "@ant-design/icons";
import { getImageUrl } from "@/services/general";

interface CustomGridProps<T> {
  data: T[];
  selectedItems: string[];
  onSelect: (uuid: string) => void;
  onDelete?: (uuid: string) => void;
  showDelete?: boolean;
}

export default function CustomGrid<T>({ data, selectedItems, onSelect, onDelete, showDelete = false }: CustomGridProps<T>) {
  const fallbackImage =
    "https://plus.unsplash.com/premium_photo-1670517733844-f3b8fd6de86c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmxhZ3N8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
      {data.map((el: any) => (
        <div
          key={el.uuid}
          className={`relative flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all ${
            selectedItems.includes(el.uuid) ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary/50"
          }`}
          onClick={() => onSelect(el.uuid)}
        >
          {/* Delete Button */}
          {showDelete && selectedItems.includes(el.uuid) && (
            <button
              className="absolute top-2 right-2 p-1 rounded-full bg-red-100 hover:bg-red-200 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onDelete?.(el.uuid);
              }}
            >
              <CloseOutlined className="text-red-600 text-xs" />
            </button>
          )}

          <div className="w-12 h-12 rounded-full mb-2">
            <Image
              src={getImageUrl(el.logo) || fallbackImage}
              alt={el.name_Localized}
              width={50}
              height={50}
              className="object-cover w-12 h-12 rounded-full"
            />
          </div>
          <span className="text-sm font-medium text-center">{el.name_Localized}</span>
        </div>
      ))}
    </div>
  );
}
