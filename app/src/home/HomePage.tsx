import Cabinet from "./components/Cabinet";
import PageLayout from "../shared/PageLayout";
import Header from "../shared/Header";
import trackImg from "../gk/assets/track.jpg";

export default function HomePage() {
  return (
    <PageLayout backgroundImage={trackImg}>
      <Header main="Hoc" />
      <Cabinet />
    </PageLayout>
  );
}
