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
import IUser from "@/interfaces/i-user";

const SignInForm = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const signInMutation = useMutation({
    mutationFn: api.auth.signIn<any>,
  });



  const handleSubmit = async (
    values: typeof initialValues,
    formikHelpers: FormikHelpers<typeof initialValues>
  ) => {
    try {
      const res = await signInMutation.mutateAsync(values);
      console.log("r", res)
      const userData: IUser = {
        accessToken: res?.data?.accessToken,
        refreshToken: res?.data?.refreshToken,
        name: res?.data?.name,
        profileImage: res?.data?.profileImagePath,
        email: values.email,
        id: res?.data?.userId
      };
      setItemInStorage(storeKeys.userdata, userData);
      toast.success("Login successful");
      router.push("/dashboard");
    } catch (e: any) {
      toast.error(e);
     
    }
  };

  return (
    <FormikForm
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={SignInSchema}
    >
      <div className="flex flex-col gap-5">
        <FormikInput
          type="email"
          label="Email Address"
          name="email"
          placeholder="example@mail.com"
          required
        />
        <FormikInput
          type="password"
          label="Password"
          name="password"
          placeholder="Enter password"
          required
        />
        <BasicButton
          className="mt-2 block w-full"
          text="Login"
          loading={signInMutation.isPending}
        />
      </div>
    </FormikForm>
  );
};

export default SignInForm;
