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
      <div className="w-[120%] flex justify-center">
        <Board />
      </div>
    </div>
  );
}
