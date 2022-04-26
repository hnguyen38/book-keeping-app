import ListItem from "./listItem";
import styles from "./table.module.scss";
import AddForm from "../addform/addForm";
import { useState, useContext } from "react";
import { UserContext } from "../../context/usercontext";
import { getUserData } from "../../utils/firebase/firebase.utils";
import AllListItems from "./tbody";
import { useEffect } from "react";
import { datas, DataContext } from "../../context/datacontext";

function Table() {
  const { currentUser } = useContext(UserContext);
  const [list, setList] = useState([]);

  //fix this use effect function some how
  //use firebase functions!
  useEffect(() => {
    const allItems = [];
    const userData = async () => {
      const response = await getUserData(currentUser);

      response.forEach((doc) => {
        const text = doc.data();
        // console.log(text);
        const item = {
          location: text.location,
          name: text.name,
          date: text.date,
          status: text.status,
          note: text.note,
          key: doc.id,
        };
        allItems.push(item);
      });
      setList(allItems);
    };
    userData();
  });

  // useEffect(() => {
  //   const userData = async () => {
  //     const response = await getUserData(currentUser);

  //     const allItems = [];
  //     response.forEach((doc) => {
  //       const text = doc.data();
  //       // console.log(text);
  //       const item = {
  //         location: text.location,
  //         name: text.name,
  //         date: text.date,
  //         status: text.status,
  //         note: text.note,
  //         key: doc.id,
  //       };
  //       allItems.push(item);
  //     });
  //     setList(allItems);
  //   };
  //   userData();
  // });

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headrow}>
            <th>
              LOCATION
              <span className={`material-icons md-18 ${styles.icon}`}>
                &#xe5d7;
              </span>
            </th>
            <th>
              NAME
              <span className={`material-icons md-18 ${styles.icon}`}>
                &#xe5d7;
              </span>
            </th>
            <th>
              DATE
              <span className={`material-icons md-18 ${styles.icon}`}>
                &#xe5d7;
              </span>
            </th>
            <th>STATUS</th>
            <th>NOTE</th>
            <th></th>
          </tr>
        </thead>
        <AllListItems allItems={list} key={HTMLTableRowElement.id} />
      </table>
    </div>
  );
}

export default Table;
