import styles from "./addForm.module.scss";
import { useContext, useState } from "react";
import { createUserDataFromAuth } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/usercontext";
import { MountedContext } from "../../context/mountedContext";

const addFormFields = {
  location: "",
  name: "",
  date: "",
  status: "In Progress",
  note: "",
};

function AddForm({ onCancel }) {
  const { currentUser } = useContext(UserContext);
  const [inputData, setInputForm] = useState(addFormFields);
  const { location, name, date, status, note } = inputData;
  const { setMounted } = useContext(MountedContext);

  function resetForm() {
    setInputForm(addFormFields);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await createUserDataFromAuth(currentUser, {
      ...inputData,
    });
    console.log(response);
    resetForm();
    setMounted(true);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setInputForm({ ...inputData, [name]: value });
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.location}>
          <label htmlFor="location">Location</label>
          <br />
          <input
            id="location"
            type="text"
            placeholder="City, State"
            onChange={handleChange}
            value={location}
            name="location"
            required
          />
        </div>
        <div className={styles.name}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            type="text"
            placeholder="Company / Institution"
            onChange={handleChange}
            value={name}
            name="name"
            required
          />
        </div>
        <div className={styles.date}>
          <label htmlFor="Date">Date</label>
          <br />
          <input type="date" onChange={handleChange} value={date} name="date" />
        </div>
        <div className={styles.status}>
          <label htmlFor="Status">Status</label>
          <br />
          <select
            id="status"
            name="status"
            onChange={handleChange}
            value={status}
            required
          >
            <option>In Progress</option>
            <option>Passed</option>
            <option>Archived</option>
          </select>
        </div>
        <div className={styles.note}>
          <label htmlFor="note">Note</label>
          <br />
          <textarea
            onChange={handleChange}
            value={note}
            name="note"
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
