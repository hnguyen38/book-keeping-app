import styles from "./addForm.module.scss";

function AddForm() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.location}>
          <label htmlFor="location">Location</label>
          <br />
          <input id="location" type="text" placeholder="city, state" />
        </div>
        <div className={styles.name}>
          <label htmlFor="name">Name</label>
          <br />
          <input id="name" type="text" placeholder="company / institution" />
        </div>
        <div className={styles.date}>
          <label htmlFor="Date">Date</label>
          <br />
          <input type="date" />
        </div>
        <div className={styles.status}>
          <label htmlFor="Status">Status</label>
          <br />
          <select id="status" name="status">
            <option value="in progress">In Progress</option>
            <option value="reply">Passed</option>
            <option value="archived">Archived</option>
          </select>
        </div>
        <div className={styles.note}>
          <label htmlFor="note">Note</label>
          <br />
          <textarea
            id="note"
            type="text"
            placeholder="add note"
            rows="5"
            cols="30"
          />
        </div>
        <div className={styles.btn}>
          <button className={styles.button}>Add Item</button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
