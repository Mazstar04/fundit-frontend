'use client';
import { Breadcrumb, IconButton, PageHeader } from '@/components';
import { CampaignCardContainer } from '@/containers';
import { useRouter } from 'next/navigation';
import { LuPlusCircle } from 'react-icons/lu';

const PageContent = () => {
  const router = useRouter();
  const breadcrumbs = [{ label: 'Menu', path: '/' }, { label: 'Campaigns' }];


  return (
    <div className="flex flex-col gap-5 md:gap-8 font-urbanist">
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <PageHeader title="Campaigns" description="Create and view your campaings" />
        <IconButton
          onClick={() => router.push('/campaigns/add')}
          className="h-[50px] fixed md:static bottom-0 w-[100vw] md:w-auto left-0  !bg-primary-200 !text-white !border-none !rounded-none md:!rounded-md z-10"
        >
          <LuPlusCircle size={20} />
          <span>Create Campaign</span>
        </IconButton>
      </div>
      <CampaignCardContainer />
    </div>
  );
};

export default PageContent;
