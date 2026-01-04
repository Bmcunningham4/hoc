import Bat from "./Bat";
import blank from "../../shared/assets/blank.png";

export default function Table() {
  const HORIZONTAL_GAP = 16.5;
  const VERTICAL_GAP = 19;
  const LEFT_START = -2;
  const TOP_START = -12;

  return (
    <div className="relative w-full flex justify-center">
      <img src={blank} alt="Board" className="w-full h-auto max-w-none" />
      <div className="absolute inset-0" style={{ containerType: "size" }}>
        {/* 2022 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START}%`,
            left: `${LEFT_START}%`,
          }}
        >
          <Bat year="2022" player="chard" score="3-2" />
        </div>

        {/* 2023 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START}%`,
            left: `${LEFT_START + HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="2023" player="cun" score="3-0" />
        </div>

        {/* 2024 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START}%`,
            left: `${LEFT_START + 2 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="2024" player="chard" score="3-0" />
        </div>

        {/* 2025 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START}%`,
            left: `${LEFT_START + 3 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="2025" player="cun" score="3-2" />
        </div>

        {/* 2026 - Blank */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START}%`,
            left: `${LEFT_START + 4 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2027 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + VERTICAL_GAP}%`,
            left: `${LEFT_START}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2028 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + VERTICAL_GAP}%`,
            left: `${LEFT_START + HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2029 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + VERTICAL_GAP}%`,
            left: `${LEFT_START + 2 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2030 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + VERTICAL_GAP}%`,
            left: `${LEFT_START + 3 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2031 - Blank */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + VERTICAL_GAP}%`,
            left: `${LEFT_START + 4 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2032 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 2 * VERTICAL_GAP}%`,
            left: `${LEFT_START}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2033 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 2 * VERTICAL_GAP}%`,
            left: `${LEFT_START + HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2034 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 2 * VERTICAL_GAP}%`,
            left: `${LEFT_START + 2 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2035 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 2 * VERTICAL_GAP}%`,
            left: `${LEFT_START + 3 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2036  */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 2 * VERTICAL_GAP}%`,
            left: `${LEFT_START + 4 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2037 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 3 * VERTICAL_GAP}%`,
            left: `${LEFT_START}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2038 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 3 * VERTICAL_GAP}%`,
            left: `${LEFT_START + HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2039 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 3 * VERTICAL_GAP}%`,
            left: `${LEFT_START + 2 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2040 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 3 * VERTICAL_GAP}%`,
            left: `${LEFT_START + 3 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2041 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 3 * VERTICAL_GAP}%`,
            left: `${LEFT_START + 4 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2042 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 4 * VERTICAL_GAP}%`,
            left: `${LEFT_START}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2043 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 4 * VERTICAL_GAP}%`,
            left: `${LEFT_START + HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2044 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 4 * VERTICAL_GAP}%`,
            left: `${LEFT_START + 2 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2045 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 4 * VERTICAL_GAP}%`,
            left: `${LEFT_START + 3 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2046  */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 4 * VERTICAL_GAP}%`,
            left: `${LEFT_START + 4 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>
      </div>
    </div>
  );
}
