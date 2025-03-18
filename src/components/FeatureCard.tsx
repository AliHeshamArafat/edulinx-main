import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="flex flex-col justify-center space-y-2">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};
