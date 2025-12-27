import Board from "./components/Board";
import PageLayout from "../shared/PageLayout";
import Header from "../shared/Header";
import Countdown from "../shared/Countdown";
import trackImg from "./assets/track.jpg";

export default function MkPage() {
  return (
    <PageLayout backgroundImage={trackImg}>
      <Header main="Cunningham v Whitcombe" />
      <Board />
      <Countdown date="30-11" />
    </PageLayout>
  );
}