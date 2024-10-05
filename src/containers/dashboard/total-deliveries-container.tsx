
import { RiArrowUpSFill } from "react-icons/ri";

const TotalDeliveriesContainer = () => {
  return (
    <div className="bg-[#FFFFFF66] border-[1px] border-white p-[20px] rounded-[20px] flex flex-col font-urbanist w-[225px] min-w-[225px] md:w-full h-[140px] lg:h-full">
      <h3 className="flex-1 text-[16px] font-[600]">Total Deliveries</h3>
      <div className="flex gap-1">
            <span className="text-[12px] font-[500] whitespace-nowrap">{(123).toLocaleString()} since last month</span>
            <RiArrowUpSFill size={18} color="#93CC00" className="mt-[0.1rem]" />
          </div>
          <span className="text-[24px] font-[600] ">{(1234).toLocaleString()}</span>
    </div>
  );
};

export default TotalDeliveriesContainer;
