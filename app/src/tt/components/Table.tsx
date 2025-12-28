import Bat from "./Bat";
import blank from "../../shared/assets/blank.png";

export default function Table() {
  return (
    <div className="relative w-full flex justify-center">
      <img src={blank} alt="Board" className="w-full h-auto max-w-none" />
      <div
        className="absolute inset-0"
        style={{ containerType: "size", border: "2px solid red" }}
      >
        {/* 2022 */}
        <div
          className="absolute"
          style={{
            top: "0%",
            left: "-5%",
          }}
        >
          <Bat year="2022" player="chard" score="3-2" />
        </div>

        {/* 2023 */}
        <div
          className="absolute"
          style={{
            top: "0%",
            left: "10%",
          }}
        >
          <Bat year="2023" player="cun" score="3-0" />
        </div>

        {/* 2024 */}
        <div
          className="absolute"
          style={{
            top: "0%",
            left: "25%",
          }}
        >
          <Bat year="2024" player="chard" score="3-0" />
        </div>

        {/* 2025 */}
        <div
          className="absolute"
          style={{
            top: "0%",
            left: "40%",
          }}
        >
          <Bat year="2025" player="cun" score="3-2" />
        </div>

        {/* 2026 - Blank */}
        <div
          className="absolute"
          style={{
            top: "0%",
            left: "55%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2027 - Blank */}
        <div
          className="absolute"
          style={{
            top: "0%",
            left: "70%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2028 */}
        <div
          className="absolute"
          style={{
            top: "18%",
            left: "-5%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2029 */}
        <div
          className="absolute"
          style={{
            top: "18%",
            left: "10%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2030 */}
        <div
          className="absolute"
          style={{
            top: "18%",
            left: "25%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2031 */}
        <div
          className="absolute"
          style={{
            top: "18%",
            left: "40%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2032 - Blank */}
        <div
          className="absolute"
          style={{
            top: "18%",
            left: "55%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2033 - Blank */}
        <div
          className="absolute"
          style={{
            top: "18%",
            left: "70%",
          }}
        >
          <Bat year="" player="blank" />
        </div>
        {/* 2034 */}
        <div
          className="absolute"
          style={{
            top: "36%",
            left: "-5%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2035 */}
        <div
          className="absolute"
          style={{
            top: "36%",
            left: "10%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2036 */}
        <div
          className="absolute"
          style={{
            top: "36%",
            left: "25%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2037 */}
        <div
          className="absolute"
          style={{
            top: "36%",
            left: "40%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2038 - Blank */}
        <div
          className="absolute"
          style={{
            top: "36%",
            left: "55%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2039 - Blank */}
        <div
          className="absolute"
          style={{
            top: "36%",
            left: "70%",
          }}
        >
          <Bat year="" player="blank" />
        </div>
        {/* 2040 */}
        <div
          className="absolute"
          style={{
            top: "54%",
            left: "-5%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2041 */}
        <div
          className="absolute"
          style={{
            top: "54%",
            left: "10%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2042 */}
        <div
          className="absolute"
          style={{
            top: "54%",
            left: "25%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2043 */}
        <div
          className="absolute"
          style={{
            top: "54%",
            left: "40%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2044 - Blank */}
        <div
          className="absolute"
          style={{
            top: "54%",
            left: "55%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2045 - Blank */}
        <div
          className="absolute"
          style={{
            top: "54%",
            left: "70%",
          }}
        >
          <Bat year="" player="blank" />
        </div>
      </div>
    </div>
  );
}
