import Table from "./components/Table";
import PageLayout from "../shared/PageLayout";
import Header from "../shared/Header";
import Countdown from "../shared/Countdown";
import ttBgImg from "./assets/tt-bg.png";
import batCun from "./assets/bat-cun.png";
import batChard from "./assets/bat-chard.png";

export default function TtPage() {
  return (
    <PageLayout backgroundImage={ttBgImg}>
      <Header
        main="TT Championships"
        secondary="Cunningham v Harding"
        sLogo1={batCun}
        sLogo2={batChard}
      />
      <Table />
      <Countdown date="19-12" />
    </PageLayout>
  );
}
