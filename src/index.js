import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import { UserProvider } from "./context/usercontext";
import { BrowserRouter } from "react-router-dom";
import { MountedProvider } from "./context/mountedContext";
import { ListProvider } from "./context/listContext";
import { FormPopupProvider } from "./context/FormPopupContext";
import { ItemProvider } from "./context/itemContext";
import { UpdateFormProvider } from "./context/updateContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MountedProvider>
          <ListProvider>
            <ItemProvider>
              <UpdateFormProvider>
                <FormPopupProvider>
                  <App />
                </FormPopupProvider>
              </UpdateFormProvider>
            </ItemProvider>
          </ListProvider>
        </MountedProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
