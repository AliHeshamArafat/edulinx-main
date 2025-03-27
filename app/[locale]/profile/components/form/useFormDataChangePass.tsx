import { MyFormOptions } from "@/components/form/formComp";
import { useTranslations } from "next-intl";

const useFormDataChangePass = () => {
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
      name: "newPassword",
      label: t("new_password"),
      type: "input",
      innerProps: {
        placeholder: t("new_password"),
        type: "password",
        ...styleProps,
      },
    },
    {
      name: "confirmNewPassword",
      label: t("confirm_new_password"),
      type: "input",
      innerProps: {
        placeholder: t("confirm_new_password"),
        type: "password",
        ...styleProps,
      },
    },

  ];

  return { formFields };
};

export default useFormDataChangePass;
