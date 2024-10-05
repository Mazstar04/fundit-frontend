"use client";
import { INavOption } from "@/interfaces";
import { usePathname, useRouter } from "next/navigation";

const BottomNav = ({ navOptions }: { navOptions: INavOption[] }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed w-full bottom-3 left-0 px-[20px]">
      <div className="rounded-[80px] bg-white p-[12px] flex items-center justify-between">
        {navOptions.slice(0, 4).map((n) => (
          <button
          key={Math.random()*6}
            onClick={() => router.push(n.route)}
            className={`w-[60px] h-[56px] rounded-[50%] flex items-center justify-center ${
              n.route == pathname ? "text-secondary bg-primary" : ""
            }`}
          >
            <n.icon size={20} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
