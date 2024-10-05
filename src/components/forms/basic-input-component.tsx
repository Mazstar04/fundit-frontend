import { IInputFieldProps } from '@interfaces';

export default function BasicInput({
  type,
  name,
  required = false,
  disabled = false,
  ...props
}: IInputFieldProps) {
  const inputClassNames =
    'w-full border border-slate-300 text-sm p-3  rounded-md outline-none focus:border-primary-200 tracking-wider font-light';

  return (
    <input
      {...props}
      type={type}
      id={name}
      name={name}
      required={required}
      disabled={disabled}
      className={`${inputClassNames}`}
    />
  );
}
