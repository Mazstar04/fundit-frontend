'use client';
import usePaging from './use-paging';
import { useEffect, useRef, useState } from 'react';
import { IPagedRequest, IPagedResponse } from '@interfaces';
import { useQuery } from '@tanstack/react-query';

interface IUseTableQueryParams<T> {
  queryName: string;
  filters?: any;
  queryFunction: ({
    paging,
    filters,
  }: {
    paging: IPagedRequest;
    filters?: any;
  }) => Promise<IPagedResponse<T>>;
}

export default function useTableQuery<T>(params: IUseTableQueryParams<T>) {
  const paging = usePaging({ usePaging: true });
  const filters = params?.filters;
  const [pageChanged, setPageChanged] = useState(false);

  const { data, isLoading, isRefetching, refetch, isSuccess } = useQuery({
    queryKey: [params.queryName],
    queryFn: () => params.queryFunction({ paging, filters }),
    staleTime: Infinity,
  });

  const refetchData = async (checkForPageChange = true) => {
    if (!checkForPageChange || (checkForPageChange && pageChanged)) {
      await refetch();
    }
  };
  useEffect(() => {
    refetchData();
  }, [pageChanged, refetch]);

  useEffect(() => {
    // console.log("f", filters)
    paging.setCurrentPage(1);
    refetchData(false);
  }, [filters]);

  useEffect(() => {
    if (data) {
      paging.setTotalItems(data.pagination.totalItems);
      paging.setMaximumPage(data.pagination.totalPages);
      paging.setCurrentPage(data.pagination.currentPage);
      setPageChanged(false);
    }
  }, [data]);

  useEffect(() => {
    if (paging.pageChanged) {
      setPageChanged(true);
    }
  }, [paging.pageChanged]);

  return {
    data: data?.items,
    paging,
    isLoading: isLoading || isRefetching,
    refetch,
  };
}
