import { useQuery } from "@tanstack/react-query";
import apiService from "@/services/api/apiService";
import { createQueryString } from "@/helpers/api";
import { GET_PROGRAMS, GET_TIME_SLOTS, GET_COUNTRIES, GET_CATEGORIES, GET_UNIVERSITIES } from "@/apis";

interface QueryParams {
  [key: string]: string | number;
}

// units filtered
// export const useGetUnitsFiltered = ({ params }: { params: QueryParams }) => {
//   return useQuery({
//     queryKey: ["units-filtered", params],
//     queryFn: () => {
//       const queryString = createQueryString(params);
//       return apiService.get({ resource: `units?${queryString}` });
//     },
//   });
// };

// get programs
export const useGetPrograms = ({ params }: { params?: QueryParams }) => {
  return useQuery({
    queryKey: ["programs", params],
    queryFn: () => GET_PROGRAMS({ params }),
  });
};

// get time slots
export const useGetTimeSlots = () => {
  return useQuery({
    queryKey: ["time-slots"],
    queryFn: () => GET_TIME_SLOTS(),
  });
};

// get countries
export const useGetCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: () => GET_COUNTRIES(),
  });
};

// get categories
export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => GET_CATEGORIES(),
  });
};

// get universities
export const useGetUniversities = ({ params }: { params?: QueryParams }) => {
  return useQuery({
    queryKey: ["universities", params],
    queryFn: () => GET_UNIVERSITIES({ params }),
  });
};
