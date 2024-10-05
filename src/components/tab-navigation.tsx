'use client';
import { useState } from 'react';

interface Tab {
  id: number;
  label: string;
  content: React.ReactNode;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (t: number) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div>
      <div className="flex space-x-4 border-b border-[#CACED2] overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 text-[14px] font-[500] font-inter whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-b-2 border-primary-theme text-primary-theme'
                : ' text-[#344054]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {tabs.map(
          (tab) =>
            tab.id === activeTab && <div key={tab.id}>{tab.content}</div>,
        )}
      </div>
    </div>
  );
};

export default TabNavigation;
