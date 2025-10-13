import Board from "./components/Board";
import trackImg from "./assets/track.jpg";

export default function App() {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center m-0 p-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${trackImg})`,
      }}
    >
      {/* Board container */}
      <div className="w-4/5 flex justify-center">
        <Board />
      </div>
    </div>
  );
}
