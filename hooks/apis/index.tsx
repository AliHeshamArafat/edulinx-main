import { useQuery } from "@tanstack/react-query";
import apiService from "@/services/api/apiService";
import { createQueryString } from "@/helpers/api";
import {
  GET_PROGRAMS,
  GET_TIME_SLOTS,
  GET_COUNTRIES,
  GET_CATEGORIES,
  GET_UNIVERSITIES,
  GET_BLOGS,
  GET_BLOG_BY_ID,
  GET_STUDENT_APPLICATIONS,
} from "@/apis";

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
    staleTime: 0,
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

// get blogs
export const useGetBlogs = ({ params }: { params?: QueryParams }) => {
  return useQuery({
    queryKey: ["blogs", params],
    queryFn: () => GET_BLOGS({ params }),
  });
};

// get blog by id
export const useGetBlogById = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => GET_BLOG_BY_ID({ id }),
  });
};

// get student applications
export const useGetStudentApplications = ({ params }: { params?: QueryParams }) => {
  return useQuery({
    queryKey: ["student-applications", params],
    queryFn: () => GET_STUDENT_APPLICATIONS({ params }),
  });
};
