import { useFormikContext } from 'formik';
import { CustomInputProps } from './formik-input';
import { InputLabel } from '@components';

export default function FormInputWrapper({
  input,
  children,
}: {
  input: CustomInputProps;
  children: React.ReactNode;
}) {
  const formikContext = useFormikContext();

  return (
    <div className=" flex flex-col gap-1 font-urbanist">
      {input.label && (
        <InputLabel
          name={input.name}
          text={input.label}
          isRequired={input.required}
        />
      )}
      <div>
        {children}
        {formikContext.getFieldMeta(input.name) && (
          <p className=" text-red-600" style={{ fontSize: '10px' }}>
            {formikContext.getFieldMeta(input.name).error}
          </p>
        )}
      </div>
    </div>
  );
}
