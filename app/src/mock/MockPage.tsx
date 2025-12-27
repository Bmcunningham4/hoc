import MockHome from "./components/MockHome";
import PageLayout from "../shared/PageLayout";
import Header from "../shared/Header";

export default function MockPage() {
  return (
    <PageLayout backgroundImage="">
      <Header main="Mock test.." />
      <MockHome />
    </PageLayout>
  );
}
