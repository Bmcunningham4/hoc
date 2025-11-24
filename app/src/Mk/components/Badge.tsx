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
      className="relative inline-block"
      style={{
        width: "9.72cqw",
        height: "13.365cqh",
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
            top: "28%",
            left: "50%",
            transform: "translateX(-50%)", // Centers horizontally
            fontSize: "1.6cqh", // Container query height units for proper scaling
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
                top: "40%",
                left: "15%",
                width: "32%", // 25% of badge width
                height: "32%", // 25% of badge height
              }}
            />
            {/* Second character (right side) */}
            <img
              src={characterImgs[1]}
              alt="coops"
              className="absolute object-contain"
              style={{
                top: "40%",
                left: "68%",
                width: "32%", // 25% of badge width
                height: "32%", // 25% of badge height
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
                  top: "38%",
                  left: "17%",
                  width: "35%", // 30% of badge width
                  height: "35%", // 30% of badge height
                }}
              />
            )}
            {/* Margin text */}
            <div
              className="absolute text-black drop-shadow-lg"
              style={{
                top: "55%",
                left: "68%",
                fontSize: "1.1cqh", // Container query height units for proper scaling
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
