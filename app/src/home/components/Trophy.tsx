interface TrophyProps {
  trophyImg: string;
  size?: string;
}

export default function Trophy({ trophyImg, size = "17" }: TrophyProps) {
  return (
    <div
      className="relative inline-block"
      style={{
        width: `${size}cqw`,
        aspectRatio: "3/4",
      }}
    >
      {/* Background image */}
      <div className="relative w-full h-full">
        <img
          src={trophyImg}
          alt="trophyImg"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
