import ListItem from "./listItem";
import styles from "./table.module.scss";

function Table() {
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
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
