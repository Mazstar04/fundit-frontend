"use client";
import { RevenueCard } from "@/components";
import { IRevenue } from "@/interfaces";
import { useState } from "react";
import ModalContainer from "../modal/modal-container";
import WithdrawMoneyForm from "../forms/withdraw-money-form";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/utils/formatter";

const RevenueContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const revenues: IRevenue[] = [
    {
      title: "Wallet Balance",
      amount: 119898.78,
      color: "#cfd9f2",
      action: {
        text: "Withdraw",
        method: () => {
          setIsOpen(true);
        },
      },
    },
    {
      title: "Received Donations",
      amount: 7898.7,
      color: "#ffece5",
      action: {
        text: "View Details",
        method: () => {
          router.push("/transactions");
        },
      },
    },
    {
      title: "Total Withdrawn",
      amount: 114898.78,
      color: "#e7f8fc",
      action: {
        text: "View Details",
        method: () => {
          router.push("/transactions");
        },
      },
    },
  ];

  return (
    <>
      <div className="flex gap-2 overflow-x-auto md:overflow-hidden md:min-h-[150px] font-urbanist">
        {revenues.map((r, index) => (
          <div key={Math.random() * 4} className="md:flex-1">
            <RevenueCard {...r} />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 border-[1px] border-[#E4E7EC] bg-white p-[15px] rounded-[12px] w-full ">
        <span className="text-[12px] text-[#ACB2BD]">Total Campaigns</span>
        <div className="flex items-center justify-between gap-6">
          <span className="text-[28px] font-[600]">
            {(50).toLocaleString()}
          </span>
        </div>
        <div className="w-full border-[1px] border-[#E4E7EC] "></div>
        <div className="flex items-center mt-2">
          <div className="flex-1 flex flex-col gap-1 ">
            <span className="text-[12px] text-secondary">Ongoing</span>
            <span className="text-[22px] font-[600]">
              {(35).toLocaleString()}
            </span>
          </div>
          <div className="h-[55px] w-[1px] bg-[#E4E7EC]"></div>
          <div className="flex-1 flex flex-col gap-1 items-end">
            <span className="text-[12px] text-[#93CC00]">Completed</span>
            <span className="text-[22px] font-[600]">
              {(15).toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex justify-end mt-3">
          <button
            onClick={() => router.push("/campaigns")}
            className="text-[12px] font-urbanist font-[600] underline"
          >
            View Details
          </button>
        </div>
      </div>
      <ModalContainer
        title="Withdraw Funds"
        maxWidth="440px"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[14px] text-right">Wallet Balance: {formatCurrency(revenues[0].amount)}</p>
          <WithdrawMoneyForm maxWithdrawal={revenues[0].amount} />
        </div>
      </ModalContainer>
    </>
  );
};

export default RevenueContainer;
