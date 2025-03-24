import { GET_SUGGESTED_UNIVERSITIES, GET_UNIVERSITIES } from "@/apis";
import TitleComp from "./titleComp";
import UniversityCard from "@/components/ui/universityCard";
import { University } from "@/types/university";
import { cookies } from "next/headers";
import Link from "next/link";
import ButtonComp from "@/components/functional/buttonComp";

export default async function UniverstiesSection() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const response = token
    ? await GET_SUGGESTED_UNIVERSITIES({ config: { headers: { Authorization: `Bearer ${token}` } } })
    : await GET_UNIVERSITIES({});

  const universities = response?.data?.result;

  return (
    <div className="bg-primary-lighter py-16">
      <div className="main-container">
        <TitleComp title="Suggested Universities" />

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
            <ButtonComp className="rounded-lg w-fit md:w-[300px]">View All</ButtonComp>
          </Link>
        </div>
      </div>
    </div>
  );
}
