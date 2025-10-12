import { useEffect, useRef } from "react";
// @ts-ignore
import CircleType from "circletype";

export default function Banner() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const circleType = new CircleType(textRef.current);
      circleType.radius(240);
    }
  }, []);

  return (
    <div>
      {/* Curved Header */}
      <h2
        ref={textRef}
        className="font-bold text-black text-center mb-4"
        style={{
          letterSpacing: "0.05rem",
          fontSize: "1.3rem",
        }}
      >
        Mario Kart Championships
      </h2>
    </div>
  );
}
