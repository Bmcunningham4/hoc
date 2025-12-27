import squareRedImg from "../assets/square-red.png";
import squareBlueImg from "../assets/square-blue.png";

export default function MockComponent() {
  return (
    // Main Div
    <div
      className="relative inline-block"
      style={{
        width: "50cqw",
        height: "50cqh",
      }}
    >
      {/* Div + BG image */}
      <div className="relative w-full h-full">
        <img src={squareRedImg} className="w-full h-full object-contain" />
      </div>

      <div className="absolute inset-0">
        {/* Image .. */}
        <img
          src={squareBlueImg}
          className="absolute object-contain"
          style={{
            top: "10%",
            left: "48%",
            width: "30%",
            height: "30%",
          }}
        />

        {/* Text .. */}
        <div
          className="absolute text-black"
          style={{
            top: "82%",
            left: "50%",
            fontSize: "1.6cqh",
          }}
        >
          Tested by the champ..
        </div>
      </div>
    </div>
  );
}
