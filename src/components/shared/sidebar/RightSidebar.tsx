import React from "react";
import { hotNetwork, popularTags } from "@/constants";
import Link from "next/link";
import Image from "next/image";
const RightSidebar = () => {
  return (
    <div className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-full flex-col justify-between  gap-[62px] overflow-y-auto border-r px-6 pb-12 pt-[60px] shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h4 className="h3-bold text-dark200_light900 mb-8">Hot Network</h4>
        <ul className="flex flex-col gap-8">
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
        <h4 className="h3-bold text-dark200_light900 mb-8">Popular Tags</h4>
        <ul className="flex flex-col gap-8">
          {popularTags.map((tag) => (
            <li
              key={tag.id}
              className="body-medium text-dark500_light700 flex justify-between"
            >
              <span className="subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300">
                {tag.title}
              </span>
              <span className="small-medium text-dark500_light700">
                {tag.count}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
