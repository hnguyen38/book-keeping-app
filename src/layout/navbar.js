import "./navbar.style.scss";
import "../icons/icons.scss";

function NavBar() {
  return (
    <div className="nav">
      <div className="header">
        <span className="material-icons md-24 md-grey">&#xe431;</span>
        <h2 className="title">Book</h2>
      </div>

      <div className="right-div">
        <span className="material-icons md-grey">&#xe8fd;</span>
        <span>Sign In</span>
      </div>
    </div>
  );
}

export default NavBar;
