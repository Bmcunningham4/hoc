import helmetBen from "../assets/helmet-ben.png";
import helmetJim from "../assets/helmet-jim.png";
import helmetCook from "../assets/helmet-cook.png";
import helmetDuncan from "../assets/helmet-duncan.png";
import helmetPlain from "../assets/helmet-plain.png";

interface BatProps {
  year: string;
  first?: "Ben Cunningham" | "James Cunningham" | "Elliot Cook" | "Duncan Grainger" | "blank";
  second?: string;
  third?: string;
}

export default function Bat({ year, first, second, third }: BatProps) {
  const getBatImg = () => {
    switch (first) {
      case "Ben Cunningham":
        return helmetBen;
      case "James Cunningham":
        return helmetJim;
      case "Elliot Cook":
        return helmetCook;
      case "Duncan Grainger":
        return helmetDuncan;
      case "blank":
        return helmetPlain;
      default:
        return helmetPlain;
    }
  };

  const selectedBatImg = getBatImg();
  const isBlank = first === "blank";

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
            top: "76%",
            left: "35%",
            transform: "translateX(-50%)",
            fontSize: "2.8cqw",
            backgroundColor: "black", // This will need to be changed, obviously!!
          }}
        >
          {year}
        </div>

        {/* First place - if not blank */}
        {!isBlank && first && (
          <div
            className="absolute text-white font-bold drop-shadow-md leading-none"
            style={{
              top: "43%",
              left: "39%",
              transform: "translateX(-50%)",
              fontSize: "1.8cqw",
            }}
          >
            {first}
          </div>
        )}

        {/* Second */}
        {!isBlank && second && (
          <div
            className="absolute text-white font-bold drop-shadow-md leading-none"
            style={{
              top: "47%",
              left: "39%",
              transform: "translateX(-50%)",
              fontSize: "1.8cqw",
            }}
          >
            {second}
          </div>
        )}

        {/* Third */}
        {!isBlank && third && (
          <div
            className="absolute text-white font-bold drop-shadow-md leading-none"
            style={{
              top: "51%",
              left: "39%",
              transform: "translateX(-50%)",
              fontSize: "1.8cqw",
            }}
          >
            {third}
          </div>
        )}
      </div>
    </div>
  );
}
