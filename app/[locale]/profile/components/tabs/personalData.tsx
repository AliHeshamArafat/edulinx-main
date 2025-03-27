"use client";

import FormComp from "@/components/form/formComp";
import useFormData from "../form/useFormData";
import { useGetProfile } from "@/hooks/apis";
import PersonalDataSkeleton from "@/components/skeletons/personalDataSkeleton";
import { UPDATE_PROFILE } from "@/apis";
import { useEffect } from "react";
import { setUserAction } from "@/app/store/actions/authActions";
import { useTranslations } from "next-intl";

export default function PersonalData() {
  const t = useTranslations("general");
  const { formFields } = useFormData();
  const { data: profile, isLoading, refetch } = useGetProfile();

  const onSubmit = (values: any) => {
    UPDATE_PROFILE({ data: values }).then((res) => {
      if (!res?.success) return;
      refetch?.();
    });
  };

  useEffect(() => {
    if (profile?.data) setUserAction(profile?.data);
  }, [profile?.data]);

  if (isLoading) return <PersonalDataSkeleton />;

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">{t("personal_data")}</h2>

      {/* <h3 className="text-sm font-medium mb-4">Contact Details</h3> */}

      <FormComp
        initialValues={profile?.data}
        fileds={formFields}
        onFinish={onSubmit}
        layout="vertical"
        showSubmit
        submitText={t("save")}
        submitStyleTw="w-full bg-primary text-white py-3 rounded-lg font-medium mt-3 max-w-[200px]"
      />
    </div>
  );
}
