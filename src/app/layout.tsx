"use client";
import type { Metadata } from "next";
import { Inter,  Urbanist } from "next/font/google";
import localFont from "next/font/local";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { reduxStore } from "../store";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });


const buthick = localFont({
  src: [
    {
      path: "../assets/fonts/Buthick/Buthick.otf",
      weight: "400",
    },
    {
      path: "../assets/fonts/Buthick/Buthick.otf",
      weight: "500",
    },
    {
      path: "../assets/fonts/Buthick/Buthick.otf",
      weight: "600",
    },
    {
      path: "../assets/fonts/Buthick/Buthick.otf",
      weight: "700",
    },
  ],
  variable: "--font-buthick",
});

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-urbanist',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <Provider store={reduxStore}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
            closeOnClick={true}
            rtl={false}
            draggable
            pauseOnFocusLoss
            theme="light"
          />
          <body
            className={`${inter.variable} ${buthick.variable} ${urbanist.variable}`}
          >
            {children}
          </body>
        </QueryClientProvider>
      </Provider>
    </html>
  );
}
