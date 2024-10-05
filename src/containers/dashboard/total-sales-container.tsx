import { formatCurrency } from "@/utils/formatter";
import { RiArrowUpSFill } from "react-icons/ri";

const TotalSalesContainer = () => {
  return (
    <div className="bg-[#FFFFFF66] border-[1px] border-white p-[20px] rounded-[20px] flex flex-col font-urbanist w-[225px] min-w-[225px] md:w-full h-[140px] lg:h-full">
      <h3 className="flex-1 text-[16px] font-[600]">Total Sales</h3>
      <div className="flex gap-1">
            <span className="text-[12px] font-[500] whitespace-nowrap">{formatCurrency(3458982)} since last month</span>
            <RiArrowUpSFill size={18} color="#93CC00" className="mt-[0.1rem]" />
          </div>
          <span className="text-[24px] font-[600] ">{formatCurrency(12162763)}</span>
    </div>
  );
};

export default TotalSalesContainer;
