import { DegreeType } from "@/types/program";
import { useTranslations } from "next-intl";
export const degreeOptions = [
  {
    id: DegreeType.Bachelor,
    label: DegreeType.Bachelor
  },
  {
    id: DegreeType.Associate,
    label: DegreeType.Associate
  },
  {
    id: DegreeType.Masters,
    label: DegreeType.Masters
  },
  {
    id: DegreeType.Doctorate,
    label: DegreeType.Doctorate
  }
];

interface DegreePreferenceProps {
  selectedDegree: string | null;
  onSelect: (id: string) => void;
}

export default function DegreePreference({ selectedDegree, onSelect }: DegreePreferenceProps) {
  const t = useTranslations("general");

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium mb-3">{t("select_your_degree_preference")}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {degreeOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`cursor-pointer text-center h-8 flex items-center justify-center rounded-xl border transition-colors ${
              selectedDegree === option.id
                ? 'border-primary bg-primary/5 text-primary'
                : 'border-gray-200 hover:border-primary/50'
            }`}
          >
            {t(option.label)}
          </div>
        ))}
      </div>
    </div>
  );
} 