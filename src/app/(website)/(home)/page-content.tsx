"use client";

import { PageHeader } from "@/components";
import { CampaignCardContainer } from "@/containers";

const PageContent = () => {
  

  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        title="Campaigns"
        description="Click to view details of campaign"
      />
      <CampaignCardContainer isGuest />
    </div>
  );
};

export default PageContent;
