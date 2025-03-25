"use client";

import { useAppSelector } from "@/app/store/store";
import FormComp from "@/components/form/formComp";
import useFormData from "../form/useFormData";

export default function PersonalData() {
  const { user } = useAppSelector((state) => state.auth);
  const { formFields } = useFormData();

  console.log(user, "user");

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Personal Data</h2>

      <h3 className="text-sm font-medium mb-4">Contact Details</h3>

      <FormComp
        initialValues={user}
        fileds={formFields}
        onFinish={onSubmit}
        layout="vertical"
        showSubmit
        submitText="Save"
        submitStyleTw="w-full bg-primary text-white py-3 rounded-lg font-medium mt-3 max-w-[200px]"
      />
    </div>
  );
}
