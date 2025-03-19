import { useQuery } from "@tanstack/react-query";
import apiService from "@/services/api/apiService";
import { createQueryString } from "@/helpers/api";

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

// get client services
export const useGetClientServices = () => {
  return useQuery({
    queryKey: ["client-services"],
    queryFn: () => apiService.get({ resource: "clients/service-requests", skipErrorMessage: true }),
  });
};
