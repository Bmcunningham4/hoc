import helmetBen from "../assets/helmet-ben.png";
import helmetJim from "../assets/helmet-jim.png";
import helmetCook from "../assets/helmet-cook.png";
import helmetDuncan from "../assets/helmet-duncan.png";
import helmetPlain from "../assets/helmet-plain.png";
import tag from "../assets/tag.png";

interface BatProps {
  year: string;
  first?:
    | "Ben Cunningham"
    | "Jim Cunningham"
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
      case "Jim Cunningham":
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
      {/* Tag */}
      <img
        src={tag}
        alt="Tag"
        className="absolute object-contain"
        style={{
          top: "58%",
          left: "40%",
          width: "42%",
          height: "auto",
          zIndex: 1,
        }}
      />

      {/* Helmet  */}
      <div
        className="relative w-full h-full"
        style={{
          zIndex: 2,
          top: first === "Jim Cunningham" ? "-1%" : "0%",
        }}
      >
        <img
          src={selectedHelmetImg}
          alt="Gokart Helmet"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Year */}
      <div className="absolute inset-0" style={{ zIndex: 3 }}>
        <div
          className="absolute text-black font-bold drop-shadow-md leading-none"
          style={{
            top: "78%",
            left: "58%",
            transform: "translateX(-50%) rotate(-40deg)",
            fontSize: "1.7cqw",
          }}
        >
          {year}
        </div>

        {/* First place  */}
        {!isBlank && first && (
          <div
            className="absolute text-white font-bold drop-shadow-md leading-none"
            style={{
              top: "45%",
              left: "22%",
              fontSize: "1.3cqw",
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
              top: "49%",
              left: "22%",
              fontSize: "1.3cqw",
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
              top: "53%",
              left: "22%",
              fontSize: "1.3cqw",
            }}
          >
            3. {third}
          </div>
        )}
      </div>
    </div>
  );
}
