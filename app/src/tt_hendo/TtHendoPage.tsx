import Table from "./components/Table";
import PageLayout from "../shared/PageLayout";
import Header from "../shared/Header";
import Countdown from "../shared/Countdown";
import ttBgImg from "./assets/tt-bg.png";
import batCun from "./assets/bat-cun.png";
import batHendo from "./assets/bat-hendo.png";

export default function TtHendoPage() {
  return (
    <PageLayout backgroundImage={ttBgImg}>
      <Header
        main="TT Championships"
        secondary="Cunningham v Henderson"
        sLogo1={batCun}
        sLogo2={batHendo}
        sLogoSize={3}
        sLogoRotate={true}
      />
      <div className="w-full max-w-[600px] flex-shrink">
        <Table />
      </div>
      <Countdown date="19-12" />
    </PageLayout>
  );
}
