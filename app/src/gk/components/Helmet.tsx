import helmetBen from "../assets/helmet-ben.png";
import helmetJim from "../assets/helmet-jim.png";
import helmetPlain from "../assets/helmet-plain.png";

interface BatProps {
  year: string;
  player: "cun" | "chard" | "blank";
  score?: string;
}

export default function Bat({ year, player, score }: BatProps) {
  const getBatImg = () => {
    switch (player) {
      case "cun":
        return helmetBen;
      case "chard":
        return helmetJim;
      case "blank":
        return helmetPlain;
      default:
        return helmetPlain;
    }
  };

  const selectedBatImg = getBatImg();
  const isBlank = player === "blank";

  return (
    <div
      className="relative inline-block"
      style={{
        width: "38cqw",
        aspectRatio: "3/4",
      }}
    >
      {/* Bat background image */}
      <div className="relative w-full h-full">
        <img
          src={selectedBatImg}
          alt="Table Tennis Bat"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Year text */}
      <div className="absolute inset-0">
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
              fontSize: "3.8cqw",
            }}
          >
            {score}
          </div>
        )}
      </div>
    </div>
  );
}
