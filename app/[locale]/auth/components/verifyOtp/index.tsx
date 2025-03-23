import ButtonComp from "@/components/functional/buttonComp";
import FormComp, { MyFormOptions } from "@/components/form/formComp";
import { LoginType } from "../../page";
import { RESEND_OTP, VERIFY_OTP } from "@/apis";
import { useAppSelector } from "@/app/store/store";
import { toast } from "react-toastify";
interface VerifyOtpProps {
  setType: (type: LoginType) => void;
}

export default function VerifyOtp({ setType }: VerifyOtpProps) {
  const { registerData } = useAppSelector((state) => state.register);

  const fields: MyFormOptions = [
    {
      name: "otp",
      type: "otp",
      innerProps: { placeholder: "Enter OTP", length: 4 },
      required: true,
      rules: [{ required: true, message: "Please enter your OTP" }],
    },
  ];

  const onFinish = (values: any) => {
    const vals = {
      credential: registerData?.email || "",
      otp: values?.otp,
    };

    if (vals?.credential === "") return toast.error("please signup first");

    VERIFY_OTP({ data: vals }).then((res) => {
      if (!res?.success) return;
      setType("SecondStep");
    });
  };

  const handleResendOtp = () => {
    if (!registerData?.email) return toast.error("please signup first");

    RESEND_OTP({ params: { email: registerData?.email || "" } });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl p-8 shadow-md flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold text-primary mb-4">Verify your email</h3>
      <p className="text-text-small mb-6 text-sm">We sent a verification code to your email address</p>

      <FormComp
        fileds={fields}
        onFinish={onFinish}
        layout="vertical"
        showSubmit
        submitText="Verify OTP"
        submitStyleTw="w-full mt-5"
      />

      {/* resend otp */}
      <ButtonComp onClick={handleResendOtp} types="ghost">
        Resend OTP
      </ButtonComp>
    </div>
  );
}
