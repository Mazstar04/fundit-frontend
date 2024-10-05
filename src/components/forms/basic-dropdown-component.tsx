'use client';
import Creatable from 'react-select/creatable';
import { StylesConfig } from 'react-select';
import { IDropdownProps } from '@interfaces';

export default function BasicDropdown({
  name,
  placeholder,
  options,
  isSearchable,
  isMulti,
  onChange,
  value = null,
  useDefaultConfig = false,
  displayWidth = '100%',
  dropdownWidth = '100%',
  isCreatable = false,
}: IDropdownProps) {
  const customStyles: StylesConfig = {
    control: (base: any, state) => ({
      ...base,
      border: 0,
      fontSize: '14px',
      backgroundColor: '#F9FAFB',
      height: "56px",
      padding: '6px',
      borderRadius: '32px',
      boxShadow: 'none',
      width: displayWidth,
    }),
    menu: (base: any, state) => ({
      ...base,
      position: 'absolute',
      width: dropdownWidth
    }),
    singleValue: (base: any, state) => ({
      ...base,
      fontSize: '14px',
      fontWeight: '500',
    }),
    multiValue: (base: any, state) => ({
      ...base,
      backgroundColor: '#00442D',
      color: 'white',
    }),
    multiValueLabel: (base: any, state) => ({
      ...base,
      color: 'white',
      fontSize: '12px',
      fontWeight: '500',
    }),
    placeholder: (base: any, state) => ({
      ...base,
      fontSize: '14px',
      color: "#98A2B3",
    }),
    option: (base: any, state) => ({
      ...base,
      fontSize: '12px',
      backgroundColor: state.isSelected
        ? '#00442D'
        : state.isFocused
          ? '#EDF4EE'
          : '',
      color: state.isSelected ? 'white' : '#000000',
      ':active': {
        backgroundColor: '',
      },
      whiteSpace: 'nowrap',
    }),
  };

  const handleCreateOption = (inputValue: string) => {
    const newOption = { label: inputValue, value: inputValue };
    if (onChange) {
      onChange(isMulti ? [...(value || []), newOption] : newOption);
    }
  };

  if (options && !useDefaultConfig) {
    if (isMulti) {
      value =
        options.filter((option) => value?.includes(option?.value)) || null;
    } else {
      value = options.find((option) => value == option?.value) || null;
    }
  }

  return (
    <Creatable
      options={options}
      placeholder={placeholder}
      isMulti={isMulti}
      isSearchable={isSearchable}
      onChange={onChange}
      onCreateOption={isCreatable ? handleCreateOption : undefined}
      autoFocus
      isClearable={isMulti}
      components={{
        // DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      value={value}
      styles={customStyles}
    />
  );
}
