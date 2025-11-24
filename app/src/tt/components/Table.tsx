import Bat from "./Bat";

export default function Table() {
  return (
    <div className="relative w-full flex justify-center">
      {/* Table container - like the board image in MK */}
      <div 
        className="w-full max-w-6xl" 
        style={{ 
          aspectRatio: "16/10",
          minHeight: "70vh"
        }}
      >
        {/* Container query context */}
        <div className="relative w-full h-full" style={{ containerType: "size" }}>
          
          {/* 2024 Winner - larger, center position */}
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "30%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <Bat year="2024" player="cun" score="3-2" size="large" />
          </div>

          {/* 2023 Winner - smaller, side position */}
          <div
            className="absolute"
            style={{
              left: "20%",
              top: "60%",
            }}
          >
            <Bat year="2023" player="chard" score="1-3" size="medium" />
          </div>

          {/* 2022 Winner - smaller, other side */}
          <div
            className="absolute"
            style={{
              left: "75%",
              top: "70%",
            }}
          >
            <Bat year="2022" player="cun" score="3-1" size="small" />
          </div>

        </div>
      </div>
    </div>
  );
}