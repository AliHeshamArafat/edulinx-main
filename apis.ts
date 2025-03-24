import apiService from "@/services/api/apiService";
import { StudentApplicationCreate } from "./types/student";
import { setCookie } from "./services/cookies";
import { RegisterData, ResetPasswordData, VerifyOtpData } from "./types/auth";
import { AxiosRequestConfig } from "axios";

interface QueryParams {
  [key: string]: string | number;
}

// login
export const LOGIN = async (data: any) => {
  return apiService.post({ resource: "auth/authenticate", data, config: { skipUnauthorized: true } });
};

// register
export const REGISTER = async ({ data }: { data: RegisterData }) => {
  return apiService.post({ resource: "auth/register", data, config: { skipUnauthorized: true } });
};

// get programs
export const GET_PROGRAMS = async ({ params }: { params?: QueryParams }) => {
  return apiService.get({ resource: "Programs", params });
};

// get suggested programs
export const GET_SUGGESTED_PROGRAMS = async ({ config }: { config?: AxiosRequestConfig }) => {
  return apiService.get({ resource: "public/suggestedPrograms", config });
};

// get categories
export const GET_CATEGORIES = async () => {
  return apiService.get({ resource: "fields" });
};

// get universities
export const GET_UNIVERSITIES = async ({ params, config }: { params?: QueryParams; config?: AxiosRequestConfig }) => {
  return apiService.get({ resource: "Universities", params, config });
};

// get suggested universities
export const GET_SUGGESTED_UNIVERSITIES = async ({ config }: { config?: AxiosRequestConfig }) => {
  return apiService.get({ resource: "public/suggestedUniversities", config });
};

// get program by id
export const GET_PROGRAM_BY_ID = async ({ id }: { id: string }) => {
  return apiService.get({ resource: `Programs/${id}` });
};

// get time slots
export const GET_TIME_SLOTS = async () => {
  return apiService.get({ resource: `TimeSlots` });
};

// create student application
export const CREATE_STUDENT_APPLICATION = async (data: StudentApplicationCreate) => {
  return apiService.post({ resource: `public/applications`, data });
};

// get countries
export const GET_COUNTRIES = async () => {
  return apiService.get({ resource: `public/countries` });
};

// verify otp
export const VERIFY_OTP = async ({ data }: { data: VerifyOtpData }) => {
  return apiService.post({ resource: `account/validate-otp`, data });
};

// resend otp
export const RESEND_OTP = async ({ params }: { params: { email: string } }) => {
  console.log(params, "params");
  return apiService.post({ resource: `account/resend-otp`, params });
};

// reset password
export const RESET_PASSWORD = async ({ data }: { data: ResetPasswordData }) => {
  return apiService.post({ resource: `account/reset-password`, data, config: { skipUnauthorized: true } });
};

// add favorite program
export const ADD_FAVORITE_PROGRAM = async ({ params }: { params: { programUuid: string } }) => {
  return apiService.post({ resource: `public/favoritePrograms`, params });
};

// // remove favorite program
// export const REMOVE_FAVORITE_PROGRAM = async ({ params }: { params: { programUuid: string } }) => {
//   return apiService.delete({ resource: `public/favoritePrograms`, params });
// };

// add favorite university
export const ADD_FAVORITE_UNIVERSITY = async ({ params }: { params: { universityUuid: string } }) => {
  return apiService.post({ resource: `public/favoriteUniversities`, params });
};

// get blogs
export const GET_BLOGS = async ({ params }: { params?: QueryParams }) => {
  return apiService.get({ resource: `public/blogs`, params });
};

// get blog by id
export const GET_BLOG_BY_ID = async ({ id }: { id: string }) => {
  return apiService.get({ resource: `public/blogs/${id}` });
};

// get student applications
export const GET_STUDENT_APPLICATIONS = async ({ params }: { params?: QueryParams }) => {
  return apiService.get({ resource: `public/student-applications`, params });
};
