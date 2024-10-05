"use client";
import { Breadcrumb } from "@/components";
import { IconType } from "react-icons/lib";
import {
  AddCampaignForm
} from "@/containers";
import { useRouter } from "next/navigation";

const PageContent = () => {
  const router = useRouter();
  const breadcrumbs = [
    { label: "Menu", path: "/" },
    { label: "Campaigns", path: "/campaigns" },
    { label: "Create new campaign" },
  ];

  return (
    <div className="flex flex-col gap-6 font-urbanist">
      <Breadcrumb breadcrumbs={breadcrumbs} />
        <div className="border-[1px] border-[#E4E7EC] bg-white p-4 md:p-6 rounded-[10px] w-full mx-auto md:w-[70%] flex flex-col gap-3">
          <span className="text-[24px] leading-[26px] font-[700] text-center">
            Create new Campaign
          </span>
          <AddCampaignForm />
        </div>
      
    </div>
  );
};

export default PageContent;
