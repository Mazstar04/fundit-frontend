import { Field, FieldProps } from 'formik';
import { BasicTextArea } from '@components';
import { CustomInputProps } from './formik-input';

export default function FormikTextArea({ ...props }: CustomInputProps) {
  return (
    <Field name={props.name}>
      {({ field }: FieldProps) => (
        <BasicTextArea
          label={props.label}
          {...field}
          {...props}
          name={props.name}
        />
      )}
    </Field>
  );
}
