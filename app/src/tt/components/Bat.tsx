import batCunImg from "../assets/bat-cun.png";
import batChardImg from "../assets/bat-chard.png";
import batBlueImg from "../assets/bat-blue.png";

interface BatProps {
  year: string;
  player: "cun" | "chard" | "blank";
  score?: string;
}

export default function Bat({ year, player, score }: BatProps) {
  const getBatImg = () => {
    switch (player) {
      case "cun":
        return batCunImg;
      case "chard":
        return batChardImg;
      case "blank":
        return batBlueImg;
      default:
        return batBlueImg;
    }
  };

  const getInitials = () => {
    switch (player) {
      case "cun":
        return "BC";
      case "chard":
        return "CH";
      case "blank":
      default:
        return "";
    }
  };

  const selectedBatImg = getBatImg();
  const initials = getInitials();
  const isBlank = player === "blank";

  return (
    <div
      className="relative inline-block"
      style={{
        width: "35cqw",
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
            transform: "rotate(-30deg)",
          }}
        />
      </div>

      {/* Content on top of bat */}
      <div className="absolute inset-0">
        {/* Year text */}
        <div
          className="absolute text-white font-bold drop-shadow-md leading-none"
          style={{
            top: "33%",
            left: "44%",
            transform: "translateX(-50%)",
            fontSize: "3.5cqw",
          }}
        >
          {year}
        </div>

        {/* Score in the middle - only show if not blank */}
        {!isBlank && score && (
          <div
            className="absolute text-white font-bold drop-shadow-md leading-none"
            style={{
              top: "44%",
              left: "43%",
              transform: "translateX(-50%)",
              fontSize: "3.5cqw",
            }}
          >
            {score}
          </div>
        )}

        {/* Player initials - only show if not blank */}
        {!isBlank && initials && (
          <div
            className="absolute text-black font-medium drop-shadow-md leading-none"
            style={{
              top: player === "cun" ? "62%" : "66%",
              left: player === "cun" ? "60.6%" : "63%",
              transform: "translateX(-50%)",
              fontSize: "1.65cqw",
            }}
          >
            {initials}
          </div>
        )}
      </div>
    </div>
  );
}
