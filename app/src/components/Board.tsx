import boardImg from "../assets/board.png";
import Badge from "./Badge";

export default function Board() {
  return (
    <div className="relative w-full flex justify-center">
      {/* Board Image */}
      <img src={boardImg} alt="Board" className="w-full h-auto max-w-none" />

      {/* Badges */}
      <div className="absolute top-4 left-4 space-y-2">
        <Badge year="2023" character="dry-bones" margin="10pts" />
        <Badge year="2024" character="coops" margin="2pts" />
        <Badge year="" character="blank" margin="" />
      </div>
    </div>
  );
}
