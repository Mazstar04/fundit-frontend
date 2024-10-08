import Link from 'next/link';
import React from 'react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  breadcrumbs: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbs }) => {
  return (
    <nav className="flex items-center gap-2 text-sm font-urbanist font-[500]">
      {breadcrumbs.map((crumb, index) => (
        <span key={index} className="flex items-center">
          {index > 0 && <span className="mr-2 text-[#98A2B3]">{'>'}</span>}
          {crumb.path ? (
            <Link href={crumb.path} className="text-[#98A2B3] hover:underline">
              {crumb.label}
            </Link>
          ) : (
            <span>{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
