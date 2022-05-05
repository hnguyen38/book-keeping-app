import Rows from "./Rows";
import styles from "./table.module.scss";
import { useContext, useState } from "react";

import { MountedContext } from "../../context/mountedContext";
import { UserContext } from "../../context/usercontext";
import { deleteDocData } from "../../utils/firebase/firebase.utils";
import { ListContext } from "../../context/listContext";

function Table() {
  const { setMounted } = useContext(MountedContext);
  const { currentUser } = useContext(UserContext);
  const { list, setList } = useContext(ListContext);
  const [order, setOrder] = useState();

  const deleteHandler = async (id) => {
    alert("Item is being deleted...");
    await deleteDocData(currentUser, id);
    setMounted(true);
  };

  const locationSortHandler = () => {
    if (order) {
      const sortedLocation = list.sort((a, b) => {
        if (a.location < b.location) return -1;
        if (a.location > b.location) return 1;
        return 0;
      });
      setList(sortedLocation);
      setOrder(false);
    } else {
      const sortedLocation = list.sort((a, b) => {
        if (a.location > b.location) return -1;
        if (a.location < b.location) return 1;
        return 0;
      });
      setList(sortedLocation);
      setOrder(true);
    }
  };

  const nameSortHandler = () => {
    if (order) {
      const sortedName = list.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      setList(sortedName);
      setOrder(false);
    } else {
      const sortedName = list.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
      setList(sortedName);
      setOrder(true);
    }
  };

  const dateSortHandler = () => {
    if (order) {
      const sortedDate = list.sort((a, b) => {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return 0;
      });
      setList(sortedDate);
      setOrder(false);
    } else {
      const sortedDate = list.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
      });
      setList(sortedDate);
      setOrder(true);
    }
  };

  const statusSortHandler = () => {
    if (order) {
      const sortedStatus = list.sort((a, b) => {
        if (a.status < b.status) return -1;
        if (a.status > b.status) return 1;
        return 0;
      });
      setList(sortedStatus);
      setOrder(false);
    } else {
      const sortedStatus = list.sort((a, b) => {
        if (a.status > b.status) return -1;
        if (a.status < b.status) return 1;
        return 0;
      });
      setList(sortedStatus);
      setOrder(true);
    }
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headrow}>
            <th className={styles.location} onClick={locationSortHandler}>
              LOCATION
              <span className={`material-icons md-18 ${styles.icon}`}>
                &#xe5d7;
              </span>
            </th>
            <th className={styles.name} onClick={nameSortHandler}>
              NAME
              <span className={`material-icons md-18 ${styles.icon}`}>
                &#xe5d7;
              </span>
            </th>
            <th className={styles.date} onClick={dateSortHandler}>
              DATE
              <span className={`material-icons md-18 ${styles.icon}`}>
                &#xe5d7;
              </span>
            </th>
            <th className={styles.status} onClick={statusSortHandler}>
              STATUS
              <span className={`material-icons md-18 ${styles.icon}`}>
                &#xe5d7;
              </span>
            </th>
            <th className={styles.note}>NOTE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <Rows
              key={item.id}
              id={item.id}
              location={item.location}
              name={item.name}
              date={item.date}
              status={item.status}
              note={item.note}
              onDelete={() => {
                deleteHandler(item.id);
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
