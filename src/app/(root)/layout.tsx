import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";
import RightSidebar from "@/components/shared/sidebar/RightSidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="pt-[104px]">
        <div className="gap-6 sm:grid sm:grid-cols-[116px_1fr] md:grid-cols-[266px_1fr] xl:grid-cols-[266px_1fr_330px]">
          <LeftSidebar />
          <section>{children}</section>
          <RightSidebar />
        </div>
        Toaster
      </div>
    </main>
  );
};

export default Layout;
