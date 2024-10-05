import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[22px] font-[600] leading-[26px]">{title}</h3>
      <span className="text-[14px] text-[#475367]">{description}</span>
    </div>
  );
};

export default PageHeader;
