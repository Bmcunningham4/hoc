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
        width: "35cqw", // Always large size
        aspectRatio: "3/4",
      }}
    >
      {/* Bat background image */}
      <div className="relative w-full h-full">
        <img
          src={selectedBatImg}
          alt="Table Tennis Bat"
          className="w-full h-full object-contain"
          style={{ 
            transform: "rotate(-30deg)"
          }}
        />
      </div>

      {/* Content on top of bat */}
      <div className="absolute inset-0">
        {/* Year text */}
        <div
          className="absolute text-white font-bold drop-shadow-md leading-none"
          style={{
            top: "25%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "5.5cqw",
          }}
        >
          {year}
        </div>

        {/* Score in the middle */}
        <div
          className="absolute text-white font-bold drop-shadow-md leading-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "7cqw",
          }}
        >
          {score}
        </div>

        {/* Player initials */}
        <div
          className="absolute text-white font-medium drop-shadow-md leading-none"
          style={{
            top: "75%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "4cqw",
          }}
        >
          {initials}
        </div>
      </div>
    </div>
  );
}