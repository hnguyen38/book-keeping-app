import styles from "./listItem.module.scss";
import "../../icons/icons.scss";

function ListItem(props) {
  return (
    <tr className={styles.row} key={props.key}>
      <td>{props.location}</td>
      <td className={styles.name}>{props.name}</td>
      <td>{props.date}</td>
      <td>{props.status}</td>
      <td>{props.note}</td>
      <td className={styles.drop}>
        <span
          className={`material-icons ${styles.edit}`}
          onClick={props.onUpdate}
        >
          &#xe3c9;
        </span>
        <span
          className={`material-icons ${styles.delete}`}
          onClick={props.onDelete}
        >
          &#xe872;
        </span>
      </td>
    </tr>
  );
}

export default ListItem;
