interface TrophyProps {
  trophyImg: string;
  // size: string;
  year: string;
}

export default function Trophy({ trophyImg, year }: TrophyProps) {
  // const imgSize = "size{size}" ------ can't figure this out..
  return (
    <div
      className="relative inline-block"
      style={{
        width: "38cq",
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
