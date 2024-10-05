import { IInputFieldProps } from '@interfaces';

export default function CheckboxOption({
  name,
  label,
  className = '',
  ...props
}: IInputFieldProps) {
  const inputClassNames = ' text-red-600 ';

  return (
    <label className={` flex gap-3 items-center ${className}`}>
      <input
        type="checkbox"
        name={name}
        className={` ${inputClassNames}  ${className}`}
        {...props}
      />
      {label}
    </label>
  );
}
