import { Route, Routes, useNavigate } from "react-router-dom";
import SignPage from "./routes/SignPage";
import TitleBar from "./layout/titlebar";
import Home from "./routes/home-page";
import { signOutUser } from "./utils/firebase/firebase.utils";

function App() {
  //log out user on closed tab
  // window.addEventListener("beforeunload", function (e) {
  //   e.preventDefault();
  //   signOutUser();
  // });

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
