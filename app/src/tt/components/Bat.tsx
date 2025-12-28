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

  const selectedBatImg = getBatImg();
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
            transform: "rotate(-35deg)",
          }}
        />
      </div>

      {/* Content on top of bat */}
      <div className="absolute inset-0">
        {/* Year text */}
        <div
          className="absolute text-white font-bold drop-shadow-md leading-none"
          style={{
            top: "34%",
            left: "44%",
            transform: "translateX(-50%)",
            fontSize: "2.8cqw",
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
              fontSize: "3.1cqw",
            }}
          >
            {score}
          </div>
        )}
      </div>
    </div>
  );
}
