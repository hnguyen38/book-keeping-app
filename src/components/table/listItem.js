import styles from "./listItem.module.scss";
import { useState } from "react";
import DropDown from "./dropdown";

function ListItem(props) {
  return (
    <tr className={styles.row} key={props.key}>
      <td>{props.location}</td>
      <td className={styles.name}>{props.name}</td>
      <td>{props.date}</td>
      <td>{props.status}</td>
      <td>{props.note}</td>
      <td>
        <DropDown />
      </td>
    </tr>
  );
}

export default ListItem;
