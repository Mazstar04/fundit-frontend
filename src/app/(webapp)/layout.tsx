'use client';
import { Sidebar, TopNavComponent } from '@/components';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isNavActive, setIsNavActive] = useState<boolean>(false);
  return (
    <div className="w-full h-[100vh] overflow-x-hidden flex bg-[#f9f9f9]">
      <Sidebar isNavActive={isNavActive} setIsNavActive={setIsNavActive} />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <TopNavComponent
          isNavActive={isNavActive}
          setIsNavActive={setIsNavActive}
        />
        <div className="p-[20px] md:px-[40px] md:py-[30px] ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
