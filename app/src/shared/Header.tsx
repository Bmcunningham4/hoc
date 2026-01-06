interface HeaderProps {
  main: string;
  secondary?: string;
  blurred?: boolean;
  color?: "black" | "white";
  mLogo1?: string;
  mLogo2?: string;
  sLogo1?: string;
  sLogo2?: string;
  mLogoSize?: 1 | 2 | 3 | 4 | 5;
  sLogoSize?: 1 | 2 | 3 | 4 | 5;
  sLogoRotate?: boolean;
}

export default function Header({
  main,
  secondary,
  blurred = false,
  color = "black",
  mLogo1,
  mLogo2,
  sLogo1,
  sLogo2,
  mLogoSize = 3,
  sLogoSize = 2,
  sLogoRotate = false,
}: HeaderProps) {
  const getBackgroundColor = () => {
    if (!blurred) return {};

    return {
      backgroundColor:
        color === "white" ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.2)",
      padding: "0.5rem 1.5rem",
    };
  };

  const getLogoSize = (size: number) => {
    const sizeMap = {
      1: "h-4",   // 16px
      2: "h-8",   // 32px  
      3: "h-12",  // 48px
      4: "h-16",  // 64px
      5: "h-20",  // 80px
    };
    return sizeMap[size as keyof typeof sizeMap] || "h-12";
  };

  return (
    <div className="flex flex-col items-center mb-4 mt-16">
      <div
        className={`${blurred ? "rounded-lg px-6 py-3" : ""} text-center`}
        style={getBackgroundColor()}
      >
        <div className="flex items-center justify-center gap-2">
          {mLogo1 && <img src={mLogo1} alt="Logo 1" className={`${getLogoSize(mLogoSize)} w-auto`} />}
          <h1 className={`text-4xl font-bold drop-shadow-lg text-${color}`}>
            {main}
          </h1>
          {mLogo2 && <img src={mLogo2} alt="Logo 2" className={`${getLogoSize(mLogoSize)} w-auto`} />}
        </div>
        {secondary && (
          <div className="flex items-center justify-center gap-2 mt-1">
            {sLogo1 && (
              <img 
                src={sLogo1} 
                alt="Secondary Logo 1" 
                className={`${getLogoSize(sLogoSize)} w-auto border-2 border-red-500`}
                style={sLogoRotate ? { transform: 'rotate(-35deg)' } : {}}
              />
            )}
            <p
              className={`text-lg drop-shadow-md ${color === "white" ? "text-gray-300" : "text-gray-700"}`}
            >
              {secondary}
            </p>
            {sLogo2 && (
              <img 
                src={sLogo2} 
                alt="Secondary Logo 2" 
                className={`${getLogoSize(sLogoSize)} w-auto`}
                style={sLogoRotate ? { transform: 'rotate(-35deg)' } : {}}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}