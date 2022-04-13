import styles from "./titlebar.module.scss";
import "../icons/icons.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function TitleBar() {
  const [signedIn, setSignIn] = useState(false);

  function signinOrup() {
    signedIn ? setSignIn(false) : setSignIn(true);
  }

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
          <span className={`${styles.materialicons} material-icons md-grey`}>
            &#xe8fd;
          </span>
          <span onClick={() => signinOrup()}>
            <Link to="signin">{signedIn ? "Sign Out" : "Sign In"}</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
