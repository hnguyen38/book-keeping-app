import styles from "./listItem.module.scss";

function ListItem(props) {
  return (
    <tr className={styles.row} key={props.key}>
      <td>{props.location}</td>
      <td className={styles.name}>{props.name}</td>
      <td>{props.date}</td>
      <td>{props.status}</td>
      <td>{props.note}</td>
      <td>
        <span className={styles.options}>⋮</span>
      </td>
    </tr>
  );
}

export default ListItem;
