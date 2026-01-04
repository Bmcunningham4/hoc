import { Link, useLocation } from "react-router-dom";
import homeIcon from "../shared/assets/home.png";

export function HomePage() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Hall of Champions
        </h1>
        <p className="text-xl text-gray-300">Choose your competition</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-8">
        <Link
          to="/mk"
          className="px-12 py-6 bg-red-600 hover:bg-red-700 text-white text-2xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center no-underline"
        >
          🏁 Mario Kart
        </Link>

        <Link
          to="/tt"
          className="px-12 py-6 bg-green-600 hover:bg-green-700 text-white text-2xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center no-underline"
        >
          🏓 Table Tennis
        </Link>
      </div>
    </div>
  );
}

export function HomeButton() {
  const location = useLocation();

  if (location.pathname === "/") return null;

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
