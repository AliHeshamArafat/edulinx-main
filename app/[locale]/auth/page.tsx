"use client";

import Register from "./components/register";
import LoginComp from "./components/loginComp";
import { useEffect, useState } from "react";
import SecondStep from "./components/secondStep";
import ThirdStep from "./components/thirdStep";
import VerifyOtp from "./components/verifyOtp";
import ResetPassword from "./components/resetPassword";
import { useAppSelector } from "@/app/store/store";
import { redirect } from "next/navigation";

export type LoginType = "Login" | "Register" | "VerifyOtp" | "ForgotPassword" | "ResetPassword" | "SecondStep" | "ThirdStep";

export default function AuthPage() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const [type, setType] = useState<LoginType>("Login");

  // redirect to home page if user is authenticated
  // useEffect(() => {
  //   if (isAuthenticated) redirect("/");
  // }, [isAuthenticated]);

  // reset type when unmount
  // useEffect(() => {
  //   return () => setType("Login");
  // }, []);

  // if (isAuthenticated) return null;

  return (
    <div className="flex justify-center items-center min-h-screen py-10 bg-primary">
      {type === "Login" && <LoginComp setType={setType} />}
      {type === "Register" && <Register setType={setType} />}
      {type === "VerifyOtp" && <VerifyOtp setType={setType} />}
      {type === "SecondStep" && <SecondStep setType={setType} />}
      {type === "ThirdStep" && <ThirdStep setType={setType} />}
      {type === "ResetPassword" && <ResetPassword setType={setType} />}
    </div>
  );
}
