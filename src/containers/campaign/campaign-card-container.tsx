"use client";
import { CampaignCard, PaginationComponent } from "@/components";
import { useEffect, useState } from "react";
import useTableQuery from "@/hooks/use-table-query";
import api from "@/api";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CampaignCardContainer = ({ isGuest = false }: { isGuest?: boolean }) => {
  const [filters, setFilters] = useState({
    search: "",
  });

  const { data, isLoading, paging, refetch } = useTableQuery({
    queryName: "campaigns",
    queryFunction: isGuest
      ? api.campaign.getCampaigns
      : api.campaign.getUserCampaigns,
    filters,
  });

 
  return (
    <>
      {isLoading ? (
        <div className="w-full flex justify-center mt-8 text-primary-theme">
           <AiOutlineLoading3Quarters size={30} className="animate-spin" />
        </div>
      ) : (
        data && data.length > 0 ?
        <div className="flex flex-col gap-6">        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
            { data.map((t, index) => (
              <CampaignCard
                isGuest={isGuest}
                campaign={t}
                key={Math.random() * 3}
              />
            ))}
          </div>
          <PaginationComponent paging={paging} isTable={false} />
        </div>
        :
        <div className="w-full flex justify-center mt-8">
          No record found
        </div>
      )}
    </>
  );
};

export default CampaignCardContainer;
