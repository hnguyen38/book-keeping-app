import ListItem from "./listItem";
import styles from "./table.module.scss";
import { useContext } from "react";
import { ListContext } from "../../context/listContext";

function Table() {
  const { list } = useContext(ListContext);

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
