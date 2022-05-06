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
import { SearchProvider } from "./context/searchContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MountedProvider>
          <ListProvider>
            <SearchProvider>
              <ItemProvider>
                <UpdateFormProvider>
                  <FormPopupProvider>
                    <App />
                  </FormPopupProvider>
                </UpdateFormProvider>
              </ItemProvider>
            </SearchProvider>
          </ListProvider>
        </MountedProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
