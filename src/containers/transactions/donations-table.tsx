import { IDonation, ITableColumnConfig } from '@/interfaces';
import { CellContext } from '@tanstack/react-table';
import DataTable from '../table/data-table';
import {  DonationMobileRowComponent, generateColumns } from '@/components';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';
import { format } from 'date-fns';
import { formatCurrency } from '@/utils/formatter';
import useTableQuery from "@/hooks/use-table-query";
import api from "@/api";
import { useState } from 'react';

const DonationsTable = () => {
  
  const [filters, setFilters] = useState({
    search: "",
  });

  const { data, isLoading, paging, refetch } = useTableQuery({
    queryName: "donations",
    queryFunction: api.transaction.getDonations,
    filters,
  });

  const columnsConfig: ITableColumnConfig[] = [
    {
      header: 'Name',
      accessorKey: 'username',
      cell: (cellInfo: CellContext<any, string>) => {
        return (
          <span className="text-[14px] font-[600] text-[#101928]">
            {cellInfo.getValue()}
          </span>
        );
      },
    },
    {
      header: 'Campaign',
      accessorKey: 'campaignTitle',
    },
    {
      header: 'Amount',
      accessorKey: 'amount',
      cell: (cellInfo: CellContext<any, string>) => {
        return (
            <span className="text-[14px] font-[600] text-[#344054]">
              {formatCurrency(parseInt(cellInfo.getValue()))}
            </span>
        );
      },
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (cellInfo: CellContext<any, string>) => {
        return (
          <div
            className={`py-1 rounded-[32px] flex items-center justify-center text-[12px] capitalize font-[500]  w-[80px] text-[#020C0F] ${
              cellInfo.getValue().toLowerCase() == "pending"
                ? "bg-[#EAD211]"
                : cellInfo.getValue().toLowerCase() == "successful"
                ? "bg-[#79E841]"
                : "bg-[#DB094B] text-white"
            }`}
          >
            {cellInfo.getValue()}
          </div>
        );
      },
    },
    {
      header: 'Date and time',
      accessorKey: 'created',
      cell: (cellInfo: CellContext<any, string>) => {
        return (
          <div className="flex flex-col">
            <span className="text-[14px] font-[600] text-[#344054]">
              {format(new Date(cellInfo.getValue()), 'd MMM, yyyy')}
            </span>
            <span className="text-[14px]  text-[#667185]">
              {format(new Date(cellInfo.getValue()), 'h:mm a')}
            </span>
          </div>
        );
      },
    },
  ];

  return (
    <div className="rounded-t-[10px] overflow-hidden">
      <DataTable
        data={data}
        columns={generateColumns(columnsConfig)}
        paging={paging}
        loading={isLoading}
        hasMobileComponent={true}
        expandedComponent={(data) => <DonationMobileRowComponent donation={data} />}
        actions={[
          {
            component: (
              <div className="border-[1px] border-[#E4E7EC] h-[30px] w-[30px] flex items-center justify-center rounded-[8px]">
                <PiDotsThreeVerticalBold size={18} />
              </div>
            ),
            method: (data: IDonation) => {},
          },
        ]}
      />
    </div>
  );
};

export default DonationsTable;
