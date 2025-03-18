import React from "react";
import { Button, ButtonProps } from "@nextui-org/react";

interface CustomButtonProps extends Omit<ButtonProps, "variant"> {
  customVariant?: "solid" | "outline" | "ghost" | "light";
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  customVariant = "solid",
  className = "",
  ...props
}) => {
  let nextUIVariant: ButtonProps["variant"] = "solid";
  let buttonStyle: React.CSSProperties = {};
  let buttonClasses = className || "";

  switch (customVariant) {
    case "solid":
      nextUIVariant = "solid";
      buttonStyle = {
        backgroundColor: "var(--color-primary)",
        color: "white",
      };
      buttonClasses += " hover:bg-primary-hover active:bg-primary-active";
      break;
    case "outline":
      nextUIVariant = "bordered";
      buttonStyle = {
        color: "var(--color-primary)",
        borderColor: "var(--color-primary)",
      };
      buttonClasses += " hover:bg-primary-lighter hover:border-primary-hover";
      break;
    case "ghost":
      nextUIVariant = "ghost";
      buttonStyle = {
        color: "var(--color-primary)",
      };
      buttonClasses += " hover:bg-primary-lighter";
      break;
    case "light":
      nextUIVariant = "light";
      buttonStyle = {
        color: "var(--color-primary-dark)",
      };
      buttonClasses +=
        " hover:bg-primary-lighter-hover active:bg-primary-lighter-active";
      break;
    default:
      break;
  }

  return (
    <Button
      variant={nextUIVariant}
      className={buttonClasses}
      style={buttonStyle}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
