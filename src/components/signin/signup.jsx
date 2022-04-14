import styles from "./signup.module.scss";
import { useState } from "react";
import {
  createAuthUserWithEmailandPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

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

  const resetForm = () => {
    setFormField(signUpFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //confirm passwords match
    if (password !== confirm) {
      alert("Passwords don't match");
      return;
    }

    try {
      //see if authenticated
      const { user } = await createAuthUserWithEmailandPassword(
        email,
        password
      );

      //create user doc
      await createUserDocFromAuth(user, { displayName });
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("problem creating user", error);
      }
    }
  };

  function handleChange(event) {
    //name comes from input name attribute
    //value we want comes from value that is being passed in input
    //changes are circular, value from state is value from input, when user types, handleChange() pushes that form field into state & state updates
    const { name, value } = event.target;
    //spread formField & update appropriate field by taking input value and applying it to [name]
    //example: displayName: {displayname} <-- typed by user
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
          <button type="submit" className={styles.signupBtn}>
            SIGN UP
          </button>
          {/* <button
            className={styles.googleBtn}
            onClick={props.googleBtn}
          >
            SIGN UP WITH GOOGLE
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default SignUp;
