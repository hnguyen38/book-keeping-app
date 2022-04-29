import ListItem from "./listItem";
import styles from "./table.module.scss";
import { useContext } from "react";
import { ListContext } from "../../context/listContext";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/usercontext";
import { MountedContext } from "../../context/mountedContext";

function Table() {
  const { list } = useContext(ListContext);
  const { currentUser } = useContext(UserContext);
  const { setMounted } = useContext(MountedContext);

  const deleteDocData = async (id) => {
    alert("Item is being deleted...");
    const dataDoc = doc(db, `users/${currentUser.uid}/data/${id}`);
    await deleteDoc(dataDoc);
    setMounted(true);
  };

  function updateHandler() {
    return console.log("update");
  }
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
        <tbody>
          {list.map((item) => (
            <ListItem
              key={item.id}
              location={item.location}
              name={item.name}
              date={item.date}
              status={item.status}
              note={item.note}
              onDelete={() => {
                deleteDocData(item.id);
              }}
              onUpdate={updateHandler}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
