import { useEffect, useRef } from "react";
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
  const badgeRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const updateBadgeScale = () => {
      // Find the board image to get its actual rendered size
      const boardImg = document.querySelector(
        'img[alt="Board"]',
      ) as HTMLImageElement;

      if (boardImg && badgeRef.current && boardImg.complete) {
        const boardWidth = boardImg.offsetWidth;

        // Scale badge based on board width (adjust multipliers as needed)
        const badgeWidth = boardWidth * 0.08; // 8% of board width
        const badgeHeight = boardWidth * 0.11; // 11% of board width (maintaining aspect ratio)

        // Apply scaling to the badge container
        badgeRef.current.style.width = `${badgeWidth}px`;
        badgeRef.current.style.height = `${badgeHeight}px`;

        // Scale font sizes based on board size
        const yearText = badgeRef.current.querySelector(
          ".year-text",
        ) as HTMLElement;
        const marginText = badgeRef.current.querySelector(
          ".margin-text",
        ) as HTMLElement;
        const characterImgs = badgeRef.current.querySelectorAll(
          ".character-img",
        ) as NodeListOf<HTMLElement>;

        if (yearText) {
          yearText.style.fontSize = `${boardWidth * 0.012}px`; // Adjust multiplier
        }
        if (marginText) {
          marginText.style.fontSize = `${boardWidth * 0.008}px`; // Adjust multiplier
        }
        characterImgs.forEach((img) => {
          const imgSize = boardWidth * 0.025; // 2.5% of board width
          img.style.width = `${imgSize}px`;
          img.style.height = `${imgSize}px`;
        });
      }
    };

    // Initial setup
    const timeoutId = setTimeout(updateBadgeScale, 100);

    // Update on window resize
    const handleResize = () => {
      updateBadgeScale();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const characterImgs = getCharacterImg();
  const selectedBadgeImg = getBadgeImg();
  const isDraw = character === "draw";

  return (
    <div ref={badgeRef} className="relative inline-block" style={{ margin }}>
      {/* Badge background image */}
      <div className="relative">
        <img
          src={selectedBadgeImg}
          alt="Badge"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content on top of badge */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-1"
        style={{ paddingBottom: "45%" }}
      >
        {/* Year at top */}
        <div className="year-text text-black font-bold drop-shadow-md leading-none">
          {year}
        </div>

        {/* Bottom row: Character(s) and Margin OR two characters for draw */}
        <div
          className="flex items-center justify-center w-full px-3"
          style={{ gap: "0.17rem" }}
        >
          {isDraw ? (
            <>
              <img
                src={characterImgs[0]}
                alt="dry-bones"
                className="character-img object-contain mr-2"
              />
              <img
                src={characterImgs[1]}
                alt="coops"
                className="character-img object-contain"
              />
            </>
          ) : (
            <>
              {characterImgs.length > 0 && (
                <img
                  src={characterImgs[0]}
                  alt={character}
                  className="character-img object-contain mr-2"
                />
              )}
              <div className="margin-text text-black drop-shadow-lg self-end">
                {margin}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
