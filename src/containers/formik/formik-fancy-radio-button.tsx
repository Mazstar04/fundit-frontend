import React from 'react';
import { Field, FieldArray, FieldProps } from 'formik';
import { FancyRadioOption } from '@components';
import { CustomInputProps } from './formik-input';

export default function FormikFancyRadiobutton({ ...props }: CustomInputProps) {
  return (
    <FieldArray
      name={props.name}
      render={(arrayHelpers) => (
        <div className={`${props.className}`}>
          {props.options?.map((option, index) => (
            <Field name={props.name} key={`${option.value}_${index}`}>
              {({ field }: FieldProps) => {
                const isChecked = field.value === option.value;

                return (
                  <FancyRadioOption
                  label={
                    typeof option?.label === "string" ? option.label : ""
                  }
                    {...field}
                    checked={isChecked}
                    onChange={() => {
                      arrayHelpers.form.setFieldValue(props.name, option.value);
                    }}
                  />
                );
              }}
            </Field>
          ))}
        </div>
      )}
    />
  );
}
