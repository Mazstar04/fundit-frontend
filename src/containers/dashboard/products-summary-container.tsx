import { FilterDropdown } from "@/components";
import { GoArrowUpRight } from "react-icons/go";
import { LuCalendarDays } from "react-icons/lu";
import { PiPackage } from "react-icons/pi";

interface IProductSummary {
  noAdded: number;
  noSold: number;
}

const ProductsSummaryContainer = () => {
  const handleDateChange = (selected: string[] | string) => {
    console.log("Selected date:", selected);
  };

  const summary: IProductSummary = {
    noAdded: 8124,
    noSold: 12893,
  };

  return (
    <div className="bg-[#FFFFFF66] border-[1px] border-white p-[16px] rounded-[32px] flex flex-col gap-3 w-full h-[175px] lg:h-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="h-[38px] w-[38px] rounded-[16px] flex items-center justify-center bg-[#08B6FF] ">
            <PiPackage size={18} />
          </div>
          <h3 className="text-[16px] font-[600]">Products</h3>
        </div>
        <div className="flex gap-1 items-center">
          <button className=" h-[38px] w-[38px]  font-urbanist rounded-[50%] bg-white text-[16px]  flex items-center justify-center">
            <GoArrowUpRight size={18} />
          </button>
          <div className="">
            <FilterDropdown
              title="Date"
              hasArrow={false}
              className="!h-[38px] !rounded-[80px] !bg-white !p-[12px]"
              icon={<LuCalendarDays color="#04161C" size={16} />}
              options={[
                { label: "Daily", value: "Daily" },
                { label: "Weekly", value: "Weekly" },
                { label: "Monthly", value: "Monthly" },
              ]}
              onChange={handleDateChange}
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 flex flex-col gap-1">
          <h3 className="text-[12px] text-[#9DA3A9] font-[500]">
            Products added
          </h3>
          <p className="text-[24px] font-[600]">
            {summary.noAdded.toLocaleString()}
          </p>
        </div>
        <div className="border-[1px] border-[#CACED2] border-dashed h-full"></div>
        <div className="flex-1 flex flex-col gap-1 items-end">
          <h3 className="text-[12px] text-[#9DA3A9] font-[500]">
            Products Sold
          </h3>
          <p className="text-[24px] font-[600]">
            {summary.noSold.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex w-full h-[24px]">
        <div
          className={`rounded-[12px] transition-all duration-300 bg-[#93CC00]`}
          style={{width: `${Math.floor((summary.noAdded / (summary.noAdded + summary.noSold)) * 100)}%`}}
        >
          
        </div>
        <div
          className={`rounded-[12px] transition-all duration-300 bg-secondary`}
          style={{width: `${Math.floor((summary.noSold / (summary.noAdded + summary.noSold)) * 100)}%`}}
        >
        </div>
      </div>
    </div>
  );
};

export default ProductsSummaryContainer;
