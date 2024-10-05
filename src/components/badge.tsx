import { MdVerified } from 'react-icons/md';

const Badge = ({ title }: { title: string }) => {
  return (
    <div className="rounded-[20px] p-2 bg-[#F4FCF8] flex items-center gap-1 ">
      <MdVerified size={15} color="#007339" />
      <span className="text-[10px] font-[300]">{title}</span>
    </div>
  );
};

export default Badge;
