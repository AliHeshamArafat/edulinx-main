import { Select } from "antd";

interface GraduationYearProps {
  selectedYear: string | null;
  onSelect: (year: string) => void;
}

export default function GraduationYear({ selectedYear, onSelect }: GraduationYearProps) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium mb-3">
        Graduation Year <span className="text-gray-500">(optional)</span>
      </h3>
      <Select
        placeholder="Select year"
        className="w-full"
        options={years.map((year) => ({ value: year, label: year }))}
        allowClear
        value={selectedYear}
        onChange={onSelect}
      />
    </div>
  );
}
