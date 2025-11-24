import batCunImg from "../assets/bat-cun.png";
import batChardImg from "../assets/bat-chard.png";

interface BatProps {
  year: string;
  player: "cun" | "chard";
  score: string;
}

export default function Bat({ year, player, score }: BatProps) {
  const getBatImg = () => {
    switch (player) {
      case "cun":
        return batCunImg;
      case "chard":
        return batChardImg;
      default:
        return batCunImg;
    }
  };

  const getInitials = () => {
    switch (player) {
      case "cun":
        return "BC";
      case "chard":
        return "CH";
      default:
        return "BC";
    }
  };

  const selectedBatImg = getBatImg();
  const initials = getInitials();

  return (
    <div
      className="relative inline-block"
      style={{
        width: "200cqw",
        height: "300cqh",
        border: "3px solid red", // Main container border
      }}
    >
      {/* Bat background image */}
      <div className="relative w-full h-full" style={{ border: "3px solid red" }}>
        <img
          src={selectedBatImg}
          alt="Table Tennis Bat"
          className="w-full h-full object-contain"
          style={{ 
            border: "3px solid red", // Image border
            transform: "rotate(-30deg)" // 30 degrees to the left
          }}
        />
      </div>

      {/* Content on top of bat */}
      <div className="absolute inset-0">
        {/* Year text */}
        <div
          className="absolute text-white font-bold drop-shadow-md leading-none text-center"
          style={{
            top: "35%",
            left: "43%",
            transform: "translateX(-50%)",
            fontSize: "18cqh",
            border: "3px solid red", // Year text border
          }}
        >
          {year}
        </div>

        {/* Score in the middle */}
        <div
          className="absolute text-white font-bold drop-shadow-md leading-none text-center"
          style={{
            top: "45%",
            left: "43%",
            transform: "translateX(-50%)",
            fontSize: "18cqh",
            border: "3px solid red", // Score text border
          }}
        >
          {score}
        </div>

        {/* Player initials */}
        <div
          className="absolute text-black font-medium drop-shadow-md leading-none text-center"
          style={{
            top: "61%",
            left: "61%",
            transform: "translateX(-50%)",
            fontSize: "8cqh",
            border: "3px solid red", // Initials text border
          }}
        >
          {initials}
        </div>
      </div>
    </div>
  );
}