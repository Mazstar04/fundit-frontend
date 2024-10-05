import { LiaTimesSolid } from "react-icons/lia";

interface ISuccessModalProps {
  children: React.ReactNode;
  hasConfetti?: boolean;
  isOpen: boolean;
  isSuccess?: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  description?: string;
  maxWidth?: string;
  positionX?: "end" | "start" | "center";
  positionY?: "end" | "start" | "center";
}

export default function SuccessModal({
  maxWidth = "420px",
  hasConfetti = false,
  positionX = "center",
  positionY = "center",
  isSuccess = true,
  ...props
}: ISuccessModalProps) {
  return (
    <div
      className={` ${
        props.isOpen ? "block" : "hidden"
      }  backdrop-blur-sm bg-black bg-opacity-50 w-full h-screen fixed top-0 left-0 z-50 flex justify-center items-center font-urbanist md:justify-${positionX} md:items-${positionY} `}
      
    >
      <div
        className={`flex flex-col bg-white rounded-[40px] p-[16px] overflow-auto w-[90vw] max-h-[90vh] md:w-[${maxWidth}] max-w-[${maxWidth}] relative  fancy-scrollbar gap-4 items-center `}
        style={{
          maxWidth,
        }}
      >
        {
          hasConfetti &&
        <div
            className="absolute w-full h-[160px] -top-0 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url('/images/confetti.png')` }}
          ></div>
        }
        <button
          onClick={() => props.setIsOpen(false)}
          className=" absolute top-3 right-3 w-[40px] h-[40px] rounded-[50%] flex items-center justify-center bg-[#E8F2F2]"
        >
          <LiaTimesSolid size={16} color="#DB094B" />
        </button>

        {isSuccess ? (
          <div
            className=" w-[97px] h-[80px] md:w-[130px] md:h-[100px] bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url('/images/check.png')` }}
          ></div>
        ) : (
          <div className="rounded-[20px] w-[120px] h-[120px] bg-secondary"></div>
        )}
        <div>
          <p className="text-center text-[24px] md:text-[28px] font-[600] leading-[28px] md:leading-[32px]">
            {props.title}
          </p>
          <p className="text-center text-[14px] text-light-gray ">
            {props.description}
          </p>
        </div>

        <div className="w-full">{props.children}</div>
      </div>
    </div>
  );
}
