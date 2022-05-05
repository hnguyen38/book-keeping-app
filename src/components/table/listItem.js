import { ListContext } from "../../context/listContext";
import { UserContext } from "../../context/usercontext";
import { MountedContext } from "../../context/mountedContext";

import { useContext, useState } from "react";
import Rows from "./Rows";
import { deleteDocData, docDataRef } from "../../utils/firebase/firebase.utils";

function ListItem({ deleteHandler, onSort }) {
  const { list } = useContext(ListContext);

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
          onSort={onSort}
        />
      ))}
    </tbody>
  );
}

export default ListItem;
