import styles from "./addForm.module.scss";
import { useRef, useContext } from "react";
import { createUserDataFromAuth } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/usercontext";

function AddForm({ onCancel }) {
  const { currentUser } = useContext(UserContext);
  const locationRef = useRef();
  const nameRef = useRef();
  const dateRef = useRef();
  const statusRef = useRef();
  const noteRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const locationInput = locationRef.current.value;
    const nameInput = nameRef.current.value;
    const dateInput = dateRef.current.value;
    const statusInput = statusRef.current.value;
    const noteInput = noteRef.current.value;

    const inputData = {
      location: locationInput,
      name: nameInput,
      date: dateInput,
      status: statusInput,
      note: noteInput,
    };
    return createUserDataFromAuth(currentUser, { inputData });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.location}>
          <label htmlFor="location">Location</label>
          <br />
          <input
            ref={locationRef}
            id="location"
            type="text"
            placeholder="City, State"
          />
        </div>
        <div className={styles.name}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            ref={nameRef}
            id="name"
            type="text"
            placeholder="Company / Institution"
          />
        </div>
        <div className={styles.date}>
          <label htmlFor="Date">Date</label>
          <br />
          <input ref={dateRef} type="date" />
        </div>
        <div className={styles.status}>
          <label htmlFor="Status">Status</label>
          <br />
          <select ref={statusRef} id="status" name="status">
            <option>In Progress</option>
            <option>Passed</option>
            <option>Archived</option>
          </select>
        </div>
        <div className={styles.note}>
          <label htmlFor="note">Note</label>
          <br />
          <textarea
            ref={noteRef}
            id="note"
            type="text"
            placeholder="add note"
            rows="5"
            cols="30"
          />
        </div>
        <div className={styles.btn}>
          <button className={styles.button}>Add Item</button>
          <span className={styles.cancel} onClick={onCancel}>
            Cancel
          </span>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
