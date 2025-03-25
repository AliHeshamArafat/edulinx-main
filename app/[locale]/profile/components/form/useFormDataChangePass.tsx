import { MyFormOptions } from "@/components/form/formComp";

const useFormDataChangePass = () => {
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
      label: "New Password",
      type: "input",
      innerProps: {
        placeholder: "New Password",
        type: "password",
        ...styleProps,
      },
    },
    {
      name: "confirmNewPassword",
      label: "Confirm New Password",
      type: "input",
      innerProps: {
        placeholder: "Confirm New Password",
        type: "password",
        ...styleProps,
      },
    },

  ];

  return { formFields };
};

export default useFormDataChangePass;
