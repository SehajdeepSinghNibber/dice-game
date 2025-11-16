import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartGame from "./components/StartGame";
import GamePage from "./components/GamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
