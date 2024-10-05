// use-dropdown-query.ts
'use client';
import { IInputOptions, IPagedRequest, IListResponse } from '@interfaces';
import usePaging from './use-paging';
import { useEffect, useState } from 'react';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

interface IUseDropdownQueryParams<T> {
  queryName: string;
  queryFunction: ({
    paging,
  }: {
    paging: IPagedRequest;
  }) => Promise<IListResponse<T>>;
  options?: UseQueryOptions<IListResponse<T>>;
  labelSelector?: (item: T) => string;
  valueSelector?: (item: T) => string;
  withAll?: boolean;
}

interface IResponse {
  isLoading: boolean;
  data: any;
}

export default function useDropdownQuery<T>(
  params: IUseDropdownQueryParams<T>,
) {
  const { ...restOptions } = params.options || {};
  const defaultOptions: UseQueryOptions<IListResponse<T>> = {
    staleTime: Infinity,
    queryKey: []
  };
  const paging = usePaging({ usePaging: false });

  const [responseOptions, setResponseOptions] = useState<IInputOptions[]>([]);

  const { data, isLoading, isRefetching } = useQuery({
    ...defaultOptions,
    ...restOptions,
    queryKey: [params.queryName],
    queryFn: () => params.queryFunction({ paging }),
  });

  useEffect(() => {
    if (data && data.items) {
      if (params.labelSelector && params.valueSelector) {
        const baseOption: IInputOptions[] = params.withAll
          ? [
              {
                label: 'All',
                value: '',
              },
            ]
          : [];
        setResponseOptions([
          ...baseOption,
          ...data.items.map((item) => ({
            label: params.labelSelector!(item),
            value: params.valueSelector!(item),
          })),
        ]);
      }
    }
  }, [data]);

  const response: IResponse = {
    isLoading: isLoading || isRefetching,
    data: params.valueSelector ? responseOptions : data?.items,
  };

  return response;
}
