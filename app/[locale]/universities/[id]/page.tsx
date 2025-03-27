import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { GET_UNIVERSITY_BY_ID } from "@/apis";
import HeroSection from "./components/heroSection";
import DetailsSection from "./components/detailsSection";
import { getServerHeaders } from "@/utils/serverHeaders";
import ProgramsSection from "./components/programsSection";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UniversityDetails({ params }: PageProps) {
  const { id } = await params;
  const t = await getTranslations("general");


  const response = await GET_UNIVERSITY_BY_ID({ id, config: await getServerHeaders() });
  const university = response?.data;

  const breadcrumbItems = [{ label: t("universities"), href: "/universities" }, { label: t("university_details") }];

  return (
    <div className="main-container py-6">
      <Breadcrumbs items={breadcrumbItems} />

      {/* hero */}
      <HeroSection university={university} />

      {/* about, location & requirements */}
      <DetailsSection university={university} />

      {/* programs for this university */}
      <ProgramsSection university={university} />

      {/* reviews */}
    </div>
  );
}
