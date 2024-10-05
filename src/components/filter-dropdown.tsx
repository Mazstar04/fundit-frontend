"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FilterOption {
  label: string;
  value: string | number;
  icon?: React.ReactNode; // Optional icon or content before the option label
}

interface FilterDropdownProps {
  title: string;
  className?: string;
  icon?: React.ReactNode;
  options: FilterOption[];
  isMulti?: boolean;
  hasArrow?: boolean;
  onChange: (selected: string[] | string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  title,
  icon,
  options,
  isMulti = false,
  hasArrow = true,
  className,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    isMulti ? [] : [""]
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleOptionClick = (value: string) => {
    if (isMulti) {
      setSelectedOptions((prev) =>
        prev.includes(value)
          ? prev.filter((opt) => opt !== value)
          : [...prev, value]
      );
    } else {
      setSelectedOptions([value]);
      setIsOpen(false);
    }

    onChange(isMulti ? selectedOptions : value);
  };

  return (
    <div className="relative font-urbanist" ref={dropdownRef}>
      {/* Dropdown button */}
      <div
        className={`flex items-center gap-2  bg-[#F9FAFB] p-[16px] rounded-[32px] cursor-pointer ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon && <div>{icon}</div>}
        <span className="text-[14px] flex-1">
          {" "}
          {isMulti && selectedOptions?.length > 0
            ? `${selectedOptions?.length} Selected`
            : !isMulti && selectedOptions[0]
            ? selectedOptions[0]
            : title}
        </span>
        {hasArrow && <IoIosArrowDown size={20} color="#04161C" />}
      </div>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full border-[1px] border-[#CACED2] bg-white shadow-lg rounded-[16px] z-10 overflow-hidden">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option.value.toString())}
              className={`flex items-center gap-2 px-[16px] py-[8px] cursor-pointer hover:bg-[#f3f4f6] ${
                selectedOptions.includes(option.value.toString()) &&
                "bg-[#e5e7eb]"
              }`}
            >
              {isMulti ? (
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedOptions.includes(option.value.toString())}
                  readOnly
                />
              ) : (
                option.icon && <div>{option.icon}</div>
              )}
              <span className="text-[14px]">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
