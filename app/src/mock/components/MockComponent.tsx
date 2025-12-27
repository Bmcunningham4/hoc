import squareRedImg from "../assets/square-red.png";
import squareBlueImg from "../assets/square-blue.png";

export default function MockComponent() {
  return (
    <div className="relative h-full w-full" style={{ containerType: "size" }}>
      <img
        src={squareRedImg}
        style={{
          position: "absolute",
          top: "25cqh", // Use cqh instead of %
          left: "25cqw", // Use cqw instead of %
          width: "50cqw",
          height: "50cqw",
        }}
      />
      <img
        src={squareBlueImg}
        style={{
          position: "absolute",
          top: "34cqh", // Use cqh instead of %
          left: "31cqw", // Use cqw instead of %
          width: "15cqw",
          height: "15cqw",
        }}
      />
      <img
        src={squareBlueImg}
        style={{
          position: "absolute",
          top: "34cqh", // Use cqh instead of %
          left: "53cqw", // Use cqw instead of %
          width: "15cqw",
          height: "15cqw",
        }}
      />
      <h3
        style={{
          position: "absolute",
          top: "40cqh", // Use cqh instead of %
          left: "40cqw", // Use cqw instead of %
          fontSize: "2cqh",
        }}
      >
        Eyeball
      </h3>
      <h2
        style={{
          position: "absolute",
          top: "90cqh", // Use cqh instead of %
          left: "40cqw", // Use cqw instead of %
          fontSize: "3cqh",
        }}
      >
        Tested by the champ..
      </h2>
    </div>
  );
}
