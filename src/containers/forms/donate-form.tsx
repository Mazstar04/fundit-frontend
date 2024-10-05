"use client";
import { FormikForm, FormikInput } from "@containers";
import { FormikHelpers } from "formik";
import { BasicButton } from "@/components";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import api from "@/api";
import { toast } from "react-toastify";
import { setItemInStorage, storeKeys } from "@/utils/storage";
import { useRouter } from "next/navigation";

const DonateForm = ({maxDonation} : {maxDonation: number}) => {
  const router = useRouter();
  const initialValues = {
    email: "",
    username: "",
    amount: "",
  };

  const DonateSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    username: Yup.string().required("Full name is required"),
    amount: Yup.number().required("Amount is required").max(maxDonation, `Your donation cannot be more than outstanding amount(${maxDonation})`),
  });
  
  const handleSubmit = async(
    values: typeof initialValues,
    formikHelpers: FormikHelpers<typeof initialValues>
  ) => {
    console.log("i", values);
  };

  
  return (
    <FormikForm
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={DonateSchema}
    >
      <div className="flex flex-col gap-5">
      <FormikInput
          type="text"
          label="Full Name"
          name="username"
          placeholder="Your full name"
          required
        />
        <FormikInput
          type="email"
          label="Email Address"
          name="email"
          placeholder="example@mail.com"
          required
        />
       <FormikInput
          min={1}
          max={maxDonation}
          type="number"
          label="Amount"
          name="amount"
          placeholder="Enter amount you want to donate"
          required
        />
        <BasicButton
          className="mt-2 block w-full"
          text="Donate"
        />
      </div>
    </FormikForm>
  );
};

export default DonateForm;
