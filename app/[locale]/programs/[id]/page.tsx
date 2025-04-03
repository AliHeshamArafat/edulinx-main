import { GET_PROGRAM_BY_ID } from "@/apis";
import ProgramHeader from "./components/ProgramHeader";
import ProgramInfo from "./components/ProgramInfo";
import AboutProgram from "./components/AboutProgram";
import Requirements from "./components/Requirements";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getServerHeaders } from "@/utils/serverHeaders";
import { getTranslations } from "next-intl/server";
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProgramDetails({ params }: PageProps) {
  const { id } = await params;
  const program = await GET_PROGRAM_BY_ID({ id, config: await getServerHeaders() });
  const t = await getTranslations("general");

  const breadcrumbItems = [{ label: t("programs"), href: "/programs" }, { label: t("program_details") }];

  return (
    <div className="">
      <div className="main-container py-6">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Main Content */}
        <div className="">
          <ProgramHeader program={program?.data} />
          <ProgramInfo program={program?.data} />
          <div className="flex flex-col md:flex-row gap-4 pb-4">
            <div className="w-full md:w-2/3">
              <AboutProgram program={program?.data} />
            </div>
            <div className="w-full md:w-1/3">
              <Requirements program={program?.data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
