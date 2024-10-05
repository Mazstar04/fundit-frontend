"use client";
import { formatCurrency } from "@/utils/formatter";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSFill } from "react-icons/ri";
import {
  BarChart,
  Bar,
  XAxis,
  Cell,
  ResponsiveContainer,
  LabelList,
} from "recharts";

// Sample data for the latest 3 months
const data = [
  { month: "July", value: 60000 },
  { month: "August", value: 90000 },
  { month: "September", value: 50000 },
];
const barColors = ["#FFFFFF1A", "#93CC00", "#FFFFFF1A"];

const RevenueGrowthChart = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`font-urbanist px-[20px] pt-[20px] rounded-[36px]  transition-all duration-300 w-full overflow-hidden  ${
        isCollapsed
          ? "py-[20px] h-auto bg-[#FFFFFF66] border-[1px] border-white"
          : " text-white bg-secondary"
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-[16px] font-[600]">Revenue Growth</h3>
        <div className="flex gap-3">
          <button className="h-[28px] w-[28px] rounded-[8px] flex items-center justify-center border-[1px] border-[#CACED2]">
            <GoArrowUpRight />
          </button>
          <button onClick={toggleCollapse}>
            {isCollapsed ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </button>
        </div>
      </div>

      {!isCollapsed && (
        <div className="flex flex-col gap-3">
          <div className="flex gap-1">
            <span className="text-[24px] font-[600]">{formatCurrency(200000)}</span>
            <RiArrowUpSFill size={20} color="#93CC00" className="mt-1" />
          </div>
          <div className="h-[150px] ">
            <ResponsiveContainer width="100%" height="100%" >
              <BarChart data={data} barCategoryGap="0%" barGap={0} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <Bar dataKey="value" fill="#93CC00" radius={[20, 20, 0, 0]} >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={barColors[index]} />
                  ))}
                  <LabelList
                    dataKey="month"
                    position="insideBottom"
                    fill="#9DA3A9"
                    offset={50}
                  />
                  <LabelList
                    dataKey="value"
                    position="insideBottom"
                    offset={30}
                    fill="#fff"
                    formatter={(value: any) => formatCurrency(parseFloat(value))}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default RevenueGrowthChart;
