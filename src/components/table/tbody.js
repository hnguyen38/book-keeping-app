import ListItem from "./listItem";

function AllListItems(props) {
  return (
    <tbody>
      {props.allItems.map((item) => (
        <ListItem
          key={item.key}
          location={item.location}
          name={item.name}
          date={item.date}
          status={item.status}
          note={item.note}
        />
      ))}
    </tbody>
  );
}

export default AllListItems;
