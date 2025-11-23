import { BrowserRouter, Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-blue-900">
      <h1 className="text-white text-4xl">Homepage Works!</h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
