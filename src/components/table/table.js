import ListItem from "./listItem";
import styles from "./table.module.scss";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/usercontext";
import { getUserData } from "../../utils/firebase/firebase.utils";
import { MountedContext } from "../../context/mountedContext";

function Table() {
  const { currentUser } = useContext(UserContext);
  const [list, setList] = useState([]);
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
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
