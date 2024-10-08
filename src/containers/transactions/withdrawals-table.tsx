import { IWithdrawal, ITableColumnConfig } from '@/interfaces';
import { CellContext } from '@tanstack/react-table';
import DataTable from '../table/data-table';
import {  WithdrawalMobileRowComponent, generateColumns } from '@/components';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';
import usePaging from '@/hooks/use-paging';
import { format } from 'date-fns';
import { formatCurrency } from '@/utils/formatter';
import useTableQuery from "@/hooks/use-table-query";
import api from "@/api";
import { useState } from 'react';

const WithdrawalsTable = () => {

  const [filters, setFilters] = useState({
    search: "",
  });

  const { data, isLoading, paging, refetch } = useTableQuery({
    queryName: "withdrawal",
    queryFunction: api.transaction.getWithdrawals,
    filters,
  });
  const withdrawals: IWithdrawal[] = [
    {
      id: "1",
      bankName: "First National Bank",
      accountNo: "1234567890",
      accountName: "John Doe",
      amount: 1000,
      created: new Date("2024-10-01"),
    },
    {
      id: "2",
      bankName: "Standard Chartered Bank",
      accountNo: "9876543210",
      accountName: "Jane Smith",
      amount: 500,
      created: new Date("2024-09-28"),
    },
    {
      id: "3",
      bankName: "Chase Bank",
      accountNo: "1122334455",
      accountName: "Michael Brown",
      amount: 750,
      created: new Date("2024-09-30"),
    },
    {
      id: "4",
      bankName: "Barclays Bank",
      accountNo: "9988776655",
      accountName: "Emily Davis",
      amount: 1200,
      created: new Date("2024-09-25"),
    },
    {
      id: "5",
      bankName: "Citibank",
      accountNo: "4433221100",
      accountName: "David Clark",
      amount: 650,
      created: new Date("2024-10-02"),
    }
  ];
  
  
  const columnsConfig: ITableColumnConfig[] = [
    {
      header: 'Account Name',
      accessorKey: 'accountName',
      cell: (cellInfo: CellContext<any, string>) => {
        return (
          <span className="text-[14px] font-[600] text-[#101928]">
            {cellInfo.getValue()}
          </span>
        );
      },
    },
    {
      header: 'Bank Details',
      accessorKey: 'bankName',
      cell: (cellInfo: CellContext<any, string>) => {
        return (
          <div className="flex flex-col">
            <span className="text-[14px] font-[600] text-[#344054]">
              {cellInfo.getValue()}
            </span>
            <span className="text-[14px]  text-[#667185]">
              {cellInfo.row.original.accountNo}
            </span>
          </div>
        );
      },
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
        expandedComponent={(data) => <WithdrawalMobileRowComponent withdrawal={data} />}
        actions={[
          {
            component: (
              <div className="border-[1px] border-[#E4E7EC] h-[30px] w-[30px] flex items-center justify-center rounded-[8px]">
                <PiDotsThreeVerticalBold size={18} />
              </div>
            ),
            method: (data: IWithdrawal) => {},
          },
        ]}
      />
    </div>
  );
};

export default WithdrawalsTable;
