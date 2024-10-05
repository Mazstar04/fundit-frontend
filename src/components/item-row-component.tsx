const ItemRowComponent = ({
  title,
  value,
  justifyEnd = false,
}: {
  title: string;
  value: string;
  justifyEnd?: boolean;
}) => {
  return (
    <div className={`flex flex-col font-urbanist ${justifyEnd? "items-end text-right" : ""}`}>
      <span className="text-[10px] text-[#9DA3A9] font-[600] uppercase">{title}</span>
      <span className="text-[14px] text-[#030509]">{value}</span>
    </div>
  );
};

export default ItemRowComponent;
