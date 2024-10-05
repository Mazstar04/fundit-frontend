import { IButtonProps } from '@interfaces';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function BasicButton({
  text,
  className,
  loading = false,
  ...props
}: IButtonProps) {
  return (
    <button
    disabled={loading || props?.disabled}
      className={`text-white text-[14px] md:text-[16px] font-[500] py-3 px-4 rounded-[32px] font-urbanist ${className} ${props?.disabled ? 'bg-gray' : 'bg-primary-theme'}`}
      {...props}
    >
       {loading ? (
        <div className="flex items-center justify-center ">
          <AiOutlineLoading3Quarters size={20} className="animate-spin" />
        </div>
      ) : (
        text
      )}
    </button>
  );
}
