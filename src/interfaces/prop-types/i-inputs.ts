import { HTMLAttributes, HTMLProps } from 'react';
import { Accept } from 'react-dropzone';

export interface IInputFieldProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  value?: string;
  label?: string;
  checked?: boolean;
  required?: boolean;
  labelStyle?: string;
  disabled?: boolean;
  placeholder?: string;
}

export interface ITextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  name: string;
  value?: string;
  label?: string;
  required?: boolean;
}

export interface ILabelledInputFieldProps
  extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
  value?: string;
  placeholder?: string;
}

export interface ISearchInputProps extends HTMLAttributes<HTMLInputElement> {
  value?: any;
  onChange?: (e: any) => void;
  placeholder?: string;
  containerClassNames?: string;
}

export interface ISelectFieldProps extends HTMLAttributes<HTMLSelectElement> {
  name: string;
  value?: string;
  label?: string;
}

export interface ISelectInputOptionProps extends HTMLProps<HTMLOptionElement> {
  value: string | undefined;
  label: string;
}

export interface IInputOptions {
  label?: string | React.ReactNode;
  value?: string | boolean | number;
  disabled?: boolean;
  icon?: React.JSX.Element;
}

export interface ICustomInputConfigProps {
  isToggle?: boolean;
  codeCount?: number;
  showTextCount?: boolean;
  formattedAddressName?: string;
}

export interface IDropdownProps {
  name: string;
  placeholder: string;
  options: IInputOptions[];
  isSearchable?: boolean;
  isMulti?: boolean;
  isCreatable?: boolean;
  value?: any;
  defaultValue?: any;
  useDefaultConfig?: boolean;
  displayWidth?: string;
  dropdownWidth?: string;
  backgroundColor?: string;
  textColor?: string;
  isDisabled?: boolean;
  onChange?: (e: any) => void;
  validate?: (value: any) => undefined | string | Promise<any>;
}

export interface ISearchInputProps extends HTMLAttributes<HTMLInputElement> {
  value?: any;
  onChange?: (e: any) => void;
}

export interface IFileUploadInputProps {
  name: string;
  handleFileUpload: (files: File[]) => void;
  multiple?: boolean;
  acceptedFileTypes?: Accept;
}
