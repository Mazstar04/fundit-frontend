"use client";
import {
  Badge,
  IconButton,
  ImageCarousel,
  MarkdownComponent,
} from "@/components";
import { ICampaign } from "@/interfaces";
import { FaMoneyBill } from "react-icons/fa6";
import { HiChartPie, HiUsers, HiOutlineUsers } from "react-icons/hi2";
import { LuTrash2 } from "react-icons/lu";
import { MdOutlineCancelPresentation, MdOutlineShare } from "react-icons/md";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { LiaDonateSolid } from "react-icons/lia";
import { useState } from "react";
import ModalContainer from "../modal/modal-container";
import DonateForm from "../forms/donate-form";

interface ICampaignActions {
  icon: React.ReactNode;
  method: () => void;
}

const CampaignDetailContainer = ({
  campaign,
  isGuest = false,
}: {
  campaign: ICampaign;
  isGuest?: boolean;
}) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const copyLink = async () => {
    const campaignInfo = `${campaign.title}\n\n${campaign.shortDescription}\n\n`;
    const link = `${window.location.origin}/fund/${campaign.id}`;
    const textToCopy = `${campaignInfo}${link}`;
    await navigator.clipboard.writeText(textToCopy);
    toast.success(
      isGuest
        ? "Link copied!"
        : "FundIt link copied!, share link with friends to start receiving donations!"
    );
  };

  const actions: ICampaignActions[] = isGuest
    ? [
        {
          icon: <MdOutlineCancelPresentation size={16} />,
          method: () => {
            router.push("/");
          },
        },
        {
          icon: <MdOutlineShare size={20} />,
          method: copyLink,
        },
      ]
    : [
        {
          icon: <MdOutlineCancelPresentation size={16} />,
          method: () => {
            router.push("/campaigns");
          },
        },
        {
          icon: <LuTrash2 size={18} />,
          method: () => {},
        },
        {
          icon: <MdOutlineShare size={20} />,
          method: copyLink,
        },
      ];

  const [integerPart, decimalPart] = campaign.amount
    .toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .split(".");

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[22px] leading-[30px]">{campaign.title}</h3>
      <span className="text-[14px] text-[#A3A3A3] ">
        {campaign.shortDescription}
      </span>
      <div className="w-full flex items-center justify-between">
        <p className="text-[22px] text-primary-200 font-[600]">
          &#8358; {integerPart}
          <span className="text-[#00000033]">.{decimalPart}</span>
        </p>
        {campaign.amountRaised < campaign.amount && isGuest && (
          <IconButton
            onClick={() => setIsOpen(true)}
            className="h-[50px] fixed md:static bottom-0 w-[100vw] md:w-auto left-0  !bg-primary-200 !text-white !border-none !rounded-none md:!rounded-md"
          >
            <LiaDonateSolid size={20} />
            <span>Donate</span>
          </IconButton>
        )}
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
        <div className="flex items-center gap-2">
          {isGuest && (
            <span className="text-[14px]">By {campaign.fullName}</span>
          )}
          {campaign.amountRaised >= campaign.amount && (
            <Badge title="Completed" />
          )}
        </div>
        <div className="flex gap-2 items-center justify-between md:justify-normal">
          {actions.map((a, index) => (
            <button
              onClick={() => a.method()}
              key={Math.random() * 67}
              className="rounded-[4px] w-[32px] h-[32px] p-1 flex items-center justify-center border-[1px] border-[#E4E7EC]"
            >
              {a.icon}
            </button>
          ))}
        </div>
      </div>
      <div>
        <ImageCarousel
          imgPaths={[campaign.coverImagePath, ...campaign.imagePaths]}
        />
      </div>
      <div className="border-[1px] border-[#E4E7EC] rounded-[8px] grid grid-cols-2 lg:flex lg:justify-between gap-4 md:gap-0 items-center p-[20px] md:p-[30px]">
        <div className="flex items-center gap-3">
          <HiChartPie size={20} />
          <div className="flex flex-col">
            <span className="text-[15px] font-[600]">Status</span>
            <span className="text-[18px] leading-[18px]">
              {campaign.amountRaised >= campaign.amount
                ? "Completed"
                : "Ongoing"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaMoneyBill size={20} />
          <div className="flex flex-col">
            <span className="text-[15px] font-[600]">Amount Raised</span>
            <span className="text-[18px] leading-[18px]">
              ₦ {campaign.amountRaised.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <HiUsers size={20} />
          <div className="flex flex-col">
            <span className="text-[15px] font-[600]">Users Donated</span>
            <span className="text-[18px] leading-[18px]">
              {campaign.totalPayment.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <MarkdownComponent text={campaign.description} />
      <ModalContainer
        title="Donate"
        maxWidth="440px"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div>
          <DonateForm
            maxDonation={campaign.amount - campaign.amountRaised}
            campaignId={campaign.id.toString()}
          />
        </div>
      </ModalContainer>
    </div>
  );
};

export default CampaignDetailContainer;
