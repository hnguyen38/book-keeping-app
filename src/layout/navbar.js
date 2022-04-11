import styles from "./navbar.module.scss";
import "../icons/icons.scss";

function NavBar() {
  return (
    <div className={styles.nav}>
      <div className={styles.header}>
        <span className="material-icons md-24 md-grey">&#xe431;</span>
        <h2 className={styles.title}>Book</h2>
      </div>

      <div className={styles.rightdiv}>
        <span className={`${styles.materialicons} material-icons md-grey`}>
          &#xe8fd;
        </span>
        <span>Sign In</span>
      </div>
    </div>
  );
}

export default NavBar;
