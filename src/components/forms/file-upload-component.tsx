"use client";
import { useCallback, useState } from "react";
import { useDropzone, Accept } from "react-dropzone";
import { IFileUploadInputProps } from "@interfaces";
import BasicButton from "../buttons/basic-button-component";
import { SlCloudUpload } from "react-icons/sl";
import { FaCircleCheck } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface FileUploadProps extends IFileUploadInputProps {
  multiple?: boolean;
  uploading: boolean;
  acceptedFileTypes?: Accept;
  uploaded: boolean;
}

export default function FileUpload({
  name,
  uploading,
  handleFileUpload,
  multiple = false,
  uploaded,
  acceptedFileTypes = { "image/*": [] },
}: FileUploadProps) {
  const [fileName, setFileName] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: Array<File>) => {
      if (acceptedFiles.length > 0) {
        setFileName(
          multiple
            ? acceptedFiles.map((a) => a.name).join(", ")
            : acceptedFiles[0].name
        );
      }
      handleFileUpload(acceptedFiles);
    },
    [handleFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
    accept: acceptedFileTypes,
  });

  return (
    <div className="flex flex-col gap-2 mb-6">
      <div
        className={`h-[260px] rounded-[16px] border-dashed p-4 border-[1.5px]  flex items-center justify-center cursor-pointer flex-col gap-3 ${
          !isDragActive ? "border-[#D0D5DD]" : "border-primary"
        }`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {uploading ? (
          <div className=" w-full flex justify-center">
          <AiOutlineLoading3Quarters size={25} color="#6c1418" className="animate-spin"/>
          </div>
        ) : uploaded ? (
          <>
            <div className="w-[56px] h-[56px] bg-[#EDF4EE] rounded-[50%] flex items-center justify-center">
              <FaCircleCheck size={25} color="#ED353F" />
            </div>
            <div className="text-[14px]">
              <p className="text-primary font-[600] text-center">
                Images{multiple ? "s" : ""} Uploaded
              </p>
              <p className="text-[#98A2B3] text-center">{fileName}</p>
            </div>
          </>
        ) : (
          <>
            {isDragActive ? (
              <p className="text-center text-sm text-gray-700">
                Drop the files here ...
              </p>
            ) : (
              <>
                <div className="w-[56px] h-[56px] bg-[#f4eded] rounded-[50%] flex items-center justify-center">
                  <SlCloudUpload size={25} color="#475367" />
                </div>
                <div className="text-[14px]">
                  <p className="text-center">
                    <span className="text-primary font-[600]">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <span className="text-[#98A2B3] text-center">
                    PDF, JPG, DOC or PNG (max. 5MB)
                  </span>
                </div>
                <div className="flex gap-2 items-center w-full">
                  <div className="h-[1px] w-full bg-[#CACED2]"></div>
                  <span className="text-[14px] text-[#667185] ">Or</span>
                  <div className="h-[1px] w-full bg-[#CACED2]"></div>
                </div>
                <BasicButton
                  type="button"
                  className="block w-[188px] !bg-[#f4eded] !text-secondary"
                  text="Browse Files"
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
