import { createContext, useState } from "react";

export const FormPopupContext = createContext();

export const FormPopupProvider = ({ children }) => {
  const [popup, setPopup] = useState(false);
  const value = { popup, setPopup };

  return (
    <FormPopupContext.Provider value={value}>
      {children}
    </FormPopupContext.Provider>
  );
};
