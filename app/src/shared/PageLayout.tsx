import { type ReactNode } from "react";
import Header from "./Header";
import Countdown from "./Countdown";

interface PageLayoutProps {
  backgroundImage: string;
  main: string;
  secondary?: string;
  children: ReactNode;
  countdownDate: string;
  countdownTime?: string;
}

export default function PageLayout({
  backgroundImage,
  main,
  secondary,
  children,
  countdownDate,
  countdownTime = "19:00",
}: PageLayoutProps) {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center m-0 p-0 bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Header main={main} secondary={secondary} />
      {children}
      <Countdown date={countdownDate} time={countdownTime} />
    </div>
  );
}
