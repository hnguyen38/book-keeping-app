import styles from "./listItem.module.scss";

function ListItem() {
  return (
    <tr className={styles.row}>
      <td>Lincoln, NE</td>
      <td className={styles.name}>Company X</td>
      <td>04/15/2022</td>
      <td>In progress</td>
      <td>this is a note about the..</td>
      <td>
        <span className={styles.options}>⋮</span>
      </td>
    </tr>
  );
}

export default ListItem;
