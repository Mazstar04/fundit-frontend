import Link from "next/link";

const LogoComponent = () => {
  return (
    <Link href="/" className="flex gap-2 items-center font-sans">
      <div className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] rounded-[50%] flex items-center justify-center bg-primary-theme">
        <div className="w-[11px] h-[11px] md:w-[14px] md:h-[14px] rounded-[50%] bg-secondary"></div>
      </div>
      <h2 className="text-[16px] md:text-[20px] text-dark">FundIt</h2>
    </Link>
  );
};

export default LogoComponent;
