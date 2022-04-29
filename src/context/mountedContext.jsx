import { createContext, useState } from "react";

export const MountedContext = createContext();

//when mounted = true, useEffect function is called thus updated list items - right???
//it will run the useEffect in ListContext and then set itself to false
export const MountedProvider = ({ children }) => {
  const [mounted, setMounted] = useState(true);
  const value = { mounted, setMounted };

  return (
    <MountedContext.Provider value={value}>{children}</MountedContext.Provider>
  );
};
