import { Breadcrumb } from "@/components";
import { BreadcrumbItem } from "@/components/breadcrumb";
import { BsArrowLeft } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  breadcrumbs?: BreadcrumbItem[]
}

const SideModalContainer = ({
  isOpen,
  setIsOpen,
  title,
  breadcrumbs,
  children,

}: IModalProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 transition-all duration-[300] fancy-scrollbar bg-white md:rounded-[32px] w-full md:w-[55vw] lg:w-[45vw] h-full md:p-5 z-40 overflow-y-auto flex flex-col gap-4 ${
          isOpen ? "right-0" : "-right-[100vw] md:-right-[55vw] lg:-right-[45vw]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hidden md:flex items-center justify-between ">
          <h3 className="text-[32px] font-sans">{title}</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="w-[44px] h-[44px] rounded-[50%] flex items-center justify-center bg-[#E8F2F2] text-[#DB094B]"
          >
            <LiaTimesSolid size={20} />
          </button>
        </div>
        <div className="md:hidden relative rounded-[32px] min-h-[160px] flex flex-col justify-center gap-5 overflow-hidden p-4">
          <div className="flex gap-3 items-center ">
            <button onClick={() => setIsOpen(false)}>
              <BsArrowLeft color="#04161C" size={20} />
            </button>
            {breadcrumbs && <Breadcrumb breadcrumbs={breadcrumbs} />}
          </div>
          <h3 className="text-[32px] font-sans">{title}</h3>

          <div className="absolute w-[300px] h-[300px] blur-[300px] bg-[#DB094B] -left-4 top-20"></div>
          <div className="absolute w-[200px] h-[300px] blur-[4200px] bg-[#79E841] -right-4 -top-5"></div>
        </div>
        <div className="p-4 md:p-0">{children}</div>
      </div>
    </>
  );
};

export default SideModalContainer;
