import styles from "./signin.module.scss";

function SignIn(props) {
  return (
    <div className={styles.signin}>
      <div className={styles.head}>
        <h2 className={styles.title}>Have an account?</h2>
        <p>Sign in with email and password</p>
      </div>
      <form className={styles.form}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" required />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" required />

        <div className={styles.buttons}>
          <button className={styles.signinBtn}>SIGN IN</button>
          <button className={styles.googleBtn} onClick={props.googleBtn}>
            SIGN IN WITH GOOGLE
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignIn;
