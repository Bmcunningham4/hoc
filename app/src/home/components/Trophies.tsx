import mkTrophy from "../assets/trophy-mk.png";
import ttTrophy from "../assets/trophy-tt.png";

interface MkTrophyProps {
  year: string;
}

export function MkTrophy({ year }: MkTrophyProps) {
  return (
    <div
      className="relative inline-block"
      style={{
        width: "38cqw",
        aspectRatio: "3/4",
      }}
    >
      {/* MkTrophy background image */}
      <div className="relative w-full h-full">
        <img
          src={mkTrophy}
          alt="Table Tennis MkTrophy"
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
      </div>
    </div>
  );
}

interface TtTrophyProps {
  year: string;
}

export function TtTrophy({ year }: TtTrophyProps) {
  return (
    <div
      className="relative inline-block"
      style={{
        width: "38cqw",
        aspectRatio: "3/4",
      }}
    >
      {/* MkTrophy background image */}
      <div className="relative w-full h-full">
        <img
          src={ttTrophy}
          alt="Table Tennis MkTrophy"
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
      </div>
    </div>
  );
}
