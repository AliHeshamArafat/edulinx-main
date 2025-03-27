import { MyFormOptions } from "@/components/form/formComp";
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
      name: "fullName",
      label: t("full_name"),
      type: "input",
      innerProps: {
        placeholder: t("full_name"),
        ...styleProps,
      },
      rules: [{ required: true, message: t("full_name_is_required") }],
    },
    {
      name: "email",
      label: t("email"),
      type: "input",
      innerProps: {
        placeholder: t("email"),
        type: "email",
        ...styleProps,
      },
      rules: [{ required: true, message: t("email_is_required") }],
    },
    {
      name: "phone",
      label: t("phone"),
      type: "input",
      innerProps: {
        placeholder: t("phone"),
        ...styleProps,
      },
      rules: [{ required: true, message: t("phone_is_required") }],
    },
  ];

  return { formFields };
};

export default useFormData;
