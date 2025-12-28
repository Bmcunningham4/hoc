import MockComponent from "./MockComponent";
import blank from "../../shared/assets/blank.png";

export default function MockHome() {
  return (
    <div className="relative w-full flex justify-center bg-gray-500">
      <img src={blank} alt="Board" className="w-full h-auto max-w-none" />
      <div className="absolute inset-0" style={{ containerType: "size" }}>
        <div
          className="absolute"
          style={{
            left: "0%",
            top: "22%",
          }}
        >
          <MockComponent />
        </div>
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "22%",
          }}
        >
          <MockComponent />
        </div>
      </div>
    </div>
  );
}
