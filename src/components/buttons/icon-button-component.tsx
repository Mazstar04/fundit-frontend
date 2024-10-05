import { IButtonProps } from '@interfaces';

export default function IconButton({
  children,
  className,
  ...props
}: IButtonProps) {
  return (
    <button
      className={`text-white bg-primary-theme py-3 px-4 rounded-[32px] flex justify-center items-center text-[14px] font-[500]  gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
