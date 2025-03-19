"use client";
import SearchBarComp from "./searchBarComp";
export default function HeroSection() {
  return (
    <div className="bg-primary-lighter py-16 h-[500px] flex flex-col gap-8 items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-center">Hi Bsnty, Let's Find Your Course!</h1>
      <SearchBarComp />
    </div>
  );
}
