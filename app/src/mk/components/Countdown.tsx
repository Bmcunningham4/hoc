import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();

      let targetDate = new Date(currentYear, 10, 30, 19, 0, 0); // Month is 0-indexed, so 10 = November

      if (now > targetDate) {
        targetDate = new Date(currentYear + 1, 10, 30, 19, 0, 0);
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
  }, []);

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
