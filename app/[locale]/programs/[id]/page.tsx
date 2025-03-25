import { GET_PROGRAM_BY_ID } from "@/apis";
import ProgramHeader from "./components/ProgramHeader";
import ProgramInfo from "./components/ProgramInfo";
import AboutProgram from "./components/AboutProgram";
import Requirements from "./components/Requirements";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getServerHeaders } from "@/utils/serverHeaders";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProgramDetails({ params }: PageProps) {
  const { id } = await params;
  const program = await GET_PROGRAM_BY_ID({ id, config: await getServerHeaders() });

  const breadcrumbItems = [{ label: "Programs", href: "/programs" }, { label: "Program Details" }];

  return (
    <div className="">
      <div className="main-container py-6">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Main Content */}
        <div className="">
          <ProgramHeader program={program?.data} />
          <ProgramInfo program={program?.data} />
          {/* <AboutProgram program={program.data} />
          <Requirements program={program.data} /> */}
        </div>
      </div>
    </div>
  );
}
