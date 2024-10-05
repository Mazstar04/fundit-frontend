"use client";
import { LogoComponent, Sidebar, TopNavComponent } from "@/components";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-[100vh] overflow-x-hidden flex flex-col overflow-y-auto bg-[#f9f9f9]">
      <div className="bg-white py-[30px] px-[20px]">
        <LogoComponent />
      </div>
      <div className="p-[20px] md:px-[40px] md:py-[30px] w-full md:w-[90%] lg:w-[80%] md:mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
