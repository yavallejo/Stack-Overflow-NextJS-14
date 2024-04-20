import React from "react";
import { hotNetwork } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import RenderTags from "./RenderTags";
const RightSidebar = () => {
  return (
    <div className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-full flex-col gap-16 overflow-y-auto border-l px-6 pb-12 pt-[60px] shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900 mb-7">Hot Network</h3>
        <ul className="flex flex-col gap-[30px]">
          {hotNetwork.map((network) => (
            <li key={network.id}>
              <Link
                href={network.link}
                className="grid grid-cols-[1fr_20px] gap-8 text-white"
              >
                <span className="body-medium text-dark500_light700">
                  {network.title}
                </span>
                <Image
                  alt="Chevron right icon"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  className="invert-colors"
                  src="/assets/icons/chevron-right.svg"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="h3-bold text-dark200_light900 mb-7">Popular Tags</h3>
        <RenderTags />
      </div>
    </div>
  );
};

export default RightSidebar;
