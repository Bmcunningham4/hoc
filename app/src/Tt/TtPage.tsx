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
      {/* Header */}
      <div className="flex flex-col items-center mb-4 mt-16">
        <h1 className="text-black text-4xl font-bold drop-shadow-lg">
          TT Championships
        </h1>
        <p className="text-black text-lg drop-shadow-md mt-1">
          Cunningham v Harding
        </p>
      </div>

      {/* Table */}
      <div className="w-full flex-1 flex justify-center">
        <Table />
      </div>
    </div>
  );
}
