import styles from "./signup.module.scss";
import { useState } from "react";
import { createAuthUserWithEmailandPassword } from "../../utils/firebase/firebase.utils";

const signUpFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirm: "",
};

function SignUp(props) {
  const [formField, setFormField] = useState(signUpFormFields);
  const { displayName, email, password, confirm } = formField;

  console.log(formField);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //add code to create user
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  }
  return (
    <div className={styles.signup}>
      <div className={styles.head}>
        <h2 className={styles.title}>Don't have an account?</h2>
        <p>Sign up with email and password</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Display Name</label>
        <input
          onChange={handleChange}
          id="name"
          type="text"
          name="displayName"
          value={displayName}
          required
        />

        <label htmlFor="upemail">Email</label>
        <input
          onChange={handleChange}
          id="upemail"
          type="email"
          name="email"
          value={email}
          required
        />

        <label htmlFor="uppassword">Password</label>
        <input
          onChange={handleChange}
          id="uppassword"
          type="password"
          name="password"
          value={password}
        />

        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          onChange={handleChange}
          id="confirmpassword"
          type="password"
          name="confirm"
          value={confirm}
          required
        />

        <div className={styles.buttons}>
          <button className={styles.signupBtn}>SIGN UP</button>
          <button className={styles.googleBtn} onClick={props.googleBtn}>
            SIGN UP WITH GOOGLE
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
