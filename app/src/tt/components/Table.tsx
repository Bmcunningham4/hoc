import Bat from "./Bat";

export default function Table() {
  return (
    <div className="relative w-full flex justify-center">
      {/* Invisible container that sets the aspect ratio and size */}
      <div 
        className="w-full max-w-4xl"
        style={{ aspectRatio: "16/10" }} // Sets a consistent aspect ratio
      >
        {/* This div provides the container query context */}
        <div className="relative w-full h-full" style={{ containerType: "size" }}>
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <Bat year="2024" player="cun" score="3-2" />
          </div>
        </div>
      </div>
    </div>
  );
}