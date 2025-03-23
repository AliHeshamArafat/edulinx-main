import { GET_UNIVERSITIES } from "@/apis";
import TitleComp from "./titleComp";
import UniversityCard from "@/components/ui/universityCard";
import { University } from "@/types/university";

export default async function UniverstiesSection() {
  const universities = await GET_UNIVERSITIES({});

  return (
    <div className="bg-white py-16 hero-section-gap">
      <div className="main-container">
        <TitleComp title="Suggested Universities" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
          {universities?.data?.result.map((university: University) => (
            <div className="w-full" key={university.uuid}>
              <UniversityCard university={university} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
