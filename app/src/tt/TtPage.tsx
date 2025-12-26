import Table from "./components/Table";
import Countdown from "../shared/Countdown";
import Header from "../shared/Header";
import ttBgImg from "./assets/tt-bg.png";

export default function TtPage() {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center m-0 p-0 bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{
        backgroundImage: `url(${ttBgImg})`,
      }}
    >
      <Header main="TT Championships" secondary="Cunningham v Harding" />
      <Table />
      <Countdown date="19-12" />
    </div>
  );
}
