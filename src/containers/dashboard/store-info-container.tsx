"use client";
import { useState } from "react";
import { IconButton } from "@/components";
import { FiPhone } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { LuMail } from "react-icons/lu";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const StoreInfoContainer = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); 
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`font-urbanist p-[20px] rounded-[36px]  transition-all duration-300 bg-white flex flex-col gap-4 w-full ${isCollapsed? "h-auto" : "md:h-[340px] "}`}>
      <div className="flex justify-between items-center">
        <h3 className="text-[16px] font-[600]">Store Info</h3>
        <button onClick={toggleCollapse}>
          {isCollapsed ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
      </div>

      {!isCollapsed && (
        <>
          <div className="bg-[#EDF4EE] p-[12px] rounded-[20px] flex items-center gap-2">
            <div
              className={`relative w-[40px] h-[40px] bg-no-repeat bg-center bg-cover rounded-[8px] `}
              style={{ backgroundImage: `url('/images/profile.png')` }}
            ></div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[14px] font-[500]">Ajirebi Sculptures Store</h3>
              <div className="bg-[#93CC00] w-[74px] rounded-[32px] py-[2px] px-[4px] flex items-center gap-1">
                <RiVerifiedBadgeFill color="white" />
                <span className="text-[12px] font-[500]">Verified</span>
              </div>
            </div>
          </div>

          <div className="bg-[#EDF4EE] p-[8px] rounded-[20px] flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="w-[20px] h-[20px] rounded-[50%] bg-secondary flex items-center justify-center text-[#93CC00]">
                <FiPhone size={10} />
              </div>
              <div className="flex flex-col font-[500]">
                <span className="text-[12px] text-[#9DA3A9]">Phone Number</span>
                <span className="text-[14px]">09124247727</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-[20px] h-[20px] rounded-[50%] bg-secondary flex items-center justify-center text-[#93CC00]">
                <LuMail size={10} />
              </div>
              <div className="flex flex-col font-[500]">
                <span className="text-[12px] text-[#9DA3A9]">Email Address</span>
                <span className="text-[14px]">ajirebi@mail.com</span>
              </div>
            </div>
            <IconButton className=" w-full !font-[500] !bg-[#93CC00]">
              <span className="text-[14px] font-[500]">View Full Details</span>
              <GoArrowUpRight size={20} />
            </IconButton>
          </div>
        </>
      )}
    </div>
  );
};

export default StoreInfoContainer;
