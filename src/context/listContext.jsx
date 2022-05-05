import { createContext, useState, useEffect } from "react";

import { getUserData } from "../utils/firebase/firebase.utils";

import { useContext } from "react";
import { UserContext } from "./usercontext";
import { MountedContext } from "./mountedContext";

export const ListContext = createContext({});

export const ListProvider = ({ children }) => {
  //list holds all the properties of items!
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
        //setting allItems to list gives each doc in list all the properties in 'item' object
        //sort automatically alphabetizes list by location
        setList(
          allItems.sort((a, b) => {
            if (a.location < b.location) return -1;
            if (a.location > b.location) return 1;
            return 0;
          })
        );
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
