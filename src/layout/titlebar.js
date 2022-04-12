import styles from "./titlebar.module.scss";
import "../icons/icons.scss";

function TitleBar() {
  return (
    <div className={styles.container}>
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
    </div>
  );
}

export default TitleBar;
