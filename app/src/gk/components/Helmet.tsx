import helmetBen from "../assets/helmet-ben.png";
import helmetJim from "../assets/helmet-jim.png";
import helmetCook from "../assets/helmet-cook.png";
import helmetDuncan from "../assets/helmet-duncan.png";
import helmetPlain from "../assets/helmet-plain.png";

interface BatProps {
  year: string;
  player: "ben" | "jim" | "cook" | "duncan" | "blank";
  name?: string;
}

export default function Bat({ year, player, name }: BatProps) {
  const getBatImg = () => {
    switch (player) {
      case "ben":
        return helmetBen;
      case "jim":
        return helmetJim;
      case "cook":
        return helmetCook;
      case "duncan":
        return helmetDuncan;
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
            top: "42%",
            left: "35%",
            transform: "translateX(-50%)",
            fontSize: "2.8cqw",
          }}
        >
          {year}
        </div>

        {/* Score in the middle - only show if not blank */}
        {!isBlank && name && (
          <div
            className="absolute text-white font-bold drop-shadow-md leading-none"
            style={{
              top: "49%",
              left: "39%",
              transform: "translateX(-50%)",
              fontSize: "1.8cqw",
            }}
          >
            {name}
          </div>
        )}
      </div>
    </div>
  );
}
