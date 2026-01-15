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
          className="absolute transition-all duration-300 transform hover:scale-110 cursor-pointer"
          style={{
            top: "13%",
            left: "33%",
            animation: "glow-red 2s ease-in-out infinite alternate",
          }}
        >
          <Trophy trophyImg={mkTrophy} />
        </Link>

        {/* Tt Trophy */}
        <Link
          to="/tt"
          className="absolute transition-all duration-300 transform hover:scale-110 cursor-pointer"
          style={{
            top: "26%",
            left: "52%",
            animation: "glow-green 2.5s ease-in-out infinite alternate 0.8s",
          }}
        >
          <Trophy trophyImg={ttTrophy} />
        </Link>

        {/* Gk Trophy */}
        <Link
          to="/gk"
          className="absolute transition-all duration-300 transform hover:scale-110 cursor-pointer"
          style={{
            top: "38%",
            left: "52%",
            animation: "glow-purple 3s ease-in-out infinite alternate 1.6s",
          }}
        >
          <Trophy trophyImg={gkTrophy} />
        </Link>
      </div>

      <style>{`
        @keyframes glow-red {
          from { filter: drop-shadow(0 0 15px rgba(239,68,68,0.6)) drop-shadow(0 8px 25px rgba(239,68,68,0.4)); }
          to { filter: drop-shadow(0 0 25px rgba(239,68,68,1.0)) drop-shadow(0 8px 30px rgba(239,68,68,0.8)); }
        }
        @keyframes glow-green {
          from { filter: drop-shadow(0 0 15px rgba(34,197,94,0.6)) drop-shadow(0 8px 25px rgba(34,197,94,0.4)); }
          to { filter: drop-shadow(0 0 25px rgba(34,197,94,1.0)) drop-shadow(0 8px 30px rgba(34,197,94,0.8)); }
        }
        @keyframes glow-purple {
          from { filter: drop-shadow(0 0 15px rgba(147,51,234,0.6)) drop-shadow(0 8px 25px rgba(147,51,234,0.4)); }
          to { filter: drop-shadow(0 0 25px rgba(147,51,234,1.0)) drop-shadow(0 8px 30px rgba(147,51,234,0.8)); }
        }
      `}</style>
    </div>
  );
}
