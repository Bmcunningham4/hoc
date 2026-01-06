import Board from "./components/Board";
import PageLayout from "../shared/PageLayout";
import Header from "../shared/Header";
import Countdown from "../shared/Countdown";
import trackImg from "./assets/track.jpg";
import dryBonesImg from "./assets/dry-bones.png";
import coopsImg from "./assets/cooper-trooper.png";

export default function MkPage() {
  return (
    <PageLayout backgroundImage={trackImg}>
      <Header
        main="Cunningham v Witcombe"
        blurred={true}
        mLogo1={dryBonesImg}
        mLogo2={coopsImg}
        mLogoSize={2}
      />
      <Board />
      <Countdown date="30-11" />
    </PageLayout>
  );
}
