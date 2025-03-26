import { GET_SUGGESTED_UNIVERSITIES, GET_UNIVERSITIES } from "@/apis";
import TitleComp from "./titleComp";
import UniversityCard from "@/components/ui/universityCard";
import { University } from "@/types/university";
import { cookies } from "next/headers";
import Link from "next/link";
import ButtonComp from "@/components/functional/buttonComp";
import { getServerHeaders } from "@/utils/serverHeaders";
import { getTranslations } from "next-intl/server";

export default async function UniverstiesSection() {
  const t = await getTranslations("general");

  // First try to get suggested universities if user is authenticated
  let response = (await GET_SUGGESTED_UNIVERSITIES({
    config: await getServerHeaders(),
  })) || { data: { result: [] } };

  // If no suggested universities or not authenticated, get regular universities
  if (!response?.data?.result?.length) {
    response = (await GET_UNIVERSITIES({
      config: await getServerHeaders(),
    })) || { data: { result: [] } };
  }

  const universities = response?.data?.result;

  return (
    <div className="bg-primary-lighter py-16">
      <div className="main-container">
        <TitleComp title={response?.data?.result?.length > 0 ? "suggested_universities" : "universities"} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
          {universities?.slice(0, 3).map((university: University) => (
            <div className="w-full" key={university.uuid}>
              <UniversityCard university={university} />
            </div>
          ))}
        </div>

        {/* View All button */}
        <div className="flex justify-center mt-8">
          <Link href="/universities">
            <ButtonComp className="rounded-lg w-fit md:w-[300px]">{t("view_all")}</ButtonComp>
          </Link>
        </div>
      </div>
    </div>
  );
}
