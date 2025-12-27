import squareRedImg from "./assets/square-red.png";
import squareBlueImg from "./assets/square-blue.png";

export default function MockPage() {
  return (
    <div className="relative h-screen w-full bg-gray-500">
      <img
        src={squareRedImg}
        style={{
          position: "absolute",
          top: "25%",
          left: "25%",
        }}
      />
      <img
        src={squareBlueImg}
        style={{
          position: "absolute",
          top: "34%",
          left: "31%",
          width: "15%",
          height: "auto",
        }}
      />
      <img
        src={squareBlueImg}
        style={{
          position: "absolute",
          top: "34%",
          left: "53%",
          width: "15%",
          height: "auto",
        }}
      />
    </div>
  );
}
