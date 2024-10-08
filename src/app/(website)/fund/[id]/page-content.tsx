"use client";
import { CampaignDetailContainer } from "@/containers";
import api from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const PageContent = () => {
  const params = useParams();
  const id = params?.id?.toString() ?? "";

  const { data, isLoading } = useQuery({
    queryKey: ["campaign-detail", id],
    queryFn: async () => {
      try {
        const result = await api.campaign.getCampaignDetail({ id });
        console.log(result);
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
        <div className="font-urbanist">
          {data && <CampaignDetailContainer campaign={data} isGuest />}
        </div>
      )}
    </>
  );
};

export default PageContent;
