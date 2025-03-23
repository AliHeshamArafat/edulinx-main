"use client";

import FormComp from "@/components/form/formComp";
import { LoginType } from "../../page";
import SocialLoginSection from "../socialLoginSection";
import useFormData from "./form/useFormData";
import { setRegisterDataAction } from "@/app/store/actions/registerActions";
import { REGISTER } from "@/apis";

interface RegisterProps {
  setType: (type: LoginType) => void;
}

export default function Register({ setType }: RegisterProps) {
  const { formFields } = useFormData();

  const onSubmit = (values: any) => {
    setRegisterDataAction(values);

    REGISTER({ data: values }).then((res) => {
      if (!res?.success) return;

      setType("VerifyOtp");
    });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl p-8 shadow-md">
      <h2 className="text-2xl font-semibold text-primary mb-4">Create your free account</h2>
      <p className="text-text-small mb-6 text-sm">
        Enjoy the various best courses we have, choose the category according to your wishes.
      </p>

      <FormComp
        fileds={formFields}
        onFinish={onSubmit}
        layout="vertical"
        showSubmit
        submitText="Continue"
        submitStyleTw="w-full bg-primary text-white py-3 rounded-lg font-medium"
      />

      {/* Social login section */}
      <SocialLoginSection />

      {/* Already have an account section */}
      <div className="mt-8 text-center">
        <p className="text-text-small">
          Already have an account?
          <span className="text-primary font-medium ml-1 cursor-pointer" onClick={() => setType("Login")}>
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}
