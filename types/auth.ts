import { DegreeType } from "./program";

export interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  degreeType?: DegreeType;
  gender?: string;
  graduationYear?: string;
}

export interface VerifyOtpData {
  credential: string; // email
  otp: string;
}

export interface ResetPasswordData {
  newPassword: string;
  confirmNewPassword: string;
}

export interface ProfileData {
  phone: string;
  gender: string;
  genderLocalized: string;
  degreeType: string;
  notificationStatus: boolean;
  notificationDdl: boolean;
  notificationRecommendation: boolean;
  uuid: string;
  dateCreated: string;
  dateLastLogin: string;
  fullName: string;
  email: string;
  state: string;
  stateLocalized: string;
  tempOTP: string;
  userType: string;
  userTypeLocalized: string;
  profilePicturePath: string;
}

export interface ProfileResponse {
  data: ProfileData;
  success: boolean;
  code: string;
}
