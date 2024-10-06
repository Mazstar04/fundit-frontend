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
  isCreatable = false,
}: IDropdownProps) {
  const customStyles: StylesConfig = {
    control: (base: any, state) => ({
      ...base,
      border: 0,
      outline: '1px solid #E1E5EB',
      fontSize: '14px',
      backgroundColor: 'white',
      padding: '6px',
      borderRadius: '8px',
      boxShadow: 'none',
      width: '100%',
    }),
    menu: (base: any, state) => ({
      ...base,
      position: 'absolute',
    }),
    singleValue: (base: any, state) => ({
      ...base,
      fontSize: '14px',
      fontWeight: '500',
    }),
    multiValue: (base: any, state) => ({
      ...base,
      backgroundColor: '#ED353F',
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
      fontWeight: '500',
    }),
    option: (base: any, state) => ({
      ...base,
      fontSize: '12px',
      backgroundColor: state.isSelected
        ? '#ED353F'
        : state.isFocused
          ? '#FDF0F1'
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
