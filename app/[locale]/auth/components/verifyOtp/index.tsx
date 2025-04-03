import ButtonComp from "@/components/functional/buttonComp";
import FormComp, { MyFormOptions } from "@/components/form/formComp";
import { LoginType } from "../../page";
import { LOGIN, RESEND_OTP, VERIFY_OTP } from "@/apis";
import { useAppSelector } from "@/app/store/store";
import { toast } from "react-toastify";
import { loginAction } from "@/app/store/actions/authActions";
import { useTranslations } from "next-intl";
interface VerifyOtpProps {
  setType: (type: LoginType) => void;
}

export default function VerifyOtp({ setType }: VerifyOtpProps) {
  const t = useTranslations("general");
  const { registerData } = useAppSelector((state) => state.register);

  const fields: MyFormOptions = [
    {
      name: "otp",
      type: "otp",
      innerProps: { placeholder: t("enter_otp"), length: 4 },
      required: true,
      rules: [{ required: true, message: t("otp_is_required") }],
    },
  ];

  const onFinish = (values: any) => {
    const vals = {
      credential: registerData?.email || "",
      otp: values?.otp,
    };

    if (vals?.credential === "") return toast.error("please signup first");

    // verify otp
    VERIFY_OTP({ data: vals }).then((res) => {
      if (!res?.success) return;

      // login so you can get token to add preferred country and other data
      LOGIN({ username: registerData?.email || "", password: registerData?.password || "" }).then((res) => {
        if (!res.success) return;

        loginAction(res?.data);
        setType("SecondStep");
      });
    });
  };

  const handleResendOtp = () => {
    if (!registerData?.email) return toast.error("please signup first");

    RESEND_OTP({ params: { email: registerData?.email || "" } });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl p-8 shadow-md flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold text-primary mb-4">{t("verify_your_email")}</h3>
      <p className="text-text-small mb-6 text-sm">{t("we_sent_a_verification_code_to_your_email_address")}</p>

      <FormComp
        fileds={fields}
        onFinish={onFinish}
        layout="vertical"
        showSubmit
        submitText={t("verify_otp")}
        submitStyleTw="w-full mt-5"
      />

      {/* resend otp */}
      <ButtonComp onClick={handleResendOtp} types="ghost">
        {t("resend_otp")}
      </ButtonComp>
    </div>
  );
}
