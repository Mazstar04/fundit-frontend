"use client";
import React, { FC } from "react";
import { FieldInputProps, FieldMetaProps, FormikProps } from "formik";
import { ICustomInputConfigProps, IInputOptions } from "@interfaces";
import FormikCheckBox from "./formik-checkbox";
import FormikInputField from "./formik-input-field";
import FormikFileUpload from "./formik-fileupload";
import FormInputWrapper from "./formik-input-wrapper";
import FormikTextArea from "./formik-text-area";
import FormikFancyRadiobutton from "./formik-fancy-radio-button";
import FormikDropdown from "./formik-dropdown";
import { Accept } from "react-dropzone";
import FormikWysiwyg from "./formik-wysiwyg";

export interface CustomInputProps {
  name: string;
  type?:
    | "text"
    | "number"
    | "email"
    | "address"
    | "password"
    | "phone"
    | "date"
    | "datetime-local"
    | "textarea"
    | "datepicker"
    | "timepicker"
    | "checkbox"
    | "fancy-radio"
    | "select"
    | "dropdown"
    | "wysiwyg"
    | "file-upload";
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  field?: FieldInputProps<any>;
  form?: FormikProps<any>;
  meta?: FieldMetaProps<any>;
  options?: IInputOptions[];
  config?: ICustomInputConfigProps;
  isSearchable?: boolean;
  isMulti?: boolean;
  isCreatable?: boolean;
  min?: any;
  max?: any;
  maxLength?: number;
  minLength?: number;
  acceptedFileTypes?: Accept;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  validate?: (value: any) => undefined | string | Promise<any>;
}

const FormikInput: FC<CustomInputProps> = ({ type = "text", ...props }) => {
  switch (type) {
    case "text":
    case "address":
    case "number":
    case "password":
    case "phone":
    case "email":
    case "date":
    case "datetime-local":
      return (
        <FormInputWrapper input={props}>
          <FormikInputField type={type} {...props} />
        </FormInputWrapper>
      );
    case "textarea":
      return (
        <FormInputWrapper input={props}>
          <FormikTextArea {...props} />
        </FormInputWrapper>
      );
    case "checkbox":
      return (
        <FormInputWrapper input={props}>
          <FormikCheckBox {...props} />
        </FormInputWrapper>
      );

    case "fancy-radio":
      return (
        <FormInputWrapper input={props}>
          <FormikFancyRadiobutton {...props} />
        </FormInputWrapper>
      );
       case "wysiwyg":
      return (
        <FormInputWrapper input={props}>
          <FormikWysiwyg label={props.label?? ""} name={props.name} required={props.required} />
        </FormInputWrapper>
      );

    case "dropdown":
      const { placeholder, options, ...restProps } = props;
      return (
        <FormInputWrapper input={props}>
          <FormikDropdown
            placeholder={placeholder || ""}
            options={options || []}
            {...restProps}
          />
        </FormInputWrapper>
      );
    case "file-upload":
      const { isMulti, acceptedFileTypes, ...restFileUploadProps } = props;
      return (
        <FormInputWrapper input={props}>
          <FormikFileUpload
            isMulti={isMulti}
            acceptedFileTypes={acceptedFileTypes}
            {...restFileUploadProps}
          />
        </FormInputWrapper>
      );
  }
};

export default FormikInput;
