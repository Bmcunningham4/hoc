import { useState, useEffect } from "react";

interface CountdownProps {
  date: string; // Format: "DD-MM-YYYY" or "YYYY-MM-DD"
  time?: string; // Format: "HH:MM" (optional, defaults to "19:00")
}

export default function Countdown({ date, time = "19:00" }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();

      // Parse the date string - supports both DD-MM-YYYY and YYYY-MM-DD formats
      let targetDate: Date;

      if (date.includes("-")) {
        const parts = date.split("-");
        if (parts[0].length === 4) {
          // YYYY-MM-DD format
          const [year, month, day] = parts.map(Number);
          targetDate = new Date(year, month - 1, day);
        } else {
          // DD-MM-YYYY format
          const [day, month, year] = parts.map(Number);
          targetDate = new Date(year, month - 1, day);
        }
      } else {
        // Fallback to current behavior if format is unexpected
        targetDate = new Date();
      }

      // Parse and set the time
      const [hours, minutes] = time.split(":").map(Number);
      targetDate.setHours(hours, minutes, 0, 0);

      // If the target date has passed, don't add a year (let it show as expired)
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
    <div className="flex justify-center items-center mt-4 text-white">
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
