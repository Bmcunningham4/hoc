import Cabinet from "./components/Cabinet";
import PageLayout from "../shared/PageLayout";
import WallBg from "./assets/wall-bg.png";

export default function HomePage() {
  return (
    <PageLayout backgroundImage={WallBg}>
      <Cabinet />
    </PageLayout>
  );
}
