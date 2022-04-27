// import { createContext, useState, useEffect } from "react";

// import { getUserData } from "../utils/firebase/firebase.utils";

// import { useContext } from "react";
// import { UserContext } from "./usercontext";

// export const DataContext = createContext({
//   datas: [],
// });

// export const DataProvider = ({ children }) => {
//   const [datas, setDatas] = useState([]);
//   const { currentUser } = useContext(UserContext);

//   // useEffect(() => {
//   //   const userData = async () => {
//   //     const response = await getUserData(currentUser);

//   //     const allItems = [];
//   //     response.forEach((doc) => {
//   //       const text = doc.data();
//   //       const item = {
//   //         location: text.location,
//   //         name: text.name,
//   //         date: text.date,
//   //         status: text.status,
//   //         note: text.note,
//   //       };
//   //       allItems.push(item);
//   //     });
//   //     setDatas(allItems);
//   //   };
//   //   userData();
//   // }, []);

//   //   useEffect(() => {
//   //     const getDataMap = async () => {
//   //       const dataMap = await getUserData();
//   //       console.log(dataMap);
//   //     };

//   //     getDataMap();
//   //   }, []);

//   const value = { datas };

//   return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
// };
