import { Route, Routes } from "react-router-dom";
import SignPage from "./routes/SignPage";
import TitleBar from "./layout/titlebar";
import Home from "./routes/home-page";
import SignIn from "./components/signin/signin";

function App() {
  return (
    <div>
      <TitleBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignPage />} />
      </Routes>
    </div>
  );
}

export default App;
