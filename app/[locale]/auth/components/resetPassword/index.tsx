import Cookies from "js-cookie";
import apiService from "@/services/api/apiService";
import FormComp, { MyFormOptions, MyFormProps } from "@/components/form/formComp";
import { LoginType } from "../../page";
import { RESET_PASSWORD } from "@/apis";
import Header from "../secondStep/header";
import { useTranslations } from "next-intl";
interface ResetPasswordProps {
  setType?: (type: LoginType) => void;
  className?: string;
  formCompProps?: MyFormProps<any>;
}

export default function ResetPassword({ setType, className, formCompProps }: ResetPasswordProps) {
  const t = useTranslations("general");

  const fields: MyFormOptions = [
    {
      name: "newPassword",
      type: "input",
      innerProps: { placeholder: t("enter_password") },
      rules: [{ required: true, message: t("password_is_required") }],
      required: true,
    },
    {
      name: "confirmNewPassword",
      type: "input",
      innerProps: { placeholder: t("confirm_password") },
      rules: [{ required: true, message: t("confirm_password_is_required") }],
      required: true,
    },
  ];

  const onFinish = (values: any) => {
    RESET_PASSWORD({ data: values }).then((res) => {
      if (!res?.success) return;
      setType?.("Login");
    });
  };

  return (
    <div className={`w-full max-w-md mx-auto bg-white rounded-xl p-8 shadow-md ${className}`}>
      <Header hideSkip onBack={() => setType?.("Login")} title={t("reset_password")} />

      <FormComp
        fileds={fields}
        onFinish={onFinish}
        layout="vertical"
        showSubmit
        submitText={t("reset_password")}
        submitStyleTw="w-full mt-5"
        className="!mt-8"
        {...formCompProps}
      />
    </div>
  );
}
