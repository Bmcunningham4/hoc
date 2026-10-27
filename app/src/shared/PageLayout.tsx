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
    <>
      {/* Full-bleed background: fills behind the phone's status bar and browser toolbar too */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div
        className="h-screen w-full flex flex-col items-center justify-around m-0 p-0 overflow-x-hidden"
        style={{
          // Keep content clear of the notch / home bar
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {children}
      </div>
    </>
  );
}
