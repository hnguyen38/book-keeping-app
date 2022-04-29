import { createContext, useState } from "react";

export const MountedContext = createContext();

export const MountedProvider = ({ children }) => {
  const [mounted, setMounted] = useState(true);
  const value = { mounted, setMounted };

  return (
    <MountedContext.Provider value={value}>{children}</MountedContext.Provider>
  );
};
