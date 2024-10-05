import React, { HtmlHTMLAttributes } from 'react';
import { ISelectFieldProps, ISelectInputOptionProps } from '@interfaces';

export default function SelectInputContainer({ ...props }: ISelectFieldProps) {
  const inputClassNames =
    'w-full border border-slate-300 text-sm p-3  rounded-md outline-none focus:border-primary-200 tracking-wider font-light';

  return (
    <div className=" flex flex-col gap-2 mb-6 ">
      <select className={` ${inputClassNames} `} {...props}>
        {props.children}
      </select>
    </div>
  );
}

export function SelectInputOption({
  value,
  label,
  ...rest
}: ISelectInputOptionProps) {
  return (
    <option value={value ?? ''} {...rest}>
      {label}
    </option>
  );
}
