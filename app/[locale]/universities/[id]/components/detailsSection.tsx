import { University } from "@/types/university";
import { EnvironmentOutlined } from "@ant-design/icons";
import { getTranslations } from "next-intl/server";

interface DetailsSectionProps {
  university: University;
}

export default async function DetailsSection({ university }: DetailsSectionProps) {
  const t = await getTranslations("general");
  return (
    <div className="py-16">
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="bg-[#fbfbfd] rounded-lg p-8 col-span-2">
            <h2 className="text-2xl font-semibold mb-6">{t("about_the_university")}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">{university.description_Localized}</p>

            {/* Location Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("location")}</h3>
              <div className="bg-gray-100 rounded-lg overflow-hidden h-[200px]">
                <div className="w-full h-full bg-gray-200">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=${university.latitude},${university.longitude}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Admission Requirements Section */}
          <div className="bg-primary-lighter rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">{t("admission_requirements")}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
