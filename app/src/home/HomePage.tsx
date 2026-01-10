import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
          HOC temp homepage..
        </h1>
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
  );
}
