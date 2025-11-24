import Table from "./components/Table";
import ttBgImg from "./assets/tt-bg.png";

export default function TtPage() {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center m-0 p-0 bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{
        backgroundImage: `url(${ttBgImg})`,
      }}
    >
      <div className="w-[120%] sm:w-[80%] h-full flex justify-center">
        <Table />
      </div>
    </div>
  );
}