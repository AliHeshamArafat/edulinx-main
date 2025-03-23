import { Select } from "antd";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterSelectProps {
  label: string;
  placeholder?: string;
  options: FilterOption[];
  value?: string;
  onChange: (value: string) => void;
  loading?: boolean;
}

export default function FilterSelect({ label, placeholder, options, value, onChange, loading }: FilterSelectProps) {
  return (
    <div className="flex flex-col w-[170px]">
      <label className="text-sm text-gray-600 mb-1">{label}</label>
      <Select
        value={value || undefined}
        onChange={onChange}
        placeholder={placeholder}
        className="custom-select"
        options={options}
        loading={loading}
      />
    </div>
  );
}
