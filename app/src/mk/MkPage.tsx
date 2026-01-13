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
        main="Cun v Witcombe"
        blurred={true}
        mLogo1={dryBonesImg}
        mLogo2={coopsImg}
        mLogoSize={2}
        mHeadingSize={4}
      />
      <div
        className="w-full max-w-[600px] flex-shrink"
        style={{ width: "120vw" }}
      >
        <Board />
      </div>
      <Countdown date="30-11" />
    </PageLayout>
  );
}
