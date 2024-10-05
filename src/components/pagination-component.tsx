'use client';
import { IPagedRequest } from '@/interfaces';
import { useState } from 'react';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

const PaginationComponent = ({ paging, isTable =true }: { paging: IPagedRequest , isTable?: boolean}) => {
  const [resultsPerPage, setResultsPerPage] = useState<number>(paging.pageSize);
  const changePageSize = (size: number) => {
    setResultsPerPage(size);
    paging.changePageSize(size);
  };

  const getPageNumbers = (totalPages: number, currentPage: number) => {
    const pages = [];
    const maxVisiblePages = 3;

    // Calculate the starting page based on the current page
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    // Adjust start if needed to ensure maxVisiblePages are shown
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    // Add pages from start to end
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Add ellipsis if necessary
    if (end < totalPages) {
      pages.push('...');
    }

    return pages;
  };

  return (
    <div className={`flex flex-col text-[14px] md:flex-row gap-3 items-center md:justify-between  py-3 px-[16px] font-urbanist ${isTable? "border-[1px] border-t-0 border-[#E4E7EC] rounded-b-[10px] bg-white " : ""}`}>
      <span className="text-[#667185]  font-[600]">{`Page ${paging.page} of ${paging.maximumPage}`}</span>
      <div className="flex gap-2">
        {getPageNumbers(paging.maximumPage, paging.page).map((page, index) => (
          <button
            key={index}
            className={`flex gap-2 items-center rounded-[6px] py-2  ${
              page === paging.page
                ? 'text-[#EB5017] bg-[#FFECE5] px-3'
                : 'text-[#98A2B3] px-1'
            }`}
            onClick={() => {
              if (typeof page === 'number') {
                paging.setCurrentPage(page);
              }
            }}
          >
            <span>{page}</span>
          </button>
        ))}
      </div>

      <div className="flex  justify-center md:justify-end items-center gap-4  font-inter text-[14px]">
        <button
          onClick={() => {
            paging.previousPage();
          }}
          disabled={paging.page == 1}
          className={`flex gap-2 py-[8px] px-[14px] items-center border-[1px] border-[#D0D5DD] rounded-[8px] font-[600] ${
            paging.page == 1 ? 'text-[#999999]' : 'text-[#344054] shadow-md'
          }`}
        >
          <HiArrowLongLeft size={18} />
          <span className="">Previous</span>
        </button>

        <button
          onClick={() => {
            paging.nextPage();
          }}
          disabled={paging.page >= paging.maximumPage}
          className={`flex gap-2 py-[8px] px-[14px] items-center border-[1px] border-[#D0D5DD] rounded-[8px] font-[600] ${
            paging.page >= paging.maximumPage
              ? 'text-[#999999]'
              : 'text-[#344054] shadow-md'
          }`}
        >
          <span className="">Next</span>
          <HiArrowLongRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
