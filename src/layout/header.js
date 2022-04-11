import AddToList from "../components/addBtn";
import SearchBar from "../components/searchBar";
import styles from "./header.module.scss";

import AddForm from "../components/addForm";

import { useState } from "react";

function Header() {
  const [popup, setPopup] = useState();

  function modal() {
    return popup ? setPopup(false) : setPopup(true);
  }
  return (
    <div>
      <div className={styles.header}>
        <SearchBar />
        <AddToList onClick={modal} text={popup ? "Cancel" : "+ Add Item"} />
      </div>
      <div>{popup ? <AddForm /> : null}</div>
    </div>
  );
}

export default Header;
