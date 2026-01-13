import helmetBen from "../assets/helmet-ben.png";
import helmetJim from "../assets/helmet-jim.png";
import helmetCook from "../assets/helmet-cook.png";
import helmetDuncan from "../assets/helmet-duncan.png";
import helmetPlain from "../assets/helmet-plain.png";
import plarque from "../assets/plarque.png";

interface BatProps {
  year: string;
  first?:
    | "Ben Cunningham"
    | "James Cunningham"
    | "Elliot Cook"
    | "Duncan Grainger"
    | "blank";
  second?: string;
  third?: string;
}

export default function Bat({ year, first, second, third }: BatProps) {
  const getHelmet = () => {
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

  const selectedHelmetImg = getHelmet();
  const isBlank = first === "blank";

return (
  <div
    className="relative inline-block"
    style={{
      width: "38cqw",
      aspectRatio: "3/4",
    }}
  >
    {/* Plaque - behind everything */}
    <img
      src={plarque}
      alt="dry-bones"
      className="absolute object-contain"
      style={{
        top: "25%",
        left: "1%",
        width: "142%",
        height: "auto",
        zIndex: 1,
      }}
    />

    {/* Helmet - in front of plaque */}
    <div className="relative w-full h-full" style={{ zIndex: 2 }}>
      <img
        src={selectedHelmetImg}
        alt="Gokart Helmet"
        className="w-full h-full object-contain"
      />
    </div>

    {/* Text - in front of everything */}
    <div className="absolute inset-0" style={{ zIndex: 3 }}>
      <div
        className="absolute text-black font-bold drop-shadow-md leading-none"
        style={{
          top: "79%",
          left: "48%",
          transform: "translateX(-50%)",
          fontSize: "2.8cqw",

        }}
      >
        {year}
      </div>

      {/* First place - if not blank */}
      {!isBlank && first && (
        <div
          className="absolute text-white font-bold drop-shadow-md leading-none"
          style={{
            top: "44%",
            left: "39%",
            transform: "translateX(-50%)",
            fontSize: "1.5cqw",
          }}
        >
          1. {first} 🏆
        </div>
      )}

      {/* Second */}
      {!isBlank && second && (
        <div
          className="absolute text-white font-bold drop-shadow-md leading-none"
          style={{
            top: "48%",
            left: "39%",
            transform: "translateX(-50%)",
            fontSize: "1.5cqw",
          }}
        >
          2. {second}
        </div>
      )}

      {/* Third */}
      {!isBlank && third && (
        <div
          className="absolute text-white font-bold drop-shadow-md leading-none"
          style={{
            top: "52%",
            left: "39%",
            transform: "translateX(-50%)",
            fontSize: "1.5cqw",
          }}
        >
          3. {third}
        </div>
      )}
    </div>
  </div>
);
}
