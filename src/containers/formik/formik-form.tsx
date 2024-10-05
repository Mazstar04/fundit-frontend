'use client';
import { Form, Formik, FormikHelpers, FormikValues } from 'formik';
import React, { ReactNode } from 'react';

type FormikFormProps<T> = {
  initialValues: T;
  children: ReactNode;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
  onFormChange?: (target: EventTarget) => void;
  validationSchema?: any;
  innerRef?: any;
};

export default function FormikForm<T extends FormikValues>({
  initialValues,
  children,
  onSubmit,
  onFormChange,
  validationSchema,
  ...props
}: FormikFormProps<T>) {
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={true}
      validateOnMount={false}
      validateOnBlur={false}
      innerRef={props.innerRef}
    >
      <Form
        onChange={(e) => {
          if (onFormChange) {
            onFormChange(e.target);
          }
        }}
      >
        {children}
      </Form>
    </Formik>
  );
}
