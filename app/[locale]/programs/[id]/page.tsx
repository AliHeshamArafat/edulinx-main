import { GET_PROGRAM_BY_ID } from "@/apis";
import ProgramHeader from "./components/ProgramHeader";
import ProgramInfo from "./components/ProgramInfo";
import AboutProgram from "./components/AboutProgram";
import Requirements from "./components/Requirements";
import Image from "next/image";
import Breadcrumb from "@/assets/images/Home.png";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProgramDetails({ params }: PageProps) {
  const { id } = await params;
  const program = await GET_PROGRAM_BY_ID({ id });

  return (
    <div className="">
      <div className="main-container py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 my-6">
          <Image src={Breadcrumb} alt="breadcrumb" width={10} height={10} />
          <span className="text-sm text-gray-600">Program Details</span>
        </div>

        {/* Main Content */}
        <div className="">
          <ProgramHeader program={program.data} />
          <ProgramInfo program={program.data} />
          {/* <AboutProgram program={program.data} />
          <Requirements program={program.data} /> */}
        </div>
      </div>
    </div>
  );
}
