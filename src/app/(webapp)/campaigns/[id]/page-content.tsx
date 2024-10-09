"use client";
import { Breadcrumb } from "@/components";
import { CampaignDetailContainer } from "@/containers";
import { ICampaign } from "@/interfaces";
import api from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const PageContent = () => {
  const params = useParams();
  const id = params?.id?.toString() ?? "";

  const breadcrumbs = [
    { label: "Menu", path: "/" },
    { label: "Campaigns", path: "/campaigns" },
    { label: "Campaign Detail" },
  ];

  const { data, isLoading } = useQuery({
    queryKey: ["campaign-detail", id],
    queryFn: async () => {
      try {
        const result = await api.campaign.getCampaignDetail({ id });
        return result;
      } catch (error: any) {
        toast.error(error ?? "Failed to fetch campaign detail");
      }
    },
  });


  return (
    <>
    {isLoading ? (
      <div className="w-full flex justify-center mt-8 text-primary-theme">
         <AiOutlineLoading3Quarters size={30} className="animate-spin" />
      </div>
    ) : (
    <div className="flex flex-col gap-3 md:gap-4 font-urbanist">
      <Breadcrumb breadcrumbs={breadcrumbs} />
      {data && <CampaignDetailContainer campaign={data}/>}
    </div>
    )}
    </>
  );
};

export default PageContent;
