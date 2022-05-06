import { ListContext } from "../../context/listContext";
import { UserContext } from "../../context/usercontext";
import { MountedContext } from "../../context/mountedContext";
import { ItemContext } from "../../context/itemContext";
import { UpdateFormContext } from "../../context/updateContext";
import { SearchContext } from "../../context/searchContext";

import { useContext } from "react";
import { deleteDocData, docDataRef } from "../../utils/firebase/firebase.utils";
import Rows from "./Rows";

function ListItem() {
  const { list } = useContext(ListContext);
  const { setItem } = useContext(ItemContext);
  const { currentUser } = useContext(UserContext);
  const { setMounted } = useContext(MountedContext);
  const { updatePopup, setUpdatePopup } = useContext(UpdateFormContext);
  const { searchField } = useContext(SearchContext);

  const filteredList = list.filter((item) => {
    if (searchField === "") {
      return item;
    } else if (
      item.name.toLocaleLowerCase().includes(searchField) ||
      item.location.toLocaleLowerCase().includes(searchField)
    ) {
      return item;
    }
  });

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
      {filteredList.map((item) => (
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
