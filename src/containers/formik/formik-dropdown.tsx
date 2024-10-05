'use client';
import { BasicDropdown } from '@components';
import { IDropdownProps } from '@interfaces';
import { Field, FieldProps } from 'formik';

export default function FormikDropdown({
  name,
  placeholder,
  options,
  isSearchable = false,
  isMulti = false,
  isCreatable = false,
  ...props
}: IDropdownProps) {
  return (
    <Field name={name} validate={props.validate}>
      {({ field, form }: FieldProps) => {
        return (
          <BasicDropdown
            name={name}
            options={options}
            placeholder={placeholder}
            isMulti={isMulti}
            isSearchable={isSearchable}
            isCreatable={isCreatable}
            onChange={(item: any) => {
              let newValue = '';

              if (!isMulti) {
                form.setFieldValue(name, item.value);
                newValue = item.value;
              } else {
                const values = item?.map((i: any) => i.value);
                newValue = values;
                form.setFieldValue(name, values);
              }

              if (props.onChange) {
                props.onChange(newValue);
              }
            }}
            value={field.value}
          />
        );
      }}
    </Field>
  );
}
