import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage, BackButton } from "./home/HomePage";
import MkPage from "./mk/MkPage";
import TtPage from "./tt/TtPage";

export default function App() {
  return (
    <HashRouter>
      <div className="relative">
        <BackButton />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mk" element={<MkPage />} />
          <Route path="/tt" element={<TtPage />} />
          <Route
            path="*"
            element={<div>Route not found: {window.location.hash}</div>}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}
