import { Link } from "react-router-dom";
import Trophy from "./Trophy";
import HomeBg from "../assets/home-bg.png";
import mkTrophy from "../assets/trophy-mk.png";
import ttTrophy from "../assets/trophy-tt.png";
import gkTrophy from "../assets/trophy-gk.png";

export default function Cabinet() {
  return (
    <div className="relative w-full flex justify-center">
      <img src={HomeBg} alt="Board" className="w-full h-auto max-w-none" />
      <div className="absolute inset-0" style={{ containerType: "size" }}>
        {/* Mk Trophy */}
        <Link
          to="/mk"
          className="absolute transition-all duration-300 transform hover:scale-110 drop-shadow-[0_8px_12px_rgba(239,68,68,0.6)] hover:drop-shadow-[0_12px_20px_rgba(239,68,68,0.8)] cursor-pointer"
          style={{
            top: "18%",
            left: "31%",
          }}
        >
          <Trophy trophyImg={mkTrophy} size="18" year="test" />
        </Link>

        {/* Tt Trophy */}
        <Link
          to="/tt"
          className="absolute transition-all duration-300 transform hover:scale-110 drop-shadow-[0_8px_12px_rgba(34,197,94,0.6)] hover:drop-shadow-[0_12px_20px_rgba(34,197,94,0.8)] cursor-pointer"
          style={{
            top: "24%",
            left: "76%",
          }}
        >
          <Trophy trophyImg={ttTrophy} size="12" year="" />
        </Link>

        {/* Gk Trophy */}
        <Link
          to="/gk"
          className="absolute transition-all duration-300 transform hover:scale-110 drop-shadow-[0_8px_12px_rgba(147,51,234,0.6)] hover:drop-shadow-[0_12px_20px_rgba(147,51,234,0.8)] cursor-pointer"
          style={{
            top: "39%",
            left: "57%",
          }}
        >
          <Trophy trophyImg={gkTrophy} size="7" year="" />
        </Link>
      </div>
    </div>
  );
}
