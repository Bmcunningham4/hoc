import { Link } from "react-router-dom";
import Trophy from "./Trophy";
import CabinetBg from "../assets/cabinet-bg.png";
import mkTrophy from "../assets/trophy-mk.png";
import ttTrophy from "../assets/trophy-tt.png";
import gkTrophy from "../assets/trophy-gk.png";

export default function Cabinet() {
  return (
    <div className="relative w-full flex justify-center">
      <img src={CabinetBg} alt="Board" className="w-full h-auto max-w-none" />
      <div className="absolute inset-0" style={{ containerType: "size" }}>
        {/* Mk Trophy */}
        <Link
          to="/mk"
          className="absolute transition-all duration-300 transform hover:scale-110 drop-shadow-[0_8px_12px_rgba(239,68,68,0.6)] hover:drop-shadow-[0_12px_20px_rgba(239,68,68,0.8)] cursor-pointer"
          style={{
            top: "13%",
            left: "33%",
          }}
        >
          <Trophy trophyImg={mkTrophy} year="test" />
        </Link>

        {/* Tt Trophy */}
        <Link
          to="/tt"
          className="absolute transition-all duration-300 transform hover:scale-110 drop-shadow-[0_8px_12px_rgba(34,197,94,0.6)] hover:drop-shadow-[0_12px_20px_rgba(34,197,94,0.8)] cursor-pointer"
          style={{
            top: "26%",
            left: "52%",
          }}
        >
          <Trophy trophyImg={ttTrophy} year="" />
        </Link>

        {/* Gk Trophy */}
        <Link
          to="/gk"
          className="absolute transition-all duration-300 transform hover:scale-110 drop-shadow-[0_8px_12px_rgba(147,51,234,0.6)] hover:drop-shadow-[0_12px_20px_rgba(147,51,234,0.8)] cursor-pointer"
          style={{
            top: "38%",
            left: "52%",
          }}
        >
          <Trophy trophyImg={gkTrophy} year="" />
        </Link>
      </div>
    </div>
  );
}
