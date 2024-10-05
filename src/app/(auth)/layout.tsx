"use client";
import { LogoComponent } from "@components";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  interface IWidget {
    route: string;
    width: number;
    text: string;
  }

  const pathname = usePathname();
  const routesWithWidget: IWidget[] = [
    {
      route: "/sign-up",
      width: 45,
      text: "signup",
    },
    {
      route: "/sign-in",
      width: 45,
      text: "signin",
    },
  ];

  const widget = routesWithWidget.find((r) => r.route == pathname);
  return (
    <div
      className={`p-[20px] md:p-[30px] w-[100vw] h-[100vh] ${
        widget ? "md:flex gap-10" : ""
      }`}
    >
      <div className="h-full flex-1 flex flex-col gap-4 text-dark">
        <div>
          <LogoComponent />
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
        <div className="hidden md:block text-[14px] font-urbanist ">
          ©2024. Fundit
        </div>
      </div>
      {widget && (
        <div
          className={`hidden md:block bg-[#04161C] rounded-[20px] h-full `}
          style={{ flexBasis: `${widget.width}%` }}
        ></div>
      )}
    </div>
  );
}
