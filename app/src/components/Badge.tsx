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
      const boardImg = document.querySelector(
        'img[alt="Board"]',
      ) as HTMLImageElement;

      if (boardImg && badgeRef.current && boardImg.complete) {
        const boardWidth = boardImg.offsetWidth;

        const badgeWidth = boardWidth * 0.1;
        const badgeHeight = boardWidth * 0.1375;

        badgeRef.current.style.width = `${badgeWidth}px`;
        badgeRef.current.style.height = `${badgeHeight}px`;

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
          yearText.style.fontSize = `${boardWidth * 0.015}px`;
        }
        if (marginText) {
          marginText.style.fontSize = `${boardWidth * 0.01}px`;
        }
        characterImgs.forEach((img) => {
          const imgSize = boardWidth * 0.03125;
          img.style.width = `${imgSize}px`;
          img.style.height = `${imgSize}px`;
        });
      }
    };

    const timeoutId = setTimeout(updateBadgeScale, 100);

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
      <div className="relative">
        <img
          src={selectedBadgeImg}
          alt="Badge"
          className="w-full h-full object-contain"
        />
      </div>

      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-1"
        style={{ paddingBottom: "45%" }}
      >
        <div className="year-text text-black font-bold drop-shadow-md leading-none">
          {year}
        </div>

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
