import React from "react";
import Image from "next/image";
import ButtonComp from "@/components/functional/buttonComp";
import searchIcon from "@/assets/images/Search2.png";

export default function SearchBarComp() {
  return (
    <div className="relative w-full md:max-w-[700px] mx-auto bg-white rounded-full shadow-sm overflow-hidden">
      <div className="flex items-center px-4 py-2">
        <div className="flex items-center justify-center w-6 h-6 mr-2">
          <Image src={searchIcon} alt="Search" width={20} height={20} />
        </div>
        <input
          type="text"
          placeholder="Search programs, universities..."
          className="w-full py-1 px-2 outline-none text-text-secondary placeholder-text-secondary text-sm"
        />
        <ButtonComp className="bg-amber-300">
          Search
        </ButtonComp>
      </div>
    </div>
  );
}
