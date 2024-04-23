import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

const LocalSearch = () => {
  return (
    <div className="relative w-full">
      <div className="background-light800_darkgradient relative flex h-full min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          width={24}
          height={24}
          alt="Search Icon"
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search for Questions Here..."
          value=""
          className="paragraph-regular no-focus placeholder background-light800_darkgradient min-h-[56px] border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default LocalSearch;
