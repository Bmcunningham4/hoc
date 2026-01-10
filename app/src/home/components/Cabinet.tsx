import { Link } from "react-router-dom";
import Trophy from "./Trophy";
import HomeBg from "../assets/home-bg.jpg";
import mkTrophy from "../assets/trophy-mk.png";
import ttTrophy from "../assets/trophy-tt.png";

export default function Cabinet() {
  return (
    <div className="relative w-full flex justify-center">
      <img src={HomeBg} alt="Board" className="w-full h-auto max-w-none" />
      <div className="absolute inset-0" style={{ containerType: "size" }}>
        {/* Mk Trophy */}
        <Link
          to="/mk"
          className="px-12 py-6 bg-red-600 hover:bg-red-700 text-white text-2xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center no-underline"
        >
          <div
            className="absolute"
            style={{
              top: "7%",
              left: "27%",
            }}
          >
            <Trophy trophyImg={mkTrophy} year="2022" />
          </div>
        </Link>

        {/* Tt Trophy */}
        <Link
          to="/tt"
          className="px-12 py-6 bg-green-600 hover:bg-green-700 text-white text-2xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center no-underline"
        >
          <div
            className="absolute"
            style={{
              top: "47%",
              left: "37%",
            }}
          >
            <Trophy trophyImg={ttTrophy} year="2022" />
          </div>
        </Link>

        {/* Gk Trophy ----- coming soon.. */}
        <Link
          to="/gk"
          className="px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center no-underline"
        >
          🏆 gk
        </Link>
      </div>
    </div>
  );
}
