import { IDonation } from '@/interfaces';
import { formatCurrency } from '@/utils/formatter';
import { format } from 'date-fns';
import { TbDots } from 'react-icons/tb';

const DonationMobileRowComponent = ({ donation }: { donation: IDonation }) => {
  return (
    <div
      className={`flex flex-col gap-2 font-urbanist text-[#344054] text-[14px] `}
    >
      <div className="flex justify-between items-center">
        <span className="font-[500]">{donation.username}</span>
        <div className="flex flex-col">
          <span className="font-[500]">
            {format(new Date(donation.created), 'd MMM, yyyy')}
          </span>
          <span className="text-[#667185]">
            {format(new Date(donation.created), 'h:mm a')}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <span className="font-[600]">{formatCurrency(donation.amount)} ({donation.status})</span>
          <span className="text-[#667185]">{donation.campaignTitle}</span>
        </div>
        <TbDots size={18} />
      </div>
    </div>
  );
};

export default DonationMobileRowComponent;
