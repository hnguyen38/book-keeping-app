import { ListContext } from "../../context/listContext";
import { UserContext } from "../../context/usercontext";
import { MountedContext } from "../../context/mountedContext";
import { ItemContext } from "../../context/itemContext";

import { useContext, useState } from "react";
import Rows from "./Rows";
import { deleteDocData, docDataRef } from "../../utils/firebase/firebase.utils";
import UpdateForm from "../updateform/updateForm";
import { UpdateFormContext } from "../../context/updateContext";

function ListItem() {
  const { list } = useContext(ListContext);
  const { setItem } = useContext(ItemContext);
  const { currentUser } = useContext(UserContext);
  const { setMounted } = useContext(MountedContext);
  const { updatePopup, setUpdatePopup } = useContext(UpdateFormContext);

  // function characterCount() {
  //   const summary = `${trailer.overview}`;
  //   if (summary.length >= 150) {
  //     return `${summary.substring(0, 150)}...`;
  //   } else {
  //     return summary;
  //   }
  // }

  const updateHandler = async (id) => {
    updatePopup ? setUpdatePopup(false) : setUpdatePopup(true);
    const r = await docDataRef(currentUser, id);
    return setItem(r);
  };

  const deleteHandler = async (id) => {
    alert("Item is being deleted...");
    await deleteDocData(currentUser, id);
    setMounted(true);
  };

  return (
    <tbody>
      {list.map((item) => (
        <Rows
          key={item.id}
          location={item.location}
          name={item.name}
          date={item.date}
          status={item.status}
          note={item.note}
          onDelete={() => {
            deleteHandler(item.id);
          }}
          onUpdate={() => updateHandler(item.id)}
        />
      ))}
    </tbody>
  );
}

export default ListItem;
