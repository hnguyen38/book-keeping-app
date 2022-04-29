import { createContext, useState, useEffect } from "react";

import { getUserData } from "../utils/firebase/firebase.utils";

import { useContext } from "react";
import { UserContext } from "./usercontext";
import { MountedContext } from "./mountedContext";

export const ListContext = createContext({});

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const { currentUser } = useContext(UserContext);
  const { mounted, setMounted } = useContext(MountedContext);

  useEffect(() => {
    const userData = async () => {
      const allItems = [];
      try {
        const response = await getUserData(currentUser);
        response.docs.map((doc) => {
          const text = doc.data();
          const key = doc.id;
          console.log(text);
          const item = {
            location: text.location,
            name: text.name,
            date: text.date,
            status: text.status,
            note: text.note,
            id: key,
          };
          allItems.push(item);
        });
        //setting allItems to list gives list all the properties in 'item' object
        setList(allItems);
      } catch (e) {
        console.log(e);
      }
    };

    if (mounted) {
      userData();
    }
    return () => {
      setMounted(false);
    };
  }, [list, currentUser, mounted, setMounted]);

  const value = { list, setList };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};