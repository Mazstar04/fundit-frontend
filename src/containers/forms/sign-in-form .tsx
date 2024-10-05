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

  const getUserMutation = useMutation({
    mutationFn: api.user.getUser,
  });

  const handleSubmit = async (
    values: typeof initialValues,
    formikHelpers: FormikHelpers<typeof initialValues>
  ) => {
    try {
      const res = await signInMutation.mutateAsync(values);
      const roles = res?.roles?.split(",");
      const userData = {
        accessToken: res?.accessToken,
        refreshToken: res?.refreshToken,
        role: (roles.length > 1
          ? roles.find((r: string) => r.toLowerCase() != "user")
          : roles[0]
        )?.toLowerCase(),
      };
      setItemInStorage(storeKeys.userdata, userData);

      // get user profile  here
      const user = await getUserMutation.mutateAsync();
      const loggedInUser = { ...userData, ...user };
      setItemInStorage(storeKeys.userdata, loggedInUser);
      toast.success("Login successful");

      loggedInUser.role == "user"
        ? router.push("/onboarding")
        : router.push("/dashboard");
    } catch (e: any) {
      toast.error(e);
      if (e == "Account Unverified, verification resent") {
        setItemInStorage(storeKeys.signingUpUser, values.email);
        router.push("/verify-email");
      }
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
          loading={signInMutation.isPending || getUserMutation.isPending}
        />
      </div>
    </FormikForm>
  );
};

export default SignInForm;
