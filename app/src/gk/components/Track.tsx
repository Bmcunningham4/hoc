import Bat from "./Helmet";
import blank from "../../shared/assets/blank.png";

export default function Table() {
  const HORIZONTAL_GAP = 30;
  const VERTICAL_GAP = 30;
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
          <Bat year="2022" player="duncan" name="Duncan Grainger" />
        </div>

        {/* 2023 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START}%`,
            left: `${LEFT_START + HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="2023" player="jim" name="James Cunningham" />
        </div>

        {/* 2024 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START}%`,
            left: `${LEFT_START + 2 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="2024" player="ben" name="Ben Cunningham" />
        </div>

        {/* 2025 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + VERTICAL_GAP}%`,
            left: `${LEFT_START}%`,
          }}
        >
          <Bat year="2025" player="cook" name="Elliot Cook" />
        </div>

        {/* 2026 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + VERTICAL_GAP}%`,
            left: `${LEFT_START + HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* 2027 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + VERTICAL_GAP}%`,
            left: `${LEFT_START + 2 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* Third row - 2028 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 2 * VERTICAL_GAP}%`,
            left: `${LEFT_START}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* Third row - 2029 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 2 * VERTICAL_GAP}%`,
            left: `${LEFT_START + HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>

        {/* Third row - 2030 */}
        <div
          className="absolute"
          style={{
            top: `${TOP_START + 2 * VERTICAL_GAP}%`,
            left: `${LEFT_START + 2 * HORIZONTAL_GAP}%`,
          }}
        >
          <Bat year="" player="blank" />
        </div>
      </div>
    </div>
  );
}
