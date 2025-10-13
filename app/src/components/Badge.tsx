import coopsImg from "../assets/cooper-trooper.png";
import dryBonesImg from "../assets/dry-bones.png";
import badgeImg from "../assets/badge.png";
import badgeGrayImg from "../assets/badge-gray.png";
import badgeGreenImg from "../assets/badge-green.png";

interface BadgeProps {
  year: string;
  character: "dry-bones" | "coops" | "draw" | "blank";
  margin: string;
}

export default function Badge({ year, character, margin }: BadgeProps) {
  const getCharacterImg = () => {
    switch (character) {
      case "dry-bones":
        return dryBonesImg;
      case "coops":
        return coopsImg;
      case "draw": //todo: Change this soon too..
      case "blank":
      default:
        return null;
    }
  };

  const getBadgeImg = () => {
    switch (character) {
      case "dry-bones":
        return badgeGrayImg;
      case "coops":
        return badgeGreenImg;
      case "draw":
        return badgeImg; // TODO: Change this to appropriate badge for draw
      case "blank":
      default:
        return badgeImg;
    }
  };

  const characterImg = getCharacterImg();
  const selectedBadgeImg = getBadgeImg();

  return (
    <div className="relative inline-block" style={{ margin }}>
      {/* Badge background image */}
      <div className="relative">
        <img
          src={selectedBadgeImg}
          alt="Badge"
          className="w-24 h-32 object-contain"
        />
      </div>

      {/* Content on top of badge */}
      <div className="absolute inset-0 flex flex-col items-center justify-center py-3">
        {/* Year at top */}
        <div className="text-black font-black text-lg drop-shadow-lg mb-2">
          {year}
        </div>

        {/* Bottom row: Character (left) and Margin (right) */}
        <div className="flex items-center justify-center w-full px-2">
          {/* Character image on left */}
          {characterImg && (
            <img
              src={characterImg}
              alt={character}
              className="w-6 h-6 object-contain mr-2"
            />
          )}

          {/* Margin text on right */}
          <div className="text-black font-bold text-xs drop-shadow-lg">
            {margin}
          </div>
        </div>
      </div>
    </div>
  );
}
