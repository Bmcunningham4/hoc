import Bat from "./Bat";

export default function Table() {
  return (
    <div className="relative w-full flex justify-center">
      {/* Table Image Placeholder - replace with actual table image */}
      <div className="w-full h-auto bg-green-700 rounded-lg border-4 border-white min-h-[400px] flex items-center justify-center">
        <span className="text-white text-2xl font-bold">
          🏓 Table Tennis Table
        </span>
      </div>

      {/* Bats positioned with precise coordinates */}
      <div className="absolute inset-0" style={{ containerType: "size" }}>
        {/* Example bat positions - you can adjust these coordinates later */}
        <div
          className="absolute"
          style={{
            left: "15%",
            top: "25%",
          }}
        >
          <Bat year="2024" player="Cooper" />
        </div>

        <div
          className="absolute"
          style={{
            left: "30%",
            top: "45%",
          }}
        >
          <Bat year="2023" player="Ben" />
        </div>

        <div
          className="absolute"
          style={{
            left: "60%",
            top: "35%",
          }}
        >
          <Bat year="2022" player="TBD" />
        </div>
      </div>
    </div>
  );
}
