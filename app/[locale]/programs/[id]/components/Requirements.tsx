import { Program } from "@/types/program";
import { getTranslations } from "next-intl/server";
interface ProgramRequirement {
  uuid: string;
  type: string;
  typeLocalized: string;
  requirement_Localized: string;
}

export default async function Requirements({ program }: { program: Program }) {
  const t = await getTranslations("general");
  // Group requirements by type
  const groupedRequirements =
    (program.programRequirement as ProgramRequirement[])?.reduce((acc, req) => {
      const type = req.type || "Other";
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(req);
      return acc;
    }, {} as Record<string, ProgramRequirement[]>) || {};

  return (
    <div className="bg-purple-50 rounded-lg p-6 h-full">
      <h2 className="text-lg font-semibold mb-6">{t("requirements")}</h2>

      <div className="space-y-6">
        {Object.entries(groupedRequirements).map(([type, requirements]) => (
          <div key={type}>
            <h3 className="font-medium mb-3">{type} </h3>
            <ul className="space-y-2">
              {requirements.map((req) => (
                <li key={req.uuid} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-primary">•</span>
                  <span>{req.requirement_Localized}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
