"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons/lib";
import { TbSmartHome } from "react-icons/tb";
import { MdOutlineTour, MdOutlineFeedback } from "react-icons/md";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { LuSettings, LuHelpCircle } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";

import { usePathname, useRouter } from "next/navigation";
import LogoComponent from "./logo-component";

interface NavOption {
  text: string;
  icon: IconType;
  route: string;
}
const Sidebar = ({
  isNavActive,
  setIsNavActive,
}: {
  isNavActive: boolean;
  setIsNavActive: (value: boolean) => void;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOptions, setMenuOptions] = useState<NavOption[]>([
    {
      text: "Dashboard",
      icon: TbSmartHome,
      route: "/dashboard",
    },
    {
      text: "Campaigns",
      icon: HiOutlineSpeakerphone,
      route: "/campaigns",
    },
    {
      text: "Transactions",
      icon: LiaMoneyBillWaveSolid,
      route: "/transactions",
    },
  ]);

  return (
    <>
      {isNavActive && (
        <div
          onClick={() => setIsNavActive(false)}
          className="w-[100vw] h-[100vh] inset-0 bg-black bg-opacity-25 backdrop-blur-sm fixed top-0 left-0 z-30"
        ></div>
      )}
      <div
        className={`fixed lg:static w-[200px] bg-white border-r-[2px] border-[#E4E7EC] h-full px-[10px] py-[40px] flex flex-col gap-8 overflow-y-auto fancy-scrollbar transition-all duration-300 shadow-md lg:shadow-none z-30 ${
          isNavActive ? "left-0" : "-left-[200px]"
        }`}
      >
        <div>
          <LogoComponent />
        </div>
        <div className="mt-2 flex flex-col gap-2 flex-1">
          {menuOptions.map((m, index) => (
            <Link
              href={m.route}
              key={Math.random() * 88}
              className={`flex px-[10px] py-3 items-center gap-2 text-[14px]  ${
                pathname == m.route
                  ? "text-[#000000] bg-[#FDF0F1] rounded-[4px]"
                  : "text-[#667185]"
              }`}
            >
              <m.icon
                size={18}
                color={pathname == m.route ? "#ED353F" : "#667185"}
              />
              <span>{m.text}</span>
            </Link>
          ))}
        </div>

        <button className="flex gap-2 items-center text-[14px] text-primary-200 font-[500] ml-[10px]">
          <FiLogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
