import { IInputFieldProps } from '@interfaces';
import { FaCircleCheck, FaRegCircle } from 'react-icons/fa6';

export default function FancyRadioOption({
  name,
  label,
  className = '',
  ...props
}: IInputFieldProps) {
  return (
    <label className={`flex-1 ${className}`}>
      <input type="radio" name={name} className="hidden" {...props} />
      <div
        className={`w-full border-[1px] rounded-[8px] p-3 flex items-center justify-between  ${props.checked ? 'text-primary-200 border-primary-200 bg-[#FDF0F1]' : 'text-[#000C2D] border-[#E1E5EB]'}`}
      >
        <span className="text-[16px]"> {label}</span>
        {props.checked ? (
          <FaCircleCheck size={16} />
        ) : (
          <FaRegCircle size={16} color="#CED4DB" />
        )}
      </div>
    </label>
  );
}
