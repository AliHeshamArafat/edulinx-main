import React from "react";
import FormComp from "@/components/form/formComp";
import useFormDataChangePass from "../form/useFormDataChangePass";
import { RESET_PASSWORD } from "@/apis";
import { Form } from "antd";
import { useTranslations } from "next-intl";

export default function ChangePassword() {
  const t = useTranslations("general");
  const formRef = Form.useForm()[0];
  const { formFields } = useFormDataChangePass();

  const onSubmit = (values: any) => {
    RESET_PASSWORD({ data: values }).then((res) => {
      if (!res?.success) return;

      formRef.resetFields();
    });
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">{t("change_password")}</h2>
      <FormComp
        form={formRef}
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
