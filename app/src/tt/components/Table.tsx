import Bat from "./Bat";
import blank from "../../shared/assets/blank.png";

export default function Table() {
  return (
    <div className="relative w-full flex justify-center">
      <img src={blank} alt="Board" className="w-full h-auto max-w-none" />
      <div className="absolute inset-0" style={{ containerType: "size" }}>
        {/* 2022 */}
        <div
          className="absolute"
          style={{
            top: "-13%",
            left: "-5%",
          }}
        >
          <Bat year="2022" player="chard" score="3-2" />
        </div>

        {/* 2023 */}
        <div
          className="absolute"
          style={{
            top: "-13%",
            left: "13%",
          }}
        >
          <Bat year="2023" player="cun" score="3-0" />
        </div>

        {/* 2024 */}
        <div
          className="absolute"
          style={{
            top: "-13%",
            left: "31%",
          }}
        >
          <Bat year="2024" player="chard" score="3-0" />
        </div>

        {/* 2025 */}
        <div
          className="absolute"
          style={{
            top: "-13%",
            left: "49%",
          }}
        >
          <Bat year="2025" player="cun" score="3-2" />
        </div>

        {/* 2026 - Blank */}
        <div
          className="absolute"
          style={{
            top: "-13%",
            left: "67%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2027 */}
        <div
          className="absolute"
          style={{
            top: "7%",
            left: "-5%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2028 */}
        <div
          className="absolute"
          style={{
            top: "7%",
            left: "13%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2029 */}
        <div
          className="absolute"
          style={{
            top: "7%",
            left: "31%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2030 */}
        <div
          className="absolute"
          style={{
            top: "7%",
            left: "49%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2031 - Blank */}
        <div
          className="absolute"
          style={{
            top: "7%",
            left: "67%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2032 */}
        <div
          className="absolute"
          style={{
            top: "27%",
            left: "-5%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2033 */}
        <div
          className="absolute"
          style={{
            top: "27%",
            left: "13%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2034 */}
        <div
          className="absolute"
          style={{
            top: "27%",
            left: "31%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2035 */}
        <div
          className="absolute"
          style={{
            top: "27%",
            left: "49%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2036 - Blank */}
        <div
          className="absolute"
          style={{
            top: "27%",
            left: "67%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2037 */}
        <div
          className="absolute"
          style={{
            top: "47%",
            left: "-5%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2038 */}
        <div
          className="absolute"
          style={{
            top: "47%",
            left: "13%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2039 */}
        <div
          className="absolute"
          style={{
            top: "47%",
            left: "31%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2040 */}
        <div
          className="absolute"
          style={{
            top: "47%",
            left: "49%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2041 - Blank */}
        <div
          className="absolute"
          style={{
            top: "47%",
            left: "67%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2042 */}
        <div
          className="absolute"
          style={{
            top: "67%",
            left: "-5%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2043 */}
        <div
          className="absolute"
          style={{
            top: "67%",
            left: "13%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2044 */}
        <div
          className="absolute"
          style={{
            top: "67%",
            left: "31%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2045 */}
        <div
          className="absolute"
          style={{
            top: "67%",
            left: "49%",
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2046 - Blank */}
        <div
          className="absolute"
          style={{
            top: "67%",
            left: "67%",
          }}
        >
          <Bat year="" player="blank" />
        </div>
      </div>
    </div>
  );
}
