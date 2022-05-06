import "./searchBar.scss";
import "../../icons/icons.scss";

import { SearchContext } from "../../context/searchContext";
import { useContext } from "react";

function SearchBar() {
  const { setSearchField } = useContext(SearchContext);

  return (
    <div className="search">
      <span className="material-icons md-grey">&#xe8b6;</span>
      <input
        type="search"
        placeholder="search by name or location"
        onChange={(event) => {
          setSearchField(event.target.value.toLocaleLowerCase());
        }}
      />
    </div>
  );
}

export default SearchBar;
