import { type ReactNode } from "react";

interface PageLayoutProps {
  backgroundImage: string;
  children: ReactNode;
}

export default function PageLayout({
  backgroundImage,
  children,
}: PageLayoutProps) {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center m-0 p-0 bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {children}
    </div>
  );
}
