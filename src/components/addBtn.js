import styles from "./addBtn.module.scss";

function AddToList({ onClick, text }) {
  return (
    <div className={styles.div}>
      <button className={styles.add} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default AddToList;
