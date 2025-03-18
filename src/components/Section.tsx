import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: string;
}

export const Section = ({
  children,
  className = "",
  bgColor = "bg-white",
}: SectionProps) => {
  return (
    <section
      className={`w-full py-12 md:py-24 lg:py-32 ${bgColor} ${className}`}
    >
      <div className="container px-4 md:px-6 mx-auto">{children}</div>
    </section>
  );
};
