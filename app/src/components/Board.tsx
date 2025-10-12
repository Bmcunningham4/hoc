import boardImg from "../assets/board.png";
import Banner from "./Banner";

export default function Board() {
  return (
    <div className="relative w-full flex justify-center">
      {/* Board Image */}
      <img src={boardImg} alt="Board" className="w-full h-auto max-w-none" />

      {/* Banner positioned absolutely on top of board */}
      <div className="absolute top-[14%] left-1/2 transform -translate-x-1/2 w-full">
        <Banner />
      </div>
    </div>
  );
}
