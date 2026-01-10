import { HashRouter, Routes, Route } from "react-router-dom";
import HomeButton from "./home/components/HomeButton";
import HomePage from "./home/HomePage";
import MkPage from "./mk/MkPage";
import GkPage from "./gk/GkPage";
import TtPage from "./tt/TtPage";
import MockPage from "./mock/MockPage";

export default function App() {
  return (
    <HashRouter>
      <div className="relative">
        <HomeButton />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mk" element={<MkPage />} />
          <Route path="/tt" element={<TtPage />} />
          <Route path="/gk" element={<GkPage />} />
          <Route path="/mock" element={<MockPage />} />
          <Route
            path="*"
            element={<div>Route not found: {window.location.hash}</div>}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}
