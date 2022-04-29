import styles from "./dropdown.module.scss";
import "../../icons/icons.scss";

function DropDown() {
  function editHandler() {}

  function deleteHandler() {}

  return (
    <div className={styles.drop}>
      <span className={`material-icons ${styles.edit}`}>&#xe3c9;</span>
      <span className={`material-icons ${styles.delete}`}>&#xe872;</span>
    </div>
  );
}

export default DropDown;
