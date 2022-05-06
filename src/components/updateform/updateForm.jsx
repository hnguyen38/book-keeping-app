import styles from "./updateForm.module.scss";
import { useContext, useState } from "react";
import { MountedContext } from "../../context/mountedContext";
import { UpdateFormContext } from "../../context/updateContext";
import { ItemContext } from "../../context/itemContext";
import { UserContext } from "../../context/usercontext";
import { updateDocData, docDataRef } from "../../utils/firebase/firebase.utils";
import { updateDoc } from "firebase/firestore";

const field = {
  id: "",
  location: "",
  name: "",
  date: "",
  status: "",
  note: "",
};

function UpdateForm({ onCancel }) {
  const { currentUser } = useContext(UserContext);

  const [inputData, setInputForm] = useState(field);
  const { id, location, name, date, status, note } = inputData;
  const { setMounted } = useContext(MountedContext);
  const { setUpdatePopup } = useContext(UpdateFormContext);
  const { item } = useContext(ItemContext);
  const [click, setClick] = useState(true);

  //inital data before update
  const setForm = async () => {
    setClick(false);
    const itemProps = item.data();
    return setInputForm({
      id: item.id,
      location: itemProps.location,
      name: itemProps.name,
      date: itemProps.date,
      status: itemProps.status,
      note: itemProps.note,
    });
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setInputForm({ ...inputData, [name]: value });
  }

  //update doc with current data
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(inputData);
    await updateDocData(currentUser, item.id, { ...inputData });
    setUpdatePopup(false);
    setMounted(true);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <button type="button" onClick={setForm} className={styles.info}>
          {click ? "Get Current Info" : "Reset Form"}
        </button>
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
          <input
            type="date"
            onChange={handleChange}
            value={date}
            name="date"
            required
          />
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
          <button className={styles.button}>Update Item</button>
          <span className={styles.cancel} onClick={onCancel}>
            Cancel
          </span>
        </div>
      </form>
    </div>
  );
}

export default UpdateForm;
