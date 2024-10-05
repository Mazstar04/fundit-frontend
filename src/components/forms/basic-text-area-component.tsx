import { ITextAreaProps } from '@interfaces';

export default function BasicTextArea({
  name,
  value,
  className,
  required = false,
  ...props
}: ITextAreaProps) {
  const textareaClassNames =
    'w-full border border-slate-300 text-sm p-3  rounded-md outline-none focus:border-primary-200 tracking-wider font-light fancy-scrollbar';

  return (
    <textarea
      id={name}
      name={name}
      value={value}
      required={required}
      className={` ${textareaClassNames}  ${className}`}
      {...props}
    ></textarea>
  );
}
