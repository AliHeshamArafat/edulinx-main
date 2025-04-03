import { Select } from "antd";
import { useTranslations } from "next-intl";
interface GraduationYearProps {
  selectedYear: string | null;
  onSelect: (year: string) => void;
}

export default function GraduationYear({ selectedYear, onSelect }: GraduationYearProps) {
  const t = useTranslations("general");
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium mb-3">
        {t("graduation_year")} <span className="text-gray-500">({t("optional")})</span>
      </h3>
      <Select
        placeholder={t("select_year")}
        className="w-full"
        options={years.map((year) => ({ value: year, label: year }))}
        allowClear
        value={selectedYear}
        onChange={onSelect}
      />
    </div>
  );
}
