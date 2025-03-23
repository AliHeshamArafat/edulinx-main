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
      name: "email",
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
      name: "fullName",
      label: "Full Name",
      type: "input",
      innerProps: {
        placeholder: "Full Name",
        ...styleProps,
      },
      rules: [{ required: true, message: "Please enter your full name" }],
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "input",
      innerProps: {
        ...styleProps,
        placeholder: "Phone Number",
        // type: "number",
      },
      rules: [{ required: true, message: "Please enter your phone number" }],
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
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "input",
      innerProps: {
        ...styleProps,
        placeholder: "Confirm Password",
        type: "password",
      },
      rules: [{ required: true, message: "Please enter your confirm password" }],
    },
  ];

  return { formFields };
};

export default useFormData;
