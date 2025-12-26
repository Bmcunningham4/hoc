import Table from "./components/Table";
import PageLayout from "../shared/PageLayout";
import ttBgImg from "./assets/tt-bg.png";

export default function TtPage() {
  return (
    <PageLayout
      backgroundImage={ttBgImg}
      main="TT Championships"
      secondary="Cunningham v Harding"
      countdownDate="19-12"
    >
      <Table />
    </PageLayout>
  );
}
