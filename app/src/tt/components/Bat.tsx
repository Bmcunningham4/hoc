interface BatProps {
  year: string;
  player: string;
}

export default function Bat({ year, player }: BatProps) {
  return (
    <div
      className="relative inline-block"
      style={{
        width: "8cqw",
        height: "12cqh",
      }}
    >
      {/* Bat background - placeholder for now */}
      <div className="relative w-full h-full">
        <div className="w-full h-full bg-red-600 rounded-full border-2 border-black flex items-center justify-center">
          <span className="text-white text-xl">🏓</span>
        </div>
      </div>

      {/* Content on top of bat */}
      <div className="absolute inset-0">
        {/* Year text */}
        <div
          className="absolute text-white font-bold drop-shadow-md leading-none text-center"
          style={{
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "1.2cqh",
          }}
        >
          {year}
        </div>

        {/* Player name */}
        <div
          className="absolute text-white font-medium drop-shadow-md leading-none text-center"
          style={{
            top: "70%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "0.8cqh",
          }}
        >
          {player}
        </div>
      </div>
    </div>
  );
}
