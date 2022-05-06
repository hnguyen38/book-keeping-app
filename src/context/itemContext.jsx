import { useState, createContext } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [item, setItem] = useState();
  const value = { item, setItem };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};
