import styles from "./signup.module.scss";

function SignUp() {
  return (
    <div className={styles.signup}>
      <div className={styles.head}>
        <h2 className={styles.title}>Don't have an account?</h2>
        <p>Sign up with email and password</p>
      </div>
      <label htmlFor="name">Display Name</label>
      <input id="name" type="text" />

      <label htmlFor="upemail">Email</label>
      <input id="upemail" type="email" />

      <label htmlFor="uppassword">Password</label>
      <input id="uppassword" type="password" />
      <label htmlFor="confirmpassword">Confirm Password</label>
      <input id="confirmpassword" type="password" />

      <div className={styles.buttons}>
        <button className={styles.signupBtn}>SIGN UP</button>
        <button className={styles.googleBtn}>SIGN UP WITH GOOGLE</button>
      </div>
    </div>
  );
}

export default SignUp;
