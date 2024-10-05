'use client';
import { useEffect, useState } from 'react';
import { IPagedRequest } from '@interfaces';

interface IPagingParams {
  usePaging?: boolean;
  pageSize?: number;
  page?: number;
  sortBy?: string;
  isAscending?: boolean;
  maximumPage?: number;
}

export default function usePaging(params?: IPagingParams) {
  const [usePaging] = useState(params?.usePaging ?? false);
  const [pageSize, setPageSize] = useState(params?.pageSize ?? 10);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(params?.page ?? 1);
  const [sortBy, setSortBy] = useState(params?.sortBy ?? '');
  const [isAscending] = useState(params?.isAscending ?? false);
  const [maxPage, setMaxPage] = useState(params?.maximumPage ?? 1);
  const [pageChanged, setPageChanged] = useState(false);

  const nextPage = () =>
    setPage((current) => {
      if (current == maxPage) {
        setPageChanged(false);
        return maxPage;
      }
      setPageChanged(true);
      return current + 1;
    });

  const previousPage = () =>
    setPage((current) => {
      if (current == 1) {
        setPageChanged(false);
        return 1;
      }
      setPageChanged(true);
      return current - 1;
    });

  const setCurrentPage = (pageNumber: number) =>
    setPage((lastPage) => {
      setPageChanged(lastPage !== pageNumber);
      return pageNumber;
    });

  const changePageSize = (size: number) =>
    setPageSize((lastSize) => {
      setPageChanged(lastSize !== size);
      setPage(1);
      return size;
    });

  const setMaximumPage = (pageNumber: number) => setMaxPage(pageNumber);

  const paging: IPagedRequest = {
    usePaging,
    pageSize,
    page,
    maximumPage: maxPage,
    sortBy,
    setSortBy,
    isAscending,
    pageChanged,
    nextPage,
    previousPage,
    setCurrentPage,
    setMaximumPage,
    changePageSize,
    totalItems,
    setTotalItems,
  };

  return paging;
}
