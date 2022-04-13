import styles from "./signin.module.scss";

function SignIn() {
  return (
    <div className={styles.signin}>
      <div className={styles.head}>
        <h2 className={styles.title}>Have an account?</h2>
        <p>Sign in with email and password</p>
      </div>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />

      <label htmlFor="password">Password</label>
      <input id="password" type="password" />

      <div className={styles.buttons}>
        <button className={styles.signinBtn}>SIGN IN</button>
        <button className={styles.googleBtn}>SIGN IN WITH GOOGLE</button>
      </div>
    </div>
  );
}
export default SignIn;
