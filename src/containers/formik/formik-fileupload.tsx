import { Field, FieldInputProps, FieldProps, FormikProps } from "formik";
import { CustomInputProps } from "./formik-input";
import { FileUploadComponent } from "@components";
import { Accept } from "react-dropzone";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "@/api";
import { toast } from "react-toastify";

interface FormikFileUploadProps extends CustomInputProps {
  isMulti?: boolean;
  acceptedFileTypes?: Accept;
}

export default function FormikFileUpload({
  isMulti = false,
  acceptedFileTypes = { "image/*": [] },
  ...props
}: FormikFileUploadProps) {
  const uploadDocumentMutation = useMutation({
    mutationFn: api.documeent.UploadDocument<any>,
  });

  const [uploading, setUploading] = useState<boolean>(false);

  const uploadFileAndSetValue = async (
    files: File[],
    form: FormikProps<any>,
    field: FieldInputProps<any>
  ) => {
    const uploadPromises = files.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      const res = await uploadDocumentMutation.mutateAsync(formData);
      return res?.imageUrl;
    });

    try {
      setUploading(true);
      const uploadedUrls = await Promise.all(uploadPromises);
      const newFiles = isMulti
        ? [...(field.value || []), ...uploadedUrls]
        : uploadedUrls[0];
      form.setFieldValue(field.name, newFiles);
    } catch (error: any) {
      toast.error(error);
      
    }
    finally{
      setUploading(false);
    }
  };

  return (
    <Field name={props.name}>
      {({ field, form }: FieldProps) => (
        <div>
          <FileUploadComponent
            uploading={uploading}
            name={props.name}
            multiple={isMulti}
            acceptedFileTypes={acceptedFileTypes}
            handleFileUpload={(files: File[]) => {
              uploadFileAndSetValue(files, form, field);
            }}
            uploaded={(!isMulti && field?.value) || (isMulti && field.value?.length > 0)}
          />
          <input
            id={`${props.name}-file-input`}
            type="file"
            multiple={isMulti}
            accept={Object.keys(acceptedFileTypes).join(",")}
            onChange={(e) => {
              if (e.target.files) {
                uploadFileAndSetValue(Array.from(e.target.files), form, field);
              }
            }}
            className="hidden"
          />
        </div>
      )}
    </Field>
  );
}
