import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import { UserProvider } from "./context/usercontext";
import { BrowserRouter } from "react-router-dom";
import { MountedProvider } from "./context/mountedContext";
import { ListProvider } from "./context/listContext";
import { FormPopupProvider } from "./context/FormPopupContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MountedProvider>
          <ListProvider>
            <FormPopupProvider>
              <App />
            </FormPopupProvider>
          </ListProvider>
        </MountedProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
