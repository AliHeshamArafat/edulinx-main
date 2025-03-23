import { CloseCircleOutlined } from "@ant-design/icons";

interface SelectedFiltersProps {
  filters: Record<
    string,
    {
      label: string;
      placeholder: string;
      options: { value: string; label: string }[];
      isLoading: boolean;
    }
  >;
  values: Record<string, string>;
  onRemove: (key: string) => void;
}

export default function SelectedFilters({ filters, values, onRemove }: SelectedFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(values).map(([key, value]) => {
        if (!value) return null;

        const filterOption = filters[key]?.options.find((opt) => opt.value === value);
        if (!filterOption) return null;

        return (
          <div key={`${key}-${value}`} className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm">
            <span>{filterOption.label}</span>
            <button
              onClick={() => onRemove(key)}
              className="hover:text-gray-700 cursor-pointer min-h-full flex items-center justify-center"
            >
              <CloseCircleOutlined className="text-base" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
