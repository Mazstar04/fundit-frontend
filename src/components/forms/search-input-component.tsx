import { ISearchInputProps } from '@interfaces';

import { CiSearch } from 'react-icons/ci';

export default function SearchInputComponent({
  className,
  placeholder = 'Search',
  containerClassNames,
  ...rest
}: ISearchInputProps) {
  return (
    <div
      className={` p-2 px-2 rounded-lg border border-[#E6E9EE] flex items-center gap-2 ${containerClassNames}`}
    >
      <CiSearch size={20} />

      <input
        {...rest}
        placeholder={placeholder}
        className={` w-full tracking-wider outline-none text-sm bg-inherit ${className}`}
      />
    </div>
  );
}
