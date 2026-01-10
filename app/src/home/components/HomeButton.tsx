import { Link, useLocation } from "react-router-dom";
import homeIcon from "../../shared/assets/home.png";

export function HomeButton() {
  const location = useLocation();

  if (location.pathname === "/") return null; // || location.pathname === "hoc/#/gk" ??

  return (
    <Link
      to="/"
      className="absolute bottom-4 left-4 z-50 rounded-full no-underline flex items-center justify-center"
      style={{
        backgroundColor: "white",
        padding: "0.5rem",
        width: "2.5rem",
        height: "2.5rem",
      }}
    >
      <img src={homeIcon} alt="Home" className="w-6 h-6" />
    </Link>
  );
}
