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

const SignUpForm = () => {
  const router = useRouter();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const signUpMutation = useMutation({
    mutationFn: api.auth.signUp<any>,
  });

  const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character"
      )
      .matches(/^\S*$/, "Password must not contain spaces"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const handleSubmit = async (
    values: typeof initialValues,
    formikHelpers: FormikHelpers<typeof initialValues>
  ) => {
    try {
      const response = await signUpMutation.mutateAsync(values);
      toast.success(response.message);
      router.push("/sign-in");
    } catch (e: any) {
      toast.error(e);
    }
  };

  return (
    <FormikForm
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={SignUpSchema}
    >
      <div className="flex flex-col gap-5">
        <FormikInput
          type="text"
          label="First Name"
          name="firstName"
          placeholder="Your first name"
          required
        />
        <FormikInput
          type="text"
          label="Surname / Last Name"
          name="lastName"
          placeholder="Your surname / last name"
          required
        />
        <FormikInput
          type="text"
          label="Middle Name"
          name="middleName"
          placeholder="Your middle name"
        />
        <FormikInput
          type="email"
          label="Email Address"
          name="email"
          placeholder="example@mail.com"
          required
        />
        <FormikInput
          type="phone"
          label="Phone Number"
          name="phoneNumber"
          placeholder="Your phone number"
          required
        />
        <FormikInput
          type="password"
          label="Password"
          name="password"
          placeholder="Enter password"
          required
        />
        <FormikInput
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Re-enter password"
          required
        />
        <BasicButton
          className="mt-2 block w-full"
          text="Sign Up"
          loading={signUpMutation.isPending}
        />
      </div>
    </FormikForm>
  );
};

export default SignUpForm;
