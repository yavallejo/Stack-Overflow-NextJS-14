"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";
const LeftSidebar = () => {
  const pathName = usePathname();
  return (
    <div className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r px-6 pb-8 pt-10 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathName.includes(link.route) && link.route.length > 1) ||
            pathName === link.route;
          return (
            <a key={link.route}>
              <Link
                href={link.route}
                key={link.route}
                className={`${
                  isActive
                    ? "primary-gradient rounded-lg text-lime-900"
                    : "text-dark300_light900"
                } flex items-center justify-center gap-4 bg-transparent p-4 md:justify-start`}
              >
                <Image
                  src={link.imgURL}
                  width={20}
                  height={20}
                  alt={link.label}
                  className={`${isActive ? "" : "invert-colors"} `}
                />
                <p
                  className={`${
                    isActive ? "base-bold text-white" : "base-medium"
                  } hidden md:block`}
                >
                  {link.label}
                </p>
              </Link>
            </a>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-6 px-2">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px]  w-full  rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                width={20}
                height={20}
                alt="lock"
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Sign In
              </span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900  min-h-[41px]  w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/sign-up.svg"
                width={20}
                height={20}
                alt="Sign Up"
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Sign Up
              </span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </div>
  );
};

export default LeftSidebar;
