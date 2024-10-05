"use client";
import { useRouter } from 'next/navigation';
import { BasicButton } from '@/components'; 

const PageContent = () => {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/'); 
    };

    return (
        <div className="flex flex-col items-center justify-center md:justify-start md:mt-10 h-screen font-urbanist">
            <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
            <p className="text-lg text-light-gray mb-8">
                Thank you for your payment. Your donation has been received!.
            </p>
            <BasicButton 
                onClick={handleGoHome} 
                className=""
                text="Go Back to Home"
            />
        </div>
    );
};

export default PageContent;
