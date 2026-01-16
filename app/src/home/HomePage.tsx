import Cabinet from "./components/Cabinet";
import PageLayout from "../shared/PageLayout";
import WallBg from "./assets/wall-bg.png";

export default function HomePage() {
  return (
    <PageLayout backgroundImage={WallBg}>
      <div
        className="w-full max-w-[700px] flex-shrink"
        style={{ width: "120vw", marginTop: "9%" }}
      >
        <Cabinet />
      </div>
    </PageLayout>
  );
}
