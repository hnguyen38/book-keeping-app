import SignUp from "../components/signin/signup";
import SignIn from "../components/signin/signin";
import styles from "./SignPage.module.scss";

function SignPage() {
  return (
    <div className={styles.sign}>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignPage;
