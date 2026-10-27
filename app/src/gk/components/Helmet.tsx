import helmetBen from "../assets/helmet-ben.png";
import helmetJim from "../assets/helmet-jim.png";
import helmetCook from "../assets/helmet-cook.png";
import helmetDuncan from "../assets/helmet-duncan.png";
import helmetPlain from "../assets/helmet-plain.png";
import tag from "../assets/tag.png";

// Dark outline so names stay readable on light visors (e.g. gold)
const NAME_SHADOW =
  "0 0 0.15cqw rgba(0,0,0,0.9), 0 0.1cqw 0.3cqw rgba(0,0,0,0.8)";

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
  // Ben's helmet has a higher visor, so lift the names to sit inside it
  const textTop = first === "Ben Cunningham" ? 42.8 : 44;

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
          top: ["Jim Cunningham", "Elliot Cook"].includes(first || "")
            ? "-1%"
            : "0%",
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
          className="absolute text-black font-bold leading-none"
          style={{
            top: "80.45%",
            left: "58%",
            transform: "translate(-50%, -50%) rotate(-40deg)",
            fontSize: "1.6cqw",
            letterSpacing: "0.02em",
          }}
        >
          {year}
        </div>

        {/* First */}
        {!isBlank && first && (
          <div
            className="absolute text-white font-bold leading-none"
            style={{
              top: `${textTop}%`,
              left: "22%",
              fontSize: "1.3cqw",
              textShadow: NAME_SHADOW,
            }}
          >
            1. {first} 🏆
          </div>
        )}

        {/* Second */}
        {!isBlank && second && (
          <div
            className="absolute text-white font-bold leading-none"
            style={{
              top: `${textTop + 4}%`,
              left: "22%",
              fontSize: "1.3cqw",
              textShadow: NAME_SHADOW,
            }}
          >
            2. {second}
          </div>
        )}

        {/* Third */}
        {!isBlank && third && (
          <div
            className="absolute text-white font-bold leading-none"
            style={{
              top: `${textTop + 8}%`,
              left: "22%",
              fontSize: "1.3cqw",
              textShadow: NAME_SHADOW,
            }}
          >
            3. {third}
          </div>
        )}
      </div>
    </div>
  );
}
