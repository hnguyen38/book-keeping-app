import styles from "./listItem.module.scss";

function ListItem({ locationText, nameText, dateText, statusText, noteText }) {
  return (
    <tr className={styles.row}>
      <td>{locationText}</td>
      <td className={styles.name}>{nameText}</td>
      <td>{dateText}</td>
      <td>{statusText}</td>
      <td>{noteText}</td>
      <td>
        <span className={styles.options}>⋮</span>
      </td>
    </tr>
  );
}

export default ListItem;
