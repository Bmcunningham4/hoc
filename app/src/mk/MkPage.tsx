import Board from "./components/Board";
import Countdown from "../shared/Countdown";
import Header from "../shared/Header";
import trackImg from "./assets/track.jpg";

export default function MkPage() {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center m-0 p-0 bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{
        backgroundImage: `url(${trackImg})`,
      }}
    >
      <Header main="Cunningham v Whitcombe" />
      <div className="w-[120%] sm:w-[80%] flex justify-center">
        <Board />
      </div>
      <Countdown date="30-11" />
    </div>
  );
}
