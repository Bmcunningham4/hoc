import Board from "./components/Board";
import PageLayout from "../shared/PageLayout";
import trackImg from "./assets/track.jpg";

export default function MkPage() {
  return (
    <PageLayout
      backgroundImage={trackImg}
      main="Cunningham v Whitcombe"
      countdownDate="30-11"
    >
      <Board />
    </PageLayout>
  );
}
