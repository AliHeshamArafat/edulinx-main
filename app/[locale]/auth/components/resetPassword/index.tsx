import Cookies from "js-cookie";
import apiService from "@/services/api/apiService";
import FormComp, { MyFormOptions, MyFormProps } from "@/components/form/formComp";
import { LoginType } from "../../page";
import { RESET_PASSWORD } from "@/apis";

interface ResetPasswordProps {
  setType?: (type: LoginType) => void;
  className?: string;
  formCompProps?: MyFormProps<any>;
}

export default function ResetPassword({ setType, className, formCompProps }: ResetPasswordProps) {
  const fields: MyFormOptions = [
    {
      name: "newPassword",
      type: "input",
      innerProps: { placeholder: "Enter Password" },
      rules: [{ required: true, message: "Please enter your password" }],
      required: true,
    },
    {
      name: "confirmNewPassword",
      type: "input",
      innerProps: { placeholder: "Confirm Password" },
      rules: [{ required: true, message: "Please confirm your password" }],
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
      <FormComp
        fileds={fields}
        onFinish={onFinish}
        layout="vertical"
        showSubmit
        submitText="Reset Password"
        submitStyleTw="w-full mt-5"
        className="!mt-8"
        {...formCompProps}
      />
    </div>
  );
}
