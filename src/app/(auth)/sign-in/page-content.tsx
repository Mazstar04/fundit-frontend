"use client";
import { SignInForm } from "@/containers";
import Link from "next/link";

const PageContent = () => {
  return (
    <div className=" h-full md:flex justify-center font-urbanist">
      <div className="md:w-[80%] mt-6 flex flex-col gap-4">
        <div>
          <h1 className="text-[32px] md:text-[36px] font-[600] leading-[38px] md:leading-[42px]">
            Welcome Back!
          </h1>
          <span className="text-[14px] text-light-gray ">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className=" text-primary-theme">
              Sign Up
            </Link>
          </span>
        </div>
        <div className="mt-4">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default PageContent;
