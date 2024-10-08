"use client";
import { RevenueCard } from "@/components";
import { IRevenue } from "@/interfaces";
import { useState } from "react";
import ModalContainer from "../modal/modal-container";
import WithdrawMoneyForm from "../forms/withdraw-money-form";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/utils/formatter";
import api from "@/api";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const RevenueContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      try {
        const result = await api.transaction.getUserStats();
        return result;
      } catch (error: any) {
        toast.error(error ?? "Failed to fetch stats");
      }
    },
  });

  const revenues: IRevenue[] = [
    {
      title: "Wallet Balance",
      amount: data?.walletBalance || 0,
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
      amount: data?.totalAmountReceived || 0,
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
      amount: data?.totalAmountWithdrawn || 0,
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
      {isLoading  ? (
        <div className="w-full flex justify-center mt-8 text-primary-theme">
          <AiOutlineLoading3Quarters size={30} className="animate-spin" />
        </div>
      ) : (
        data &&
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
                {(data?.totalActiveCampaigns+ data?.totalInactiveCampaigns).toLocaleString()}
              </span>
            </div>
            <div className="w-full border-[1px] border-[#E4E7EC] "></div>
            <div className="flex items-center mt-2">
              <div className="flex-1 flex flex-col gap-1 ">
                <span className="text-[12px] text-secondary">Ongoing</span>
                <span className="text-[22px] font-[600]">
                  {(data?.totalActiveCampaigns).toLocaleString()}
                </span>
              </div>
              <div className="h-[55px] w-[1px] bg-[#E4E7EC]"></div>
              <div className="flex-1 flex flex-col gap-1 items-end">
                <span className="text-[12px] text-[#93CC00]">Completed</span>
                <span className="text-[22px] font-[600]">
                  {(data?.totalInactiveCampaigns).toLocaleString()}
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
              <p className="font-[500] text-[14px] text-right">
                Wallet Balance: {formatCurrency(revenues[0].amount)}
              </p>
              <WithdrawMoneyForm maxWithdrawal={revenues[0].amount} refetch={refetch} setIsOpen={setIsOpen}/>
            </div>
          </ModalContainer>
        </>
      )}
    </>
  );
};

export default RevenueContainer;
