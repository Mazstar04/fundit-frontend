import { IconButton } from "@/components";
import { formatCurrency } from "@/utils/formatter";
import { GoArrowUpRight } from "react-icons/go";
import { PiPackage } from "react-icons/pi";

interface IProductSummary {
  name: string;
  imagePath: string;
  amount: number;
  qty: number;
}

const LeastProductsContainer = () => {
  const productSummary: IProductSummary[] = [
    {
      name: "Wireless Headphones",
      imagePath: "/images/wireless-headphones.png",
      amount: 19900.99,
      qty: 2,
    },
    {
      name: "Smart Watch",
      imagePath: "/images/smart-watch.png",
      amount: 24900.99,
      qty: 100,
    },
    {
      name: "Bluetooth Speaker",
      imagePath: "/images/bluetooth-speaker.png",
      amount: 990000.99,
      qty: 300,
    },
    {
      name: "Laptop Stand",
      imagePath: "/images/laptop-stand.png",
      amount: 29000000.99,
      qty: 20,
    },
    {
      name: "USB-C Hub",
      imagePath: "/images/usb-c-hub.png",
      amount: 590000.99,
      qty: 1320,
    },
  ];

  return (
    <div className=" bg-[#FFFFFF66] border-[1px] border-white rounded-[32px] p-[15px] flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="h-[38px] w-[38px] rounded-[16px] flex items-center justify-center bg-[#EAD211] ">
            <PiPackage size={18} />
          </div>
          <h3 className="text-[16px] font-[600]">Least Performing Products</h3>
        </div>
        <button className=" h-[38px] w-[38px]  font-urbanist rounded-[50%] bg-white text-[16px]  flex items-center justify-center">
          <GoArrowUpRight size={18} />
        </button>
      </div>
      {productSummary.map((p, index) => (
        <div key={Math.random() * 85} className="flex gap-3 items-center">
            <div className="w-[40px] h-[40px] rounded-[50%] bg-[#98A2B3] bg-no-repeat bg-center bg-cover"></div>
            <div className="flex flex-col gap-1 font-[500] flex-1">
                <h3 className="text-[16px]">{p.name}</h3>
                <p className="text-[12px] text-[#9DA3A9]">{p.qty.toLocaleString()} products sold since last month</p>
            </div>
            <span className="text-[18px] font-[600]">{formatCurrency(p.amount)}</span>
        </div>
      ))}
    </div>
  );
};

export default LeastProductsContainer;
