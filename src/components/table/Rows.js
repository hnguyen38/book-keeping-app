import styles from "./rows.module.scss";
import "../../icons/icons.scss";

function Rows(props) {
  return (
    <tr className={styles.row}>
      <td>{props.location}</td>
      <td className={styles.name}>{props.name}</td>
      <td>{props.date}</td>
      <td>{props.status}</td>
      <td>{props.note}</td>
      <td className={styles.drop}>
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

export default Rows;
