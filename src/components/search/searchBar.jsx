import "./searchBar.scss";
import "../../icons/icons.scss";

function SearchBar() {
  return (
    <div className="search">
      <span className="material-icons md-grey">&#xe8b6;</span>
      <input type="search" placeholder="search by name" />
    </div>
  );
}

export default SearchBar;
