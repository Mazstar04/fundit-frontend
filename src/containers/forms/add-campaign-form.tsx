"use client";
import { BasicButton } from "@/components";
import { FormikForm, FormikInput } from "@containers";
import { FormikHelpers } from "formik";
import { Accept } from "react-dropzone";
import { useMutation } from "@tanstack/react-query";
import api from "@/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const AddCampaignForm = () => {

  const router = useRouter();
  const initialValues = {
    title: "",
    coverImagePath: "",
    imagePaths: [],
    shortDescription: "",
    description: "",
    amount: "",
  };

  
  const addCampaignMutation = useMutation({
    mutationFn: api.campaign.AddCampaign<any>,
  });


  const AddCampaignSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    coverImagePath: Yup.string().required("Cover picture is required"),
    shortDescription: Yup.string().required("Short description is required").max(150, "Length musnt be more than 150 characters"),
    description: Yup.string().required("Description is required"),
    amount: Yup.number().required("Amount is required"),
  });

  const acceptedFileTypes: Accept = {
    "image/jpeg": [".jpeg", ".jpg"],
    "image/png": [".png"],
  };

  const handleSubmit = async (
    values: typeof initialValues,
    formikHelpers: FormikHelpers<typeof initialValues>
  ) => {
    try {
      const response = await addCampaignMutation.mutateAsync(values);
      toast.success(response.message);
      router.push("/campaigns");
    } catch (e: any) {
      toast.error(e);
    }
  };

  return (
    <FormikForm
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={AddCampaignSchema}
    >
      <div className="mx-auto md:w-[90%] mt-4 flex flex-col gap-6">
        <FormikInput
          type="text"
          label="Campaign Title"
          name="title"
          placeholder="Enter campaign title"
          required
        />
        <FormikInput
          min={1}
          type="number"
          label="Amount"
          name="amount"
          placeholder="Enter amount you want to raise"
          required
        />
        <FormikInput
          type="textarea"
          label="Short Description"
          name="shortDescription"
          placeholder="Write a short description about this tour"
          className=" resize-none h-[140px]"
          required
        />
        <FormikInput
          type="wysiwyg"
          label="Description"
          name="description"
          placeholder="Write a short description about this tour"
          className=" resize-none h-[140px]"
          required
        />
        <FormikInput
          type="file-upload"
          label="Upload cover picture"
          name="coverImagePath"
          acceptedFileTypes={acceptedFileTypes}
          required
        />
        <FormikInput
          type="file-upload"
          label="Upload additional pictures"
          name="imagePaths"
          acceptedFileTypes={acceptedFileTypes}
          isMulti
        />
        
      </div>
      <BasicButton className=" block w-full mt-6" text="Create" loading={addCampaignMutation.isPending}/>
    </FormikForm>
  );
};

export default AddCampaignForm;
