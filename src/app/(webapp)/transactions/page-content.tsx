'use client';
import {
  Breadcrumb,
  IconButton,
  PageHeader,
  TabNavigation,
} from '@/components';
import { DonationsTable, WithdrawalsTable } from '@/containers';
import { useState } from 'react';

const PageContent = () => {
  const breadcrumbs = [{ label: 'Menu', path: '/' }, { label: 'Transactions' }];
  const tabs = [
    { id: 1, label: 'Donations', content: <DonationsTable/> },
    { id: 2, label: 'Withdrawals', content: <WithdrawalsTable/> },
  ];
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);

  return (
    <div className="flex flex-col gap-5 md:gap-8 font-urbanist">
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <PageHeader
          title="Transactions"
          description="Showing data over the last 30 days"
        />

      </div>
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default PageContent;
