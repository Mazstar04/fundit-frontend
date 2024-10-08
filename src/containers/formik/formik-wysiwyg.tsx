"use client";
import React from "react";
import { Field, FieldProps } from "formik";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Dynamically import react-quill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface FormikWysiwygProps {
  label: string;
  name: string;
  required?: boolean;
}

const FormikWysiwyg: React.FC<FormikWysiwygProps> = ({
  label,
  name,
  required,
}) => {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <div className="flex flex-col gap-1">
          <ReactQuill
            value={field.value || ""}
            onChange={(content) => {
              if (content === "<p><br></p>" || content.trim() === "") {
                form.setFieldValue(name, "");
              } else {
                form.setFieldValue(name, content);
              }
            }}
            className={`mb-10 `}
            style={{ height: "350px" }}
          />
        </div>
      )}
    </Field>
  );
};

export default FormikWysiwyg;
