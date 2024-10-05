import { IoIosCloseCircleOutline } from 'react-icons/io';
import { IoCloseCircle } from 'react-icons/io5';

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  maxWidth?: string;
  isFullScreen?: boolean;
  position?: 'end' | 'start' | 'center';
}

export default function ModalContainer({
  maxWidth = '600px',
  isFullScreen = false,
  position = 'center',
  ...props
}: IModalProps) {
  return (
    <div
      className={` ${props.isOpen ? 'block' : 'hidden'}  backdrop-blur-sm bg-black bg-opacity-80 w-full h-screen fixed top-0 left-0 z-50 flex justify-center items-center `}
      style={{
        justifyContent: position,
      }}
    >
      <div
        className={`flex flex-col bg-white rounded-[20px] p-6 overflow-auto w-[90vw] max-h-[90vh] md:w-[${maxWidth}] max-w-[${maxWidth}]  fancy-scrollbar ${isFullScreen ? '' : 'max-h-[100vh] md:h-auto md:max-h-[80vh]'} `}
        style={{
          maxWidth,
        }}
      >
        <div className=" flex justify-between items-center ">
          <h3 className=" font-lexend text-[22px]">{props.title}</h3>

          {!isFullScreen && (
            <button onClick={() => props.setIsOpen(false)}>
              <IoIosCloseCircleOutline size={30} color="#000" />
            </button>
          )}
        </div>

        <div className=" flex-1 my-3">{props.children}</div>
      </div>
     
    </div>
  );
}
