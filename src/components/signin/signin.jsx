import styles from "./signin.module.scss";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailandPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import { useState } from "react";

const signInFormFields = {
  email: "",
  password: "",
};

function SignIn(props) {
  const [formField, setFormField] = useState(signInFormFields);
  const { email, password } = formField;

  const resetForm = () => {
    setFormField(signInFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailandPassword(
        email,
        password
      );
      console.log(response);
      resetForm();
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/user-not-found":
          alert("User does not exist");
          break;
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        default:
          console.log(error);
      }
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const us = await createUserDocFromAuth(user);
    console.log(us);
  };

  return (
    <div className={styles.signin}>
      <div className={styles.head}>
        <h2 className={styles.title}>Have an account?</h2>
        <p>Sign in with email and password</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <div className={styles.buttons}>
          <button type="submit" className={styles.signinBtn}>
            SIGN IN
          </button>
          <button
            type="button"
            className={styles.googleBtn}
            onClick={signInWithGoogle}
          >
            SIGN IN WITH GOOGLE
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignIn;
