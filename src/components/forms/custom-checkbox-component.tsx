import { IInputFieldProps } from '@interfaces';

export default function CustomCheckboxOption({
  name,
  className = '',
  ...props
}: IInputFieldProps) {
  const inputClassNames = 'w-[15px] h-[15px] border-[1.25px] !border-[#98A2B3] ';

  return (
   
      <input
        type="checkbox"
        name={name}
        id={name}
        className={` ${inputClassNames} ${className}`}
        {...props}
      />
     
  );
}
