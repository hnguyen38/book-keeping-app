import styles from "./addBtn.module.scss";
import AddForm from "./addForm";
import { useState } from "react";

function AddToList({ onClick }) {
  return (
    <div className={styles.div}>
      <button className={styles.add} onClick={onClick}>
        + New Item
      </button>
    </div>
  );
}

export default AddToList;
