import { HashRouter, Routes, Route } from "react-router-dom";
import HomeButton from "./home/components/HomeButton";
import HomePage from "./home/HomePage";
import MkPage from "./mk/MkPage";
import GkPage from "./gk/GkPage";
import TtChardPage from "./tt_chard/TtChardPage";
import TtHendoPage from "./tt_hendo/TtHendoPage";
import MockPage from "./mock/MockPage";

export default function App() {
  return (
    <HashRouter>
      <div className="relative">
        <HomeButton />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mk" element={<MkPage />} />
          <Route path="/tt_chard" element={<TtChardPage />} />
          <Route path="/tt_hendo" element={<TtHendoPage />} />
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
