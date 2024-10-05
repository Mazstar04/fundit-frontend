"use client";
import { SignUpForm } from "@/containers";
import Link from "next/link";

const API_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL;

const PageContent = () => {
  return (
    <div className=" h-full md:flex justify-center font-urbanist">
      <div className="md:w-[80%] mt-6 flex flex-col gap-4">
        <div>
          <h1 className="text-[32px] md:text-[36px] font-[600] leading-[38px] md:leading-[42px]">
            Create an Account
          </h1>
          <span className="text-[14px] text-light-gray ">
            Already have an account?{" "}
            <Link href="/sign-in" className=" text-primary-theme">
              Sign In
            </Link>
          </span>
        </div>
        <div className="mt-4">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default PageContent;
