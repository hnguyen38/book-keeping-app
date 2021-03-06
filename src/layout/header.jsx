import AddToList from "../components/addform/addBtn";
import SearchBar from "../components/search/searchBar";
import styles from "./header.module.scss";

import AddForm from "../components/addform/addForm";

import { useContext } from "react";
import { FormPopupContext } from "../context/FormPopupContext";

function Header() {
  const { popup, setPopup } = useContext(FormPopupContext);

  function modal() {
    return popup ? setPopup(false) : setPopup(true);
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SearchBar />
        <AddToList onClick={modal} />
      </div>
      <div className={styles.popup}>
        {popup ? <AddForm onCancel={() => setPopup(false)} /> : null}
      </div>
    </div>
  );
}

export default Header;
