import { Route, Routes, useNavigate } from "react-router-dom";
import SignPage from "./routes/SignPage";
import TitleBar from "./layout/titlebar";
import Home from "./routes/home-page";

function App() {
  return (
    <div>
      <TitleBar />
      <Routes>
        <Route path="/" element={<SignPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
