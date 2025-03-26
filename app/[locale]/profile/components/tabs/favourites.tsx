import React from "react";
import { useGetFavoritePrograms, useGetFavoriteUniversities } from "@/hooks/apis";
import ProgramCard from "@/components/ui/programCard";
import { REMOVE_FAVORITE_PROGRAM, REMOVE_FAVORITE_UNIVERSITY } from "@/apis";
import UniversityCard from "@/components/ui/universityCard";

export default function Favourites() {
  const { data: favoritePrograms, refetch: refetchFavoritePrograms } = useGetFavoritePrograms({});
  const { data: favoriteUniversities, refetch: refetchFavoriteUniversities } = useGetFavoriteUniversities({});

  const programs = favoritePrograms?.data?.result;
  const universities = favoriteUniversities?.data?.result;

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Favourites</h2>

      {/* favorite programs */}
      <div className="custom-shadow rounded-lg p-4">
        <h2 className="text-primary font-semibold mb-6">Programs</h2>
        <div className="grid grid-cols-1 min-[880px]:grid-cols-2 gap-8">
          {programs?.map((program: any) => (
            <ProgramCard
              key={program.uuid}
              program={program?.program}
              isFavorite={true}
              onButtonClick={() => {
                REMOVE_FAVORITE_PROGRAM({ id: program.uuid }).then(() => {
                  refetchFavoritePrograms();
                });
              }}
            />
          ))}
        </div>
      </div>

      {/* favorite universities */}
      <div className="custom-shadow rounded-lg p-4 mt-8">
        <h2 className="text-primary font-semibold mb-6">Universities</h2>
        <div className="grid grid-cols-1 min-[880px]:grid-cols-2 gap-8">
          {universities?.map((university: any) => (
            <UniversityCard
              key={university.uuid}
              university={university?.university}
              isFavorite={true}
              onButtonClick={() => {
                REMOVE_FAVORITE_UNIVERSITY({ id: university.uuid }).then(() => {
                  refetchFavoriteUniversities();
                });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
