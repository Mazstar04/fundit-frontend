import { IRevenue } from "@/interfaces";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

const RevenueCard: React.FC<IRevenue> = ({
  title,
  amount,
  color,
  className,
  action,
}) => {
  const [integerPart, decimalPart] = amount
    .toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .split(".");

  return (
    <div className="flex flex-col gap-2 border-[1px] border-[#E4E7EC] bg-white p-[15px] rounded-[12px] w-full ">
      <span className="text-[12px] text-[#ACB2BD]">{title}</span>
      <div className="flex items-center justify-between gap-6">
        <span className="text-[22px] font-[600]">
          &#8358;{integerPart}
          <span className="text-[#00000033]">.{decimalPart}</span>
        </span>
        <div
          className="w-[40px] h-[40px] min-w-[40px] min-h-[40px] rounded-[50%] flex items-center justify-center "
          style={{ backgroundColor: color }}
        >
          <LiaMoneyBillWaveSolid size={20} />
        </div>
      </div>
      <div className="flex justify-end mt-3">
        <button onClick={action.method} className="text-[12px] font-urbanist font-[600] underline">{action.text}</button>
      </div>
    </div>
  );
};

export default RevenueCard;
