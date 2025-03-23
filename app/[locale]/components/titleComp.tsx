import React from "react";

interface TitleCompProps {
  title: string;
}

export default function TitleComp({ title }: TitleCompProps) {
  return <h2 className="text-[#353535] text-4xl font-medium leading-normal">{title}</h2>;
}
