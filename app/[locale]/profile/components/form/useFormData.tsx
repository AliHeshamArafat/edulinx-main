import { MyFormOptions } from "@/components/form/formComp";

const useFormData = () => {
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
      label: "Full Name",
      type: "input",
      innerProps: {
        placeholder: "Full Name",
        ...styleProps,
      },
    },
    {
      name: "email",
      label: "Email",
      type: "input",
      innerProps: {
        placeholder: "Email",
        type: "email",
        ...styleProps,
      },
    },
    {
      name: "phone",
      label: "Phone",
      type: "input",
      innerProps: {
        placeholder: "Phone",
        ...styleProps,
      },
    },
  ];

  return { formFields };
};

export default useFormData;
