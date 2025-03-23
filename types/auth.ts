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

