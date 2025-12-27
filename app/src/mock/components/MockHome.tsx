import MockComponent from "./MockComponent";

export default function MockHome() {
  return (
    <div className="h-screen w-full bg-gray-500 flex">
      <div className="flex-1">
        <MockComponent />
      </div>
      <div className="flex-1">
        <MockComponent />
      </div>
    </div>
  );
}
