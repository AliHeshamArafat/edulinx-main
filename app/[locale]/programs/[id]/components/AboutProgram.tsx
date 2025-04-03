import { Program } from "@/types/program";
import { getTranslations } from "next-intl/server";
interface ProgramAboutSection {
  uuid: string;
  type: string;
  typeLocalized: string;
  description_Localized: string;
}

export default async function AboutProgram({ program }: { program: Program }) {
  const t = await getTranslations("general");
  return (
    <div className="mb-8 bg-[#fbfbfd] p-4 rounded-lg h-full">
      <h2 className="text-lg font-semibold mb-4">{t("about_program")}</h2>
      
      {/* Main Program Description */}
      <p className="text-gray-600 mb-6">{program.description_Localized}</p>
      
      {/* Additional Program Details */}
      {program.programAbout && program.programAbout.length > 0 && (
        <div className="space-y-4">
          {(program.programAbout as ProgramAboutSection[]).map((section) => (
            <div key={section.uuid} className="pt-4">
              <h3 className="font-medium mb-2">{section.typeLocalized}</h3>
              <p className="text-gray-600">{section.description_Localized}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
