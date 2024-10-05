import { IDonation, ITableColumnConfig } from '@/interfaces';
import { CellContext } from '@tanstack/react-table';
import DataTable from '../table/data-table';
import {  DonationMobileRowComponent, generateColumns } from '@/components';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';
import usePaging from '@/hooks/use-paging';
import { format } from 'date-fns';
import { formatCurrency } from '@/utils/formatter';

const DonationsTable = () => {
  const paging = usePaging();
  const donations: IDonation[] = [
    {
      id: "1",
      campaignId: "101",
      campaignTitle: "Help Build a School",
      username: "John Doe",
      amount: 500,
      created: new Date("2024-10-01"),
      status: "successful",
    },
    {
      id: "2",
      campaignId: "102",
      campaignTitle: "Support Medical Aid",
      username: "Jane Doe",
      amount: 300,
      created: new Date("2024-09-25"),
      status: "pending",
    },
    {
      id: "3",
      campaignId: "103",
      campaignTitle: "Clean Water Initiative",
      username: "Michael Smith",
      amount: 1000,
      created: new Date("2024-10-02"),
      status: "successful",
    },
    {
      id: "4",
      campaignId: "101",
      campaignTitle: "Help Build a School",
      username: "Emily Jones",
      amount: 700,
      created: new Date("2024-09-28"),
      status: "failed",
    },
    {
      id: "5",
      campaignId: "104",
      campaignTitle: "Disaster Relief Fund",
      username: "David Clark",
      amount: 200,
      created: new Date("2024-10-03"),
      status: "successful",
    }
  ];
  
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
        data={donations}
        columns={generateColumns(columnsConfig)}
        paging={paging}
        loading={false}
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
