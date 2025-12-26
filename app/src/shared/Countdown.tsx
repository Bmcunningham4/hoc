import { useState, useEffect } from "react";

interface CountdownProps {
  date: string;
  time?: string;
}

export default function Countdown({ date, time = "19:00" }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const formatDisplayDate = (dateString: string) => {
    const [day, month] = dateString.split("-").map(Number);
    const currentYear = new Date().getFullYear();
    const targetDate = new Date(currentYear, month - 1, day);

    return targetDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const [day, month] = date.split("-").map(Number);
      const currentYear = now.getFullYear();

      let targetDate = new Date(currentYear, month - 1, day);

      // Parse and set the time
      const [hours, minutes] = time.split(":").map(Number);
      targetDate.setHours(hours, minutes, 0, 0);

      // If the target date has already passed this year, set it for next year
      if (targetDate.getTime() <= now.getTime()) {
        targetDate = new Date(currentYear + 1, month - 1, day);
        targetDate.setHours(hours, minutes, 0, 0);
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [date, time]);

  return (
    <div className="flex flex-col items-center mt-4 text-white">
      <div className="text-center mb-3">
        <span className="text-sm font-normal opacity-60">
          {formatDisplayDate(date)}
        </span>
      </div>
      <div
        className="rounded-lg px-6 py-3 "
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          padding: "0.2rem 0.8rem",
        }}
      >
        <div className="flex gap-3 text-center">
          <div className="flex flex-col">
            <span className="text-lg font-bold">{timeLeft.days}</span>
            <span className="text-xs opacity-75">Days</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <span className="text-xs opacity-75">Hrs</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-xs opacity-75">Mins</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
            <span className="text-xs opacity-75">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
