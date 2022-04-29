import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import { UserProvider } from "./context/usercontext";
import { BrowserRouter } from "react-router-dom";
import { MountedProvider } from "./context/mountedContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MountedProvider>
          <App />
        </MountedProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
