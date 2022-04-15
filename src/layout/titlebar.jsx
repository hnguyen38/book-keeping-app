import styles from "./titlebar.module.scss";
import "../icons/icons.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { signOutUser } from "../utils/firebase/firebase.utils";

import { UserContext } from "../context/usercontext";

function TitleBar() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.header}>
          <span className="material-icons md-24 md-grey">&#xe431;</span>
          <h2 className={styles.title}>
            <Link to="/">Book</Link>
          </h2>
        </div>
        <div className={styles.rightdiv}>
          {/* <span className={`${styles.materialicons} material-icons md-grey`}>
            &#xe8fd;
          </span> */}
          <span>
            {currentUser ? (
              <span className={styles.sign} onClick={signOutUser}>
                Sign Out
              </span>
            ) : (
              <Link className={styles.sign} to="signin">
                Sign In
              </Link>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
