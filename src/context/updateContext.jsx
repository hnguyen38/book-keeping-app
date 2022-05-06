import { createContext, useState } from "react";

export const UpdateFormContext = createContext();

export const UpdateFormProvider = ({ children }) => {
  const [updatePopup, setUpdatePopup] = useState(false);
  const value = { updatePopup, setUpdatePopup };

  return (
    <UpdateFormContext.Provider value={value}>
      {children}
    </UpdateFormContext.Provider>
  );
};
