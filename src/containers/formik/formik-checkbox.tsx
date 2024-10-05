import { Field, FieldArray, FieldProps } from "formik";
import { Fragment } from "react";
import { CheckboxOption } from "@components";
import { CustomInputProps } from "./formik-input";

export default function FormikCheckBox({ ...props }: CustomInputProps) {
  return (
    <FieldArray
      name={props.name}
      render={(arrayHelpers) => (
        <Fragment>
          {props.options?.map((option, index) => {
            return (
              <Field
                key={`${option.value}_${index}`}
                name={props.name}
                render={({ field }: FieldProps) => {
                  let isChecked;

                  if (props.config?.isToggle) {
                    isChecked = arrayHelpers.form.values[props.name];
                  } else {
                    isChecked = arrayHelpers.form.values[props.name].includes(
                      option?.value
                    );
                  }

                  return (
                    <CheckboxOption
                      label={
                        typeof option?.label === "string" ? option.label : ""
                      }
                      {...field}
                      checked={isChecked}
                      onChange={() => {
                        if (props.config?.isToggle) {
                          arrayHelpers.form.setFieldValue(
                            props.name,
                            !field.value
                          );
                        } else {
                          const options = arrayHelpers.form.values[props.name];
                          const value = option?.value;
                          const index = options.indexOf(value);

                          if (index !== -1) {
                            arrayHelpers.remove(index);
                          } else {
                            arrayHelpers.push(value);
                          }
                        }
                      }}
                    />
                  );
                }}
              />
            );
          })}
        </Fragment>
      )}
    />
  );
}
