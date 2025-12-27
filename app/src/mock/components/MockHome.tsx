import MockComponent from "./MockComponent";
import boardImg from "../../mk/assets/board.png";

export default function MockHome() {
  return (
    <div className="relative w-full flex justify-center bg-gray-500">
      <img src={boardImg} alt="Board" className="w-full h-auto max-w-none" />
      <div className="absolute inset-0" style={{ containerType: "size" }}>
        <div
          className="absolute"
          style={{
            left: "10%",
            top: "22%",
          }}
        >
          <MockComponent />
        </div>
        <div
          className="absolute"
          style={{
            left: "17%",
            top: "22%",
          }}
        >
          <MockComponent />
        </div>
      </div>
    </div>
  );
}
