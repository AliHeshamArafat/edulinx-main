import { MyFormOptions } from "@/components/form/formComp";
import mailIcon from "@/assets/images/message.png";
import { useTranslations } from "next-intl";

const useFormData = () => {
  const t = useTranslations("general");

  const styleProps = {
    style: {
      borderRadius: 15,
      backgroundColor: "transparent",
    },
    styles: { input: { padding: "8px 12px" } },
  };

  const formFields: MyFormOptions = [
    {
      name: "username",
      label: t("email"),
      type: "input",
      innerProps: {
        placeholder: t("email"),
        type: "email",
        ...styleProps,
        prefix: <img src={mailIcon.src} alt="mail" />,
      },
      rules: [{ required: true, message: t("email_is_required") }],
    },
    {
      name: "password",
      label: t("password"),
      type: "input",
      innerProps: {
        placeholder: t("password"),
        type: "password",
        ...styleProps,
        // prefix: <img src={mailIcon.src} alt="mail" />,
      },
      rules: [{ required: true, message: t("password_is_required") }],
    },
  ];

  return { formFields };
};

export default useFormData;
