import boardImg from "../assets/board.png";
import Badge from "./Badge";

export default function Board() {
  return (
    <div className="relative w-full flex justify-center">
      {/* Board Image */}
      <img src={boardImg} alt="Board" className="w-full h-auto max-w-none" />

      {/* Badges positioned with precise coordinates */}
      <div className="absolute inset-0">
        {/* 2017 */}
        <div
          className="absolute"
          style={{
            left: "17%",
            top: "24%",
          }}
        >
          <Badge year="20170000" character="dry-bones" margin="1pts" />
        </div>

        {/* 2019 */}
        <div
          className="absolute"
          style={{
            left: "26%",
            top: "24%",
          }}
        >
          <Badge year="2019" character="dry-bones" margin="23pts" />
        </div>

        {/* 2020 */}
        <div
          className="absolute"
          style={{
            right: "18%",
            top: "24%",
          }}
        >
          <Badge year="2020" character="coops" margin="5pts" />
        </div>

        {/* 2021 */}
        <div
          className="absolute"
          style={{
            right: "27%",
            top: "24%",
          }}
        >
          <Badge year="2021" character="draw" margin="" />
        </div>

        {/* 2022 */}
        <div
          className="absolute"
          style={{
            left: "19%",
            top: "33%",
          }}
        >
          <Badge year="2022" character="dry-bones" margin="6pts" />
        </div>

        {/* 2023 */}
        <div
          className="absolute"
          style={{
            left: "28%",
            top: "33%",
          }}
        >
          <Badge year="2023" character="coops" margin="7pts" />
        </div>

        {/* 2024 */}
        <div
          className="absolute"
          style={{
            right: "29%",
            top: "33%",
          }}
        >
          <Badge year="2024" character="coops" margin="7pts" />
        </div>

        {/* 2025 */}
        <div
          className="absolute"
          style={{
            right: "20%",
            top: "33%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>
        {/* 2026 */}
        <div
          className="absolute"
          style={{
            left: "17%",
            top: "42%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2027 */}
        <div
          className="absolute"
          style={{
            left: "25%",
            top: "42%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2028 */}
        <div
          className="absolute"
          style={{
            left: "33%",
            top: "42%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2029 */}
        <div
          className="absolute"
          style={{
            right: "17%",
            top: "42%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2030 */}
        <div
          className="absolute"
          style={{
            right: "25%",
            top: "42%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2031 */}
        <div
          className="absolute"
          style={{
            right: "33%",
            top: "42%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2032 */}
        <div
          className="absolute"
          style={{
            left: "18%",
            top: "51%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2033 */}
        <div
          className="absolute"
          style={{
            left: "27%",
            top: "51%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2034 */}
        <div
          className="absolute"
          style={{
            left: "36%",
            top: "51%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2035 */}
        <div
          className="absolute"
          style={{
            left: "45%",
            top: "51%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2036 */}
        <div
          className="absolute"
          style={{
            left: "54%",
            top: "51%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2037 */}
        <div
          className="absolute"
          style={{
            left: "63%",
            top: "51%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2038 */}
        <div
          className="absolute"
          style={{
            left: "72%",
            top: "51%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2039 */}
        <div
          className="absolute"
          style={{
            left: "18%",
            top: "60%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2040 */}
        <div
          className="absolute"
          style={{
            left: "27%",
            top: "60%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2041 */}
        <div
          className="absolute"
          style={{
            left: "36%",
            top: "60%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2042 */}
        <div
          className="absolute"
          style={{
            left: "45%",
            top: "60%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2043 */}
        <div
          className="absolute"
          style={{
            left: "54%",
            top: "60%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2044 */}
        <div
          className="absolute"
          style={{
            left: "63%",
            top: "60%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2045 */}
        <div
          className="absolute"
          style={{
            left: "72%",
            top: "60%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2047 */}
        <div
          className="absolute"
          style={{
            left: "22%",
            top: "69%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2048 */}
        <div
          className="absolute"
          style={{
            left: "31%",
            top: "69%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2049 */}
        <div
          className="absolute"
          style={{
            left: "40%",
            top: "69%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2050 */}
        <div
          className="absolute"
          style={{
            left: "49%",
            top: "69%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2051 */}
        <div
          className="absolute"
          style={{
            left: "58%",
            top: "69%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2052 */}
        <div
          className="absolute"
          style={{
            left: "67%",
            top: "69%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2053 */}
        <div
          className="absolute"
          style={{
            left: "31%",
            top: "78%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2054 */}
        <div
          className="absolute"
          style={{
            left: "40%",
            top: "78%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2055 */}
        <div
          className="absolute"
          style={{
            left: "49%",
            top: "78%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>

        {/* 2056 */}
        <div
          className="absolute"
          style={{
            left: "58%",
            top: "78%",
          }}
        >
          <Badge year="" character="blank" margin="" />
        </div>
      </div>
    </div>
  );
}
