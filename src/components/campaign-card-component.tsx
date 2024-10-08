"use client";
import { ICampaign } from "@/interfaces";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TbCurrencyNaira } from "react-icons/tb";
import Badge from "./badge";
import { HiUsers } from "react-icons/hi2";
import { MdOutlineShare } from "react-icons/md";
import { toast } from "react-toastify";

interface CampaignCardProps {
  campaign: ICampaign;
  isGuest?: boolean;
}

const TourCardComponent: React.FC<CampaignCardProps> = ({
  campaign,
  isGuest = false,
}) => {
  const router = useRouter();
  const progressPercentage = (campaign.amountRaised / campaign.amount) * 100;

  const copyLink = async () => {
      const link = `${window.location.origin}/fund/${campaign.id}`;
      await navigator.clipboard.writeText(link);
      toast.success(
        isGuest
          ? "Link copied!"
          : "FundIt link copied!, share link with friends to start receiving donations!"
      );
    
  };

  return (
    <Link
      href={isGuest ? `/fund/${campaign.id}` : `/campaigns/${campaign.id}`}
      className="border-[1px] border-[#E4E7EC] bg-white p-2 rounded-[8px] w-full h-auto md:min-h-[250px] flex flex-col md:flex-row gap-4"
    >
      <div
        className="md:basis-[40%] h-[220px] md:h-full rounded-[8px] bg-no-repeat bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url('${campaign.coverImagePath}')` }}
      >
        <div className="w-full h-full bg-gradient-to-b from-[#655E5E00] to-[#000000D6] flex items-end gap-2 p-2">
          {campaign.imagePaths.slice(0, 3).map((i, index) => (
            <div
              key={Math.random() * 45}
              className="rounded-[8px] bg-no-repeat bg-center bg-cover h-[48px] md:h-[55px] w-[56px] md:w-full"
              style={{ backgroundImage: `url('${i}')` }}
            ></div>
          ))}
        </div>
      </div>
      <div className="md:flex-1 flex flex-col gap-2 font-urbanist md:py-2 ">
        <h3 className="font-lexend text-[18px] font-[500]">{campaign.title}</h3>
        <p className="text-[10px] leading-[16px] md:flex-1">
          {campaign.shortDescription}
        </p>
        <div className="flex items-center gap-2">
          <HiUsers size={15} color="#475467" />
          <span className="font-[600] text-[18px]">
            {campaign.totalPayment.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <TbCurrencyNaira size={15} color="#475467" />
          <span className="font-[600] text-[18px]">
            {campaign.amountRaised.toLocaleString()} /{" "}
            {campaign.amount.toLocaleString()}
          </span>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-[#e6e7e8] h-[10px] rounded-full mt-2 overflow-hidden">
          <div
            className="bg-[#ED353F] h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="flex gap-2 md:justify-end items-center md:flex-1 mt-2">
          {campaign.amountRaised >= campaign.amount && (
            <Badge title="Completed" />
          )}
          <button onClick={copyLink}  className="rounded-[4px] w-[32px] h-[32px] p-1 flex items-center justify-center border-[1px] border-[#E4E7EC]">
            <MdOutlineShare size={20} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default TourCardComponent;
