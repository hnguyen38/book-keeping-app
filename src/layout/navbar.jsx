import styles from "./navbar.module.scss";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <span className={styles.tab}>All</span>
        <span className={styles.tab}>Favorites</span>
        <span className={styles.tab}>In Contact</span>
        <span className={styles.tab}>In Progress</span>
        <span>|</span>
        <span className={styles.tab}>Archived</span>
      </div>
    </div>
  );
}

export default NavBar;
