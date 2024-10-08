"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { BasicButton } from "@/components";
import { useMutation } from "@tanstack/react-query";
import api from "@/api";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";

const PageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Use this to get query parameters
  const reference = searchParams.get("reference") || ""; // Get the 'reference' query param
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const verifyPaymentMutation = useMutation({
    mutationFn: api.transaction.verifyPayment<any>,
  });

  const handleGoHome = () => {
    router.push("/");
  };

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const response = await verifyPaymentMutation.mutateAsync({ reference });
        setIsSuccess(true);
        setIsLoading(false);
      } catch (e: any) {
        toast.error(
          e?.response?.data?.message || "Payment verification failed"
        );
        setIsSuccess(false);
        setIsLoading(false);
      }
    };

    if (reference) {
      verifyPayment();
    }
  }, [reference]);

  return (
    <>
      {verifyPaymentMutation.isPending || isLoading ? (
        <div className="w-full flex justify-center mt-8 text-primary-theme">
          <AiOutlineLoading3Quarters size={30} className="animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col gap-3 md:gap-4 font-urbanist">
          <div className="flex flex-col items-center justify-center md:justify-start md:mt-10 h-screen font-urbanist">
            {isSuccess ? (
              <>
                <h1 className="text-3xl font-bold text-green-600 mb-4">
                  Payment Successful!
                </h1>
                <p className="text-lg text-light-gray mb-8">
                  Thank you for your payment. Your donation has been received!.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-red-600 mb-4">
                  Payment Verification failed!
                </h1>
              </>
            )}

            <BasicButton
              onClick={handleGoHome}
              className=""
              text="Go Back to Home"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PageContent;
