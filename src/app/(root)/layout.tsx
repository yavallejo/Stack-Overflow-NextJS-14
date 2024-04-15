import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";
import RightSidebar from "@/components/shared/sidebar/RightSidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="pt-[104px]">
        <div className="grid grid-cols-[266px_1fr_330px] gap-6">
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
