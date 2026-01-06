import Track from "./components/Track";
import PageLayout from "../shared/PageLayout";
import Header from "../shared/Header";
import Countdown from "../shared/Countdown";
import trackImg from "./assets/track-test.jpg";

export default function GkPage() {
  return (
    <PageLayout backgroundImage={trackImg}>
      <Header
        main="Cook Cup 🏆"
        secondary="(1 year naming contract)"
      />
      <Track />
      <Countdown date="20-12" />
    </PageLayout>
  );
}
