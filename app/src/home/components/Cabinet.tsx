import { MkTrophy, TtTrophy } from "./Trophies";
import HomeBg from "../assets/home-bg.jpg";
import { Link } from "react-router-dom";

export default function Cabinet() {
  return (
    <div className="relative w-full flex justify-center">
      <img src={HomeBg} alt="Board" className="w-full h-auto max-w-none" />
      <div className="absolute inset-0" style={{ containerType: "size" }}>
        {/* Mk Trophy */}
        <div
          className="absolute"
          style={{
            top: "27%",
            left: "27%",
          }}
        >
          <MkTrophy year="2022" />
        </div>

        {/* Tt Trophy */}
        <div
          className="absolute"
          style={{
            top: "37%",
            left: "37%",
          }}
        >
          <TtTrophy year="2022" />
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <Link
            to="/mk"
            className="px-12 py-6 bg-red-600 hover:bg-red-700 text-white text-2xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center no-underline"
          >
            🏁 mk
          </Link>

          <Link
            to="/tt"
            className="px-12 py-6 bg-green-600 hover:bg-green-700 text-white text-2xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center no-underline"
          >
            🏓 tt
          </Link>
          <Link
            to="/gk"
            className="px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center no-underline"
          >
            🏆 gk
          </Link>
        </div>
      </div>
    </div>
  );
}
