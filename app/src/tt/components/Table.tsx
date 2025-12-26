import Bat from "./Bat";

export default function Table() {
  return (
    <div className="relative w-full flex justify-center">
      {/* Table container - like the board image in MK */}
      <div
        className="w-full max-w-6xl"
        style={{
          aspectRatio: "16/10",
          minHeight: "70vh",
        }}
      >
        {/* Container query context */}
        <div
          className="relative w-full h-full"
          style={{ containerType: "size" }}
        >
          {/* 2022 */}
          <div
            className="absolute"
            style={{
              top: "10%",
              left: "0%",
            }}
          >
            <Bat year="2022" player="chard" score="3-2" />
          </div>

          {/* 2023 */}
          <div
            className="absolute"
            style={{
              top: "10%",
              left: "15%",
            }}
          >
            <Bat year="2023" player="cun" score="3-0" />
          </div>

          {/* 2024 */}
          <div
            className="absolute"
            style={{
              top: "10%",
              left: "30%",
            }}
          >
            <Bat year="2024" player="chard" score="3-0" />
          </div>

          {/* 2025 */}
          <div
            className="absolute"
            style={{
              top: "10%",
              left: "45%",
            }}
          >
            <Bat year="2025" player="cun" score="3-2" />
          </div>

          {/* 2026 - Blank */}
          <div
            className="absolute"
            style={{
              top: "10%",
              left: "60%",
            }}
          >
            <Bat year="" player="blank" />
          </div>

          {/* 2027 - Blank */}
          <div
            className="absolute"
            style={{
              top: "23%",
              left: "0%",
            }}
          >
            <Bat year="" player="blank" />
          </div>

          {/* 2028 - Blank */}
          <div
            className="absolute"
            style={{
              top: "23%",
              left: "15%",
            }}
          >
            <Bat year="" player="blank" />
          </div>
          {/* 2029 - Blank */}
          <div
            className="absolute"
            style={{
              top: "23%",
              left: "30%",
            }}
          >
            <Bat year="" player="blank" />
          </div>
          {/* 2030 - Blank */}
          <div
            className="absolute"
            style={{
              top: "23%",
              left: "45%",
            }}
          >
            <Bat year="" player="blank" />
          </div>
          {/* 2031 - Blank */}
          <div
            className="absolute"
            style={{
              top: "23%",
              left: "60%",
            }}
          >
            <Bat year="" player="blank" />
          </div>

          {/* 2032 - Blank */}
          <div
            className="absolute"
            style={{
              top: "36%",
              left: "0%",
            }}
          >
            <Bat year="" player="blank" />
          </div>

          {/* 2033 - Blank */}
          <div
            className="absolute"
            style={{
              top: "36%",
              left: "15%",
            }}
          >
            <Bat year="" player="blank" />
          </div>

          {/* 2034 - Blank */}
          <div
            className="absolute"
            style={{
              top: "36%",
              left: "30%",
            }}
          >
            <Bat year="" player="blank" />
          </div>

          {/* 2035 - Blank */}
          <div
            className="absolute"
            style={{
              top: "36%",
              left: "45%",
            }}
          >
            <Bat year="" player="blank" />
          </div>

          {/* 2036 - Blank */}
          <div
            className="absolute"
            style={{
              top: "36%",
              left: "60%",
            }}
          >
            <Bat year="" player="blank" />
          </div>
        </div>
      </div>
    </div>
  );
}
