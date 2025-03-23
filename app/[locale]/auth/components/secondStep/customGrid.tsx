import Image from "next/image";

interface CustomGridProps<T> {
  data: T[];
  selectedItem: string | null;
  onSelect: (uuid: string) => void;
}

export default function CustomGrid<T>({ data, selectedItem, onSelect }: CustomGridProps<T>) {
  const fallbackImage =
    "https://plus.unsplash.com/premium_photo-1670517733844-f3b8fd6de86c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmxhZ3N8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
      {data.map((el: any) => (
        <div
          key={el.uuid}
          className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all ${
            selectedItem === el.uuid ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary/50"
          }`}
          onClick={() => onSelect(el.uuid)}
        >
          <div className="w-12 h-12 rounded-full overflow-hidden mb-2">
            <Image
              src={el.logo ? `/${process.env.NEXT_PUBLIC_API_URL}${el.logo}` : fallbackImage}
              alt={el.name_Localized}
              width={50}
              height={50}
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium text-center">{el.name_Localized}</span>
        </div>
      ))}
    </div>
  );
}
