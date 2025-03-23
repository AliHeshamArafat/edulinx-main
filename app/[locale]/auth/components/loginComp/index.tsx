import FormComp from "@/components/form/formComp";
import React from "react";
import useFormData from "./form/useFormData";
import { LOGIN } from "@/apis";
import SocialLoginSection from "../socialLoginSection";
import { LoginType } from "../../page";
import useIsMounted from "@/hooks/isMounted";
import LoginSkeleton from "@/components/skeletons/loginSkeleton";
import { loginAction } from "@/app/store/actions/authActions";
import { redirect } from "next/navigation";
import { useAppSelector } from "@/app/store/store";

interface LoginCompProps {
  setType: (type: LoginType) => void;
}

export default function LoginComp({ setType }: LoginCompProps) {
  const { formFields } = useFormData();
  const isMounted = useIsMounted();

  const { token, isAuthenticated, user } = useAppSelector((state) => state.auth);

  console.log(user, "user");
  console.log(token, "token");
  console.log(isAuthenticated, "isAuthenticated");

  const onSubmit = (values: any) => {
    LOGIN(values).then((res) => {
      if (!res.success) return;

      loginAction(res?.data);
      redirect("/");
    });
  };

  if (!isMounted) return <LoginSkeleton />;

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl p-8 shadow-md">
      <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Hi, Welcome!</h2>

      <FormComp
        fileds={formFields}
        onFinish={onSubmit}
        layout="vertical"
        showSubmit
        submitText="Login"
        submitStyleTw="w-full bg-primary text-white py-3 rounded-lg font-medium"
      />

      {/* Social login section */}
      <SocialLoginSection />

      {/* Already have an account section */}
      <div className="mt-8 text-center">
        <p className="text-text-small">
          Don&apos;t have an account?
          <span className="text-primary font-medium ml-1 cursor-pointer" onClick={() => setType("Register")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
