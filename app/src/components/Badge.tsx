import coopsImg from "../assets/cooper-trooper.png";
import dryBonesImg from "../assets/dry-bones.png";
import badgeImg from "../assets/badge.png";
import badgeGrayImg from "../assets/badge-gray.png";
import badgeGreenImg from "../assets/badge-green.png";
import badgeBlurrImg from "../assets/badge-blurr.png";

interface BadgeProps {
  year: string;
  character: "dry-bones" | "coops" | "draw" | "blank";
  margin: string;
}

export default function Badge({ year, character, margin }: BadgeProps) {
  const getCharacterImg = () => {
    switch (character) {
      case "dry-bones":
        return [dryBonesImg];
      case "coops":
        return [coopsImg];
      case "draw":
        return [dryBonesImg, coopsImg];
      case "blank":
      default:
        return [];
    }
  };

  const getBadgeImg = () => {
    switch (character) {
      case "dry-bones":
        return badgeGrayImg;
      case "coops":
        return badgeGreenImg;
      case "draw":
        return badgeBlurrImg;
      case "blank":
      default:
        return badgeImg;
    }
  };

  const characterImgs = getCharacterImg();
  const selectedBadgeImg = getBadgeImg();
  const isDraw = character === "draw";

  return (
    <div
      className="relative inline-block border-4 border-red-500"
      style={{
        width: "8cqw", // 8% of container width
        height: "11cqh", // 11% of container height
      }}
    >
      {/* Badge background image */}
      <div className="relative w-full h-full">
        <img
          src={selectedBadgeImg}
          alt="Badge"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content on top of badge - positioned absolutely */}
      <div className="absolute inset-0">
        {/* Year text */}
        <div
          className="absolute text-black font-bold drop-shadow-md leading-none"
          style={{
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)", // Centers horizontally
            fontSize: "20%", // 20% of badge height
          }}
        >
          {year}
        </div>

        {/* Character and margin positioning */}
        {isDraw ? (
          <>
            {/* First character (left side) */}
            <img
              src={characterImgs[0]}
              alt="dry-bones"
              className="absolute object-contain"
              style={{
                top: "25%",
                left: "25%",
                width: "25%", // 25% of badge width
                height: "25%", // 25% of badge height
              }}
            />
            {/* Second character (right side) */}
            <img
              src={characterImgs[1]}
              alt="coops"
              className="absolute object-contain"
              style={{
                top: "25%",
                left: "75%",
                width: "25%", // 25% of badge width
                height: "25%", // 25% of badge height
                transform: "translateX(-50%)", // Center on the 75% point
              }}
            />
          </>
        ) : (
          <>
            {/* Single character */}
            {characterImgs.length > 0 && (
              <img
                src={characterImgs[0]}
                alt={character}
                className="absolute object-contain"
                style={{
                  top: "25%",
                  left: "10%",
                  width: "30%", // 30% of badge width
                  height: "30%", // 30% of badge height
                }}
              />
            )}
            {/* Margin text */}
            <div
              className="absolute text-black drop-shadow-lg"
              style={{
                top: "60%",
                left: "75%",
                fontSize: "12%", // 12% of badge height
                transform: "translateX(-50%)", // Center on the 75% point
              }}
            >
              {margin}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
