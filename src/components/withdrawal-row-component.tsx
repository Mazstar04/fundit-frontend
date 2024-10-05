import { IWithdrawal } from "@/interfaces";
import { formatCurrency } from "@/utils/formatter";
import { format } from "date-fns";
import { TbDots } from "react-icons/tb";

const WithdrawalMobileRowComponent = ({
  withdrawal,
}: {
  withdrawal: IWithdrawal;
}) => {
  return (
    <div
      className={`flex flex-col gap-2 font-urbanist text-[#344054] text-[14px] `}
    >
      <div className="flex justify-between items-center">
        <span className="font-[500]">{withdrawal.accountName}</span>
        <div className="flex flex-col">
          <span className="font-[500]">
            {format(new Date(withdrawal.created), "d MMM, yyyy")}
          </span>
          <span className="text-[#667185]">
            {format(new Date(withdrawal.created), "h:mm a")}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-[600]">{formatCurrency(withdrawal.amount)} </span>
        <div className="flex flex-col items-end">
          <span className="font-[600]">{withdrawal.bankName}</span>
          <span className="text-[#667185]">{withdrawal.accountNo}</span>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalMobileRowComponent;
