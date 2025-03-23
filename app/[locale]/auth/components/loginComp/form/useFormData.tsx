import { MyFormOptions } from "@/components/form/formComp";
import mailIcon from "@/assets/images/message.png";

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
      name: "username",
      label: "Email",
      type: "input",
      innerProps: {
        placeholder: "Email",
        type: "email",
        ...styleProps,
        prefix: <img src={mailIcon.src} alt="mail" />,
      },
      rules: [{ required: true, message: "Please enter your email" }],
    },
    {
      name: "password",
      label: "Password",
      type: "input",
      innerProps: {
        placeholder: "Password",
        type: "password",
        ...styleProps,
        // prefix: <img src={mailIcon.src} alt="mail" />,
      },
      rules: [{ required: true, message: "Please enter your password" }],
    },
  ];

  return { formFields };
};

export default useFormData;
