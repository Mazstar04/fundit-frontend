import { IButtonProps } from '@interfaces';

export default function BasicButton({
  text,
  className,
  ...props
}: IButtonProps) {
  return (
    <button
      className={` bg-primary-theme text-white text-sm font-light py-3 px-4 rounded-lg ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}
