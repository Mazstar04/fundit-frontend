"use client";
import { IoMdNotificationsOutline } from 'react-icons/io';
import { LuMail, LuMenu } from 'react-icons/lu';
import { FiSearch } from 'react-icons/fi';
import { useUser } from '@/hooks';

const TopNavComponent = ({
  isNavActive,
  setIsNavActive,
}: {
  isNavActive: boolean;
  setIsNavActive: (value: boolean) => void;
}) => {

  const {user} =  useUser();

  return (
    <div className="bg-white h-[90px] flex gap-5 items-center px-[20px] md:px-[30px] font-lexend py-4">
      <div className="flex-1 flex justify-between">
        <button
          onClick={() => setIsNavActive(true)}
          className="lg:hidden rounded-full flex p-3 gap-2 items-center bg-[#ED353F] text-white text-[12px]"
        >
          <LuMenu size={15} />
          <span>Menu</span>
        </button>
        <div className="hidden w-[450px] bg-[#F9F9F9] h-[40px] border-[1px] border-[#E6E9EE] rounded-[8px] p-3 lg:flex items-center gap-2">
          <FiSearch size={16} />
          <input
            type="text"
            placeholder="Search for anything"
            className="bg-inherit outline-none text-[12px]"
          />
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-[24px] relative">
            <IoMdNotificationsOutline />
            <div className="w-[7px] h-[7px] rounded-[50%] bg-primary-200 absolute right-[0.15rem] top-1"></div>
          </button>
          <button className="text-[22px] relative">
            <LuMail />
            <div className="px-1 h-[12px] rounded-[2px] bg-[#002EF9] absolute -right-2 top-0 flex items-center justify-center text-[8px] text-white">
              23
            </div>
          </button>
        </div>
      </div>
      <div className=" w-[1px] h-[40%] bg-[#393838]"></div>
      <div className="flex gap-3">
        <div
          className="w-[30px] h-[30px] md:w-[44px] md:h-[44px] rounded-[50%] bg-secondary text-white flex items-center justify-center font-[500] font-sans text-[16px] md:text-[20px] uppercase"
        >
          {user?.name?.split(" ")[0][0]}{user?.name?.split(" ")[1][0]}
        </div>
        <div className="hidden md:flex flex-col">
          <span className="text-[14px]">{user?.name}</span>
          <span className="text-[12px] font-[300]">{user?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default TopNavComponent;
