import Cabinet from "./components/Cabinet";
import PageLayout from "../shared/PageLayout";
import Header from "../shared/Header";
import WallBg from "./assets/wall-bg.png";

export default function HomePage() {
  return (
    <PageLayout backgroundImage={WallBg}>
      <Header main="Hoc - Temp" />
      <Cabinet />
    </PageLayout>
  );
}
